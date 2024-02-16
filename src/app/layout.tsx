import { Locale, i18n } from "@/i18n.config";
import "@/app/globals.css";
import type { Metadata } from "next";
import Navbar from "@components/layout/navbar";
import Footer from "@components/layout/footer";

export const metadata: Metadata = {
  title: "KA2B",
  description: "Love your data",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} data-theme="light">
      <head>
      <meta property="description" content="web developer" />
      <meta property="og:description" content="web developer" />
      <meta property="og:url" content="jeremie-cyrille.com"/>
      <meta property="og:title" content="Jérémie Cyrille"/>
      <meta property="twitter:title" content="Jérémie Cyrille"/>
      <meta property="twitter:description" content="web developer"/>
      <meta property="twitter:image" content=""/>
      <meta property="twitter:card" content="summary"/>
      <title>Jérémie Cyrille</title>
      </head>
      <body
      >
          <Navbar lang={params.lang} />
          <main className="flex-1 justify-center flex p-4">{children}</main>      
          <Footer lang={params.lang} />
      </body>
    </html>
  );
}
