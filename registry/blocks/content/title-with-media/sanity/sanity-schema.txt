import {defineField, defineType} from 'sanity'

export const contentTitleWithMediaBlock = defineType({
  name: 'contentTitleWithMedia',
  title: 'Title With Media',
  type: 'object',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fieldsets: [
    {
      name: 'headerFieldset',
      title: 'Header',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      fieldset: 'headerFieldset',
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'image',
      group: 'content',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'media',
    },
    prepare(selection) {
      const {title} = selection

      return {
        title: title ? `Title With Media - ${title}` : 'Title With Media',
      }
    },
  },
})
