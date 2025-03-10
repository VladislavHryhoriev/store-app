"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Edit,
  Bell,
  Shield,
  Moon,
  Sun,
  Package,
  Heart,
  History,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const stats = [
  { label: "Заказов", value: "12" },
  { label: "В избранном", value: "8" },
  { label: "Отзывов", value: "4" },
  { label: "Бонусов", value: "2 400 ₴" },
];

const ProfilePage = () => {
  const [isDark, setIsDark] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString("uk-UA") + " ₴";
  };

  return (
    <div className="space-y-8 p-6">
      <Card className="border-zinc-700/50 bg-zinc-800 p-6">
        <div className="flex items-start gap-8">
          <div className="relative">
            <Avatar className="size-24 rounded-xl border-2 border-zinc-700/50">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-zinc-700 text-lg">
                ИШ
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="outline"
              className="absolute -right-2 -bottom-2 h-8 w-8 rounded-lg border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:text-sky-400"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-medium tracking-tight text-zinc-100">
                  Иван Шевченко
                </h1>
                <p className="mt-1 text-sm text-zinc-400">Клиент с 2023 года</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 rounded-lg border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:text-sky-400"
                >
                  <Settings className="h-4 w-4" />
                  Настройки
                </Button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-zinc-700/50 bg-zinc-800/50 p-3 text-center"
                >
                  <div className="text-lg font-medium text-zinc-100">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4">
              <div className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-zinc-300">
                <Mail className="h-4 w-4 text-sky-400" />
                <span>ivan@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-zinc-300">
                <Phone className="h-4 w-4 text-sky-400" />
                <span>+380 (99) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-zinc-300">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span>Киев, Украина</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-zinc-700/50 bg-zinc-800 p-6">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-medium text-zinc-100">
              <Package className="h-5 w-5 text-sky-400" />
              Последние заказы
            </h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-zinc-400 hover:text-sky-400"
            >
              <History className="mr-2 h-4 w-4" />
              История
            </Button>
          </div>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-700/50 bg-zinc-800/50 p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-zinc-100">
                  Заказ #1234
                </div>
                <div className="text-xs text-sky-400">В пути</div>
              </div>
              <div className="mt-1 text-xs text-zinc-400">
                2 товара на {formatPrice(12400)}
              </div>
            </div>
            <div className="rounded-lg border border-zinc-700/50 bg-zinc-800/50 p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-zinc-100">
                  Заказ #1233
                </div>
                <div className="text-xs text-emerald-400">Доставлен</div>
              </div>
              <div className="mt-1 text-xs text-zinc-400">
                1 товар на {formatPrice(4200)}
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-zinc-700/50 bg-zinc-800 p-6">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-medium text-zinc-100">
              <Heart className="h-5 w-5 text-sky-400" />
              Избранное
            </h2>
          </div>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-700/50 bg-zinc-800/50 p-3">
              <div className="text-sm font-medium text-zinc-100">
                iPhone 15 Pro
              </div>
              <div className="mt-1 text-xs text-zinc-400">
                {formatPrice(74999)}
              </div>
            </div>
            <div className="rounded-lg border border-zinc-700/50 bg-zinc-800/50 p-3">
              <div className="text-sm font-medium text-zinc-100">
                MacBook Air
              </div>
              <div className="mt-1 text-xs text-zinc-400">
                {formatPrice(104999)}
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-zinc-700/50 bg-zinc-800 p-6">
          <h2 className="text-lg font-medium text-zinc-100">Настройки</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-sky-400" />
                <span className="text-sm">Уведомления</span>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
                className="data-[state=checked]:bg-sky-400 data-[state=unchecked]:bg-zinc-700"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-sky-400" />
                <span className="text-sm">Двухфакторная аутентификация</span>
              </div>
              <Switch
                checked={twoFactor}
                onCheckedChange={setTwoFactor}
                className="data-[state=checked]:bg-sky-400 data-[state=unchecked]:bg-zinc-700"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isDark ? (
                  <Moon className="h-4 w-4 text-sky-400" />
                ) : (
                  <Sun className="h-4 w-4 text-sky-400" />
                )}
                <span className="text-sm">Тёмная тема</span>
              </div>
              <Switch
                checked={isDark}
                onCheckedChange={setIsDark}
                className="data-[state=checked]:bg-sky-400 data-[state=unchecked]:bg-zinc-700"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
