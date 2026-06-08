import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const stats = [
  { label: 'Posts', value: '128' },
  { label: 'Followers', value: '4.2k' },
  { label: 'Following', value: '312' },
]

export function Card08() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="items-center justify-center text-center">
        <Avatar className="mx-auto size-16">
          <AvatarImage
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
            alt="Mia Anderson"
          />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
        <div className="mt-2 flex flex-col gap-0.5">
          <span className="font-medium">Mia Anderson</span>
          <span className="text-muted-foreground text-sm">
            Product designer
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-around">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="font-semibold tabular-nums">{stat.value}</span>
                <span className="text-muted-foreground text-xs">
                  {stat.label}
                </span>
              </div>
              {index < stats.length - 1 && (
                <Separator orientation="vertical" className="h-8" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Follow</Button>
        <Button variant="outline" className="flex-1">
          Message
        </Button>
      </CardFooter>
    </Card>
  )
}
