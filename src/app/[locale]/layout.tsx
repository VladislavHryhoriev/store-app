import SideMenu from "@/components/shared/aside/side-menu";
import Container from "@/components/shared/container";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "ru" | "ua" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <Container>
            <div className="flex justify-between gap-4">
              <SideMenu className="absolute z-10 h-fit w-[250px]" />
              <div className="mt-4 min-h-screen flex-1">{children}</div>
            </div>
          </Container>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
