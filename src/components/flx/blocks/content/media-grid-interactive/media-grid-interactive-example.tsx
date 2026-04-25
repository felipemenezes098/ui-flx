import {
  MediaGridInteractive,
  type MediaGridInteractiveProps,
} from './media-grid-interactive'

export const values = {
  title: 'Explore',
  description: 'Click on any item to view details and learn more.',
  items: [
    {
      title: 'Quality',
      description:
        'Thoughtful design that adapts to your needs and fits your workflow. We focus on what works in practice: clean layouts, consistent patterns, and components that are easy to customize.\n\n' +
        'The result is something that feels right out of the box and grows with your project. No need to fight the defaults — they are chosen to work well in most cases. When you need to go further, the same building blocks give you full control without starting from zero.\n\n' +
        'We believe good design is invisible until you look for it. Typography, spacing, and hierarchy are tuned to feel natural. Colors and contrast meet accessibility guidelines. Animations are subtle and purposeful. Everything is there to support the content and the people using it.',
      image: {
        src: 'https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Team planning session',
      },
    },
    {
      title: 'Craft',
      description:
        'Built to last and easy to use, with attention to every detail. Good tools should get out of the way and let you focus on the work. We care about performance, accessibility, and the small decisions that make a product feel solid and reliable over time.\n\n' +
        'That means clean code, clear APIs, and documentation that stays in sync. It means thinking about edge cases and error states, not only the happy path. It means testing on real devices and with real users, so what we ship works where it matters.\n\n' +
        'Craft is not about adding more features. It is about doing fewer things well. Each piece is designed to compose with the rest. You can adopt incrementally, customize where needed, and leave the rest as is. No bloat, no lock-in — just a solid foundation you can trust.',
      image: {
        src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'People working together',
      },
    },
    {
      title: 'Clarity',
      description:
        'Clear and straightforward, no clutter. Focus on what matters. We avoid unnecessary complexity and keep the experience predictable. When things are easy to understand, people can move faster and make better decisions without getting lost in the interface.\n\n' +
        'That applies to the product itself and to how we talk about it. Copy is direct and helpful. Structure follows a consistent logic. Visual hierarchy guides the eye. Nothing is hidden behind jargon or extra steps unless it truly has to be.\n\n' +
        'Clarity is a choice. We could add more options, more toggles, more "power user" features. Instead we prefer to simplify until the default path is obvious. Power users can still go deep when they need to — but everyone gets a clear path from the start.',
      image: {
        src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Person reading and learning',
      },
    },
  ],
} satisfies MediaGridInteractiveProps

export function MediaGridInteractiveExample() {
  return (
    <MediaGridInteractive
      title={values.title}
      description={values.description}
      items={values.items}
    />
  )
}
