import { type ClassValue, clsx } from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type BaseProps = {
  className?: string;
  children?: ReactNode;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openNewTab(url: string) {
  const win = window.open(url, "_blank");
  if (win != null) {
    win.focus();
  }
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function chunkList(list: any[], chunkSize: number): any[][] {
  const numChunks = Math.ceil(list.length / chunkSize);
  return new Array(numChunks).fill(null).map((_, i) => {
    // get chunk of list
    const chunk = [i * chunkSize, Math.min((i + 1) * chunkSize, list.length)];
    return list.slice(...chunk);
  });
}
