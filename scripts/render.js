// render.js
//
// Replaces the old scripts/portfolio.js. Instead of one hardcoded JS block
// per page, this fetches content from Sanity and renders it generically —
// new projects added in the Studio show up automatically, no new files or
// code required.

import { client, imageUrl } from './sanity-client.js'
import { toHTML } from 'https://esm.sh/@portabletext/to-html@2?bundle'

const MEDIA_QUERY = `{
  mediaType,
  embedUrl,
  caption,
  aspect,
  "imageUrl": image.asset->url
}`

const GRID_QUERY = `*[_type == "project" && published == true] | order(order asc) {
  title,
  "slug": slug.current,
  medium,
  cardSummary,
  "coverImageUrl": coverImage.asset->url
}`

const PROJECT_LIST_QUERY = `*[_type == "project" && published == true] | order(order asc) {
  title,
  "slug": slug.current
}`

const PROJECT_DETAIL_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  medium,
  body,
  externalLinkLabel,
  externalLinkUrl,
  enableLightbox,
  published,
  heroMedia ${MEDIA_QUERY},
  gallery[] ${MEDIA_QUERY}
}`

const ABOUT_QUERY = `*[_type == "aboutPage"][0]{
  heading,
  bio,
  videoEmbedUrl,
  "imageUrl": image.asset->url,
  "resumeUrl": resume.asset->url
}`

function mediaBlockHTML(media, { slideshowId } = {}) {
  if (!media) return ''
  const verticalClass = media.aspect === 'Vertical' ? ' vertical' : ''

  if (media.mediaType === 'Vimeo' || media.mediaType === 'YouTube') {
    return `<div class="grid-item${verticalClass}">
                <iframe title="video-player" src="${media.embedUrl}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>`
  }

  const slideshowAttr = slideshowId != null ? ` data-slideshow-id="${slideshowId}"` : ''
  const src = imageUrl(media.imageUrl, { width: 900 })
  return `<div class="grid-item${verticalClass}">
                <picture>
                    <source srcset="${src}" media="(min-width: 600px)" />
                    <img src="${src}" alt="${media.caption || ''}" width="450" height="450" loading="lazy"${slideshowAttr}>
                </picture>
            </div>`
}

function heroHTML(media) {
  if (!media) return ''
  if (media.mediaType === 'Vimeo' || media.mediaType === 'YouTube') {
    return `<div class="image">
                <iframe title="video-player" src="${media.embedUrl}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>`
  }
  const src = imageUrl(media.imageUrl, { width: 900 })
  return `<div class="image">
                <picture>
                    <source srcset="${src}" media="(min-width: 600px)" />
                    <img src="${src}" alt="Featured image" width="450" height="450" loading="lazy">
                </picture>
            </div>`
}

// --- Portfolio grid (layout/portfolio.html) -------------------------------

async function renderPortfolioGrid() {
  const portfolioGrid = document.getElementById('portfolioGrid')
  const projects = await client.fetch(GRID_QUERY)

  portfolioGrid.innerHTML = projects
    .map(
      (item) => `<a href="../portfolio/project.html?slug=${item.slug}" title="Link to the ${item.title} page" data-category="${item.medium}" class="grid-item">
                        <picture>
                            <source srcset="${imageUrl(item.coverImageUrl, { width: 900 })}" media="(min-width: 600px)" />
                            <img src="${imageUrl(item.coverImageUrl, { width: 900 })}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                        </picture>
                        <h2>${item.title}</h2>
                        <h3>${item.medium}</h3>
                        <p>${item.cardSummary || ''}</p>
                    </a>`
    )
    .join('')

  const portfolioFilters = document.getElementById('portfolioFilters')
  const portfolioItems = document.querySelectorAll('.grid-item')

  const categories = [
    { title: 'All', filter: 'All' },
    { title: 'Projection Design', filter: 'Projection Design' },
    { title: 'Graphic Design', filter: 'Graphic Design' },
    { title: 'Animation', filter: 'Animation' },
  ]

  portfolioFilters.innerHTML += categories
    .map((title, index) => `<li ${index === 0 ? 'class="active"' : ''}data-category="${title.filter}">${title.title}</li>`)
    .join('')

  function displayFilteredItems(filter) {
    portfolioItems.forEach((item) => {
      const itemCategory = item.getAttribute('data-category')
      item.style.display = filter === 'All' || itemCategory === filter ? 'block' : 'none'
    })
    initFadeIn()
  }

  const filterTrigger = document.querySelector('.portfolio-filter-trigger')
  const portfolioFiltersMobile = document.getElementById('portfolio-filters')

  filterTrigger.addEventListener('click', function () {
    const hasActiveClass = filterTrigger.classList.contains('active')
    hasActiveClass
      ? ((filterTrigger.classList.remove('active')), (portfolioFiltersMobile.style.display = 'none'))
      : ((filterTrigger.classList.add('active')), (portfolioFiltersMobile.style.display = 'block'))
  })

  portfolioFilters.addEventListener('click', (event) => {
    const targetCategory = event.target.getAttribute('data-category')
    portfolioFilters.querySelectorAll('li').forEach((item) => item.classList.remove('active'))
    const hasActiveClass = event.target.classList.contains('active')
    hasActiveClass ? event.target.classList.remove('active') : event.target.classList.add('active')
    displayFilteredItems(targetCategory)
  })

  initFadeIn()

  const scrollToTop = document.querySelector('#scrollToTop')
  if (scrollToTop) {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    scrollToTop.addEventListener('click', scrollTop)
    scrollToTop.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') scrollTop()
    })
  }
}

// --- Project detail (portfolio/project.html) -------------------------------

async function renderProjectDetail() {
  const slug = new URLSearchParams(window.location.search).get('slug')
  const topSection = document.getElementById('topSection')
  const mainGrid = document.getElementById('mainGrid')

  if (!slug) {
    topSection.innerHTML = '<div class="info"><h2>Project not found</h2></div>'
    return
  }

  const [project, allProjects] = await Promise.all([
    client.fetch(PROJECT_DETAIL_QUERY, { slug }),
    client.fetch(PROJECT_LIST_QUERY),
  ])

  if (!project || !project.published) {
    topSection.innerHTML = '<div class="info"><h2>Project not found</h2></div>'
    return
  }

  document.title = `Grace Cliff - ${project.title}`

  const bodyHTML = project.body && project.body.length ? toHTML(project.body) : ''
  const linkHTML =
    project.externalLinkLabel && project.externalLinkUrl
      ? `<div class="button-wrap"><a href="${project.externalLinkUrl}" target="_blank" class="button" title="External link to the ${project.externalLinkLabel}">${project.externalLinkLabel}</a></div>`
      : ''

  topSection.innerHTML = `<div class="flex large--flex-row flex-column">
                                ${heroHTML(project.heroMedia)}
                                <div class="info">
                                    <h2>${project.title}</h2>
                                    ${bodyHTML}
                                    ${linkHTML}
                                </div>
                            </div>`

  const enableLightbox = !!project.enableLightbox
  mainGrid.innerHTML = (project.gallery || [])
    .map((item, index) => mediaBlockHTML(item, { slideshowId: enableLightbox ? index : null }))
    .join('')

  if (enableLightbox) {
    document.body.classList.add('page--graphic-design-compilation')
    initLightbox()
  }

  const index = allProjects.findIndex((p) => p.slug === slug)
  if (index !== -1) {
    const prev = allProjects[(index - 1 + allProjects.length) % allProjects.length]
    const next = allProjects[(index + 1) % allProjects.length]
    const prevLink = document.querySelector('.navigation-arrows .prev')
    const nextLink = document.querySelector('.navigation-arrows .next')
    if (prevLink) prevLink.href = `project.html?slug=${prev.slug}`
    if (nextLink) nextLink.href = `project.html?slug=${next.slug}`
  }

  initFadeIn()
}

function initLightbox() {
  const modal = document.getElementById('myModal')
  const modalImg = document.getElementById('modalImage')
  const closeBtn = document.querySelector('.close')
  const prevBtn = document.querySelector('.modal .arrows.prev')
  const nextBtn = document.querySelector('.modal .arrows.next')
  const mainGrid = document.getElementById('mainGrid')
  const header = document.getElementById('header')
  if (!modal) return

  let currentImageIndex
  const images = Array.from(document.querySelectorAll('[data-slideshow-id]'))

  function openModal(index) {
    modal.style.display = 'block'
    currentImageIndex = index
    showImage(currentImageIndex)
    mainGrid.style.display = 'none'
    header.style.display = 'none'
    document.body.classList.add('modal-open')
  }

  function closeModal() {
    modal.style.display = 'none'
    mainGrid.style.display = 'grid'
    header.style.display = 'block'
    document.body.classList.remove('modal-open')
  }

  function showImage(index) {
    if (index >= 0 && index < images.length) modalImg.src = images[index].src
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length
    showImage(currentImageIndex)
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length
    showImage(currentImageIndex)
  }

  images.forEach((img, index) => img.addEventListener('click', () => openModal(index)))
  closeBtn.addEventListener('click', closeModal)
  nextBtn.addEventListener('click', nextImage)
  prevBtn.addEventListener('click', prevImage)

  window.addEventListener('click', (event) => {
    if (event.target === modal) closeModal()
  })

  window.addEventListener('keydown', (event) => {
    if (modal.style.display === 'block') {
      if (event.key === 'ArrowRight') nextImage()
      else if (event.key === 'ArrowLeft') prevImage()
      else if (event.key === 'Escape') closeModal()
    }
  })
}

// --- About page (layout/about.html) -----------------------------------

async function renderAboutPage() {
  const topSection = document.getElementById('topSection')
  const about = await client.fetch(ABOUT_QUERY)
  if (!about) return

  const bioHTML = about.bio && about.bio.length ? toHTML(about.bio) : ''
  const src = imageUrl(about.imageUrl, { width: 900 })

  topSection.innerHTML = `<div class="flex large--flex-row flex-column page--about">
                                <div class="image container">
                                    <picture>
                                        <source srcset="${src}" media="(min-width: 600px)" />
                                        <img class="about-image" src="${src}" alt="${about.heading}'s featured image" width="450" height="450" loading="lazy">
                                    </picture>
                                </div>
                                <div class="info">
                                    <h2>${about.heading}</h2>
                                    ${bioHTML}
                                    <div class="button-wrap">
                                        <a href="${about.resumeUrl}" target="_blank" class="button" title="External link to resume">Resume</a>
                                    </div>
                                </div>
                            </div>

                            <div class="grid-item about-video">
                                <iframe title="vimeo-player" src="${about.videoEmbedUrl}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                            </div>`
}

// --- Shared: fade-in on scroll (unchanged behavior from the old portfolio.js)

function initFadeIn() {
  function isElementAboveFold(element) {
    const rect = element.getBoundingClientRect()
    return rect.top < window.innerHeight
  }

  const elements = document.querySelectorAll('.grid-item')
  elements.forEach((element) => {
    if (isElementAboveFold(element)) {
      element.classList.add('fade-in')
      element.classList.add('visible')
    } else {
      element.classList.remove('fade-in')
    }
  })

  window.addEventListener('scroll', () => {
    elements.forEach((element) => {
      if (isElementAboveFold(element)) element.classList.add('fade-in')
      else element.classList.remove('fade-in')
    })
  })
}

// --- Entry point: run whichever renderer matches this page's markup -------

function showLoadError(containerId) {
  const container = document.getElementById(containerId)
  if (container) container.innerHTML = '<div class="info"><p>Sorry, this content couldn’t be loaded right now. Please try refreshing the page.</p></div>'
}

async function run(renderFn, fallbackContainerId) {
  try {
    await renderFn()
  } catch (err) {
    console.error(err)
    showLoadError(fallbackContainerId)
  }
}

if (document.getElementById('portfolioGrid')) {
  run(renderPortfolioGrid, 'portfolioGrid')
} else if (document.getElementById('mainGrid') && window.location.pathname.includes('project.html')) {
  run(renderProjectDetail, 'topSection')
} else if (window.location.pathname.includes('about.html')) {
  run(renderAboutPage, 'topSection')
}
