import { ComponentProps } from "react";

export default function GradientSpan({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      {...props}
      className={`bg-gradient-to-r from-primary to-gradient-red text-transparent bg-clip-text ${className}`}
    />
  );
}
