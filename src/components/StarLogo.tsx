interface StarLogoProps {
  className?: string;
}

export const StarLogo = ({ className = "" }: StarLogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center shadow-glow-purple">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground"
        >
          <path
            d="M16 2L20.36 12.64L31 16L20.36 19.36L16 30L11.64 19.36L1 16L11.64 12.64L16 2Z"
            fill="currentColor"
          />
          <circle cx="24" cy="8" r="2" fill="currentColor" />
          <circle cx="8" cy="24" r="1.5" fill="currentColor" />
          <path
            d="M25 22L26 24L28 23"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};