import {defineField, defineType} from 'sanity'

export const showcaseGridImageCardsBlock = defineType({
  name: 'showcaseGridImageCards',
  title: 'Grid Image Cards',
  type: 'object',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    }),
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
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'media',
              title: 'Media',
              type: 'image',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare(selection) {
              const {title} = selection
              return {
                title: title ? `Item - ${title}` : 'Item',
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
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'cta',
      group: 'content',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection

      return {
        title: title ? `Grid Image Cards - ${title}` : 'Grid Image Cards',
        subtitle: items ? items.length + ' items' : '',
      }
    },
  },
})
