"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { i18n } from "@/i18n.config";
import Icontranslate from "@public/icon/translate.svg";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex gap-x-3 items-center">
      <Image  className="m-3 opacity-50			" src={Icontranslate} alt="" />
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link href={redirectedPathName(locale)} className="">
              {locale.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
