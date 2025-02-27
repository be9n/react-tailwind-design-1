import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(
  ["py-2 px-4 rounded-md text-white transition-colors duration-200"],
  {
    variants: {
      variant: {
        default: [
          "bg-transparent border-[1px] border-white hover:bg-white hover:text-black",
        ],
        gradient: [
          "bg-gradient-to-r from-primary to-gradient-red",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant }), className)}
    />
  );
}
