import { Content10, type Content10Props } from './content-10'

export const values = {
  title: 'Turning Your Product Vision into Interface, Simply.',
  description:
    'Building with Flexnative is a seamless, guided experience designed to make shipping polished UI effortless and fast.',
  image:
    'https://images.unsplash.com/photo-1690848095491-942c798366b8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt:
    'A hand holding a phone showing a product dashboard, with a laptop and monitor displaying UI mockups in the background',
  steps: [
    {
      number: '01',
      title: 'Explore the Library',
      description:
        'Browse hundreds of production-ready blocks across every section type.',
    },
    {
      number: '02',
      title: 'Customize & Theme',
      description:
        'Swap presets, tokens, and copy to match your brand in minutes.',
    },
    {
      number: '03',
      title: 'Compose Your Pages',
      description:
        'Drag blocks into the editor and arrange them into full layouts.',
    },
    {
      number: '04',
      title: 'Ship to Production',
      description: 'Copy the code or install via CLI, ready to deploy today.',
    },
  ],
  animation: 'subtle',
} satisfies Content10Props

export function Content10Example() {
  return <Content10 {...values} />
}
