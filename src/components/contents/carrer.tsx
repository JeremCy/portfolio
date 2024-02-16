import { Locale } from "@/i18n.config";
import { getDictionary } from "@libs/dictionaries";
import Link from "next/link";

export default async function Carrer({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);
    return (
        <div className="text-center space-y-6 p-4 w-1/2 mx-auto">
            <h1 className="text-4xl font-bold sm:text-6xl"></h1>
            <div id="carrer" className="grid grid-cols-1 sm:grid-cols-2  sm:space-y-4">     
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-[#8DA7BE]"></h2>
                    <p className="lg:text-xl italic"></p>
                    <p className="text-sm"></p>
                    <p></p>
                </div>
            </div>
            <h1 className="text-4xl font-bold sm:text-6xl"></h1> 
            <div id="carrer" className="grid grid-cols-1 sm:grid-cols-2  justify-center ">     
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-[#8DA7BE]"></h2>
                    <p className="lg:text-xl italic"></p>
                    <p className="text-sm"></p>
                    <p></p>
                    <Link href={"https://fidelcly.com"} className="font-bold underline text-[#8DA7BE]"></Link>
                </div>
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-[#8DA7BE]">Mon aide Appart</h2>
                    <p className="lg:text-xl italic">Develloper full stack</p>
                    <p className="text-sm"></p>
                    <p></p>
                    <Link href={"https://www.youtube.com/watch?v=h0oyVZyoEPE&ab_channel=ETNA.io"} className="font-bold underline text-[#8DA7BE]"></Link>
                </div>
            </div>
        </div>
    )
}
