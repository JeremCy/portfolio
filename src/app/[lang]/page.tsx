import { Locale } from "@/i18n.config";
import Hero from "@components/contents/hero";
import { getDictionary } from "@libs/dictionaries";

export default async function Home({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    const dict = await getDictionary(lang);
    return (<Hero dictionary={dict.home} />);
  }
