"use client";
import LogoIcon from "@/components/ui/logo-icon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LINKS } from "@/constants/header/links";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { sidebarLinks, SOCIAL } from "@/pages.config";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const BurgerMenu = () => {
  const t = useTranslations("Header");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="group rounded-lg p-2 transition-all hover:bg-zinc-700">
        <Menu className="transition-transform group-hover:scale-110" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700 hover:scrollbar-thumb-zinc-600 max-h-screen w-full overflow-y-auto border-r border-zinc-700/50 bg-zinc-800 sm:w-[340px]"
      >
        <SheetHeader className="sticky top-0 z-10 flex flex-col gap-6 bg-zinc-800 pb-6">
          <SheetTitle className="flex items-center justify-between">
            <LogoIcon size={2.5} />
            <button
              onClick={() => setOpen(false)}
              className="group rounded-lg p-2 text-zinc-400 transition-all duration-300 hover:bg-gradient-to-br hover:from-zinc-700/80 hover:to-zinc-600 hover:text-zinc-100 hover:shadow-lg"
            >
              <X className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90" />
            </button>
          </SheetTitle>

          <div>
            <SheetDescription className="text-base font-medium text-zinc-100">
              PCStore
            </SheetDescription>
            <SheetDescription className="mt-1 text-sm text-zinc-400">
              Лучший в мире магазин по продаже электроники
            </SheetDescription>
          </div>

          <div className="flex flex-col gap-6">
            <nav>
              <ul className="space-y-1">
                {sidebarLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      onClick={() => setOpen(false)}
                      href={link.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-zinc-700",
                        "relative after:absolute after:left-0 after:h-full after:w-1 after:rounded-r-lg after:bg-sky-400 after:opacity-0 after:transition-opacity hover:after:opacity-100",
                        link.styles,
                      )}
                    >
                      <span className="text-zinc-400">{link.icon}</span>
                      <span>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="mb-3 px-3 text-xs font-medium tracking-wider text-zinc-500 uppercase">
                Информация
              </h3>
              <ul className="space-y-1">
                {LINKS.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-zinc-700"
                      onClick={() => setOpen(false)}
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 px-3 text-xs font-medium tracking-wider text-zinc-500 uppercase">
                Социальные сети
              </h3>
              <ul className="flex gap-2 px-3">
                {SOCIAL.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className={cn(
                        "group flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:bg-zinc-700",
                        link.styles,
                      )}
                    >
                      <span className="transition-transform group-hover:scale-110">
                        {link.icon}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SheetHeader>

        <SheetFooter className="mt-6 border-t border-zinc-700/50 pt-6">
          <span className="text-sm text-zinc-500">
            © 2018–{new Date().getFullYear()} PCStore
          </span>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default BurgerMenu;
