import { Link } from "@/i18n/routing";
import { pagesConfig } from "@/pages.config";
import {
  Heart,
  LayoutGrid,
  Scale,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { Input } from "../../ui/input";
import Container from "../container";

export const MainHeader = () => {
  return (
    <div className="bg-zinc-800">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <nav>
            <Link
              href={pagesConfig.home}
              className="text- flex items-center gap-4 rounded bg-red-400 px-8 py-5"
            >
              <span>
                <LayoutGrid />
              </span>
              <span className="font-bold uppercase">Ассортимент</span>
            </Link>
          </nav>

          <div className="relative min-w-[300px] max-w-[600px] flex-1">
            <Search className="absolute left-3 top-1/2 w-5 -translate-y-1/2" />
            <Input placeholder="Поиск" className="h-10 bg-zinc-700 pl-10" />
          </div>

          <div className="flex gap-2">
            <Link
              href={pagesConfig.user}
              className="rounded p-2 transition-colors hover:bg-zinc-700 hover:text-purple-400"
            >
              <UserRound />
            </Link>
            <Link
              href={pagesConfig.favorites}
              className="rounded p-2 transition-colors hover:bg-zinc-700 hover:text-red-400"
            >
              <Heart />
            </Link>
            <Link
              href={pagesConfig.compare}
              className="rounded p-2 transition-colors hover:bg-zinc-700 hover:text-yellow-400"
            >
              <Scale />
            </Link>
            <Link
              href={pagesConfig.cart}
              className="rounded p-2 transition-colors hover:bg-zinc-700 hover:text-green-400"
            >
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
