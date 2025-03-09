import { CATEGORIES } from "@/constants/header/categories";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const SideMenu = ({ className }: { className?: string }) => {
  const t = useTranslations("Aside");
  return (
    <aside
      className={`rounded-lg border border-zinc-700/50 bg-zinc-800 p-4 ${className}`}
    >
      <h1 className="mb-4 text-base font-medium text-zinc-100">Категории</h1>
      <ul className="space-y-1">
        {CATEGORIES.map((category) => (
          <li key={category.id}>
            <Link
              href={`/categories${category.href}`}
              className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-all after:absolute after:left-0 after:h-full after:w-1 after:rounded-r-lg after:bg-sky-400 after:opacity-0 after:transition-opacity hover:bg-zinc-700 hover:after:opacity-100"
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
    </aside>
  );
};

export default SideMenu;
