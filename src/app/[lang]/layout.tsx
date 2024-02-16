import { Locale, i18n } from "@/i18n.config";
import "@styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@components/layout/navbar";
import Footer from "@components/layout/footer";

export const metadata: Metadata = {
  title: "Jeremie Cyrille",
  description: "web developper",
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
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>  
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
      <body className="min-h-screen items-stretch flex flex-col">
          <Navbar lang={params.lang} />
          <main className="w-full flex-1">{children}</main>      
          <Footer lang={params.lang} />
      </body>
    </html>
  );
}
