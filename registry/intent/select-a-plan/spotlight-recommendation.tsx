import { ArrowRightIcon, CheckIcon, StarIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'

const perks = [
  'Unlimited projects and collaborators',
  '100 GB storage with version history',
  'Advanced analytics and exports',
  'Priority support, replies in under 4h',
]

const faces = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
]

export function SpotlightRecommendationDecision() {
  return (
    <Card
      size="sm"
      className="border-primary ring-primary/20 relative w-full max-w-sm overflow-visible ring-2"
    >
      <span className="bg-primary text-primary-foreground absolute -top-2.5 left-4 rounded-full px-2 py-0.5 text-[11px] font-medium">
        Recommended for you
      </span>

      <CardHeader>
        <div className="flex items-baseline justify-between">
          <span className="text-base font-semibold">Pro</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold tracking-tight">$23</span>
            <span className="text-muted-foreground text-xs">/mo</span>
          </div>
        </div>
        <span className="text-muted-foreground text-xs leading-snug">
          Based on your trial usage, Pro covers everything you reached for.
        </span>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <ul className="flex flex-col gap-2">
          {perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2 text-xs">
              <CheckIcon className="text-primary mt-0.5 size-3.5 shrink-0" />
              <span className="text-muted-foreground leading-snug">{perk}</span>
            </li>
          ))}
        </ul>

        <div className="bg-muted/50 flex items-center gap-3 rounded-lg border p-3">
          <div className="flex -space-x-2">
            {faces.map((src, i) => (
              <Avatar key={i} className="ring-card size-6 ring-2">
                <AvatarImage src={src} alt="" />
                <AvatarFallback className="bg-primary/20 text-[10px]">
                  U
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="fill-primary text-primary size-3" />
              ))}
            </div>
            <span className="text-muted-foreground text-[11px]">
              Loved by 12,000+ teams
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button size="sm" className="w-full">
          Upgrade to Pro
          <ArrowRightIcon className="size-3.5" />
        </Button>
        <Button size="sm" variant="ghost" className="w-full text-xs">
          See all plans
        </Button>
      </CardFooter>
    </Card>
  )
}
