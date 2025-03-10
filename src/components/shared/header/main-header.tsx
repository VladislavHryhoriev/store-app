"use client";
import LogoIcon from "@/components/ui/logo-icon";
import { Link } from "@/i18n/routing";
import { pagesConfig, sidebarLinks } from "@/pages.config";
import { LayoutGrid, Search } from "lucide-react";
import { Input } from "../../ui/input";
import Container from "../container";
import BurgerMenu from "./burger-menu";
import { cn } from "@/lib/utils";
import SideMenu from "../aside/side-menu";
import { Button } from "@/components/ui/button";

const MainHeader = () => {
  return (
    <div className="bg-zinc-800">
      <Container>
        <nav className="flex items-center justify-between gap-4">
          <BurgerMenu />
          <Link href={pagesConfig.home} className="py-2">
            <LogoIcon size={3} />
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="gap-2 border-zinc-700/50 bg-zinc-800 hover:bg-zinc-700"
              asChild
            >
              <Link href={pagesConfig.catalog}>
                <LayoutGrid className="h-5 w-5 text-sky-400" />
                <span>Каталог</span>
              </Link>
            </Button>
            <SideMenu />
          </div>

          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <Input
                placeholder="Поиск товаров..."
                className="h-10 w-full min-w-48 rounded-xl bg-white/5 pl-10 text-sm transition-colors placeholder:text-zinc-500 hover:bg-white/10 focus:bg-white/10 focus:ring-1 focus:ring-sky-400"
              />
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
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default MainHeader;
