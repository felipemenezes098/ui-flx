import {defineField, defineType} from 'sanity'

export const heroBackgroundMediaBlock = defineType({
  name: 'heroBackgroundMedia',
  title: 'Background Media',
  type: 'object',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    defineField({
      name: 'media',
      title: 'Media',
      type: 'image',
      group: 'content',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the Hero Section',
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the Hero Section',
      group: 'content',
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'cta',
      group: 'content',
    }),
    defineField({
      name: 'whiteTexts',
      title: 'White Texts',
      type: 'boolean',
      description: 'If true, the texts will be displayed in white',
      initialValue: false,
      group: 'content',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare(selection) {
      const {title, description} = selection

      return {
        title: title ? `Background Media - ${title}` : 'Background Media',
        subtitle: description ? description.substring(0, 50) + '...' : '',
      }
    },
  },
})
