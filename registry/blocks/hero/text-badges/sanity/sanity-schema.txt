import {defineField, defineType} from 'sanity'

export const heroTextBadgesBlock = defineType({
  name: 'heroTextBadges',
  title: 'Text Badges',
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
      description: 'Main title of the Hero section',
      group: 'content',
    }),
    defineField({
      name: 'primaryCTA',
      title: 'Primary Call to Action',
      type: 'cta',
      group: 'content',
    }),
    defineField({
      name: 'secondaryCTA',
      title: 'Secondary Call to Action',
      type: 'cta',
      group: 'content',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare(selection) {
              const {title} = selection
              return {
                title: title ? `Feature - ${title}` : 'Feature',
                subtitle: 'Feature',
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
      features: 'features',
    },
    prepare(selection) {
      const {title, features} = selection
      const featuresText = features ? features.length + ' features' : ''

      return {
        title: title ? `Text Badges - ${title}` : 'Text Badges',
        subtitle: featuresText ?? '',
      }
    },
  },
})
