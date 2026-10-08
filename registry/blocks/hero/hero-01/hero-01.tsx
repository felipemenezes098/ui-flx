import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

import { Hero01IntegrationCloud } from './hero-01-integration-cloud'

export function Hero01() {
  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 mx-auto h-full w-full mask-t-from-60% mask-t-to-90% mask-b-from-75% mask-b-to-85% mask-radial-[70%_70%] mask-radial-from-60% mask-radial-to-90% mask-radial-at-top opacity-50 md:mask-radial-[70%_90%] dark:opacity-10"
      >
        <img
          src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 size-full object-cover object-top"
        />
        <div className="bg-background/30 dark:bg-background/45 absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-20 text-center sm:py-28">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-foreground font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
            <Balancer>Build what matters.</Balancer>
            <br />
            <Balancer>Connect what works.</Balancer>
          </h1>
          <p className="text-muted-foreground max-w-md text-sm sm:text-base">
            <Balancer>
              A single layer for payments, auth, and messaging in your product.
            </Balancer>
          </p>
        </div>

        <Button
          className="w-fit rounded-full px-4"
          nativeButton={false}
          render={<a href="#" />}
        >
          Get started
        </Button>

        <div className="w-full">
          <Hero01IntegrationCloud
            rows={[
              ['Notion', 'GitHub', 'Stripe', 'Figma'],
              ['Supabase', 'Resend', 'Raycast'],
            ]}
          />
        </div>
      </div>
    </section>
  )
}
