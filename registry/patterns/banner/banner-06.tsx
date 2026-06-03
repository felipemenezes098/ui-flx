import { ArrowRight } from 'lucide-react'

export function Banner06() {
  return (
    <div className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm">
      <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold tracking-wide uppercase">
        New
      </span>
      <span>Introducing AI-assisted workflows — try it free for 14 days</span>
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </div>
  )
}
