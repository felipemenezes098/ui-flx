import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New',
  description:
    'New blocks and components. Explore the latest UI blocks ready to use in your project.',
  openGraph: {
    title: 'New',
    description:
      'New blocks and components. Explore the latest UI blocks ready to use in your project.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New',
    description:
      'New blocks and components. Explore the latest UI blocks ready to use in your project.',
  },
}

export default function NewPage() {
  const logos = [
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
      title: 'Supabase',
      url: 'https://cdn.brandfetch.io/idsSceG8fK/w/800/h/156/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      title: 'LottieFiles',
      url: 'https://cdn.brandfetch.io/idEExqEvR9/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
  ]

  return (
    <div className="mx-auto px-3 py-8 md:max-w-5xl md:py-16 lg:max-w-6xl xl:max-w-6xl 2xl:max-w-[90rem]"></div>
  )
}
