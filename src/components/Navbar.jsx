import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-teal-700 font-bold text-lg">
            <img src={logo} alt="Singhal Nursing Home" className="h-10 w-auto" style={{ filter: 'hue-rotate(160deg) saturate(1.2)' }} />
            <span className="hidden sm:inline">Singhal Nursing Home</span>
            <span className="sm:hidden">SNH</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Emergency Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-600 hover:text-teal-600"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Emergency Call
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
