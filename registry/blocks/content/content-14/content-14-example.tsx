import { Content14, type Content14Props } from './content-14'

export const values = {
  title: 'Clarity in every detail',
  media: {
    src: 'https://images.unsplash.com/photo-1600297293222-09e4a39ecbb0?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Content 14 image',
  },
} satisfies Content14Props

export function Content14Example() {
  return <Content14 title={values.title} media={values.media} />
}
