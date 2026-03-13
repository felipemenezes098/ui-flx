import { TitleWithMedia, type TitleWithMediaProps } from './title-with-media'

export function TitleWithMediaExample() {
  const values = {
    title: 'Clarity in every detail',
    media: {
      src: 'https://images.unsplash.com/photo-1600297293222-09e4a39ecbb0?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Title with media image',
    },
  } satisfies TitleWithMediaProps

  return (
    <TitleWithMedia title={values.title} media={values.media} />
  )
}
