import {defineField, defineType} from 'sanity'

export const contentFocusGridBlock = defineType({
  name: 'contentFocusGrid',
  title: 'Focus Grid',
  type: 'object',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'options',
      title: 'Options',
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
      name: 'description',
      title: 'Description',
      type: 'text',
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
              ],
            }),
            defineField({
              name: 'defaultFocus',
              title: 'Default focus',
              type: 'boolean',
              description: 'When true, this item is focused by default on desktop',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              defaultFocus: 'defaultFocus',
            },
            prepare(selection) {
              const {title, defaultFocus} = selection
              return {
                title: title ?? 'Item',
                subtitle: defaultFocus ? 'Default focus' : undefined,
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
    defineField({
      name: 'dimUnfocused',
      title: 'Dim unfocused items',
      type: 'boolean',
      description: 'Reduce opacity of non-focused items when one is selected',
      initialValue: false,
      group: 'options',
    }),
    defineField({
      name: 'descriptionOnFocus',
      title: 'Show description only on focus',
      type: 'boolean',
      description: 'Show item description only when the item is focused',
      initialValue: false,
      group: 'options',
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
        title: title ? `Focus Grid - ${title}` : 'Focus Grid',
        subtitle: items ? items.length + ' items' : '',
      }
    },
  },
})
