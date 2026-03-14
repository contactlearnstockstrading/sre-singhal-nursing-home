import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <img src={logo} alt="Singhal Nursing Home" className="h-8 w-auto" style={{ filter: 'hue-rotate(160deg) saturate(1.2)' }} />
              Singhal Nursing Home
            </div>
            <p className="text-sm leading-relaxed">
              Advanced Surgical Care, Family Values. Serving the community with
              dedication and compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+911234567890" className="hover:text-teal-400 transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li>Near City Center, Main Road</li>
              <li>Your City, Uttar Pradesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Singhal Nursing Home. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
