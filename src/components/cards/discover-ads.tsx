import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DiscoverAdsCardProps } from "@/constants/creatives";
import { cn, upperFirst } from "@/lib/utils";

export function DiscoverAdsCard({ profile_picture, name, media, content, className }: DiscoverAdsCardProps) {
  return (
    <div className={cn("border bg-white border-gray-200 rounded-2xl py-4 px-3 max-w-sm", className)}>
      <div className="flex items-center" id="header">
        <img src={profile_picture} alt="logo" height={42} width={42} className="object-cover border rounded-full aspect-square block bg-white" />
        <p className="text-sm font-semibold text-foreground ml-2 mr-8">{name}</p>
      </div>
      <div className="mt-3 rounded-xl flex flex-col" id="image">
        {media.length > 1 ? (
          <Carousel className="w-full" opts={{ dragFree: false, slidesToScroll: 1 }}>
            <CarouselContent className="items-start">
              {media.map((item, index) => (
                <CarouselItem key={index}>
                  <img src={item} alt="" className="rounded-t-xl w-full h-auto block object-cover" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1" />
            <CarouselNext className="-right-1" />
          </Carousel>
        ) : (
          <div className="w-full">
            <img src={media[0]} alt="" className="rounded-t-xl w-full h-auto block object-cover" />
          </div>
        )}
        <div className="rounded-b-2xl flex items-center justify-between px-4 pt-1.5 pb-2 bg-black">
          <a href={content.url || "#"} target="__blank">
            <span className="text-xs text-white">{content.cta.split("_").map(upperFirst).join(" ")}</span>
          </a>
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
            <path d="M1 8L3.7559 5.11869C4.08137 4.77841 4.08137 4.22159 3.7559 3.88131L1 1" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <ActionBar />
      <div id="caption" className="px-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <p className={cn("text-sm text-black/70 mt-3.5 whitespace-pre-line cursor-pointer line-clamp-4")}>
              <span dangerouslySetInnerHTML={{ __html: content.body }} />
            </p>
          </TooltipTrigger>
          <TooltipContent className="max-w-sm">
            <TooltipArrow />
            <span dangerouslySetInnerHTML={{ __html: content.body }} />
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

function ActionBar() {
  return (
    <div id="actions" className="flex items-center justify-between mt-2 px-1">
      <div className="flex items-center space-x-2.5">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.27746 3.30971C5.51313 3.30971 4.75946 3.52521 4.09182 3.93386C2.02549 5.20042 1.2983 8.02812 2.49851 10.2349C2.72308 10.6481 3.12528 11.1444 3.6417 11.6821C4.15526 12.2168 4.76997 12.7805 5.40794 13.3283C6.68375 14.4238 8.04133 15.4464 8.84348 16.0337L8.8437 16.0339C9.03589 16.1749 9.26167 16.2488 9.49891 16.2488C9.73563 16.2488 9.96191 16.1752 10.1583 16.0333C10.9605 15.4459 12.3177 14.4235 13.5932 13.3283C14.2312 12.7805 14.8459 12.2168 15.3594 11.6821C15.8759 11.1444 16.278 10.6482 16.5026 10.235C17.6996 8.02806 16.9722 5.20027 14.9059 3.93378C14.2383 3.52518 13.4846 3.30971 12.7204 3.30971C11.5752 3.30971 10.4973 3.77183 9.6869 4.59946L9.49891 4.79145L9.31091 4.59946C8.50053 3.77183 7.42265 3.30971 6.27746 3.30971ZM3.81622 3.49559C4.56401 3.03788 5.41272 2.79395 6.27746 2.79395C7.4818 2.79395 8.61696 3.24801 9.49891 4.05891C10.3809 3.24801 11.516 2.79395 12.7204 2.79395C13.5851 2.79395 14.4338 3.03788 15.1816 3.49559C17.495 4.91347 18.2834 8.04515 16.9634 10.4785C16.7056 10.9529 16.2652 11.489 15.7389 12.0369C15.2098 12.5878 14.5816 13.1633 13.9364 13.7173C12.6459 14.8254 11.2761 15.8571 10.4692 16.4479L10.468 16.4488C10.1838 16.6544 9.8495 16.7645 9.49891 16.7645C9.1486 16.7645 8.81355 16.6546 8.53171 16.4478C7.72477 15.8569 6.35511 14.8253 5.06473 13.7173C4.41955 13.1633 3.79138 12.5878 3.26224 12.0369C2.736 11.489 2.29567 10.9531 2.03786 10.4787M3.81622 3.49559C1.50284 4.91346 0.714405 8.04529 2.03786 10.4787L3.81622 3.49559ZM4.34712 4.32906C4.93449 3.96994 5.59953 3.77844 6.27746 3.77844C7.46669 3.77844 8.56691 4.34603 9.30733 5.31885L9.30808 5.31984L9.49891 5.57308L9.68973 5.31984L9.69048 5.31885C10.431 4.34592 11.5346 3.77844 12.7204 3.77844C13.3981 3.77844 14.0633 3.96983 14.6477 4.32929C16.5252 5.47902 17.1543 8.0305 16.0753 10.0128C15.8335 10.457 15.3927 10.9756 14.867 11.5079C14.3373 12.0443 13.7058 12.61 13.0677 13.1493C11.7913 14.228 10.4764 15.2108 9.86856 15.6569L9.86725 15.6578C9.64834 15.8164 9.34614 15.8164 9.12723 15.6578L9.12628 15.6571C8.51821 15.2125 7.20323 14.2305 5.92673 13.1517C5.2886 12.6125 4.65716 12.0465 4.12742 11.5097C3.60177 10.977 3.16097 10.4579 2.91921 10.0128M4.62274 4.76732C2.9948 5.7673 2.42263 8.01038 3.37977 9.76881C3.58537 10.1474 3.98337 10.6244 4.502 11.1499C5.01662 11.6714 5.63515 12.2262 6.26682 12.76C7.52946 13.8271 8.83287 14.8006 9.43689 15.2423C9.47148 15.2671 9.52254 15.2672 9.55724 15.2425C10.1616 14.799 11.465 13.8246 12.7277 12.7576C13.3593 12.2237 13.9779 11.6691 14.4925 11.148C15.0112 10.6228 15.4091 10.1466 15.6147 9.76884C16.572 8.01012 15.9994 5.76393 14.3718 4.76738L14.3714 4.7671C13.8676 4.45719 13.2977 4.29421 12.7204 4.29421C11.7097 4.29421 10.7571 4.77668 10.1089 5.62804C10.1088 5.62821 10.1086 5.62838 10.1085 5.62855L9.49891 6.43757L8.88929 5.62855C8.88916 5.62837 8.88902 5.62818 8.88888 5.628C8.24058 4.77655 7.29129 4.29421 6.27746 4.29421C5.7003 4.29421 5.13026 4.45708 4.62274 4.76732ZM4.34712 4.32906L4.34667 4.32934L4.34712 4.32906ZM4.34667 4.32934C2.4696 5.48217 1.84012 8.03024 2.91921 10.0128L4.34667 4.32934Z"
            fill="#333333"
          />
          <path
            d="M9.49881 16.4855C9.20572 16.4855 8.92596 16.3939 8.68949 16.2205C7.08419 15.0462 3.24744 12.125 2.28492 10.3553C1.02599 8.04262 1.78202 5.07241 3.96683 3.73451C4.6729 3.30271 5.47222 3.07373 6.28486 3.07373C7.5005 3.07373 8.64286 3.5644 9.49881 4.4378C10.3547 3.5644 11.4971 3.07373 12.7127 3.07373C13.5254 3.07373 14.3247 3.30271 15.0308 3.73451C17.2156 5.07241 17.9716 8.04262 16.716 10.3553C15.7535 12.125 11.9168 15.0462 10.3114 16.2205C10.0717 16.3939 9.79189 16.4855 9.49881 16.4855ZM6.28486 4.05508C5.65873 4.05508 5.04258 4.23172 4.49638 4.56538C2.74786 5.63832 2.14837 8.02627 3.16418 9.89083C4.05675 11.533 8.07335 14.549 9.28232 15.4322C9.40888 15.5238 9.5854 15.5238 9.71196 15.4322C10.9209 14.5457 14.9375 11.5297 15.8301 9.89083C16.8459 8.02627 16.2464 5.63505 14.4979 4.56538C13.955 4.23172 13.3389 4.05508 12.7127 4.05508C11.617 4.05508 10.5912 4.57846 9.89847 5.48785L9.49881 6.01778L9.09914 5.48785C8.4064 4.57846 7.38393 4.05508 6.28486 4.05508Z"
            fill="#333333"
          />
        </svg>
        <svg width="19" height="19" viewBox="0 0 20 19" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.3576 16.7511L16.504 13.5675C16.455 13.389 16.4795 13.1966 16.5634 13.0287C17.3086 11.5348 17.557 9.75053 17.0987 7.8893C16.476 5.37034 14.5098 3.34818 11.9978 2.67995C11.3121 2.50153 10.6369 2.41406 9.98266 2.41406C5.2876 2.41406 1.62111 6.81874 2.88759 11.7202C3.47535 13.9873 5.89635 16.3348 8.17391 16.8876C8.78965 17.038 9.3949 17.108 9.98266 17.108C11.2456 17.108 12.4282 16.7826 13.4672 16.2229C13.5827 16.1599 13.7121 16.1249 13.8381 16.1249C13.901 16.1249 13.964 16.1319 14.027 16.1494L17.1267 16.9785C17.1442 16.982 17.1617 16.9855 17.1757 16.9855C17.2946 16.9855 17.3891 16.8736 17.3576 16.7511ZM15.5244 13.8298L16.0072 15.6316L14.2894 15.1733C14.1424 15.1348 13.992 15.1138 13.8381 15.1138C13.5442 15.1138 13.2468 15.1908 12.9809 15.3342C12.0468 15.838 11.0392 16.0934 9.98266 16.0934C9.46138 16.0934 8.93309 16.0269 8.41181 15.901C6.48411 15.4322 4.36048 13.361 3.87068 11.4648C3.3599 9.48464 3.76223 7.45198 4.97273 5.88813C6.18323 4.32427 8.00948 3.42864 9.98266 3.42864C10.5634 3.42864 11.1547 3.50561 11.7389 3.66305C13.8975 4.23681 15.5733 5.9511 16.1156 8.1342C16.497 9.67356 16.3395 11.2094 15.6573 12.5774C15.4614 12.9692 15.4124 13.4135 15.5244 13.8298Z"
            fill="#333333"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.16092 11.6496C1.94156 6.93028 5.46843 2.69562 9.98331 2.69562C10.6121 2.69562 11.2633 2.77965 11.9268 2.95223C14.338 3.59392 16.2277 5.5367 16.826 7.9568C17.268 9.75218 17.0278 11.4679 16.3122 12.9026C16.2003 13.1264 16.164 13.3897 16.2328 13.6411C16.2329 13.6413 16.2329 13.6416 16.233 13.6419L17.0435 16.6645L14.103 15.8779C14.1026 15.8778 14.1021 15.8777 14.1016 15.8775C14.0107 15.8524 13.9224 15.8432 13.8387 15.8432C13.6621 15.8432 13.4868 15.8917 13.3336 15.9752C12.3335 16.5139 11.1968 16.8263 9.98331 16.8263C9.41804 16.8263 8.83524 16.759 8.24141 16.6139L8.24099 16.6138C7.1634 16.3523 6.03173 15.659 5.09435 14.745C4.15689 13.831 3.43857 12.7204 3.16092 11.6496ZM9.98331 3.7102C8.09736 3.7102 6.35332 4.56542 5.1961 6.06043C4.04093 7.55281 3.65419 9.49519 4.14404 11.3943C4.37229 12.278 4.99059 13.2268 5.79945 14.0166C6.608 14.806 7.57787 15.408 8.47887 15.6272C8.97997 15.7482 9.48595 15.8117 9.98331 15.8117C10.9929 15.8117 11.9546 15.568 12.8479 15.0862C13.1532 14.9215 13.4964 14.8321 13.8387 14.8321C14.0185 14.8321 14.193 14.8566 14.3614 14.9007L14.3626 14.9011L15.6097 15.2338L15.253 13.9029C15.1225 13.4175 15.1805 12.9025 15.4061 12.4513C16.057 11.146 16.2088 9.6791 15.8429 8.202C15.3251 6.1174 13.7255 4.48224 11.6672 3.93515L11.6663 3.9349C11.1058 3.78388 10.5392 3.7102 9.98331 3.7102Z"
            fill="#333333"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.98331 2.13232C5.1081 2.13232 1.30201 6.70697 2.61555 11.7906C2.92569 12.9868 3.71178 14.1837 4.70111 15.1483C5.69044 16.113 6.90788 16.8698 8.10772 17.1611C8.74538 17.3169 9.37307 17.3895 9.98331 17.3895C11.2955 17.3895 12.5236 17.0514 13.6015 16.4707L13.6027 16.47C13.6803 16.4277 13.7637 16.4065 13.8387 16.4065C13.8806 16.4065 13.9177 16.4111 13.9523 16.4207L17.0633 17.2529L17.0721 17.2546L17.0746 17.2551C17.0874 17.2578 17.132 17.2671 17.1763 17.2671C17.4707 17.2671 17.7105 16.9898 17.6311 16.6809L16.7767 13.4944L16.7762 13.4928C16.7473 13.3876 16.7602 13.2662 16.8161 13.1543C17.5908 11.6014 17.8473 9.74851 17.3728 7.82161C16.7257 5.20403 14.6833 3.10262 12.0709 2.40768L12.0694 2.40729C11.3618 2.22316 10.6627 2.13232 9.98331 2.13232ZM9.98331 2.69562C5.46843 2.69562 1.94156 6.93028 3.16092 11.6496C3.43857 12.7204 4.15689 13.831 5.09435 14.745C6.03173 15.659 7.1634 16.3523 8.24099 16.6138L8.24141 16.6139C8.83524 16.759 9.41804 16.8263 9.98331 16.8263C11.1968 16.8263 12.3335 16.5139 13.3336 15.9752C13.4868 15.8917 13.6621 15.8432 13.8387 15.8432C13.9224 15.8432 14.0107 15.8524 14.1016 15.8775L14.103 15.8779L17.0435 16.6645L16.233 13.6419L16.2328 13.6411C16.164 13.3897 16.2003 13.1264 16.3122 12.9026C17.0278 11.4679 17.268 9.75218 16.826 7.9568C16.2277 5.5367 14.338 3.59392 11.9268 2.95223C11.2633 2.77965 10.6121 2.69562 9.98331 2.69562Z"
            fill="#333333"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4769 3.13809C17.3096 2.84397 16.9947 2.67383 16.6639 2.67383L2.34105 2.68423C1.94217 2.68427 1.59635 2.93062 1.45811 3.29768L1.45798 3.29803C1.35845 3.56342 1.38077 3.85294 1.51742 4.09208L1.51933 4.09542L1.52133 4.0987C1.57276 4.18285 1.63806 4.26212 1.71716 4.33191L7.16892 9.03325L8.49773 16.0917L8.49782 16.0922C8.57043 16.4832 8.87316 16.7745 9.26559 16.8367C9.654 16.8988 10.0363 16.7159 10.2359 16.3785L10.2363 16.3779L17.472 4.0779L17.3112 3.79858C17.3112 3.79847 17.3113 3.79836 17.3113 3.79824L17.4721 4.07759C17.6445 3.7853 17.6455 3.42815 17.4769 3.13809ZM16.8253 2.95428L16.6639 2.67383L16.8253 2.95426C16.8253 2.95427 16.8253 2.95427 16.8253 2.95428ZM7.98817 7.66363L4.01953 4.2378H13.9915L7.98817 7.66363ZM9.72964 14.1521L8.76223 9.01242L14.7774 5.58198L9.72964 14.1521Z"
            fill="#333333"
          />
        </svg>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path
            d="M15.3755 1.92432H3.58988C3.12687 1.92432 2.74805 2.26552 2.74805 2.68722V17.4623C2.74805 17.884 3.02164 17.9914 3.36258 17.6962L9.14177 12.7047C9.27646 12.5897 9.49955 12.5897 9.63424 12.7009L15.5986 17.7077C15.9396 17.9952 16.2174 17.884 16.2174 17.4623V2.68722C16.2174 2.26552 15.8428 1.92432 15.3755 1.92432ZM14.9546 15.6068L10.4887 11.8575C10.1772 11.5968 9.78577 11.4664 9.39011 11.4664C8.98603 11.4664 8.58616 11.6006 8.27468 11.869L4.0108 15.5531V3.07443H14.9546V15.6068Z"
            fill="#333333"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.47461 2.67917C2.47461 2.08217 3.00077 1.64941 3.58039 1.64941H15.3879C15.9727 1.64941 16.4937 2.08298 16.4937 2.67917V17.4702C16.4937 17.7222 16.4088 18.0022 16.1452 18.1069C15.8968 18.2056 15.6384 18.0844 15.4439 17.9205C15.4438 17.9205 15.4439 17.9205 15.4439 17.9205L9.47039 12.9099C9.47021 12.9098 9.47003 12.9096 9.46985 12.9095C9.43145 12.8785 9.34939 12.8791 9.31189 12.9106C9.31177 12.9107 9.31165 12.9109 9.31153 12.911L3.523 17.9066C3.33113 18.0726 3.07394 18.2011 2.82384 18.1051C2.55688 18.0026 2.47461 17.7191 2.47461 17.4702V2.67917ZM3.58039 2.18146C3.23228 2.18146 2.99939 2.43184 2.99939 2.67917V17.4702C2.99939 17.5398 3.00963 17.5815 3.018 17.6028C3.0213 17.6019 3.02512 17.6008 3.0295 17.5993C3.06243 17.5882 3.11457 17.5605 3.18236 17.5019L8.9725 12.5048L8.97363 12.5039C9.20602 12.3056 9.56996 12.3062 9.80155 12.4972L9.80324 12.4986L15.7791 17.5112C15.8462 17.5677 15.8978 17.5939 15.9305 17.6042C15.9375 17.6065 15.9431 17.6078 15.9475 17.6086C15.9565 17.589 15.9689 17.546 15.9689 17.4702V2.67917C15.9689 2.43103 15.7394 2.18146 15.3879 2.18146H3.58039ZM15.9601 17.6097C15.9601 17.6097 15.9599 17.6098 15.9594 17.6098L15.9601 17.6097ZM3.00113 17.6054C3.00114 17.6053 3.00137 17.6053 3.00184 17.6054L3.00113 17.6054ZM3.7397 2.80076H15.2286V16.178L10.325 12.0645C10.325 12.0644 10.3251 12.0645 10.325 12.0645C10.0636 11.8459 9.7316 11.7338 9.39138 11.7338C9.04263 11.7338 8.70387 11.8496 8.44372 12.0735L3.7397 16.1349V2.80076ZM4.26448 3.33281V14.983L8.10405 11.668C8.46802 11.3546 8.93048 11.2018 9.39138 11.2018C9.84388 11.2018 10.2963 11.3507 10.659 11.654L10.6593 11.6543L14.7038 15.0472V3.33281H4.26448Z"
            fill="#333333"
          />
        </svg>
      </div>
    </div>
  );
}