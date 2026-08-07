import { Feature03, type Feature03Props } from './feature-03'

export const values = {
  title: 'Three surfaces, one connected workflow.',
  description:
    'Flexnative brings block browsing, live editing, and code export into a single environment, built around how teams actually ship UI.',
  variant: 'standard',
  animation: 'subtle',
  items: [
    {
      id: '1',
      title: 'Block Library',
      description:
        'Browse hundreds of production-ready blocks across every category, filtered by preset, type, and layout.',
      media: {
        src: 'https://images.unsplash.com/photo-1750044656775-40fd937a2438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Soft gradient abstract in warm tones',
      },
    },
    {
      id: '2',
      title: 'Live Editor',
      description:
        'Tweak copy, media, and variants in real time, with an instant preview across breakpoints and presets.',
      media: {
        src: 'https://images.unsplash.com/photo-1441039995991-e5c1178e605a?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Soft abstract shapes in muted color',
      },
    },
    {
      id: '3',
      title: 'Code Export',
      description:
        "Copy production-ready code or install it via the CLI, typed and documented so it's ready to ship today.",
      media: {
        src: 'https://images.unsplash.com/photo-1640535092659-7856bff6679d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Soft warm gradient',
      },
    },
  ],
} satisfies Feature03Props

export function Feature03Example() {
  return <Feature03 {...values} />
}
