import { cn } from "@/lib/utils";

export default function Title({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-5xl lg:w-2/3 text-pretty font-extrabold text-gradient-primary",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
