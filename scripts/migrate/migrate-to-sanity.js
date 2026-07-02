// One-time migration: uploads content/projects.json (assets + text) into a
// Sanity project. Safe to re-run — documents use deterministic _ids and are
// upserted with createOrReplace, and asset uploads are cached by file path
// within a single run.
//
// Usage:
//   cd scripts/migrate
//   npm install
//   cp .env.example .env   # fill in SANITY_PROJECT_ID + SANITY_TOKEN
//   npm run migrate

require('dotenv').config()
const fs = require('fs')
const path = require('path')
const { createClient } = require('@sanity/client')
const { htmlToBlocks, randomKey } = require('./html-to-blocks')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const PROJECTS_JSON = path.join(REPO_ROOT, 'content', 'projects.json')

const { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN } = process.env

if (!SANITY_PROJECT_ID || !SANITY_TOKEN) {
  console.error('Missing SANITY_PROJECT_ID or SANITY_TOKEN. Copy .env.example to .env and fill it in first.')
  process.exit(1)
}

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: SANITY_TOKEN,
  useCdn: false,
})

const assetCache = new Map() // repo-relative path -> Sanity asset document

async function uploadAsset(relativePath, kind) {
  if (assetCache.has(relativePath)) return assetCache.get(relativePath)

  const absolutePath = path.join(REPO_ROOT, relativePath)
  if (!fs.existsSync(absolutePath)) {
    console.warn(`  ! Skipping missing file: ${relativePath}`)
    return null
  }

  const asset = await client.assets.upload(kind, fs.createReadStream(absolutePath), {
    filename: path.basename(absolutePath),
  })
  assetCache.set(relativePath, asset)
  return asset
}

async function imageField(relativePath) {
  const asset = await uploadAsset(relativePath, 'image')
  if (!asset) return undefined
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

async function fileField(relativePath) {
  const asset = await uploadAsset(relativePath, 'file')
  if (!asset) return undefined
  return { _type: 'file', asset: { _type: 'reference', _ref: asset._id } }
}

async function mediaBlock(item) {
  if (!item) return undefined
  const block = {
    _type: 'mediaBlock',
    _key: randomKey(),
    mediaType: item.mediaType,
    caption: item.caption,
    aspect: item.aspect || 'Default',
  }
  if (item.mediaType === 'Image') {
    block.image = await imageField(item.image)
  } else {
    block.embedUrl = item.embedUrl
  }
  return block
}

async function migrateProject(project) {
  console.log(`Project: ${project.slug}`)
  const coverImage = await imageField(project.coverImage)
  const heroMedia = project.heroMedia ? await mediaBlock(project.heroMedia) : undefined
  const gallery = []
  for (const item of project.gallery || []) {
    const block = await mediaBlock(item)
    if (block) gallery.push(block)
  }

  const doc = {
    _id: `project-${project.slug}`,
    _type: 'project',
    title: project.title,
    slug: { _type: 'slug', current: project.slug },
    medium: project.medium,
    cardSummary: project.cardSummary || '',
    coverImage,
    heroMedia,
    body: htmlToBlocks(project.bodyHtml),
    gallery,
    externalLinkLabel: project.externalLinkLabel,
    externalLinkUrl: project.externalLinkUrl,
    enableLightbox: !!project.enableLightbox,
    published: !!project.published,
    order: project.order,
  }

  await client.createOrReplace(doc)
}

async function migrateAboutPage(about) {
  console.log('About page')
  const doc = {
    _id: 'aboutPage',
    _type: 'aboutPage',
    heading: about.heading,
    bio: htmlToBlocks(about.bodyHtml),
    videoEmbedUrl: about.videoEmbedUrl,
    image: await imageField(about.image),
    resume: await fileField(about.resume),
  }
  await client.createOrReplace(doc)
}

async function main() {
  const data = JSON.parse(fs.readFileSync(PROJECTS_JSON, 'utf8'))

  for (const project of data.projects) {
    await migrateProject(project)
  }
  await migrateAboutPage(data.aboutPage)

  console.log(`\nDone. ${data.projects.length} projects + about page migrated. ${assetCache.size} unique assets uploaded.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
