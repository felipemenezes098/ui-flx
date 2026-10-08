import Balancer from 'react-wrap-balancer'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const avatars = [
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
]

const courses = [
  {
    title: 'Design Fundamentals',
    subtitle: 'Starting at $ 29 per month',
    image:
      'https://images.unsplash.com/photo-1746467364902-ab40952e33fe?q=80&w=1131&auto=format&fit=crop',
    imageAlt: 'Alt 1',
  },
  {
    title: 'Advanced Motion',
    subtitle: 'Starting at $ 29 per month',
    image:
      'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop',
    imageAlt: 'Alt 2',
  },
]

export function Hero08() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 sm:gap-16 sm:py-28">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2 lg:gap-16">
          <h1 className="text-foreground font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
            <Balancer>Learn the craft behind every great design</Balancer>
          </h1>
          <div className="flex flex-col items-start gap-5">
            <p className="text-muted-foreground max-w-sm text-sm sm:text-base">
              <Balancer>
                Hands-on courses taught by working designers, built to fit
                around your schedule.
              </Balancer>
            </p>
            <div className="flex flex-col items-start gap-3">
              <p className="text-foreground text-sm font-semibold">
                Join 40,000+ Makers Learning With Us
              </p>
              <div className="flex -space-x-2.5">
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.src}
                    className="ring-background size-9 ring-2"
                  >
                    <AvatarImage src={avatar.src} alt="" />
                    <AvatarFallback className="text-xs">
                      {avatar.fallback}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.title}
              className="relative isolate aspect-16/10 w-full overflow-hidden rounded-md outline outline-black/10 dark:outline-white/10"
            >
              <img
                src={course.image}
                alt={course.imageAlt}
                decoding="async"
                className="absolute inset-0 -z-10 size-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-linear-to-br from-black/40 via-black/15 to-transparent"
              />
              <div className="flex h-full flex-col items-start p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  <Balancer>{course.title}</Balancer>
                </h3>
                <p className="mt-1 text-sm text-white/80">{course.subtitle}</p>
                <Button
                  variant="secondary"
                  className="mt-4 w-fit rounded-full border-transparent bg-white px-4 text-zinc-900 hover:bg-zinc-100"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
