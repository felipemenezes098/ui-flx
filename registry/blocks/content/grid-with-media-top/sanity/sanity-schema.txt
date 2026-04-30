import {defineField, defineType} from 'sanity'

export const contentGridWithMediaTopBlock = defineType({
  name: 'contentGridWithMediaTop',
  title: 'Grid With Media Top',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'content',
      fieldset: 'headerFieldset',
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'cta',
      group: 'content',
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'image',
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
        title: title ? `Grid With Media Top - ${title}` : 'Grid With Media Top',
        subtitle: items ? items.length + ' items' : '',
      }
    },
  },
})
