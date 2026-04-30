import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export interface SingleTestimonialProps {
  quote: string
  author: {
    name: string
    role: string
    avatar: {
      src?: string
      alt?: string
      fallback: string
    }
  }
}

export function SingleTestimonial({
  quote,
  author,
}: Readonly<SingleTestimonialProps>) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-7 rounded-3xl text-center">
      <p className="text-xl leading-tight font-medium tracking-tight md:text-[2rem]">
        "{quote}"
      </p>

      <div className="flex items-center justify-center gap-4">
        <Avatar size="default" className="md:data-[size=default]:size-10">
          <AvatarImage
            src={author.avatar.src}
            alt={author.avatar.alt ?? author.name}
          />
          <AvatarFallback>{author.avatar.fallback}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-start text-left">
          <p className="text-sm font-semibold md:text-base">{author.name}</p>
          <p className="text-muted-foreground text-xs md:text-sm">
            {author.role}
          </p>
        </div>
      </div>
    </div>
  )
}
