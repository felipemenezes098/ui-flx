import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Testimonials01() {
  return (
    <div className="mx-auto flex min-h-80 max-w-3xl flex-col items-center justify-center gap-8 rounded-3xl text-center">
      <p className="text-xl leading-tight font-medium tracking-tight md:text-[2rem]">
        "Switching to these blocks gave our team a cleaner system and helped us
        launch polished pages in a fraction of the time."
      </p>

      <div className="flex items-center justify-center gap-4">
        <Avatar size="default" className="md:data-[size=default]:size-10">
          <AvatarImage
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
            alt="Alt"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-start text-left">
          <p className="text-sm font-semibold md:text-base">Sophie Carter</p>
          <p className="text-muted-foreground text-xs md:text-sm">
            Product Design Lead at Northstar
          </p>
        </div>
      </div>
    </div>
  )
}
