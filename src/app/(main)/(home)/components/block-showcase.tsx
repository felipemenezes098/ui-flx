import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

function BlockHero() {
  return (
    <Card className="overflow-hidden border-0 p-0 shadow-none">
      <div className="relative aspect-[4/6] w-full">
        <Image
          src="https://images.unsplash.com/photo-1609044145014-8c0717f87516?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4">
          <p className="text-sm font-medium text-white">New collection 2025</p>
          <Button
            size="sm"
            className="mt-2 w-fit bg-white text-black hover:bg-white/90"
          >
            Shop now
          </Button>
        </div>
      </div>
    </Card>
  )
}

function BlockTestimonial() {
  return (
    <Card className="gap-3 py-3 shadow-none [&_.border]:border-0">
      <CardContent className="flex flex-col gap-3 px-4 pt-0">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=644&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="object-cover"
              sizes="48px"
              unoptimized
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="mt-1 text-sm font-medium">Fred, Paris</p>
            <p className="text-muted-foreground text-xs">Designer Engineer</p>
          </div>
          <p className="text-foreground mb-1 text-xs" aria-hidden>
            ★★★★★
          </p>
        </div>
        <p className="text-muted-foreground text-sm leading-snug">
          &ldquo;I love the product! It&apos;s exactly what I needed.&rdquo;
        </p>
      </CardContent>
    </Card>
  )
}

function BlockTeam() {
  return (
    <Card className="overflow-hidden p-0 shadow-none">
      <div className="flex flex-col">
        <div className="relative aspect-[4/4] w-full border-b">
          <Image
            src="https://images.unsplash.com/photo-1670947841992-9a419324437e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />
        </div>
        <div className="flex flex-col px-3 py-2">
          <p className="text-foreground text-sm font-medium">The team</p>
          <p className="text-muted-foreground text-sm">
            Meet the team behind the brand.
          </p>
        </div>
      </div>
    </Card>
  )
}

function BlockPersonCta() {
  return (
    <Card className="overflow-hidden p-0 shadow-none">
      <div className="flex items-center gap-3 p-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            src="https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover"
            sizes="40px"
            unoptimized
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-foreground text-xs font-medium">
            Trusted by thousands
          </p>
          <p className="text-muted-foreground text-xs leading-tight">
            Join our comunity.
          </p>
        </div>
        <Button size="sm" variant="outline" className="shrink-0 text-xs">
          Learn more
        </Button>
      </div>
    </Card>
  )
}

function BlockProductList() {
  const items = [
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200&auto=format&fit=crop',
      name: 'Minimal Watch',
      price: '$149',
    },
    {
      src: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=200&auto=format&fit=crop',
      name: 'Leather Bag',
      price: '$89',
    },
  ]
  return (
    <Card className="gap-0 overflow-hidden p-0 shadow-none [&_.border]:border-0">
      <div className="border-b px-3 py-2">
        <p className="text-foreground text-xs font-medium">Free shipping</p>
      </div>
      <ul className="divide-y">
        {items.map((item) => (
          <li
            key={item.name}
            className="hover:bg-muted flex items-center gap-3 px-3 py-2"
          >
            <div className="bg-muted relative h-12 w-12 shrink-0 overflow-hidden rounded-sm">
              <Image
                src={item.src}
                alt=""
                fill
                className="object-cover"
                sizes="48px"
                unoptimized
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-foreground truncate text-xs">{item.name}</p>
              <p className="text-muted-foreground text-[11px]">{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function BlockProductItems() {
  const items = [
    {
      src: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Kit Collection',
      price: '$60',
    },
    {
      src: 'https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Shirt',
      price: '$20',
    },
  ]
  return (
    <Card className="py-0 shadow-none">
      <CardContent className="p-3">
        <div className="grid grid-cols-2 gap-2">
          {items.map((item, index) => (
            <div
              key={item.src + index}
              className="hover:bg-muted flex flex-col gap-2 rounded-sm p-2"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="rounded-sm object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <p className="text-foreground truncate text-xs">{item.name}</p>
                <p className="text-muted-foreground text-[11px]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function BlockCollectionPeek() {
  return (
    <Card className="overflow-hidden border-0 p-0 shadow-none">
      <div className="grid grid-cols-2 gap-2">
        <div className="relative aspect-[3/3] w-full">
          <Image
            src="https://images.unsplash.com/photo-1688327009265-3e47cdab9dc4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />
        </div>
        <div className="relative aspect-[3/3] w-full">
          <Image
            src="https://images.unsplash.com/photo-1610795384821-2eed2f416f16?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />
        </div>
      </div>
    </Card>
  )
}

export function BlockShowcase() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="flex flex-col gap-3">
        <BlockHero />
      </div>
      <div className="flex flex-col gap-3">
        <BlockTeam />
        <BlockCollectionPeek />
      </div>
      <div className="flex flex-col gap-3">
        <BlockPersonCta />
        <BlockProductList />
        <BlockTestimonial />
        <BlockProductItems />
      </div>
    </div>
  )
}
