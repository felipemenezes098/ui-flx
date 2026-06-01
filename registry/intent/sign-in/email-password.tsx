import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function EmailPasswordDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-6 shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold">Welcome back</span>
        <span className="text-muted-foreground text-xs">
          Sign in with your email and password.
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="ep-email" className="text-xs">
            Email
          </Label>
          <Input
            id="ep-email"
            type="email"
            placeholder="you@acme.com"
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="ep-password" className="text-xs">
              Password
            </Label>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-[11px]"
            >
              Forgot?
            </a>
          </div>
          <Input
            id="ep-password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </div>

        <Button className="w-full">Sign in</Button>
      </div>

      <p className="text-muted-foreground mt-5 text-center text-xs">
        No account?{' '}
        <a href="#" className="text-foreground font-medium hover:underline">
          Sign up
        </a>
      </p>
    </div>
  )
}
