"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Laptop,
  Smartphone,
  Watch,
  Tablet,
  Headphones,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Category {
  id: number;
  title: string;
  slug: string;
  icon: React.ReactNode;
  image: string;
  subcategories: {
    title: string;
    slug: string;
  }[];
  featured?: {
    title: string;
    price: number;
    image: string;
  };
}

const categories: Category[] = [
  {
    id: 1,
    title: "Смартфоны",
    slug: "phones",
    icon: <Smartphone className="h-6 w-6" />,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-lineup-selection-202309?wid=1200&hei=630&fmt=jpeg&qlt=95",
    subcategories: [
      { title: "Apple iPhone", slug: "apple-iphone" },
      { title: "Samsung Galaxy", slug: "samsung-galaxy" },
      { title: "Google Pixel", slug: "google-pixel" },
      { title: "Xiaomi", slug: "xiaomi" },
    ],
    featured: {
      title: "iPhone 15 Pro Max",
      price: 74999,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=1200&hei=1200&fmt=jpeg&qlt=95",
    },
  },
  {
    id: 2,
    title: "Ноутбуки",
    slug: "laptops",
    icon: <Laptop className="h-6 w-6" />,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95",
    subcategories: [
      { title: "Apple MacBook", slug: "apple-macbook" },
      { title: "Игровые ноутбуки", slug: "gaming-laptops" },
      { title: "Для работы", slug: "work-laptops" },
      { title: "Ультрабуки", slug: "ultrabooks" },
    ],
    featured: {
      title: "MacBook Air M2",
      price: 104999,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=1200&hei=1200&fmt=jpeg&qlt=95",
    },
  },
  {
    id: 3,
    title: "Планшеты",
    slug: "tablets",
    icon: <Tablet className="h-6 w-6" />,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202212?wid=1200&hei=630&fmt=jpeg&qlt=95",
    subcategories: [
      { title: "Apple iPad", slug: "apple-ipad" },
      { title: "Samsung Galaxy Tab", slug: "samsung-galaxy-tab" },
      { title: "Планшеты Xiaomi", slug: "xiaomi-tablets" },
    ],
  },
  {
    id: 4,
    title: "Смарт-часы",
    slug: "watches",
    icon: <Watch className="h-6 w-6" />,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s9-202309?wid=1200&hei=630&fmt=jpeg&qlt=95",
    subcategories: [
      { title: "Apple Watch", slug: "apple-watch" },
      { title: "Samsung Galaxy Watch", slug: "samsung-galaxy-watch" },
      { title: "Фитнес-браслеты", slug: "fitness-bands" },
    ],
  },
  {
    id: 5,
    title: "Наушники",
    slug: "headphones",
    icon: <Headphones className="h-6 w-6" />,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202009?wid=1200&hei=630&fmt=jpeg&qlt=95",
    subcategories: [
      { title: "TWS-наушники", slug: "tws" },
      { title: "Накладные", slug: "over-ear" },
      { title: "Для спорта", slug: "sport" },
    ],
  },
];

const Page = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const formatPrice = (price: number) => {
    return price.toLocaleString("uk-UA") + " ₴";
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl p-6">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">Каталог</h1>

        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group relative overflow-hidden border-zinc-700/50 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-sky-500/10"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative aspect-[2/1] w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>

              <div className="absolute inset-0 flex items-end p-6">
                <div className="relative z-10 w-full">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-zinc-800/90 p-2 backdrop-blur-sm">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {category.title}
                    </h2>
                  </div>

                  <div
                    className={`grid gap-6 transition-all duration-300 ${
                      hoveredCategory === category.id
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/categories/${category.slug}/${sub.slug}`}
                            className="rounded-lg bg-zinc-800/90 px-3 py-1.5 text-sm backdrop-blur-sm transition-colors hover:bg-zinc-700"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>

                      {category.featured && (
                        <div className="mt-6 flex items-center gap-4">
                          <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-zinc-800">
                            <Image
                              src={category.featured.image}
                              alt={category.featured.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-zinc-400">
                              Популярный товар
                            </div>
                            <div className="font-medium">
                              {category.featured.title}
                            </div>
                            <div className="text-sm text-sky-400">
                              {formatPrice(category.featured.price)}
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="ml-auto shrink-0 border-zinc-700/50 bg-zinc-800/90"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
