'use client';

export default function RatingDisplay({
  rating = 4.9,
  maxRating = 5,
  reviewCount = 180,
  showDots = true,
}) {
  const scoreStyle = {
    display: 'flex',
    gap: '2px',
    fontFamily: 'var(--font-grotesk)',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.02em',
    lineHeight: 1,
    color: 'rgb(255, 255, 255)',
  };

  const reviewTextStyle = {
    marginLeft: '8px',
    fontFamily: 'var(--font-grotesk)',
    fontSize: '9px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: 1,
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.5)',
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '100px',
        backdropFilter: 'blur(4px)',
      }}
    >
      {showDots && (
        <div style={{ display: 'flex', gap: '4px' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: '4px',
                height: '4px',
                backgroundColor: i < Math.round(rating) ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.3)',
                borderRadius: '100%',
                opacity: 1,
              }}
            />
          ))}
        </div>
      )}
      <div style={scoreStyle}>
        <span>{rating}</span>
        <span style={{ color: 'rgba(255, 255, 255, 0.64)' }}>/{maxRating}</span>
      </div>
      <span style={reviewTextStyle}>
        Based on {reviewCount} verified reviews
      </span>
    </div>
  );
}
