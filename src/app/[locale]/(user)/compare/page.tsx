"use client";

import { Button } from "@/components/ui/button";
import { Scale, X } from "lucide-react";
import Image from "next/image";

const Page = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      price: 74999,
      image: "/products/iphone.jpg",
      specs: {
        display: "6.7' OLED ProMotion",
        chip: "A17 Pro",
        camera: "48 Мп + 12 Мп + 12 Мп",
        battery: "4422 мАч",
        memory: "256 ГБ",
        color: "Титановый черный",
      },
    },
    {
      id: 2,
      title: "iPhone 15 Pro",
      price: 69999,
      image: "/products/iphone.jpg",
      specs: {
        display: "6.1' OLED ProMotion",
        chip: "A17 Pro",
        camera: "48 Мп + 12 Мп + 12 Мп",
        battery: "3274 мАч",
        memory: "256 ГБ",
        color: "Титановый синий",
      },
    },
    {
      id: 3,
      title: "iPhone 15",
      price: 54999,
      image: "/products/iphone.jpg",
      specs: {
        display: "6.1' OLED",
        chip: "A16 Bionic",
        camera: "48 Мп + 12 Мп",
        battery: "3349 мАч",
        memory: "256 ГБ",
        color: "Розовый",
      },
    },
  ];

  const isEmpty = false;

  const formatPrice = (price: number) => {
    return price.toLocaleString("uk-UA") + " ₴";
  };

  // Находим различающиеся характеристики
  const getDifferences = () => {
    const differences = new Set<string>();
    const firstProduct = products[0];

    products.slice(1).forEach((product) => {
      Object.entries(product.specs).forEach(([key, value]) => {
        if (
          firstProduct.specs[key as keyof typeof firstProduct.specs] !== value
        ) {
          differences.add(key);
        }
      });
    });

    return differences;
  };

  const differences = getDifferences();

  if (isEmpty) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl p-6">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative">
              <div className="group relative rounded-lg bg-zinc-800 p-3">
                <Scale className="h-6 w-6 text-sky-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <h1 className="text-2xl font-semibold">Сравнение товаров</h1>
          </div>

          <div className="rounded-xl border border-zinc-700/50 bg-zinc-800 p-8 text-center">
            <Scale className="mx-auto mb-4 h-12 w-12 text-zinc-500" />
            <h2 className="mb-2 text-lg font-medium text-zinc-300">
              Список сравнения пуст
            </h2>
            <p className="mx-auto max-w-md text-sm text-zinc-400">
              Добавьте товары в список сравнения, чтобы увидеть их
              характеристики и различия
            </p>
          </div>
        </div>
      </div>
    );
  }

  const specLabels: Record<string, string> = {
    display: "Дисплей",
    chip: "Процессор",
    camera: "Камера",
    battery: "Аккумулятор",
    memory: "Память",
    color: "Цвет",
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl p-6">
        <div className="flex items-center justify-between pb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="group relative rounded-lg bg-zinc-800 p-3">
                <Scale className="h-6 w-6 text-sky-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Сравнение товаров</h1>
              <p className="mt-1 text-sm text-zinc-400">
                {products.length}{" "}
                {products.length === 1
                  ? "товар"
                  : products.length >= 5
                    ? "товаров"
                    : "товара"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative space-y-6 rounded-xl border border-zinc-700/50 bg-zinc-800 p-6"
            >
              <Button
                size="icon"
                variant="outline"
                className="absolute top-4 right-4 h-7 w-7 rounded-md border-zinc-700/50 bg-zinc-800/90 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-zinc-700 hover:text-red-400"
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-zinc-100">
                  {product.title}
                </h3>
                <div className="mt-1 text-xl font-semibold text-zinc-100">
                  {formatPrice(product.price)}
                </div>
              </div>

              <div className="space-y-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className={`rounded-lg border ${
                      differences.has(key)
                        ? "border-sky-500/20 bg-sky-500/5"
                        : "border-transparent bg-zinc-900/50"
                    } p-3`}
                  >
                    <div className="text-xs font-medium text-zinc-400">
                      {specLabels[key]}
                    </div>
                    <div className="mt-1 font-medium">{value}</div>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-sky-500 hover:bg-sky-600">
                В корзину
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
