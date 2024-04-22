import Spinner from "@/components/icons/spinner";
import { cn } from "@/lib/utils";
import Fade, { FadeProps } from "@/styles/fade";

export default function Loading({ fadeOut }: FadeProps) {
  const className = cn(
    Fade(
      fadeOut,
      "absolute inset-0 h-dynamic-screen w-screen flex items-center flex-col gap-12 justify-center transition-opacity bg-base duration-1000"
    ),
    fadeOut ? "-z-50" : "z-50"
  );
  return (
    <section className={className}>
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-wrap font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-primary">
          PROTECTORS
          <br />
          OF THE
          <br />
          RAND
        </span>
      </h1>
      <Spinner />
    </section>
  );
}
