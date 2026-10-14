export function BlockLivePreview({
  src,
  title,
  height,
}: Readonly<{
  src: string
  title: string
  height: number
}>) {
  return (
    <div
      className="bg-muted/50 dark:bg-muted/20 border-border/50 w-full overflow-hidden rounded-xl border"
      style={{ height }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        className="h-full w-full"
      />
    </div>
  )
}
