"use client";
import LogoIcon from "@/components/ui/logo-icon";
import { Separator } from "@/components/ui/separator";
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
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const BurgerMenu = () => {
  const t = useTranslations("Header");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="cursor-pointer rounded p-2 transition-colors hover:bg-zinc-700 hover:text-red-400">
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="max-h-screen w-full overflow-auto sm:w-[300px]"
      >
        <SheetHeader className="flex flex-col gap-3">
          <SheetTitle>
            <LogoIcon />
          </SheetTitle>
          <Separator />
          <SheetDescription>
            Лучший в мире магазин по продаже электроники
          </SheetDescription>
          <Separator />

          <div className="flex flex-col gap-3">
            <ul>
              {sidebarLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    onClick={() => setOpen(false)}
                    href={link.href}
                    className={cn(
                      "flex gap-2 rounded p-2 transition-colors hover:bg-zinc-900",
                      link.styles,
                    )}
                  >
                    {link.icon}
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <Separator />
            <div>
              <SheetDescription className="mb-2 text-xs">
                Информация о магазине
              </SheetDescription>
              <ul>
                {LINKS.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="flex gap-2 rounded p-2 transition-colors hover:bg-zinc-900 hover:text-red-400"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Separator />
            <div>
              <SheetDescription className="mb-2 text-xs">
                Социальные сети
              </SheetDescription>
              <ul className="flex gap-1">
                {SOCIAL.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded p-2 transition-colors hover:bg-zinc-900",
                        link.styles,
                      )}
                    >
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SheetHeader>
        <SheetFooter>
          <span>© 2018–{new Date().getFullYear()} «PCStore»</span>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default BurgerMenu;
