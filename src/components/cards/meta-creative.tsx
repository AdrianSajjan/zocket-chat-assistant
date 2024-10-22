import { MetaCreativeCardProps } from "@/constants/creatives";
import { cn, upperFirst } from "@/lib/utils";
import { GlobeIcon } from "lucide-react";

export default function MetaCreativeCard({ creative, className, brand }: MetaCreativeCardProps) {
  const name = brand?.brand_name || "Zocket";
  const logo = brand?.brand_logo || "images/no-avatar.jpg";

  return (
    <div id="post" className={cn("w-[21.575rem] border bg-white border-gray-200 rounded-2xl pt-5 px-3 flex-shrink-0 relative", className)}>
      <div className="flex items-center" id="header">
        <img src={logo} alt="logo" height={42} width={42} className="object-cover border rounded-full aspect-square block bg-white" />
        <div className="ml-2 mr-8">
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <div className="flex items-center space-x-0.5">
            <span className="text-[0.625rem] text-foreground/60">Sponsored</span>
            <GlobeIcon size={12} className="text-foreground/60" />
          </div>
        </div>
      </div>
      <div id="caption" className="px-1 mt-3.5">
        <p className="text-sm text-black/70 whitespace-pre-line line-clamp-5">{creative.caption}</p>
      </div>
      <div className="mt-3.5 w-full overflow-x-auto" id="image">
        <div className="w-full rounded-lg overflow-hidden">
          <img src={creative.creative} alt="creative" className="block w-full object-cover aspect-square" />
        </div>
      </div>
      <div id="headline" className="rounded-b-2xl bg-zinc-100/70 flex items-center justify-between pl-5 pr-4 py-3 mt-5 -mx-3">
        <div className="flex flex-col max-w-[12.5rem] overflow-hidden text-ellipsis">
          <span className="text-[0.69rem] text-foreground mt-0.5 leading-tight">{creative.headline}</span>
        </div>
        <button disabled className="text-[0.69rem] text-foreground text-ellipsis whitespace-nowrap overflow-hidden font-medium h-7 w-20 border border-gray-400 rounded-[0.325rem] pt-0.5 px-2">
          {creative.cta.split("_").map(upperFirst).join(" ")}
        </button>
      </div>
    </div>
  );
}
