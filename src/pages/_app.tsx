import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)
