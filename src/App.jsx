import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import PageLoader from './components/PageLoader'
import CursorGlow from './components/CursorGlow'
import MainPage from './pages/MainPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'

export default function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <CursorGlow />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}
