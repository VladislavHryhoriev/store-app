"use client";
import LangSwitcher from "@/components/ui/lang-switcher";
import { LINKS } from "@/constants/header/links";
import { Link } from "@/i18n/routing";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Container from "../container";

const TopBar = () => {
  const t = useTranslations("Header");

  return (
    <div className="bg-gradient-to-r from-zinc-950 via-stone-900 to-zinc-950 text-zinc-400">
      <Container>
        <div className="flex h-10 items-center justify-between py-2">
          <div className="text-xs tracking-wider uppercase">
            {/* {t("store_name")} */}
          </div>

          <nav className="flex gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm tracking-wide transition-colors hover:text-sky-400"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center divide-x divide-zinc-800">
            <div className="pr-6">
              <Link
                href="tel:+380123456789"
                className="flex items-center gap-2 text-sm transition-colors hover:text-white"
              >
                <Phone size={14} className="text-sky-400" />
                <span>+380123456789</span>
              </Link>
            </div>

            <div className="flex gap-4 px-6">
              <Link
                href="#"
                className="transition-colors hover:text-red-400"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-sky-400"
                aria-label="Telegram"
              >
                <FaTelegramPlane size={16} />
              </Link>
            </div>

            <div className="pl-6">
              <LangSwitcher />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
