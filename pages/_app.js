import './style.css'
import { NextIntlProvider } from 'next-intl'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const locale = router.query.lang || 'en'

  return (
    <NextIntlProvider
      locale={locale}
      messages={pageProps.messages}
      now={new Date(pageProps.now)}
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}

export default MyApp