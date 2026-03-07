'use client';

export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        background: 'transparent',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          width: '100%',
          height: '100%',
          gap: 0,
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              borderRight: i < 3 ? '1px solid rgba(255, 255, 255, 0.03)' : 'none',
              background: 'transparent',
            }}
          />
        ))}
      </div>
    </div>
  );
}
