import {
  Testimonials01,
  type Testimonials01Props,
} from './testimonials-01'

export const values = {
  quote:
    'Switching to these blocks gave our team a cleaner system and helped us launch polished pages in a fraction of the time.',
  author: {
    name: 'Sophie Carter',
    role: 'Product Design Lead at Northstar',
    avatar: {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      alt: 'alt image',
      fallback: 'SC',
    },
  },
} satisfies Testimonials01Props

export function Testimonials01Example() {
  return <Testimonials01 quote={values.quote} author={values.author} />
}
