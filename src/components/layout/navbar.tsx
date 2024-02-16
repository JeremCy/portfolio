import { Locale } from "@/i18n.config";
import { getDictionary } from "@libs/dictionaries";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switch";
import LocaleSwitcher from "../i18n/localSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default async function Navbar ({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);
    return (
        <nav className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {dict.nav.links.map((link, index) => (
                            <li key={index}>
                                <Link href={"/"+ lang + link.url} className="btn btn-ghost btn-sm">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link className="btn btn-ghost lg:text-xl btn-sm text-sm" href={"/"+ lang }>{dict.nav.title}</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {dict.nav.links.map((link, index) => (
                        <li key={index}>
                            <Link href={"/"+ lang +link.url} className="btn btn-ghost btn-sm">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end lg:space-x-4 space-x-1">
                <ThemeSwitcher />
                <LocaleSwitcher />
                <div className="border h-4 border-black"/>
                <Link className="btn btn-sm" href={"/"+ lang +dict.nav.cta.url}><FontAwesomeIcon icon={faPaperPlane} /><span className="hidden lg:block">{dict.nav.cta.title}</span></Link>
            </div>
        </nav>
    );
}
