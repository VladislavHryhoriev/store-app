"use client";
import LeadersCarousel from "@/components/shared/leaders-carousel";
import MediaCarousel from "@/components/shared/media-carousel";

export default function HomePage() {
  return (
    <div>
      <MediaCarousel className="ml-[266px]" />
      <div className="mt-24">
        <h2 className="text-2xl font-bold">Лидеры продаж</h2>
        <LeadersCarousel className="mt-4" />
      </div>
    </div>
  );
}
