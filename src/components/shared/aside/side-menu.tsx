import { CATEGORIES } from "@/constants/header/categories";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const SideMenu = () => {
  const t = useTranslations("Aside");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="outline"
        className="gap-2 border-zinc-700/50 bg-zinc-800 hover:bg-zinc-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-5 w-5 text-sky-400" />
        <span>Категории</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 w-[266px] rounded-lg border border-zinc-700/50 bg-zinc-800 p-4 shadow-xl">
          <ul className="space-y-1">
            {CATEGORIES.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/categories${category.href}`}
                  className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-all after:absolute after:left-0 after:h-full after:w-1 after:rounded-r-lg after:bg-sky-400 after:opacity-0 after:transition-opacity hover:bg-zinc-700 hover:after:opacity-100"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-zinc-400">
                    <category.icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                  </span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    {t(category.category)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
