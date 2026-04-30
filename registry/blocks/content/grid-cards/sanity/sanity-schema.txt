import {defineField, defineType} from 'sanity'

export const contentGridCardsBlock = defineType({
  name: 'contentGridCards',
  title: 'Grid Cards',
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
      title: 'title',
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection

      return {
        title: title ? `Grid Cards - ${title}` : 'Grid Cards',
        subtitle: items ? items.length + ' items' : '',
      }
    },
  },
})
