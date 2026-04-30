import {defineField, defineType} from 'sanity'

export const contentGridMediaCardsBlock = defineType({
  name: 'contentGridMediaCards',
  title: 'Grid Media Cards',
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
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt text',
                  type: 'string',
                }),
                defineField({
                  name: 'overlay',
                  title: 'Overlay',
                  type: 'boolean',
                  initialValue: false,
                }),
                defineField({
                  name: 'whiteTexts',
                  title: 'White texts',
                  type: 'boolean',
                  initialValue: false,
                }),
              ],
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Lucide icon name in kebab-case (e.g. camera, heart, star)',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              icon: 'icon',
            },
            prepare(selection) {
              const {title, icon} = selection
              return {
                title: title ?? 'Item',
                subtitle: icon ? `Icon: ${icon}` : undefined,
              }
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.custom((items) => {
          if (!items || items.length === 0) {
            return 'Add at least one item'
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
        title: title ? `Grid Media Cards - ${title}` : 'Grid Media Cards',
        subtitle: items ? items.length + ' items' : '',
      }
    },
  },
})
