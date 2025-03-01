import LogoIcon from "@/components/ui/logo-icon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/routing";
import { pagesConfig } from "@/pages.config";
import {
  Heart,
  LayoutGrid,
  Menu,
  Scale,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { Input } from "../../ui/input";
import Container from "../container";

const MainHeader = () => {
  return (
    <div className="bg-zinc-800">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <nav className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger className="cursor-pointer p-1">
                <Menu />
              </SheetTrigger>
              <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Link href={pagesConfig.home} className="py-2">
              <LogoIcon />
            </Link>
          </nav>

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

          <div className="flex gap-2">
            <Link
              href={pagesConfig.profile}
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

export default MainHeader;
