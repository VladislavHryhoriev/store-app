import { Header } from "@/components/shared/header";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { SideMenu } from "@/components/shared/aside";
import Container from "@/components/shared/container";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "ru" | "ua" | "en")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="dark">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <Container>
            <div className="flex justify-between gap-8">
              <SideMenu className="w-[250px]" />
              <div className="flex-1">{children}</div>
            </div>
          </Container>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
