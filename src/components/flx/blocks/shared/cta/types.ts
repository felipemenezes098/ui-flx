export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'

export interface CtaProps {
  ctaEnabled?: boolean
  text: string
  link: string
  variant?: ButtonVariant
}
