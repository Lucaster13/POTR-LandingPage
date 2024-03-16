import { FadeableProps } from "@/styles/fadeable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ReactNode } from "react";

export type BasicCardProps = {
  header: string;
  description?: string;
  content: ReactNode;
} & FadeableProps;

export default function BasicCard({
  header,
  description,
  content,
}: BasicCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gradient-primary">{header}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-pretty h-full">{content}</CardContent>
    </Card>
  );
}
