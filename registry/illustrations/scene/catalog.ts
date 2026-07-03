import type { IllustrationCategory } from '@/lib/illustrations/illustration-types'

export const sceneCategory: IllustrationCategory = {
  slug: 'scene',
  name: 'Scene',
  description: 'Large, layered illustrations for hero and marketing sections.',
  hasNew: true,
  items: [
    {
      slug: 'scene-01',
      name: 'Dashboard preview',
      description: 'A layered app dashboard with a floating notification.',
      span: 2,
      size: 'lg',
      isNew: true,
    },
  ],
}
