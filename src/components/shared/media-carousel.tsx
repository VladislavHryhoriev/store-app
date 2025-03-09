"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MEDIA } from "@/constants/media";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const MediaCarousel = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "overflow-hidden rounded-md")}>
      <Carousel plugins={[Autoplay({ delay: 6000 })]} opts={{ loop: true }}>
        <CarouselContent className="min-h-max">
          {MEDIA.map((item) => (
            <CarouselItem key={item.id}>
              <Image
                src={item.image}
                width={3150}
                height={1470}
                alt="item"
                className="rounded-md object-cover"
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
    </div>
  );
};

export default MediaCarousel;
