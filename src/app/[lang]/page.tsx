import { Locale } from "@/i18n.config";
import Hero from "@components/contents/hero";

export default async function Home({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    return (
      <section className="justify-center">
        <Hero lang={lang} />
      </section>
    );
  }
