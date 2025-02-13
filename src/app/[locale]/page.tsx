"use client";
import MediaCarousel from "@/components/shared/carousel";
import { CATEGORIES } from "@/constants/header/categories";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("Aside");
  return (
    <div>
      <ul className="relative mb-4 flex w-full max-w-[900px] gap-4 overflow-x-auto scroll-smooth">
        {CATEGORIES.map((category) => (
          <li
            key={category.id}
            className="flex items-center bg-zinc-800 p-2 text-xs hover:bg-zinc-700"
          >
            <Link href={category.href} className="flex items-center gap-2">
              <category.icon />
              {t(category.category)}
            </Link>
          </li>
        ))}
      </ul>
      <MediaCarousel />
    </div>
  );
}
