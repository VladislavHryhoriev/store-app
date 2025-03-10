"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useMemo, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  isNew?: boolean;
  oldPrice?: number;
  brand: string;
  color: string;
  size: string;
}

interface Filter {
  name: string;
  options: string[];
}

const categories = {
  "laptops-and-computers": "Ноутбуки и компьютеры",
  smartphones: "Смартфоны",
  laptops: "Ноутбуки",
  tablets: "Планшеты",
  watches: "Смарт-часы",
  headphones: "Наушники",
  cameras: "Камеры",
  monitors: "Мониторы",
  accessories: "Аксессуары",
  printers: "Принтеры",
} as const;

type CategoryKey = keyof typeof categories;
type CategoryFilters = Record<CategoryKey, Filter[]>;

const defaultFilters: Filter[] = [
  {
    name: "Бренд",
    options: ["Apple", "Samsung", "Xiaomi", "Google"],
  },
  {
    name: "Цена",
    options: ["До 20 000 ₴", "20 000 ₴ - 50 000 ₴", "От 50 000 ₴"],
  },
];
const categoryFilters: CategoryFilters = {
  smartphones: [
    {
      name: "Бренд",
      options: ["Apple", "Samsung", "Xiaomi", "Google", "OnePlus"],
    },
    {
      name: "Цена",
      options: [
        "До 20 000 ₴",
        "20 000 ₴ - 50 000 ₴",
        "50 000 ₴ - 100 000 ₴",
        "От 100 000 ₴",
      ],
    },
    {
      name: "Память",
      options: ["128 ГБ", "256 ГБ", "512 ГБ", "1 ТБ"],
    },
    {
      name: "Цвет",
      options: ["Черный", "Белый", "Золотой", "Серебристый", "Титановый"],
    },
  ],
  laptops: [
    {
      name: "Бренд",
      options: ["Apple", "Dell", "HP", "Lenovo", "ASUS"],
    },
    {
      name: "Цена",
      options: [
        "До 30 000 ₴",
        "30 000 ₴ - 60 000 ₴",
        "60 000 ₴ - 100 000 ₴",
        "От 100 000 ₴",
      ],
    },
    {
      name: "Процессор",
      options: [
        "Intel Core i3",
        "Intel Core i5",
        "Intel Core i7",
        "AMD Ryzen",
        "Apple M1/M2",
      ],
    },
    {
      name: "Диагональ",
      options: ['13.3"', '14"', '15.6"', '16"', '17.3"'],
    },
  ],
  tablets: [
    {
      name: "Бренд",
      options: ["Apple", "Samsung", "Xiaomi", "Huawei"],
    },
    {
      name: "Цена",
      options: [
        "До 15 000 ₴",
        "15 000 ₴ - 30 000 ₴",
        "30 000 ₴ - 50 000 ₴",
        "От 50 000 ₴",
      ],
    },
    {
      name: "Диагональ",
      options: ['8"', '9"', '10"', '11"', '12.9"'],
    },
    {
      name: "Память",
      options: ["64 ГБ", "128 ГБ", "256 ГБ", "512 ГБ"],
    },
  ],
  watches: [
    {
      name: "Бренд",
      options: ["Apple", "Samsung", "Xiaomi", "Garmin", "Huawei"],
    },
    {
      name: "Цена",
      options: [
        "До 5 000 ₴",
        "5 000 ₴ - 15 000 ₴",
        "15 000 ₴ - 30 000 ₴",
        "От 30 000 ₴",
      ],
    },
    {
      name: "Размер",
      options: ["40mm", "41mm", "42mm", "44mm", "45mm", "47mm"],
    },
    {
      name: "Тип",
      options: ["Спортивные", "Классические", "Смарт-часы", "Фитнес-браслеты"],
    },
  ],
  headphones: [
    {
      name: "Бренд",
      options: ["Apple", "Samsung", "Sony", "JBL", "Beats"],
    },
    {
      name: "Цена",
      options: [
        "До 2 000 ₴",
        "2 000 ₴ - 5 000 ₴",
        "5 000 ₴ - 15 000 ₴",
        "От 15 000 ₴",
      ],
    },
    {
      name: "Тип",
      options: ["Наушники", "Вкладыши", "TWS", "Накладные", "Полноразмерные"],
    },
    {
      name: "Подключение",
      options: ["Проводные", "Беспроводные", "Bluetooth", "USB-C"],
    },
  ],
  accessories: defaultFilters,
  cameras: defaultFilters,
  monitors: defaultFilters,
  "laptops-and-computers": [],
  printers: [],
};

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

const initialProducts = [
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB",
    price: 74999,
    oldPrice: 79999,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=1200&hei=1200&fmt=jpeg&qlt=95",
    isNew: true,
    brand: "Apple",
    color: "Black",
    size: "256GB",
  },
  {
    id: 2,
    title: "MacBook Air 15' M2",
    price: 104999,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=1200&hei=1200&fmt=jpeg&qlt=95",
    brand: "Apple",
    color: "Midnight",
    size: "15'",
  },
  {
    id: 3,
    title: "Apple Watch Series 9 45mm",
    price: 32999,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-41mm-aluminum-midnight-cell-midnight-sport-band-202309?wid=1200&hei=1200&fmt=jpeg&qlt=95",
    isNew: true,
    brand: "Apple",
    color: "Midnight",
    size: "45mm",
  },
  {
    id: 4,
    title: "AirPods Pro 2",
    price: 12999,
    oldPrice: 14999,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1200&hei=1200&fmt=jpeg&qlt=95",
    brand: "Apple",
    color: "White",
    size: "Pro",
  },
  {
    id: 5,
    title: "iPad Pro 12.9' M2",
    price: 89999,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-select-cell-spacegray-202210?wid=1200&hei=1200&fmt=jpeg&qlt=95",
    brand: "Apple",
    color: "Space Gray",
    size: "12.9'",
  },
];

const Page = () => {
  const params = useParams();
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [currentSort, setCurrentSort] = useState<SortOption>(sortOptions[0]);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  // Моковые данные

  const products = useMemo(() => {
    return [...initialProducts].sort(sortFunctions[currentSort.value]);
  }, [initialProducts, currentSort]);

  const filteredProducts = products.filter((product) => {
    return Object.entries(selectedFilters).every(
      ([filterName, selectedValues]) => {
        if (selectedValues.length === 0) return true;

        switch (filterName) {
          case "Бренд":
            return selectedValues.includes(product.brand);
          case "Цена":
            return selectedValues.some((range) => {
              const [min, max] = range.split("-").map(Number);
              return product.price >= min && product.price <= max;
            });
          case "Цвет":
            return selectedValues.includes(product.color);
          case "Размер":
            return selectedValues.includes(product.size);
          default:
            return true;
        }
      },
    );
  });

  const formatPrice = (price: number) => {
    return price.toLocaleString("uk-UA") + " ₴";
  };

  const currentCategory = params.category as CategoryKey;
  const filters = categoryFilters[currentCategory] || defaultFilters;

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl p-6">
        {/* Хедер категории */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-xl font-semibold sm:text-2xl">
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
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="outline"
                className="gap-2 border-zinc-700/50 bg-zinc-800 hover:bg-zinc-700"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span className="hidden sm:inline">Фильтры</span>
              </Button>

              <div className="flex items-center gap-2 rounded-lg border border-zinc-700/50 bg-zinc-800 p-1">
                <Button
                  variant={viewType === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  className={`h-8 w-8 transition-colors ${
                    viewType === "grid"
                      ? "bg-sky-500 text-white hover:bg-sky-600"
                      : "text-zinc-400 hover:bg-zinc-700 hover:text-zinc-100"
                  }`}
                  onClick={() => setViewType("grid")}
                >
                  <Grid2X2 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewType === "list" ? "secondary" : "ghost"}
                  size="icon"
                  className={`h-8 w-8 transition-colors ${
                    viewType === "list"
                      ? "bg-sky-500 text-white hover:bg-sky-600"
                      : "text-zinc-400 hover:bg-zinc-700 hover:text-zinc-100"
                  }`}
                  onClick={() => setViewType("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <Button
                  variant="outline"
                  className="gap-2 border-zinc-700/50 bg-zinc-800 hover:bg-zinc-700"
                  onClick={() => setShowSort(!showSort)}
                >
                  <span className="hidden sm:inline">{currentSort.label}</span>
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
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Фильтры */}
          {showFilters && (
            <div className="space-y-6 lg:block">
              {filters.map((filter) => (
                <Card
                  key={filter.name}
                  className="border-zinc-700/50 bg-zinc-800 p-6"
                >
                  <h3 className="mb-4 text-lg font-medium text-zinc-100">
                    {filter.name}
                  </h3>
                  <div className="space-y-3">
                    {filter.options.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3 text-sm text-zinc-300 hover:text-zinc-100"
                      >
                        <Checkbox
                          checked={selectedFilters[filter.name]?.includes(
                            option,
                          )}
                          onCheckedChange={(checked) => {
                            const newFilters = { ...selectedFilters };
                            if (!newFilters[filter.name]) {
                              newFilters[filter.name] = [];
                            }
                            if (checked) {
                              newFilters[filter.name].push(option);
                            } else {
                              newFilters[filter.name] = newFilters[
                                filter.name
                              ].filter((item) => item !== option);
                            }
                            setSelectedFilters(newFilters);
                          }}
                          className="border-zinc-600 bg-zinc-900"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Список товаров */}
          <div className={showFilters ? "lg:col-span-3" : "lg:col-span-4"}>
            <div
              className={
                viewType === "grid"
                  ? `grid gap-6 sm:grid-cols-2 ${
                      showFilters ? "lg:grid-cols-3" : "lg:grid-cols-4"
                    }`
                  : "space-y-4"
              }
            >
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`group relative overflow-hidden border-zinc-700/50 bg-zinc-800 p-6 ${
                    viewType === "list"
                      ? "flex flex-row items-center gap-8"
                      : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      viewType === "list" ? "w-48 shrink-0" : "w-full"
                    } aspect-square overflow-hidden rounded-lg bg-zinc-900`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.isNew && (
                      <div className="absolute top-2 left-2 rounded-full bg-emerald-500/90 px-2 py-0.5 text-xs font-medium backdrop-blur-sm">
                        Новинка
                      </div>
                    )}
                    {viewType !== "list" && (
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
                    )}
                  </div>

                  <div
                    className={`flex items-center justify-between gap-8 ${viewType === "list" ? "flex-1" : "mt-4"}`}
                  >
                    <div>
                      <h3 className="text-lg font-medium text-zinc-100">
                        {product.title}
                      </h3>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-lg font-medium text-zinc-100">
                          {formatPrice(product.price)}
                        </span>
                        {product.oldPrice && (
                          <span className="text-sm text-zinc-500 line-through">
                            {formatPrice(product.oldPrice)}
                          </span>
                        )}
                      </div>
                      <div className="mt-1">
                        <span className="text-sm text-emerald-400">
                          В наличии
                        </span>
                      </div>
                    </div>

                    {viewType === "list" && (
                      <div className="flex items-center gap-4">
                        <Button
                          size="icon"
                          variant="outline"
                          className="size-10 rounded-lg border-zinc-700/50 bg-zinc-900/90 shadow-lg backdrop-blur-sm transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-red-400 hover:shadow-xl"
                        >
                          <Heart className="h-5 w-5" />
                        </Button>
                        <Button className="w-40 gap-2 bg-sky-500 hover:bg-sky-600">
                          <ShoppingCart className="h-4 w-4" />В корзину
                        </Button>
                      </div>
                    )}
                  </div>

                  {viewType !== "list" && (
                    <div className="mt-4 flex gap-2">
                      <Button className="w-full gap-2 bg-sky-500 hover:bg-sky-600">
                        <ShoppingCart className="h-4 w-4" />В корзину
                      </Button>
                    </div>
                  )}
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
