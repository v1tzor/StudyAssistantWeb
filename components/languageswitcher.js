import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  
  // Определяем текущую локаль из URL
  const currentLocale = router.asPath.split('/')[1] || 'en'
  
  // Поддерживаемые языки
  const locales = [
    { short: 'en', name: 'English' },
    { short: 'ru', name: 'Русский' }
  ]

  const handleLocaleChange = (e) => {
    const selectedLocale = e.target.value
    let newPath = router.asPath

    // Заменяем локаль в пути
    if (newPath.startsWith('/en') || newPath.startsWith('/ru')) {
      newPath = newPath.replace(/^\/[a-z]{2}/, `/${selectedLocale}`)
    } else {
      newPath = `/${selectedLocale}${newPath}`
    }

    // Для статического экспорта используем полную перезагрузку
    window.location.href = newPath
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
          margin-left: 1rem;
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