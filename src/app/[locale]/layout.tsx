import "@/styles/globals.css";
import type { Metadata } from "next";
import ClientThemeProvider from "@/theme/ClientThemeProvider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Adriano",
  description: "Meu Portfolio",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head></head>
      <body>
        <ClientThemeProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
