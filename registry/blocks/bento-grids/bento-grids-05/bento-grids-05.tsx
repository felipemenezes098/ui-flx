import { cn } from '@/lib/utils'

const imageClassName = 'size-full object-cover'

const frame =
  'relative isolate overflow-hidden rounded-3xl outline outline-black/10 dark:outline-white/10'

export function BentoGrids05() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-6 py-20 sm:py-28 md:auto-rows-[24rem] md:grid-cols-12">
        <article
          className={cn(
            frame,
            'bg-muted flex min-h-80 flex-col md:col-span-6 md:flex-row',
          )}
        >
          <div className="aspect-[4/3] w-full md:aspect-auto md:w-[34%] md:shrink-0">
            <img
              src="https://images.unsplash.com/photo-1726491079206-36a02e6c9cbb?q=80&w=900&auto=format&fit=crop"
              alt="Alt 1"
              decoding="async"
              className={imageClassName}
            />
          </div>
          <p className="text-muted-foreground flex flex-1 items-end p-8 text-lg leading-snug sm:text-xl md:items-center">
            <span>
              Each piece is thrown in stoneware and finished with a{' '}
              <strong className="text-foreground font-semibold">
                matte glaze
              </strong>{' '}
              that feels soft in the hand.
            </span>
          </p>
        </article>

        <div
          className={cn(
            frame,
            'bg-muted aspect-[4/5] md:col-span-3 md:aspect-auto',
          )}
        >
          <img
            src="https://images.unsplash.com/photo-1643569556871-91ec60671ed7?q=80&w=900&auto=format&fit=crop"
            alt="Alt 2"
            loading="lazy"
            decoding="async"
            className={imageClassName}
          />
        </div>

        <div
          className={cn(
            frame,
            'bg-muted aspect-[4/5] md:col-span-3 md:aspect-auto',
          )}
        >
          <img
            src="https://images.unsplash.com/photo-1631125915973-e0d155a14e4e?q=80&w=900&auto=format&fit=crop"
            alt="Alt 3"
            loading="lazy"
            decoding="async"
            className={cn(imageClassName, 'object-[30%_center]')}
          />
        </div>

        <article
          className={cn(frame, 'bg-muted flex min-h-96 flex-col md:col-span-5')}
        >
          <p className="text-muted-foreground p-8 text-center text-lg leading-snug sm:text-xl">
            Every bowl is{' '}
            <strong className="text-foreground font-semibold">food safe</strong>{' '}
            and dishwasher proof, so it can live on the table, not on a shelf.
          </p>
          <div className="relative mt-auto h-48 w-full md:h-auto md:flex-1">
            <img
              src="https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?q=80&w=1200&auto=format&fit=crop"
              alt="Alt 4"
              loading="lazy"
              decoding="async"
              className={cn(imageClassName, 'absolute inset-0 object-bottom')}
            />
          </div>
        </article>

        <div
          className={cn(
            frame,
            'bg-muted aspect-[4/3] md:col-span-7 md:aspect-auto',
          )}
        >
          <img
            src="https://images.unsplash.com/photo-1650627459393-8d3eb964f0da?q=80&w=1600&auto=format&fit=crop"
            alt="Alt 5"
            loading="lazy"
            decoding="async"
            className={imageClassName}
          />
        </div>
      </div>
    </section>
  )
}
