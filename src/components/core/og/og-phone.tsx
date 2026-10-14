import { OgBar } from './og-bar'
import { ogColors } from './og-colors'

export function OgPhone() {
  return (
    <div
      style={{
        position: 'absolute',
        left: 540,
        top: 160,
        display: 'flex',
        width: 180,
        height: 340,
        padding: 7,
        borderRadius: 38,
        background: ogColors.foreground,
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.16)',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          padding: 14,
          paddingTop: 44,
          gap: 8,
          borderRadius: 31,
          background: ogColors.card,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 11,
            left: 53,
            width: 60,
            height: 18,
            borderRadius: 9,
            background: ogColors.foreground,
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: 14,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 3,
              background: ogColors.foreground,
            }}
          />
          <OgBar width={16} height={6} />
        </div>
        <OgBar width={120} height={12} tone="strong" />
        <OgBar width={90} height={12} tone="strong" />
        <div style={{ height: 2 }} />
        <OgBar width={118} height={6} />
        <OgBar width={96} height={6} />
        <div
          style={{
            width: '100%',
            height: 26,
            marginTop: 8,
            borderRadius: 13,
            background: ogColors.foreground,
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 7,
            marginTop: 12,
            padding: 12,
            borderRadius: 12,
            border: `1px solid ${ogColors.border}`,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              marginBottom: 2,
              borderRadius: 5,
              background: ogColors.muted,
            }}
          />
          <OgBar width={80} tone="strong" />
          <OgBar width={110} height={6} />
        </div>
      </div>
    </div>
  )
}
