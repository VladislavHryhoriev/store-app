"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MEDIA } from "@/constants/media";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const LeadersCarousel = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Carousel plugins={[Autoplay({ delay: 3000 })]} opts={{ loop: true }}>
        <CarouselContent className="min-h-max">
          {MEDIA.map((item) => (
            <CarouselItem key={item.id} className="flex basis-1/4">
              <Image
                src={item.image}
                width={3150}
                height={1470}
                alt="item"
                className="object-cover"
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

export default LeadersCarousel;
