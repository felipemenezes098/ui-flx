import {defineField, defineType} from 'sanity'

export const contentIconListBlock = defineType({
  name: 'contentIconList',
  title: 'Icon List',
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
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description:
                'Lucide icon name in kebab-case (e.g. camera, heart, star, chevron-right)',
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
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title ? `Icon List - ${title}` : 'Icon List',
      }
    },
  },
})
