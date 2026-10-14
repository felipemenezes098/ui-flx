import { Logo } from '@/components/core/logo'
import { siteConfig } from '@/config/site'

import { OgBrowser } from './og-browser'
import { ogColors } from './og-colors'
import { OgPhone } from './og-phone'

export function OgImage({
  title,
  description,
}: Readonly<{
  title: string
  description: string
}>) {
  const titleSize = Math.min(64, Math.max(44, 84 - title.length))

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: 40,
        background: ogColors.background,
        fontFamily: 'Inter',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: 44,
          border: `1px solid ${ogColors.border}`,
          background: ogColors.card,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 520,
            padding: 64,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Logo.Tile
              width={52}
              height={52}
              tileColor={ogColors.foreground}
              markColor={ogColors.card}
            />
            <div
              style={{
                fontSize: 28,
                fontWeight: 500,
                color: ogColors.foreground,
              }}
            >
              {siteConfig.name}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div
              style={{
                fontSize: titleSize,
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                color: ogColors.foreground,
                textWrap: 'balance',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.4,
                color: ogColors.mutedForeground,
                display: 'block',
                lineClamp: 3,
              }}
            >
              {description}
            </div>
          </div>
        </div>
        <OgBrowser />
        <OgPhone />
      </div>
    </div>
  )
}
