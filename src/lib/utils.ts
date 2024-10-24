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

export function fetchVideoDimensionsFromURL(src: string) {
  return new Promise<{ height: number; width: number }>((resolve, reject) => {
    const video = document.createElement("video");
    video.addEventListener("loadedmetadata", () => {
      if (!video.videoHeight || !video.videoWidth) reject();
      resolve({ height: video.videoHeight, width: video.videoWidth });
    });
    video.addEventListener("error", () => {
      reject();
    });
    video.src = src;
  });
}
