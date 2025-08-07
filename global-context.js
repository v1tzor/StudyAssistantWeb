// import { createContext, useContext, useState, useEffect } from 'react'
// import { useRouter } from 'next/router'

// const GlobalContext = createContext()

// export const GlobalProvider = ({ children }) => {
//   const router = useRouter()
//   const [locales] = useState([
//     { name: 'English', short: 'en' },
//     { name: 'Russian', short: 'ru' }
//   ])

//   const getLocaleFromPath = () => {
//     const pathParts = window.location.pathname.split('/').filter(Boolean)
//     return pathParts[0] === 'ru' ? 'ru' : 'en'
//   }

//   const [locale, setLocale] = useState(getLocaleFromPath())

//   useEffect(() => {
//     const handlePopState = () => {
//       setLocale(getLocaleFromPath())
//     }

//     window.addEventListener('popstate', handlePopState)
//     return () => window.removeEventListener('popstate', handlePopState)
//   }, [])

//   const value = {
//     locale: locales.find(l => l.short === locale) || locales[0],
//     setLocale: (newLocale) => {
//       const newPath = window.location.pathname.replace(`/${locale}`, `/${newLocale}`)
//       window.location.href = newPath
//     },
//     locales
//   }

//   return (
//     <GlobalContext.Provider value={value}>
//       {children}
//     </GlobalContext.Provider>
//   )
// }

// export const useGlobalContext = () => {
//   const context = useContext(GlobalContext)
//   if (!context) {
//     throw new Error('useGlobalContext must be used within a GlobalProvider')
//   }
//   return context
// }