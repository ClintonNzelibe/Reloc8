import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200",

        variant === "primary"
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20 hover:-translate-y-1 hover:shadow-2xl"
          : "border border-slate-300 bg-white text-slate-800 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}