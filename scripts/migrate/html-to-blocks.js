const crypto = require('crypto')

function randomKey() {
  return crypto.randomBytes(6).toString('hex')
}

const ENTITIES = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&nbsp;': ' ',
}

function decodeEntities(text) {
  return text.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&nbsp;/g, (m) => ENTITIES[m])
}

// Converts the plain-vanilla HTML used in scripts/portfolio.js (<p>, <br>,
// <b>, <i> only — no nested lists/links in this dataset) into Portable Text
// blocks. Only used by the one-time migration; once content lives in Sanity,
// editing happens through the Studio's rich-text editor directly.
function htmlToBlocks(html) {
  if (!html || !html.trim()) return []

  const paragraphs = []
  const pRe = /<p>([\s\S]*?)<\/p>/gi
  let match
  let found = false
  while ((match = pRe.exec(html))) {
    found = true
    paragraphs.push(match[1])
  }
  if (!found) paragraphs.push(html)

  const blocks = []
  for (const paragraph of paragraphs) {
    for (const line of paragraph.split(/<br\s*\/?>(?:<\/br>)?/i)) {
      const trimmed = line.trim()
      if (!trimmed) continue
      blocks.push(lineToBlock(trimmed))
    }
  }
  return blocks
}

function lineToBlock(line) {
  const spans = []
  let marks = []
  let remaining = line
  const tagRe = /<(\/?)(b|i)>/i

  function pushText(text) {
    const decoded = decodeEntities(text)
    if (!decoded) return
    spans.push({ _type: 'span', _key: randomKey(), text: decoded, marks: [...marks] })
  }

  while (remaining.length) {
    const match = tagRe.exec(remaining)
    if (!match) {
      pushText(remaining)
      break
    }
    pushText(remaining.slice(0, match.index))
    remaining = remaining.slice(match.index + match[0].length)

    const mark = match[2].toLowerCase() === 'b' ? 'strong' : 'em'
    marks = match[1] ? marks.filter((m) => m !== mark) : [...marks, mark]
  }

  return {
    _type: 'block',
    _key: randomKey(),
    style: 'normal',
    markDefs: [],
    children: spans.length ? spans : [{ _type: 'span', _key: randomKey(), text: '', marks: [] }],
  }
}

module.exports = { htmlToBlocks, randomKey }
