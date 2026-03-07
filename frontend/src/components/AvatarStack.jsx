'use client';

import Image from 'next/image';

const defaultAvatars = [
  { src: '/img-team1.png', alt: 'Portrait of a team member' },
  { src: '/img-team2.png', alt: 'Portrait of a team member' },
  { src: '/img-content.png', alt: 'Portrait of a team member' },
];

export default function AvatarStack({ avatars = [] }) {
  const imagesToUse = avatars && avatars.length > 0 ? avatars : defaultAvatars;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '-15px',
        marginBottom: '16px',
      }}
    >
      {imagesToUse.map((avatar, index) => (
        <Image
          key={index}
          src={avatar.src}
          alt={avatar.alt || `Team member ${index + 1}`}
          width={60}
          height={60}
          priority={index === 0}
          style={{
            width: '60px',
            height: '60px',
            border: '1.5px solid rgb(255, 255, 255)',
            borderRadius: '160px',
            objectFit: 'cover',
            marginLeft: index === 0 ? '0' : '-15px',
            display: 'block',
          }}
        />
      ))}
    </div>
  );
}
