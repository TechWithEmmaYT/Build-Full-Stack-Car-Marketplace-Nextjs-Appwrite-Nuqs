import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { CameraIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

const CarCarousel = ({
  imageUrls = [],
  isPending,
}: {
  imageUrls: string[];
  isPending: boolean;
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [activeThumbnailIndex, setActiveThumbnailIndex] = React.useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setActiveThumbnailIndex(() => {
        const selectedIndex = api.selectedScrollSnap();
        return selectedIndex < visibleThumbnails.length - 1
          ? selectedIndex
          : visibleThumbnails.length - 1;
      });
    });
  }, [api]);

  const visibleThumbnails = imageUrls?.slice(0, 5);
  const remainingThumbnailsCount = Math.max(0, imageUrls?.length - 5);

  return (
    <div className="w-full h-auto">
      <div
        className="relative w-full rounded-[8px]
            min-h-[300px] md:min-h-[450px] lg:min-h-[605px]
            before:block before:content-['']
            before:absolute before:top-[-6px]
            before:left-0 before:w-full
            before:h-[15px] before:rounded-[8px_8px_0_0]
            before:bg-[#00b53f] before:z-0
            "
      >
        {isPending ? (
          <div>
            <Skeleton
              className="rounded-b-none h-[300px]
             md:h-[450px] lg:h-[605px]
            "
            />
          </div>
        ) : (
          <Carousel className="b-carousel-slider" setApi={setApi}>
            <CarouselContent
              className="
            !p-0 bg-primary/10
            "
            >
              {imageUrls?.map((imageUrl, index) => (
                <CarouselItem key={index} className="!p-0 h-full">
                  <div
                    className="relative rounded-lg overflow-hidden
                      h-[300px] md:h-[450px] lg:h-[605px]
                      "
                  >
                    <Image
                      src={imageUrl}
                      className="w-full h-full !rounded-tl-lg
                    !rounded-tr-lg object-cover
                    "
                      width={800}
                      height={620}
                      alt=""
                      style={{
                        boxShadow: "0 7px 14.8px 3.2px #0207010a",
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div
              className="b-carousel-counter absolute bottom-[20px]
                          left-[30px] flex justify-center
                          items-center bg-[#0006]
                          rounded-[4px] text-[#f2f2f2]
                          text-[14px] p-[4px_11px] gap-1
                          "
            >
              <CameraIcon className="!w-4 !h-4" />
              <div>
                {current}/{count}
              </div>
            </div>
            <CarouselPrevious
              className="carousel--navigation left-2 md:left-8
           !bg-transparent !border-0 text-white !p-0"
            />

            <CarouselNext
              className="carousel--navigation right-2 md:right-8
           !bg-transparent !border-0 text-white !p-0"
            />
          </Carousel>
        )}

        <div className="relative w-full flex overflow-hidden">
          {isPending ? (
            <div
              className="w-full flex gap-2 items-center 
               justify-between md:justify-start"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-[calc(50%-4px)] 
                  sm:w-[calc(33%-4px)] md:w-[35%] h-auto
                    m-1 mx-0
                  "
                />
              ))}
            </div>
          ) : (
            <div
              className="-ml-1 md:-ml-5 -mr-1 md:-mr-5
              flex items-center justify-between md:justify-start
              "
            >
              {visibleThumbnails?.map((imageUrl, index) => (
                <button
                  key={index}
                  className={` relative w-[calc(50%-4px)] 
                  sm:w-[calc(33%-4px)] md:w-[25%] h-auto
                    m-1 md:m-2 mx-1 overflow-hidden
                     bg-[#f6f6f6]
                   ${
                     activeThumbnailIndex === index
                       ? "ring-2 ring-primary"
                       : "hover:opacity-80 transition-opacity"
                   }
                   
                     `}
                  onClick={() => {
                    api?.scrollTo(index);
                    setActiveThumbnailIndex(index);
                  }}
                >
                  <Image
                    src={imageUrl}
                    className="!w-full !h-full object-cover"
                    width={185}
                    height={185}
                    priority
                    alt=""
                  />

                  {index === 4 && remainingThumbnailsCount > 0 && (
                    <div
                      className="
                     absolute inset-0 bg-black/50
                     rounded-lg flex flex-col justify-center
                     items-center text-white text-sm
                     font-medium leading-[2px]
                    "
                    >
                      <p>
                        +{" "}
                        <span className="!text-4xl">
                          {remainingThumbnailsCount}
                        </span>
                      </p>
                      <p>images</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCarousel;
