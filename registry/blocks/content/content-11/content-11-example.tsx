import { Content11, type Content11Props } from './content-11'

export const values = {
  title: 'Every account, one place to watch it move',
  description:
    'Balances, campaigns, and payments stay in sync automatically, so your team spends less time reconciling and more time collecting.',
  variant: 'standard',
  animation: 'subtle',
  feature1: {
    icon: 'LayoutDashboard',
    title: 'One view for every account',
    description:
      'Balances, payments, and campaign activity live in a single dashboard instead of scattered spreadsheets.',
  },
  feature2: {
    icon: 'Sparkles',
    title: 'Insights that update themselves',
    description:
      'Every record is grouped by status, channel, and performance automatically, so trends surface before you go looking for them.',
  },
} satisfies Content11Props

export function Content11Example() {
  return (
    <Content11
      title={values.title}
      description={values.description}
      feature1={values.feature1}
      feature2={values.feature2}
      variant={values.variant}
      animation={values.animation}
    />
  )
}
