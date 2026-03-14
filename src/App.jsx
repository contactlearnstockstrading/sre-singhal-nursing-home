import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BookingTab from './components/BookingTab'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TrustBar />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BookingTab />
    </>
  )
}
