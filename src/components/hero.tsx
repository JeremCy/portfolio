/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {

  return (
    <div className="flex flex-col justify-center align-center items-center space-y-4 flex-1">
        <img
          src="https://i.ibb.co/VjdvKXD/IMG-0878-1.png"
          alt="memoji"
          width={100}
          height={100}
          className="rounded-full p-2 bg-[#8DA7BE] sm:w-40 sm:h-40 w-20 h-20"
        />
        <h2 className="sm:text-4xl font-bold text-center mt-4 text-2xl">
          Hi, I'm <span className="text-[#8DA7BE]">Jeremie <FontAwesomeIcon icon={faFire} style={{color: "#eb6a00",}} /></span>
        </h2>
        <h1 className="sm:text-8xl text-center mt-4 text-4xl">
        Coding the future,<br/> one line at a time.
        </h1>
        <p className="text-xl text-center mt-4">
            a <span className="text-[#8DA7BE]">Full Stack Developer</span> based in <span className="text-[#8DA7BE]">Paris, France</span>.<br/>
            I specialize in building <span className="text-[#8DA7BE]">websites</span> and <span className="text-[#8DA7BE]">applications</span> for the web.

        </p>

        <Link href={'#'} className='p-4 bg-black rounded-full text-white'>Connect with me</Link>

    </div>
  );
}


