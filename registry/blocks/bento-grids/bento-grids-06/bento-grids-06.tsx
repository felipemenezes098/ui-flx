import { cn } from '@/lib/utils'

const tile = 'relative overflow-hidden rounded-xl aspect-square'

const textTile =
  'bg-muted flex flex-col items-center justify-center gap-6 p-6 text-center'

const caption =
  'text-muted-foreground text-[0.65rem] leading-loose font-medium tracking-[0.3em] uppercase sm:text-xs'

function Mark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'text-muted-foreground border-border flex size-8 items-center justify-center rounded-full border text-xs',
        className,
      )}
    >
      N
    </span>
  )
}

function Photo({
  src,
  alt,
  className,
  lazy = true,
}: {
  src: string
  alt: string
  className?: string
  lazy?: boolean
}) {
  return (
    <div
      className={cn(
        tile,
        'bg-muted outline outline-black/10 dark:outline-white/10',
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : undefined}
        decoding="async"
        className={cn('size-full object-cover grayscale', className)}
      />
    </div>
  )
}

export function BentoGrids06() {
  return (
    <section className="bg-background w-full">
      <div className="mx-auto grid w-full max-w-6xl grid-flow-dense grid-cols-2 gap-3 px-6 py-20 sm:py-28 lg:grid-cols-4">
        <div className={cn(tile, textTile)}>
          <p className="text-foreground text-xl font-normal tracking-[0.3em] sm:text-2xl">
            NORDHAUS
          </p>
          <p className={caption}>Objects for quiet rooms</p>
          <Mark />
        </div>

        <div
          className={cn(
            tile,
            'col-span-2 row-span-2 bg-black outline outline-black/10 dark:outline-white/10',
          )}
        >
          <img
            src="https://images.unsplash.com/photo-1579326882518-21eaa7893b02?q=80&w=1400&auto=format&fit=crop"
            alt="Alt 1"
            decoding="async"
            className="size-full object-cover grayscale"
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 p-6 text-center text-white sm:p-10">
            <p className="text-2xl font-normal tracking-[0.3em] sm:text-3xl">
              NORDHAUS
            </p>
            <p className="text-[0.65rem] font-medium tracking-[0.3em] text-white/70 uppercase sm:text-xs">
              Make room for quiet
            </p>
          </div>
        </div>

        <div className={cn(tile, textTile)}>
          <p className={caption}>
            Calm.
            <br />
            Honest.
            <br />
            Lasting.
          </p>
          <Mark />
        </div>

        <Photo
          src="https://images.unsplash.com/photo-1568621139136-3ce86741d661?q=80&w=900&auto=format&fit=crop"
          alt="Alt 2"
          className="object-[35%_center]"
        />

        <Photo
          src="https://images.unsplash.com/photo-1652204075348-e367c1bde65a?q=80&w=900&auto=format&fit=crop"
          alt="Alt 3"
        />

        <div className={cn(tile, textTile)}>
          <p className={caption}>
            For rooms
            <br />
            that ask
            <br />
            for little.
          </p>
          <Mark />
        </div>

        <Photo
          src="https://images.unsplash.com/photo-1563891925196-a3e34f6d869c?q=80&w=900&auto=format&fit=crop"
          alt="Alt 4"
        />

        <Photo
          src="https://images.unsplash.com/photo-1523263889714-d345f8119047?q=80&w=900&auto=format&fit=crop"
          alt="Alt 5"
        />

        <div className={cn(tile, textTile)}>
          <p className={caption}>
            Made by hand.
            <br />
            Meant to be
            <br />
            kept.
          </p>
          <Mark />
        </div>
      </div>
    </section>
  )
}
