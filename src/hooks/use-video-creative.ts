import { fetchVideoDimensionsFromURL } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function useVideoCreative(url?: string) {
  const [isMuted, setMuted] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<"1/1" | "16/9" | "9/16">("1/1");

  const video = useRef<HTMLVideoElement>(null);

  const onTogglePlay = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  const onToggleMute = () => {
    if (isMuted) {
      onUnmute();
    } else {
      onMute();
    }
  };

  const onMute = () => {
    if (!video.current) return;
    setMuted(true);
    video.current.muted = true;
  };

  const onUnmute = () => {
    if (!video.current) return;
    setMuted(false);
    video.current.muted = false;
  };

  const onPlay = () => {
    if (!video.current) return;
    setPlaying(true);
    video.current.play();
  };

  const onPause = () => {
    if (!video.current) return;
    setPlaying(false);
    video.current?.pause();
  };

  useEffect(() => {
    if (!url) return;
    fetchVideoDimensionsFromURL(url).then(({ height, width }) => {
      const aspectRatio = width / height;
      if (aspectRatio > 1.35) setAspectRatio("16/9");
      else if (aspectRatio < 0.75) setAspectRatio("9/16");
      else setAspectRatio("1/1");
    });
  }, [url]);

  useEffect(() => {
    const player = video.current;
    player?.addEventListener("ended", onPause);
    return () => {
      player?.removeEventListener("ended", onPause);
    };
  }, [video]);

  return [video, { aspectRatio, onPlay, onPause, onTogglePlay, onMute, onUnmute, onToggleMute, isPlaying, isMuted }] as const;
}
