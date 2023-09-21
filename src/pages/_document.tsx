import Navbar from '@/components/layout/navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body id="hero" className='min-h-screen space-y-36'>
        <div className='sticky top-0 z-50'>
          <Navbar />
        </div>   
        <div className='flex-1 justify-center flex'>
          <Main />
        </div>
           
        <NextScript />
      </body>
    </Html>
  )
}
