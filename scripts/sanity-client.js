// sanity-client.js
//
// Loaded as an ES module directly in the browser (this site has no build
// step). projectId/dataset are not secrets — they're the public read
// coordinates for a Sanity dataset, same trust model as any public API key.
import { createClient } from 'https://esm.sh/@sanity/client@6?bundle'

// Filled in once the Sanity project exists — see the root README.md.
export const SANITY_PROJECT_ID = '89hod19m'
export const SANITY_DATASET = 'production'

export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
})

// Appends Sanity's on-the-fly image transform params to a raw asset URL
// (the `asset->url` value resolved by a GROQ query).
export function imageUrl(url, { width } = {}) {
  if (!url) return url
  const params = new URLSearchParams({ auto: 'format' })
  if (width) params.set('w', String(width))
  return `${url}?${params.toString()}`
}
