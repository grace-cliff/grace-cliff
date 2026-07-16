// One-off data fix: the "medium" taxonomy was consolidated from 4 categories
// to 3 (Installation folded into Projection Design; "Animation / Video"
// renamed to "Animation"). This updates the `medium` field on the existing
// project documents so their stored value matches the new schema/filter
// options in scripts/render.js and studio/schemaTypes/project.js.
//
// Usage: cd scripts/migrate && npm run patch-medium

require('dotenv').config()
const { createClient } = require('@sanity/client')

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

const TO_PROJECTION_DESIGN = ['landscape', 'art-institute', 'fashion-show', 'ivl', 'censored']
const TO_ANIMATION = [
  'chicago-architecture-center',
  'cyborg-manifesto',
  'marz-community-brewing',
  'ballet-body',
  'sunday-morning-grooves',
  'animation-video-compilation',
  'mixed-media',
]

async function patchAll(slugs, medium) {
  for (const slug of slugs) {
    const id = `project-${slug}`
    await client.patch(id).set({ medium }).commit()
    console.log(`  ${slug} -> ${medium}`)
  }
}

async function main() {
  console.log('Projection Design (was Installation):')
  await patchAll(TO_PROJECTION_DESIGN, 'Projection Design')
  console.log('Animation (was Animation / Video):')
  await patchAll(TO_ANIMATION, 'Animation')
  console.log(`\nDone. ${TO_PROJECTION_DESIGN.length + TO_ANIMATION.length} documents updated.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
