import Spinner from "@/components/spinner";
import { cn } from "@/lib/utils";
import { FadeableProps, fadeable } from "@/styles/fadeable";

export default function Loading({ faded }: FadeableProps) {
  const className = cn(
    fadeable({
      className:
        "absolute inset-0 m-auto h-screen w-screen flex items-center flex-col gap-12 pb-64 justify-center transition-opacity bg-dark duration-1000",
      faded,
    }),
    faded ? "-z-50" : "z-50"
  );
  return (
    <section className={className}>
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-wrap font-extrabold">
        <span className="bg-clip-text text-transparent bg-primary-gradient">
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
