import { FadeableProps } from "@/styles/fadeable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BasicCardProps = {
  header: ReactNode;
  description?: string;
  content: ReactNode;
} & FadeableProps;

export default function BasicCard({
  header,
  description,
  content,
  ...props
}: BasicCardProps) {
  const className = cn("w-80 min-w-80", props.className);
  return (
    <Card {...props} className={className}>
      <CardHeader>
        <CardTitle className="text-gradient-primary">{header}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-pretty h-full">{content}</CardContent>
    </Card>
  );
}
