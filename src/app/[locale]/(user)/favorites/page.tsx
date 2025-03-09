"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2, ArrowUpDown, Filter } from "lucide-react";
import Image from "next/image";

const FavoritesPage = () => {
  const favorites = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      price: 74999,
      oldPrice: 82999,
      image: "/products/iphone.jpg",
      inStock: true,
    },
    {
      id: 2,
      title: "MacBook Air M2",
      price: 104999,
      image: "/products/macbook.jpg",
      inStock: true,
    },
    {
      id: 3,
      title: "Apple Watch Series 9",
      price: 32999,
      image: "/products/watch.jpg",
      inStock: false,
    },
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString("uk-UA") + " ₴";
  };

  return (
    <div className="ml-[266px] min-h-screen">
      <div className="mx-auto max-w-7xl space-y-6 p-6">
        {/* Хедер */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="group relative rounded-lg bg-zinc-800 p-3">
                <Heart className="h-6 w-6 text-sky-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Избранное</h1>
              <p className="mt-1 text-sm text-zinc-400">
                {favorites.length} товаров
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-lg border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
            >
              <Filter className="h-4 w-4" />
              Фильтры
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-lg border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
            >
              <ArrowUpDown className="h-4 w-4" />
              Сортировка
            </Button>
          </div>
        </div>

        {/* Сетка товаров */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((item) => (
            <Card
              key={item.id}
              className="group relative overflow-hidden border-zinc-700/50 bg-zinc-800 p-4"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 flex justify-end gap-2 bg-gradient-to-t from-zinc-900/80 to-transparent p-4">
                  <Button
                    size="icon"
                    variant="outline"
                    className="size-8 rounded-lg border-zinc-700/50 bg-zinc-900/90 shadow-lg backdrop-blur-sm transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-red-400 hover:shadow-xl"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="size-8 rounded-lg border-zinc-700/50 bg-zinc-900/90 shadow-lg backdrop-blur-sm transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-sky-400 hover:shadow-xl"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-medium text-zinc-100">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-medium text-zinc-100">
                    {formatPrice(item.price)}
                  </span>
                  {item.oldPrice && (
                    <span className="text-sm text-zinc-500 line-through">
                      {formatPrice(item.oldPrice)}
                    </span>
                  )}
                </div>
                <div className="mt-1">
                  {item.inStock ? (
                    <span className="text-sm text-emerald-400">В наличии</span>
                  ) : (
                    <span className="text-sm text-zinc-500">Нет в наличии</span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button
                  className="w-full gap-2 bg-sky-500 hover:bg-sky-600"
                  disabled={!item.inStock}
                >
                  <ShoppingCart />В корзину
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-lg border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:text-red-400"
                >
                  <Trash2 />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
