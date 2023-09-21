import Navbar from '@/components/layout/navbar'
import { Html, Head, Main, NextScript } from 'next/document'

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
