import { CATEGORIES } from "@/constants/header/categories";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const SideMenu = ({ className }: { className?: string }) => {
  const t = useTranslations("Aside");
  return (
    <aside className={`rounded-b bg-zinc-800 p-2 ${className}`}>
      <h1 className="pb-2 text-xl font-bold">Категории</h1>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category.id}>
            <Link
              href={`/categories${category.href}`}
              className="flex items-center gap-2 rounded p-2 transition-colors hover:bg-zinc-700 hover:text-red-400"
            >
              <category.icon />
              {t(category.category)}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideMenu;
