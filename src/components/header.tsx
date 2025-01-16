import { Link } from "@/i18n/routing";
import { Menu, Scale, ShoppingCart, UserRound } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Container from "./shared/container";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const Header = () => {
  return (
    <header>
      <div>
        <Container>
          <div className="flex items-center justify-between py-2">
            <div>
              <Link href="/">
                <h1>My Store</h1>
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-sky-300">
                Доставка и оплата
              </Link>
              <Link href="/" className="hover:text-sky-300">
                Кредит
              </Link>
              <Link href="/" className="hover:text-sky-300">
                Гарантия
              </Link>
              <Link href="/" className="hover:text-sky-300">
                Возврат и обмен
              </Link>
              <Link href="/" className="hover:text-sky-300">
                Контакты
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-4">
                <a href="#" className="hover:text-red-300">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-sky-300">
                  <FaTelegramPlane />
                </a>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-fit">
                    <SelectValue placeholder="RU" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ru">RU</SelectItem>
                    <SelectItem value="ua">UA</SelectItem>
                    <SelectItem value="en">EN</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-slate-800">
        <Container>
          <div className="flex items-center justify-between">
            <nav>
              <Link
                href="/"
                className="flex justify-between gap-16 bg-slate-500 px-4 py-5"
              >
                <span className="font-bold uppercase">Ассортимент</span>
                <span>
                  <Menu />
                </span>
              </Link>
            </nav>

            <div>
              <Input placeholder="Поиск" className="w-[400px] bg-slate-700" />
            </div>

            <div className="flex items-center gap-4 text-4xl">
              <div className="flex gap-4">
                <Link href="/profile">
                  <UserRound />
                </Link>
                <Link href="/profile">
                  <ShoppingCart />
                </Link>
                <Link href="/scales">
                  <Scale />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
