'use client'

import { useState } from 'react'
import { ArrowRightIcon, CheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

type Task = {
  id: string
  title: string
  description: string
}

const TASKS: Task[] = [
  {
    id: 'profile',
    title: 'Complete your profile',
    description: 'Add a name and photo so teammates recognize you.',
  },
  {
    id: 'workspace',
    title: 'Create a workspace',
    description: 'Give your team a home for projects.',
  },
  {
    id: 'invite',
    title: 'Invite teammates',
    description: 'Bring the people you work with on board.',
  },
  {
    id: 'project',
    title: 'Start your first project',
    description: 'Create a project to see the product in action.',
  },
]

export function SetupChecklistDecision() {
  const [done, setDone] = useState<Record<string, boolean>>({ profile: true })
  const completed = Object.values(done).filter(Boolean).length
  const pct = Math.round((completed / TASKS.length) * 100)

  function toggle(id: string) {
    setDone((d) => ({ ...d, [id]: !d[id] }))
  }

  return (
    <div className="bg-card w-full max-w-sm rounded-xl border p-5 shadow-sm">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold">Get started</h3>
        <p className="text-muted-foreground text-xs">
          {completed} of {TASKS.length} complete
        </p>
      </div>
      <Progress value={pct} className="mt-3 h-1.5" />

      <ul className="mt-4 flex flex-col gap-1">
        {TASKS.map((task) => {
          const checked = !!done[task.id]
          return (
            <li key={task.id}>
              <button
                type="button"
                onClick={() => toggle(task.id)}
                className="hover:bg-muted/50 flex w-full items-start gap-3 rounded-lg p-2 text-left transition-colors"
              >
                <span
                  className={cn(
                    'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border',
                    checked
                      ? 'bg-primary border-primary text-primary-foreground'
                      : 'border-muted-foreground/40',
                  )}
                >
                  {checked && <CheckIcon className="size-3" />}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span
                    className={cn(
                      'text-xs font-medium',
                      checked && 'text-muted-foreground line-through',
                    )}
                  >
                    {task.title}
                  </span>
                  <span className="text-muted-foreground text-[11px]">
                    {task.description}
                  </span>
                </span>
                <ArrowRightIcon
                  className={cn(
                    'text-muted-foreground/50 mt-0.5 ml-auto size-3.5 shrink-0',
                    checked && 'invisible',
                  )}
                />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
