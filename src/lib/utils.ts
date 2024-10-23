import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function upperFirst(str?: string | null) {
  if (!str) return "";
  return str.at(0)?.toUpperCase() + str.slice(1).toLowerCase();
}

export function capitalizeEachWord(str: string | null) {
  if (!str) return "";
  return str.split(" ").map(upperFirst).join(" ");
}
