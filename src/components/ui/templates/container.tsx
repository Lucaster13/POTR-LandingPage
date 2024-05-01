import { BaseProps } from "@/lib/utils";

export default function ContainerTemplate({ children }: BaseProps) {
  return (
    <div
      className="container h-fit my-auto glass border rounded-lg py-6 flex flex-col gap-4 
        text-pretty justify-center text-center items-center w-fit"
    >
      {children}
    </div>
  );
}
