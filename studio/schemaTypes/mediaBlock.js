import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'mediaBlock',
  title: 'Media',
  type: 'object',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Image / GIF', value: 'Image' },
          { title: 'Vimeo video', value: 'Vimeo' },
          { title: 'YouTube video', value: 'YouTube' },
        ],
      },
      initialValue: 'Image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType !== 'Image',
    }),
    defineField({
      name: 'embedUrl',
      title: 'Embed URL',
      description:
        'The Vimeo or YouTube embed URL, e.g. https://player.vimeo.com/video/12345 or https://www.youtube.com/embed/xxxxx',
      type: 'url',
      hidden: ({ parent }) => parent?.mediaType === 'Image',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'aspect',
      title: 'Aspect ratio',
      type: 'string',
      options: {
        list: [
          { title: 'Default (horizontal)', value: 'Default' },
          { title: 'Vertical', value: 'Vertical' },
        ],
      },
      initialValue: 'Default',
      hidden: ({ parent }) => parent?.mediaType === 'Image',
    }),
  ],
  preview: {
    select: { mediaType: 'mediaType', media: 'image', caption: 'caption' },
    prepare({ mediaType, media, caption }) {
      return { title: caption || mediaType, media }
    },
  },
})
