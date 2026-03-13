import { GridMediaCards, type ShowcaseGridMediaCardsProps } from './grid-media-cards'

export function ShowcaseGridMediaCardsExample() {
  const values = {
    title: 'See it in action',
    items: [
      {
        title: 'Hero sections',
        description:
          'Strong first impression with minimal layout and clear messaging.',
        media: {
          src: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Hero section example',
        },
      },
      {
        title: 'Feature highlights',
        description:
          'Put the spotlight on what matters with clear, scannable cards.',
        media: {
          src: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Feature cards layout',
        },
      },
      {
        title: 'Testimonials',
        description:
          'Build trust with user feedback presented simply and readably.',
        media: {
          src: 'https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Team feedback',
        },
      },
    ],
    cta: {
      ctaEnabled: true,
      text: 'See all',
      link: '/',
      variant: 'outline',
    },
  } satisfies ShowcaseGridMediaCardsProps

  return (
    <GridMediaCards
      title={values.title}
      items={values.items}
      cta={values.cta}
    />
  )
}
