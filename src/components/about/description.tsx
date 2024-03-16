import { cn } from "@/lib/utils";

export default function Description({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-lg lg:w-2/3 text-pretty font-bold text-normal-300",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
