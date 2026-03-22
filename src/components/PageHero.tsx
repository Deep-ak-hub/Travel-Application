interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ image, eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <div className="relative w-full h-64 sm:h-80 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/65" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-secondary-light text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-5 h-0.5 bg-secondary-light rounded-full" />
            {eyebrow}
            <span className="w-5 h-0.5 bg-secondary-light rounded-full" />
          </span>
        )}
        <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-white/80 max-w-xl text-sm sm:text-base">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg"
          className="w-full block" preserveAspectRatio="none">
          <path d="M0 40 L0 24 Q360 4 720 18 Q1080 32 1440 10 L1440 40 Z"
            fill="oklch(0.97 0.01 250)" />
        </svg>
      </div>
    </div>
  );
}