import { useState } from "react";

interface IGalleryProps {
  main: string;
  gallery: string[];
  title: string;
}

export default function Gallery({
  main,
  gallery,
  title,
}: Readonly<IGalleryProps>) {
  const [active, setActive] = useState(0);
  const all = [main, ...gallery];

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-border">
          <img
            src={all[active]}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          <span className="absolute bottom-4 right-4 bg-black/50 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
            {active + 1} / {all.length}
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {all.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === active
                  ? "border-primary shadow-md"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
