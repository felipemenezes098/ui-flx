import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/ui/button'

export function Cta01() {
  return (
    <div className="bg-muted/50 flex min-h-120 items-center justify-center rounded-xl p-5">
      <div className="flex flex-col items-center space-y-4 self-center">
        <div className="space-y-2">
          <h2 className="text-center text-2xl font-bold md:max-w-200">
            <Balancer balance={0.5}>Simple & Elegant</Balancer>
          </h2>
          <p className="text-muted-foreground text-center md:max-w-200">
            <Balancer balance={0.5}>
              Display content in a minimal and visually appealing way.
            </Balancer>
          </p>
        </div>
        <Button
          className="w-fit rounded-full px-4"
          nativeButton={false}
          render={<a href="#" />}
        >
          Click here
        </Button>
      </div>
    </div>
  )
}
