import type { HeroLogosCarouselProps } from './hero-logos-carousel'

export const heroLogosCarouselDefaultProps = {
  title: 'Build faster with the best tools',
  description:
    'Integrate with your favorite platforms and ship with confidence. From databases to analytics, we have you covered.',
  logosInfo: 'Our design crew worked with industry leaders',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Get started',
    link: '/',
    variant: 'default',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'Learn more',
    link: '/',
    variant: 'secondary',
  },
  logos: [
    {
      title: 'Supabase',
      url: 'https://cdn.brandfetch.io/idsSceG8fK/w/800/h/156/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      title: 'Google',
      url: 'https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      title: 'Shopify',
      url: 'https://cdn.brandfetch.io/idAgPm7IvG/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      title: 'Mongo',
      url: 'https://cdn.brandfetch.io/ideyyfT0Lp/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      title: 'LottieFiles',
      url: 'https://cdn.brandfetch.io/idEExqEvR9/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
  ],
  carouselItems: [
    {
      title: 'Image 1',
      image:
        'https://images.unsplash.com/photo-1729575846511-f499d2e17d79?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Image 2',
      image:
        'https://images.unsplash.com/photo-1679193559674-860ef78899bc?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Image 3',
      image:
        'https://images.unsplash.com/photo-1771732266970-f63e35c8f47a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
} satisfies HeroLogosCarouselProps
