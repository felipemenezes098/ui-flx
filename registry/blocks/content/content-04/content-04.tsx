import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export interface Content04Props {
  items: {
    title: string
    description?: string
    media: {
      src: string
      alt: string
    }
  }[]
}

export function Content04({ items }: Readonly<Content04Props>) {
  if (!items?.length) {
    return null
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {items.map((item, index) => (
        <Card
          key={`${item.title}-${index}`}
          className="h-full overflow-hidden pt-0"
        >
          <CardHeader className="pt-6">
            <CardTitle>{item.title}</CardTitle>
            {item.description && (
              <CardDescription>{item.description}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="mt-auto pt-0 pb-0">
            <div className="relative aspect-video min-h-64 w-full overflow-hidden rounded-lg">
              <img
                src={item.media.src}
                alt={item.media.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
