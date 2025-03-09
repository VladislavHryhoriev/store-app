"use client";
import LogoIcon from "@/components/ui/logo-icon";
import { Link } from "@/i18n/routing";
import { pagesConfig, sidebarLinks } from "@/pages.config";
import { LayoutGrid, Search } from "lucide-react";
import { Input } from "../../ui/input";
import Container from "../container";
import BurgerMenu from "./burger-menu";
import { cn } from "@/lib/utils";

const MainHeader = () => {
  return (
    <div className="bg-zinc-800">
      <Container>
        <nav className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <BurgerMenu />
            <Link href={pagesConfig.home} className="py-2">
              <LogoIcon size={3} />
            </Link>
          </div>

          <div className="flex w-full max-w-[600px] min-w-[300px] items-center gap-8">
            <Link
              href={pagesConfig.catalog}
              className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <LayoutGrid className="h-5 w-5 text-sky-400" />
              <span>Каталог</span>
            </Link>

            <div className="relative w-full flex-grow">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <Input
                placeholder="Поиск товаров..."
                className="h-10 w-full rounded-xl bg-white/5 pl-10 text-sm transition-colors placeholder:text-zinc-500 hover:bg-white/10 focus:bg-white/10 focus:ring-1 focus:ring-sky-400"
              />
            </div>
          </div>

          <ul className="flex items-center gap-3">
            {sidebarLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded p-2 transition-colors hover:bg-zinc-700",
                    link.styles,
                  )}
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default MainHeader;
