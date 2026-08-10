import clsx from "clsx";

interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function Heading({
  title,
  subtitle,
  align = "center",
}: HeadingProps) {
  return (
    <div
      className={clsx(
        "mb-14",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}