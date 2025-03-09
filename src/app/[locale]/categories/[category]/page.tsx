"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronDown,
  Grid2X2,
  Heart,
  List,
  ShoppingCart,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useMemo } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  isNew?: boolean;
  oldPrice?: number;
}

const sortFunctions = {
  popular: (a: Product, b: Product) => a.id - b.id,
  priceAsc: (a: Product, b: Product) => a.price - b.price,
  priceDesc: (a: Product, b: Product) => b.price - a.price,
  discount: (a: Product, b: Product) => {
    const discountA = a.oldPrice ? (a.oldPrice - a.price) / a.oldPrice : 0;
    const discountB = b.oldPrice ? (b.oldPrice - b.price) / b.oldPrice : 0;
    return discountB - discountA;
  },
  new: (a: Product, b: Product) => {
    if (a.isNew === b.isNew) return 0;
    return a.isNew ? -1 : 1;
  },
} as const;

type SortOption = {
  label: string;
  value: keyof typeof sortFunctions;
};

const sortOptions: SortOption[] = [
  { label: "По популярности", value: "popular" },
  { label: "Сначала дешевые", value: "priceAsc" },
  { label: "Сначала дорогие", value: "priceDesc" },
  { label: "По скидке", value: "discount" },
  { label: "Новинки", value: "new" },
];

const Page = () => {
  const params = useParams();
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [currentSort, setCurrentSort] = useState<SortOption>(sortOptions[0]);

  // Моковые данные
  const initialProducts = useMemo<Product[]>(
    () => [
      {
        id: 1,
        title: "iPhone 15 Pro Max 256GB",
        price: 74999,
        oldPrice: 79999,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=1200&hei=1200&fmt=jpeg&qlt=95",
        isNew: true,
      },
      {
        id: 2,
        title: "MacBook Air 15' M2",
        price: 104999,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=1200&hei=1200&fmt=jpeg&qlt=95",
      },
      {
        id: 3,
        title: "Apple Watch Series 9 45mm",
        price: 32999,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-41mm-aluminum-midnight-cell-midnight-sport-band-202309?wid=1200&hei=1200&fmt=jpeg&qlt=95",
        isNew: true,
      },
      {
        id: 4,
        title: "AirPods Pro 2",
        price: 12999,
        oldPrice: 14999,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1200&hei=1200&fmt=jpeg&qlt=95",
      },
      {
        id: 5,
        title: "iPad Pro 12.9' M2",
        price: 89999,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-select-cell-spacegray-202210?wid=1200&hei=1200&fmt=jpeg&qlt=95",
      },
    ],
    [],
  );

  const products = useMemo(() => {
    return [...initialProducts].sort(sortFunctions[currentSort.value]);
  }, [initialProducts, currentSort]);

  const formatPrice = (price: number) => {
    return price.toLocaleString("uk-UA") + " ₴";
  };

  const categories = {
    phones: "Смартфоны",
    laptops: "Ноутбуки",
    tablets: "Планшеты",
    watches: "Смарт-часы",
    accessories: "Аксессуары",
    headphones: "Наушники",
    cameras: "Камеры",
    monitors: "Мониторы",
    smartphones: "Смартфоны",
  };

  const filters = [
    {
      name: "Бренд",
      options: ["Apple", "Samsung", "Xiaomi", "Google"],
    },
    {
      name: "Цена",
      options: ["До 20 000 ₴", "20 000 ₴ - 50 000 ₴", "От 50 000 ₴"],
    },
    {
      name: "Память",
      options: ["128 ГБ", "256 ГБ", "512 ГБ", "1 ТБ"],
    },
  ];

  return (
    <div className="ml-[266px] min-h-screen">
      <div className="mx-auto max-w-7xl p-6">
        {/* Хедер категории */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">
            {categories[params.category as keyof typeof categories]}
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            {products.length}{" "}
            {products.length === 1
              ? "товар"
              : products.length >= 5
                ? "товаров"
                : "товара"}
          </p>
        </div>

        {/* Панель управления */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="gap-2 border-zinc-700/50 bg-zinc-800 hover:bg-zinc-700"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Фильтры
            </Button>

            <div className="flex items-center gap-2 rounded-lg border border-zinc-700/50 bg-zinc-800 p-1">
              <Button
                variant={viewType === "grid" ? "secondary" : "ghost"}
                size="icon"
                className="h-8 w-8"
                onClick={() => setViewType("grid")}
              >
                <Grid2X2 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewType === "list" ? "secondary" : "ghost"}
                size="icon"
                className="h-8 w-8"
                onClick={() => setViewType("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Button
              variant="outline"
              className="gap-2 border-zinc-700/50 bg-zinc-800 hover:bg-zinc-700"
              onClick={() => setShowSort(!showSort)}
            >
              {currentSort.label}
              <ChevronDown className="h-4 w-4" />
            </Button>

            {showSort && (
              <div className="absolute top-full right-0 z-10 mt-2 min-w-[200px] rounded-lg border border-zinc-700/50 bg-zinc-800 py-1 shadow-xl">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-zinc-700 ${
                      currentSort.value === option.value
                        ? "bg-zinc-700/50 text-sky-400"
                        : "text-zinc-300"
                    }`}
                    onClick={() => {
                      setCurrentSort(option);
                      setShowSort(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Фильтры */}
          {showFilters && (
            <div className="space-y-6 lg:block">
              {filters.map((filter) => (
                <div key={filter.name}>
                  <h3 className="mb-3 text-sm font-medium">{filter.name}</h3>
                  <div className="space-y-2">
                    {filter.options.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-zinc-700 bg-zinc-800 text-sky-500"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Список товаров */}
          <div className={showFilters ? "lg:col-span-3" : "lg:col-span-4"}>
            <div
              className={
                viewType === "grid"
                  ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  : "space-y-4"
              }
            >
              {products.map((product) => (
                <Card
                  key={product.id}
                  className={`group overflow-hidden border-zinc-700/50 bg-zinc-800/50 transition-colors hover:bg-zinc-800 ${
                    viewType === "list" ? "flex gap-6" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      viewType === "list"
                        ? "aspect-square w-48 shrink-0"
                        : "aspect-square w-full"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.isNew && (
                      <div className="absolute top-2 left-2 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-medium">
                        Новинка
                      </div>
                    )}
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute top-2 right-2 h-8 w-8 border-zinc-700/50 bg-zinc-800/90 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-zinc-700 hover:text-rose-500"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="p-4">
                    <h3 className="line-clamp-2 font-medium text-zinc-100">
                      {product.title}
                    </h3>

                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-lg font-semibold">
                        {formatPrice(product.price)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-zinc-400 line-through">
                          {formatPrice(product.oldPrice)}
                        </span>
                      )}
                    </div>

                    <Button className="mt-4 w-full gap-2 bg-sky-500 hover:bg-sky-600">
                      <ShoppingCart className="h-4 w-4" />В корзину
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
