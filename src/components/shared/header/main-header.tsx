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

          <div className="flex w-full max-w-[600px] min-w-[300px] items-center gap-6">
            <Link href={pagesConfig.home} className="flex items-center gap-2">
              <span>
                <LayoutGrid />
              </span>
              <span>Каталог</span>
            </Link>
            <div className="relative w-full flex-grow">
              <Search className="absolute top-1/2 left-3 w-5 -translate-y-1/2" />
              <Input
                placeholder="Поиск"
                className="h-10 w-full max-w-full bg-zinc-700 pl-10"
              />
            </div>
          </div>

          <ul className="flex gap-2">
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
