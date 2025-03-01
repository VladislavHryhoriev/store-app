"use client";
import { LINKS } from "@/constants/header/links";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import Container from "../container";

const PreHeader = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div>
      <Container>
        <div className="flex h-12 items-center justify-between bg-stone-950 py-2">
          <div></div>
          <div className="flex gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="hover:text-sky-400"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <Link href="#" className="hover:text-red-400">
                <FaInstagram />
              </Link>
              <Link href="#" className="hover:text-sky-400">
                <FaTelegramPlane />
              </Link>
            </div>
            <div>
              <Select onValueChange={handleLocaleChange}>
                <SelectTrigger>
                  <SelectValue placeholder={locale.toUpperCase()} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ru">RU</SelectItem>
                  <SelectItem value="ua">UA</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PreHeader;
