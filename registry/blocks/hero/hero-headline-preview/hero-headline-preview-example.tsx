import {
  HeroHeadlinePreview,
  type HeroHeadlinePreviewProps,
} from './hero-headline-preview'

export const values = {
  title: 'New UI blocks, ready for your next launch',
  description:
    'Explore a cleaner, sharper presentation for your next section. A focused headline, a direct CTA, and a strong visual below to anchor the page.',
  media: {
    src: 'https://images.unsplash.com/photo-1750449316808-31a9a800a84b?q=80&w=1219&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Preview of a UI block with content and media',
  },
  cta: {
    ctaEnabled: true,
    text: 'Explore Blocks',
    link: '/blocks',
    variant: 'default',
    size: 'lg',
  },
} satisfies HeroHeadlinePreviewProps

export function HeroHeadlinePreviewExample() {
  return (
    <HeroHeadlinePreview
      title={values.title}
      description={values.description}
      media={values.media}
      cta={values.cta}
    />
  )
}
