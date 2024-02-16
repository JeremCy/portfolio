import { Locale } from "@/i18n.config";
import { getDictionary } from "@libs/dictionaries";
import Link from "next/link";

export default async function Navbar({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);
    return (
        <nav className="flex items-center p-4 text-bold xl:text-4xl sm:text-xl">
        </nav>
    );
}
