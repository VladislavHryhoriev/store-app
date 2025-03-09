import LogoIcon from "@/components/ui/logo-icon";
import Container from "../container";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: "О нас", href: "/about" },
      { label: "Контакты", href: "/contacts" },
      { label: "Блог", href: "/blog" },
      { label: "Карьера", href: "/careers" },
    ],
    support: [
      { label: "FAQ", href: "/faq" },
      { label: "Доставка", href: "/shipping" },
      { label: "Возврат", href: "/returns" },
      { label: "Гарантия", href: "/warranty" },
    ],
    legal: [
      { label: "Условия использования", href: "/terms" },
      { label: "Конфиденциальность", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
  };

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative mt-auto border-t border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Информация о компании */}
          <div className="space-y-6">
            <div className="group relative inline-block">
              <LogoIcon />
            </div>
            <p className="max-w-xs text-sm text-zinc-400">
              PCStore - ваш надежный партнер в мире технологий. Лучшие цены,
              быстрая доставка и профессиональная поддержка.
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="group relative rounded-lg bg-zinc-800 p-2 transition-colors hover:bg-zinc-700"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-sky-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* Ссылки */}
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-2 lg:gap-12">
            <div>
              <h3 className="mb-3 text-sm font-medium text-zinc-400">
                Компания
              </h3>
              <ul className="space-y-3">
                {links.company.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-400 transition-colors hover:text-sky-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium text-zinc-400">
                Поддержка
              </h3>
              <ul className="space-y-3">
                {links.support.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-400 transition-colors hover:text-sky-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium text-zinc-400">
                Документы
              </h3>
              <ul className="space-y-3">
                {links.legal.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-400 transition-colors hover:text-sky-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-zinc-400">Контакты</h3>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sky-400" />
                <a href="tel:+380123456789" className="hover:text-sky-400">
                  +38 (012) 345-67-89
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sky-400" />
                <a
                  href="mailto:info@pcstore.com"
                  className="hover:text-sky-400"
                >
                  info@pcstore.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-sky-400" />
                <span>Киев, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-zinc-800 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-400 sm:flex-row sm:text-left">
            <p>© {currentYear} PCStore. Некоторые права защищены</p>
            <p>Разработано с ❤️ для наших клиентов</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
