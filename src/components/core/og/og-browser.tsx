import { OgBar } from './og-bar'
import { ogColors } from './og-colors'

const windowDots = [0, 1, 2]
const cards = [0, 1, 2]

export function OgBrowser() {
  return (
    <div
      style={{
        position: 'absolute',
        left: 600,
        top: 90,
        display: 'flex',
        flexDirection: 'column',
        width: 480,
        height: 400,
        overflow: 'hidden',
        borderRadius: 18,
        border: `1px solid ${ogColors.border}`,
        background: ogColors.card,
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.10)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 36,
          padding: '0 14px',
          gap: 7,
          borderBottom: `1px solid ${ogColors.border}`,
          background: ogColors.background,
        }}
      >
        {windowDots.map((index) => (
          <div
            key={index}
            style={{
              width: 9,
              height: 9,
              borderRadius: 5,
              background: ogColors.dot,
            }}
          />
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 4,
              background: ogColors.foreground,
            }}
          />
          <OgBar width={40} height={6} />
          <OgBar width={48} height={6} />
          <OgBar width={36} height={6} />
        </div>
        <div
          style={{
            width: 64,
            height: 22,
            borderRadius: 11,
            background: ogColors.foreground,
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 22,
          gap: 10,
        }}
      >
        <div
          style={{
            width: 96,
            height: 18,
            marginBottom: 6,
            borderRadius: 9,
            border: `1px solid ${ogColors.border}`,
          }}
        />
        <OgBar width={280} height={16} tone="strong" />
        <OgBar width={200} height={16} tone="strong" />
        <div style={{ height: 4 }} />
        <OgBar width={240} />
        <OgBar width={180} />
        <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
          <div
            style={{
              width: 84,
              height: 26,
              borderRadius: 13,
              background: ogColors.foreground,
            }}
          />
          <div
            style={{
              width: 76,
              height: 26,
              borderRadius: 13,
              border: `1px solid ${ogColors.border}`,
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12, padding: '30px 24px 0' }}>
        {cards.map((index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              gap: 8,
              padding: 14,
              borderRadius: 12,
              border: `1px solid ${ogColors.border}`,
              background: ogColors.card,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                marginBottom: 4,
                borderRadius: 6,
                background: ogColors.muted,
              }}
            />
            <OgBar width={90} tone="strong" />
            <OgBar width={120} height={6} />
            <OgBar width={100} height={6} />
          </div>
        ))}
      </div>
    </div>
  )
}
