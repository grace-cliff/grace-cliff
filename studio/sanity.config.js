import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import structure from './structure'

// Replace with the real project ID once `sanity init` (or the Sanity
// dashboard) has created the project — see the root README.md.
const projectId = '89hod19m'
const dataset = 'production'

export default defineConfig({
  name: 'default',
  title: 'Grace Cliff Portfolio',

  projectId,
  dataset,

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
