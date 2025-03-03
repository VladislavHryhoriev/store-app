"use client";
import LangSwitcher from "@/components/ui/lang-switcher";
import { LINKS } from "@/constants/header/links";
import { Link } from "@/i18n/routing";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Container from "../container";

const PreHeader = () => {
  const t = useTranslations("Header");

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
            <div>
              <Link
                href={"tel:+380123456789"}
                className="flex items-center gap-2 text-sm hover:text-zinc-300"
              >
                <Phone size={16} /> <span>+380123456789</span>
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-red-400">
                <FaInstagram />
              </Link>
              <Link href="#" className="hover:text-sky-400">
                <FaTelegramPlane />
              </Link>
            </div>
            <LangSwitcher />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PreHeader;
