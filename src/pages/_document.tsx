import Navbar from '@/components/layout/navbar'
import { Html, Head, Main, NextScript } from 'next/document'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body id="hero" className=''>
        <div className='sticky top-0 z-50'>
          <Navbar />
        </div>   
        <div className='justify-center flex '>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  }
}
