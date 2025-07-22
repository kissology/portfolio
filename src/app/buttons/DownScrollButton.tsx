'use client';

interface DownScrollButtonProps {
  targetId: string;
}

export default function DownScrollButton({ targetId }: DownScrollButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    const btn = e.currentTarget as HTMLElement;
    btn.blur();
    btn.classList.add('no-hover');
    setTimeout(() => {
      btn.classList.remove('no-hover');
    }, 300);
  };

  return (
    <button
      className="button !mt-20 rotate-180"
      onClick={handleClick}
      aria-label={`Scroll to ${targetId}`}
    >
      <span className="button-box">
        <svg className="button-elem initial-arrow" viewBox="0 0 20 20">
          <polyline
            points="5 8 10 13 15 8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg className="button-elem hover-arrow" viewBox="0 0 20 20">
          <polyline
            points="5 8 10 13 15 8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
