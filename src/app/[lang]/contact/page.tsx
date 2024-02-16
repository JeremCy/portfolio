import { Locale } from '@/i18n.config';
import { getDictionary } from '@/src/libs/dictionaries';
import Contact from '@components/form/contact';

export default async function ContactPage({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    const dict = await getDictionary(lang);
    return (<Contact dictionary={dict.contact} />);
}
