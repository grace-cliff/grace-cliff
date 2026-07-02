import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'videoEmbedUrl',
      title: 'Video embed URL',
      description: 'Vimeo/YouTube embed URL shown alongside the bio.',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'resume',
      title: 'Resume (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
    }),
  ],
  preview: {
    select: { title: 'heading' },
  },
})
