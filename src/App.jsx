import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/index.jsx'
import FeaturesPage from './pages/features/index.jsx'
import PricingPage from './pages/pricing/index.jsx'
import ContactPage from './pages/contact-us/index.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
    </Routes>
  )
}