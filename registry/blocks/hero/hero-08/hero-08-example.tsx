import { Hero08, type Hero08Props } from './hero-08'

export const values = {
  title: 'Learn the craft behind every great design',
  description:
    'Hands-on courses taught by working designers, built to fit around your schedule.',
  socialProof: 'Join 40,000+ Makers Learning With Us',
  avatars: [
    {
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&q=80',
      fallback: 'JD',
    },
    {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=80',
      fallback: 'SL',
    },
    {
      src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&q=80',
      fallback: 'MV',
    },
  ],
  cards: [
    {
      title: 'Design Fundamentals',
      subtitle: 'Starting at $ 29 per month',
      image:
        'https://images.unsplash.com/photo-1746467364902-ab40952e33fe?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Designers collaborating at a shared desk',
      invert: true,
      cta: {
        ctaEnabled: true,
        text: 'Get Started',
        link: '',
        size: 'default',
      },
    },
    {
      title: 'Advanced Motion',
      subtitle: 'Starting at $ 29 per month',
      image:
        'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Designer working on a laptop in a studio',
      invert: true,
      cta: {
        ctaEnabled: true,
        text: 'Get Started',
        link: '',
        size: 'default',
      },
    },
  ],
  animation: 'subtle',
} satisfies Hero08Props

export function Hero08Example() {
  return <Hero08 {...values} />
}
