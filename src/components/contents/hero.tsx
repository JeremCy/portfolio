/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/src/libs/dictionaries";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default async function Hero({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col justify-center align-center items-center space-y-4 xl:space-y-16 min-h-screen">
        <img
          src="https://i.ibb.co/VjdvKXD/IMG-0878-1.png"
          alt="memoji"
          width={100}
          height={100}
          className="rounded-full p-2 bg-[#8DA7BE] sm:w-40 sm:h-40 w-20 h-20"
        />
        <h2 className="sm:text-4xl font-bold text-center mt-4 text-2xl xl:text-7xl">
         <span className="text-[#8DA7BE]"> <FontAwesomeIcon icon={faFire} style={{color: "#eb6a00",}} /></span>
        </h2>
        <h1 className="sm:text-8xl text-center mt-4 text-4xl xl:text-9xl">
          
        </h1>
        <p className="text-xl text-center mt-4 xl:text-4xl">
        <span className="text-[#8DA7BE]">Full Stack Developer</span><span className="text-[#8DA7BE]">Paris, France</span>.<br/>
        <span className="text-[#8DA7BE] ">websites</span><span className="text-[#8DA7BE]">applications</span>
        </p>
        <Link href={'#contact'} className='p-4 bg-black rounded-full text-white xl:text-4xl hover:bg-[#8DA7BE] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'></Link>
    </div>
  );
}


