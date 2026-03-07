import {defineField, defineType} from 'sanity'

export const contentGridContentColumnsBlock = defineType({
  name: 'contentGridContentColumns',
  title: 'Grid Content Columns',
  type: 'object',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'media',
              title: 'Media',
              type: 'image',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'text',
            }),
            defineField({
              name: 'cta',
              title: 'CTA',
              type: 'cta',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare(selection) {
              const {title} = selection
              return {
                title: title ? `Card - ${title}` : 'Card',
              }
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.custom((items) => {
          if (!items || items.length === 0) {
            return 'At least one item must be added'
          }
          return true
        }),
    }),
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare(selection) {
      const {items} = selection

      return {
        title: 'Grid Content Columns',
        subtitle: items ? items.length + ' items' : '',
      }
    },
  },
})
