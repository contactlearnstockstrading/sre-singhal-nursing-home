import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BookingTab from './components/BookingTab'

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TrustBar />
      <Services />
      <Gallery />
      <Contact onBookAppointment={() => setBookingOpen(true)} />
      <Footer />
      <WhatsAppButton />
      <BookingTab open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  )
}
