"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "iPhone 15 Pro Max 256GB",
      price: 74999,
      image: "/products/iphone.jpg",
      quantity: 1,
      color: "Титановый черный",
    },
    {
      id: 2,
      title: "MacBook Air 15' M2",
      price: 104999,
      image: "/products/macbook.jpg",
      quantity: 2,
      color: "Космический серый",
    },
    {
      id: 3,
      title: "Apple Watch Series 9 45mm",
      price: 32999,
      image: "/products/watch.jpg",
      quantity: 1,
      color: "Серебристый",
    },
  ]);

  const formatPrice = (price: number) => {
    return price.toLocaleString("uk-UA") + " ₴";
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // Функции управления корзиной
  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  if (cart.length === 0) {
    return (
      <div className="ml-[266px] min-h-screen">
        <div className="mx-auto max-w-7xl p-6">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative">
              <div className="group relative rounded-lg bg-zinc-800 p-3">
                <ShoppingCart className="h-6 w-6 text-sky-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <h1 className="text-2xl font-semibold">Корзина</h1>
          </div>

          <div className="rounded-xl border border-zinc-700/50 bg-zinc-800 p-8 text-center">
            <ShoppingCart className="mx-auto mb-4 h-12 w-12 text-zinc-500" />
            <h2 className="mb-2 text-lg font-medium text-zinc-300">
              Корзина пуста
            </h2>
            <p className="mx-auto max-w-md text-sm text-zinc-400">
              Добавьте товары в корзину, чтобы оформить заказ
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ml-[266px] min-h-screen">
      <div className="mx-auto max-w-7xl p-6">
        {/* Хедер */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="group relative rounded-lg bg-zinc-800 p-3">
                <ShoppingCart className="h-6 w-6 text-sky-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Корзина</h1>
              <p className="mt-1 text-sm text-zinc-400">
                {cart.length}{" "}
                {cart.length === 1
                  ? "товар"
                  : cart.length >= 5
                    ? "товаров"
                    : "товара"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Список товаров */}
          <div className="space-y-4 lg:col-span-2">
            {cart.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-zinc-700/50 bg-zinc-800/50 transition-colors hover:bg-zinc-800"
              >
                <div className="flex gap-4 p-4">
                  <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-lg bg-zinc-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-zinc-100">
                        {item.title}
                      </h3>
                      {item.color && (
                        <div className="mt-1 text-sm text-zinc-400">
                          Цвет: {item.color}
                        </div>
                      )}
                      <div className="mt-1 text-sm text-zinc-400">
                        {formatPrice(item.price)}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7 rounded-md border-zinc-700/50 bg-zinc-800 hover:bg-zinc-700"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-4 text-center text-sm">
                          {item.quantity}
                        </span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7 rounded-md border-zinc-700/50 bg-zinc-800 hover:bg-zinc-700"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </div>

                      <Button
                        size="icon"
                        variant="outline"
                        className="h-7 w-7 rounded-md border-zinc-700/50 bg-zinc-800 hover:bg-zinc-700 hover:text-red-400"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Итого */}
          <div className="lg:sticky lg:top-6 lg:h-fit">
            <Card className="border-zinc-700/50 bg-zinc-800 p-6">
              <h2 className="text-lg font-medium">Сумма заказа</h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Товары ({cart.length})</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Доставка</span>
                  <span className="text-emerald-400">Бесплатно</span>
                </div>
              </div>

              <div className="my-6 border-t border-zinc-700/50" />

              <div className="flex items-center justify-between">
                <span className="text-base font-medium">Итого</span>
                <span className="text-xl font-semibold">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <Button className="mt-6 w-full bg-sky-500 hover:bg-sky-600">
                Оформить заказ
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
