import { Locale } from "@/i18n.config";
import Carrer from "@/src/components/contents/carrer";
import { getDictionary } from "@/src/libs/dictionaries";

export default async function About({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    const dict = await getDictionary(lang);
    return (<Carrer dictionary={dict.carrer} />);
}
