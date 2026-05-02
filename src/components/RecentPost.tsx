interface Props {
  title: string;
  description: string;
  date: Date;
  url: string;
  github?: string;
  image?: any;
}

export default function RecentPost({
  title,
  description,
  date,
  url,
  github,
  image,
}: Props) {
  return (
    <div className="group flex flex-row items-center gap-4 md:gap-8 py-4 border-b last:border-0">
      <div className="aspect-video h-shrink-0  rounded-lg md:rounded-xl overflow-hidden border border-zinc-200 transition-colors group-hover:border-zinc-400">
        {image ? (
          <img
            src={image.src}
            width={400}
            height={225}
            alt={title}
            className="w-[400px] h-[225px] object-fill opacity-80 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="md:w-10 md:h-10"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
        )}
      </div>

      <div className="flex flex-col min-w-0">
        <div className="text-[10px] md:text-xs font-medium  uppercase tracking-widest mb-1 md:mb-2">
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <a
          href={url}
          className="text-base md:text-xl font-bold text-emerald-500 hover:text-emerald-600 transition-colors leading-tight mb-2"
        >
          {title}
        </a>
        {/* Description - Hidden or clamped on mobile to save space */}
        <p className="text-[#a1a1a1] leading-relaxed mb-3 text-sm hidden md:line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
