import Link from "next/link";
 // eslint-disable-next-line react/no-unescaped-entities
import { useTranslation } from 'next-i18next'

export default function Carrer() {
    const { t } = useTranslation('common')

    return (
        <div className="text-center space-y-6 p-4 w-1/2 mx-auto">
            <h1 className="text-4xl font-bold sm:text-6xl">{t('carrer.title')}</h1>
            <div id="carrer" className="grid grid-cols-1 sm:grid-cols-2  sm:space-y-4">     
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-[#8DA7BE]">Ka2b Associate</h2>
                    <p className="lg:text-xl italic">Junior Business inteligence Consultant / Web Develloper</p>
                    <p className="text-sm">{t('carrer.ka2b.date')}</p>
                    <p>{t('carrer.ka2b.context')}</p>
                </div>
            </div>
            <h1 className="text-4xl font-bold sm:text-6xl">{t('project.title')}</h1> 
            <div id="carrer" className="grid grid-cols-1 sm:grid-cols-2  justify-center ">     
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-[#8DA7BE]">Fidecly</h2>
                    <p className="lg:text-xl italic">Develloper full stack</p>
                    <p className="text-sm">{t('project.1.status')}</p>
                    <p>{t('project.1.context')}</p>
                    <Link href={"https://fidelcly.com"} className="font-bold underline text-[#8DA7BE]">{t('project.cta')}</Link>
                </div>
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-[#8DA7BE]">Mon aide Appart</h2>
                    <p className="lg:text-xl italic">Develloper full stack</p>
                    <p className="text-sm">{t('project.2.status')}</p>
                    <p>{t('project.2.context')}</p>
                    <Link href={"https://www.youtube.com/watch?v=h0oyVZyoEPE&ab_channel=ETNA.io"} className="font-bold underline text-[#8DA7BE]">{t('project.cta')}</Link>
                </div>
            </div>
        </div>
    )
}
