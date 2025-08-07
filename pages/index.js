import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function IndexRedirect() {
  const router = useRouter()

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0]
    const supportedLangs = ['en', 'ru']
    const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'en'

    window.location.href = `/${defaultLang}`
  }, [])

  return null
}

export const config = {
  unstable_runtimeJS: false
}