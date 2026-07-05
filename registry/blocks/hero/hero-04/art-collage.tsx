export function ArtCollage({
  primaryImage,
  secondaryImage,
  primaryAlt = '',
  secondaryAlt = '',
}: Readonly<{
  primaryImage: string
  secondaryImage: string
  primaryAlt?: string
  secondaryAlt?: string
}>) {
  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg">
      <div
        aria-hidden
        className="bg-primary/10 pointer-events-none absolute -inset-6 -z-10 rounded-full opacity-40 blur-3xl dark:opacity-25"
      />

      <div className="relative aspect-[4/5] w-[82%] overflow-hidden rounded-2xl shadow-xl outline outline-black/10 dark:outline-white/10">
        <img
          src={primaryImage}
          alt={primaryAlt}
          decoding="async"
          className="size-full object-cover"
        />
        <div className="from-background/20 absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>

      <div className="absolute -right-2 bottom-6 aspect-square w-[42%] rotate-3 overflow-hidden rounded-xl shadow-lg outline outline-black/10 sm:-right-4 dark:outline-white/10">
        <img
          src={secondaryImage}
          alt={secondaryAlt}
          decoding="async"
          className="size-full object-cover"
        />
      </div>
    </div>
  )
}
