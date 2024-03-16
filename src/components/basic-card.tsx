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
  header: ReactNode;
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
        <CardTitle>{header}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
