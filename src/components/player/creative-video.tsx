import { VideoHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon, Volume2Icon as VolumeOnIcon, VolumeOffIcon } from "lucide-react";
import { useVideoCreative } from "@/hooks/use-video-creative";

const aspectRatioMap = {
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "9/16": "aspect-portrait",
};

function formatSource(src?: string, poster?: string) {
  if (!src || !!poster || src.includes("#t=")) return src;
  return src + "#t=0.5";
}

interface CreativeVideoPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  fluid?: boolean;
  container?: string;
}

export function CreativeVideoPlayer({ src, className, container, fluid, ...props }: CreativeVideoPlayerProps) {
  const [player, video] = useVideoCreative(src, true, true);
  return (
    <div className={cn("relative", container)}>
      <video
        ref={player}
        autoPlay
        muted
        src={formatSource(src, props.poster)}
        preload="metadata"
        className={cn("block w-full object-cover", fluid ? "h-auto" : aspectRatioMap[video.aspectRatio], className)}
        {...props}
      />
      <div className="absolute left-0 bottom-0 w-full flex justify-between items-center px-3 pb-3 gap-8">
        <button onClick={video.onTogglePlay} className="h-8 w-8 grid place-items-center bg-black/30 rounded-full backdrop-blur">
          {video.isPlaying ? <PauseIcon fill="white" color="white" size={16} /> : <PlayIcon fill="white" color="white" size={16} />}
        </button>
        <button onClick={video.onToggleMute} className="h-8 w-8 grid place-items-center bg-black/30 rounded-full backdrop-blur">
          {video.isMuted ? <VolumeOffIcon fill="white" color="white" size={16} /> : <VolumeOnIcon fill="white" color="white" size={16} />}
        </button>
      </div>
    </div>
  );
}
