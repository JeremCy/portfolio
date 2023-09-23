import Carrer from "@/components/carrer";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <main className="justify-center">
      <Hero />
      <Carrer />
      <Contact />
    </main>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  }
}
