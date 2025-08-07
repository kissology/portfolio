"use client";

export default function UpScrollButton() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const btn = e.currentTarget as HTMLElement;
    btn.blur();
    btn.classList.add("no-hover");
    setTimeout(() => {
      btn.classList.remove("no-hover");
    }, 300);
  };

  return (
    <div className="flex items-center justify-center text-center">
      <button
        className="button !mb-20 rotate-360"
        onClick={handleClick}
        aria-label="Scroll to top"
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
    </div>
  );
}
