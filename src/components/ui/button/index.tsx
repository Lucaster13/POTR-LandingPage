import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex items-center text-primary justify-center whitespace-nowrap w-fit rounded-full text-sm font-medium ring-offset-primary transition-default 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-normal-950 focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50 relative`,
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary hover:text-dark hover:brightness-125",
        secondary: "glass border",
        ghost:
          "bg-transparent border border-opacity-5 border-secondary hover:border-opacity-50 text-secondary hover:brightness-125",
        tertiary:
          "bg-none text-secondary hover:underline underline-offset-4 hover:brightness-125",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
        noPad: "p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size: variant === "tertiary" ? "noPad" : size,
            className,
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
