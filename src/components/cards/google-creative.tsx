import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { GoogleCreativeCardProps } from "@/constants/creatives";
import { capitalizeEachWord, cn } from "@/lib/utils";

export default function GoogleCreativeCard({ headline, url, description, keywords, className }: GoogleCreativeCardProps) {
  return (
    <div className={cn("rounded-md border border-gray-200 p-4 w-80 bg-white", className)}>
      <a href={url} target="_blank" className={cn("text-md text-blue-800 leading-snug tracking-tight font-medium cursor-pointer hover:underline line-clamp-2")}>
        {headline}
      </a>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-sm px-1 py-0.5 border border-success text-green-600">AD</span>
        <a href={url} target="_blank" className="text-sm text-green-600">
          {url}
        </a>
      </div>
      <Separator className="mt-2 mb-2" />
      <div className="flex flex-col gap-2 items-start overflow-hidden">
        <Tooltip>
          <TooltipTrigger>
            <p className="text-sm text-left text-heading/60 leading-snug line-clamp-3">{description}</p>
          </TooltipTrigger>
          <TooltipContent className="max-w-sm">
            <TooltipArrow />
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </TooltipContent>
        </Tooltip>
        {keywords ? (
          <div className="w-max flex flex-shrink-0 gap-2 overflow-x-auto scrollbar-hidden" onWheel={(e) => e.preventDefault()}>
            {keywords.map((keyword, index) => (
              <span key={index} className="w-fit text-sm px-1 py-0.5 border border-gray-200 text-blue-600 rounded-sm">
                {capitalizeEachWord(keyword)}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
