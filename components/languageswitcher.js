import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { asPath } = router

  const locales = [
    { short: 'en', name: 'English' },
    { short: 'ru', name: 'Русский' }
  ]

  const [currentLocale, setCurrentLocale] = useState('')

  useEffect(() => {
    const parts = asPath.split('/')
    setCurrentLocale(parts[parts.length - 2] || 'en')
  }, [asPath])

  const handleLocaleChange = (e) => {
    const selectedLocale = e.target.value
    const url = new URL(asPath, window.location.origin)

    const segments = url.pathname.split('/').filter(Boolean)

    if (segments.length > 0) {
      segments[segments.length - 1] = selectedLocale
    } else {
      segments.push(selectedLocale)
    }

    const newPath = '/' + segments.join('/') + url.hash

    router.push(newPath)
  }

  return (
    <div className="language-switcher">
      <select
        value={currentLocale}
        onChange={handleLocaleChange}
        className="language-select"
      >
        {locales.map(({ short, name }) => (
          <option key={short} value={short}>
            {name}
          </option>
        ))}
      </select>

      <style jsx>{`
        .language-switcher {
          margin-left: auto;
        }

        .language-select {
          padding: 6px 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
          font-family: 'CeraPro-Regular';
          background-color: white;
          cursor: pointer;
          outline: none;
          transition: all 0.2s ease;
        }

        .language-select:hover {
          border-color: #888;
        }

        .language-select:focus {
          border-color: #3182ce;
          box-shadow: 0 0 0 1px #3182ce;
        }
      `}</style>
    </div>
  )
}