import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react'

export function Banner02() {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <div className="flex items-start gap-3 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-700 dark:text-blue-300">
        <Info className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
        <div className="flex flex-col gap-0.5">
          <p className="font-medium">New feature</p>
          <p className="opacity-80">Saved views are now available on every board.</p>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
        <div className="flex flex-col gap-0.5">
          <p className="font-medium">Payment received</p>
          <p className="opacity-80">
            Your invoice has been paid and a receipt is on its way.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-700 dark:text-amber-300">
        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
        <div className="flex flex-col gap-0.5">
          <p className="font-medium">Storage almost full</p>
          <p className="opacity-80">
            You have used 92% of your plan. Upgrade to avoid interruptions.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
        <XCircle className="mt-0.5 size-5 shrink-0 text-red-600 dark:text-red-400" />
        <div className="flex flex-col gap-0.5">
          <p className="font-medium">Sync failed</p>
          <p className="opacity-80">
            We could not reach the server. Your changes are saved locally.
          </p>
        </div>
      </div>
    </div>
  )
}
