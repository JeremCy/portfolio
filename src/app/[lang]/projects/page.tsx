import { Locale } from "@/i18n.config";
import Projects from "@/src/components/contents/project";
import { getDictionary } from "@/src/libs/dictionaries";

export default async function ProjectPage({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    const dict = await getDictionary(lang);
    return (<Projects dictionary={dict.project} />);
}
