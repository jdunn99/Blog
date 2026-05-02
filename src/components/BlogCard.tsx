interface Props {
  title: string;
  description: string;
  date: Date;
  url: string;
  github?: string;
  image?: any;
}

export default function BlogCard({
  title,
  description,
  date,
  url,
  github,
  image,
}: Props) {
  return (
    <div className="group flex flex-col space-y-1">
      <a
        href={url}
        className="block overflow-hidden rounded-lg border border-zinc-200/50 bg-zinc-50 transition-all  group-hover:border-zinc-300 mb-4"
      >
        <div className="aspect-video w-full overflow-hidden">
          {image ? (
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              alt={title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-50 text-zinc-200">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
          )}
        </div>
      </a>

      <span className="text-xs text-emerald-500 font-semibold uppercase ">
        {date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </span>

      <a href={url} className="block">
        <h3 className="text-lg font-bold  text-zinc-600 group-hover:text-emerald-600 transition-colors tracking-tight">
          {title}
        </h3>
      </a>
    </div>
  );
  return null;
}
