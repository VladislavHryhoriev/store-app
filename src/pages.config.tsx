import { Heart, Scale, ShoppingCart, UserRound } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

class PagesConfig {
  home = "/";
  cart = "/cart";
  profile = "/profile";
  favorites = "/favorites";
  compare = "/compare";
}

export const pagesConfig = new PagesConfig();

export const SOCIAL = [
  {
    title: "Telegram",
    icon: <FaTelegramPlane />,
    href: pagesConfig.home,
    styles: "hover:text-blue-400",
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    href: pagesConfig.home,
    styles: "hover:text-red-400",
  },
];

export const sidebarLinks = [
  {
    key: "profile",
    href: pagesConfig.profile,
    styles: "hover:text-purple-400",
    icon: <UserRound />,
    text: `Профиль`,
  },
  {
    key: "favorites",
    href: pagesConfig.favorites,
    styles: "hover:text-red-400",
    icon: <Heart />,
    text: `Избранное`,
  },
  {
    key: "compare",
    href: pagesConfig.compare,
    styles: "hover:text-yellow-400",
    icon: <Scale />,
    text: `Сравнение`,
  },
  {
    key: "cart",
    href: pagesConfig.cart,
    styles: "hover:text-green-400",
    icon: <ShoppingCart />,
    text: `Корзина`,
  },
];
