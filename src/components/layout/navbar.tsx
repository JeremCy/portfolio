import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center p-4 text-bold xl:text-4xl sm:text-xl">
            <div className="flex flex-1 items-center space-x-2">
               <FontAwesomeIcon icon={faEnvelope} className="p-4 border rounded-full border-black"/> 
               <p className="hidden sm:block">jeremie.cyrille@icloud.com</p>
            </div>
            
        <div className="flex text-center space-x-4 justify-center">
        <Link href={'#hero'} className=''>Home</Link>
            <Link href={'#carrer'} className=''>Work</Link>
            <Link href={'#contact'} className=''>Contact</Link>
            <div className="w-0 border border-black"></div>
            <Link href={'https://drive.google.com/file/d/11qi0pLAQRzCU7wy_qRLvPsrPp6oNyW0z/view?usp=drive_link'} className=''>Resume</Link>
        </div>
        </nav>
    )
    }
