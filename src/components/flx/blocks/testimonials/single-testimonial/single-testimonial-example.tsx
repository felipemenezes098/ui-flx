import {
  SingleTestimonial,
  type SingleTestimonialProps,
} from './single-testimonial'

export function SingleTestimonialExample() {
  const values = {
    quote:
      'Switching to these blocks gave our team a cleaner system and helped us launch polished pages in a fraction of the time.',
    author: {
      name: 'Sophie Carter',
      role: 'Product Design Lead at Northstar',
      avatar: {
        src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
        alt: 'Sophie Carter',
        fallback: 'SC',
      },
    },
  } satisfies SingleTestimonialProps

  return (
    <SingleTestimonial quote={values.quote} author={values.author} />
  )
}
