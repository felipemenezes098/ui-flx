import { Logos01, type Logos01Props } from './logos-01'

export const values = {
  items: [
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
} satisfies Logos01Props

export function Logos01Example() {
  return <Logos01 items={values.items} />
}
