import { Code, Palette, Users, Zap } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const items = [
  {
    title: 'Modern Design',
    description:
      'Beautiful and contemporary UI components that make your projects stand out.',
    icon: Palette,
  },
  {
    title: 'Developer Experience',
    description:
      'Built with developers in mind. Easy to use, well documented, and highly customizable.',
    icon: Code,
  },
  {
    title: 'Community Driven',
    description:
      'Join thousands of developers contributing to make UI development better for everyone.',
    icon: Users,
  },
  {
    title: 'Fast Performance',
    description: 'Optimized for speed and efficiency right out of the box.',
    icon: Zap,
  },
]

export function Content09() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:gap-12 sm:py-16">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="text-foreground font-serif text-2xl font-normal tracking-tight text-balance sm:text-3xl">
            <Balancer>What we offer</Balancer>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
            <Balancer>
              Four focused capabilities, each with a clear icon, headline, and
              short explanation.
            </Balancer>
          </p>
        </div>

        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">
          {items.map((item) => (
            <li key={item.title} className="h-full">
              <Card className="h-full shadow-sm">
                <CardHeader className="flex flex-col gap-3">
                  <item.icon className="text-muted-foreground size-5 shrink-0" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">
                    <Balancer>{item.description}</Balancer>
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
