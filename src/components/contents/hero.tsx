/* eslint-disable @next/next/no-img-element */
import { getDictionary } from "@/src/libs/dictionaries";
import Link from "next/link";

export default async function Hero({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["home"];
}) {
  

  return (
    <div className="hero">
    <div className="hero-content flex flex-col text-center">
    <img
          src="https://i.ibb.co/VjdvKXD/IMG-0878-1.png"
          alt="memoji"
          width={100}
          height={100}
          className="rounded-full p-2 bg-[#8DA7BE] sm:w-40 sm:h-40 w-20 h-20"
        />
        <h1 className="text-5xl font-bold">{dictionary.title}</h1>
        <p className="py-6">
          {/* for  all . in dictionary.subtitle add /n */}
          {dictionary.subtitle.split(".").map((sentence, index) => (
            <span key={index}>
              {sentence}.
              <br />
            </span>
          ))}
          </p>
        <Link href={dictionary.cta.url} className="btn btn-primary">{dictionary.cta.title}</Link>
      </div>
    </div>
  );
}


