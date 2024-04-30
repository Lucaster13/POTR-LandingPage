import { BaseProps, cn } from "@/lib/utils";

type GradientBorderProps = {
  rounded?: boolean;
  skewed?: boolean;
  containerClassName?: string;
} & BaseProps;

export function GradientBorder({
  children,
  className,
  rounded,
  skewed,
  containerClassName,
}: GradientBorderProps) {
  return (
    <div
      className={cn(
        "bg-gradient-primary p-px h-fit w-fit flex items-center justify-center",
        rounded && "rounded-lg",
        skewed && "-skew-x-24",
        containerClassName
      )}
    >
      <div
        className={cn(
          "bg-dark container h-fit w-fit",
          rounded && "rounded-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
