import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used in the project page URL — e.g. "my-project" becomes project.html?slug=my-project',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string',
      options: {
        list: ['Projection Design', 'Graphic Design', 'Animation / Video', 'Installation'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cardSummary',
      title: 'Card summary',
      description: 'Short description shown on the portfolio grid card. Can be left blank.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      description: 'Thumbnail shown on the portfolio grid.',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroMedia',
      title: 'Hero media',
      description: 'The large image or video at the top of the project page. Optional.',
      type: 'mediaBlock',
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      description: 'The grid of images/videos below the description. Drag items to reorder.',
      type: 'array',
      of: [{ type: 'mediaBlock' }],
    }),
    defineField({
      name: 'externalLinkLabel',
      title: 'External link label',
      description: 'e.g. "See the site" or "Original Source". Leave blank to hide the button.',
      type: 'string',
    }),
    defineField({
      name: 'externalLinkUrl',
      title: 'External link URL',
      type: 'url',
    }),
    defineField({
      name: 'enableLightbox',
      title: 'Enable click-to-expand gallery',
      description:
        'Turn on for image-heavy projects where visitors should be able to click through a full-screen slideshow.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'published',
      title: 'Published',
      description: 'Turn off to hide this project from the portfolio grid without deleting it.',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      description: 'Controls position in the portfolio grid — lower numbers show first.',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', media: 'coverImage', published: 'published' },
    prepare({ title, media, published }) {
      return { title, subtitle: published ? undefined : 'Unpublished (hidden from grid)', media }
    },
  },
})
