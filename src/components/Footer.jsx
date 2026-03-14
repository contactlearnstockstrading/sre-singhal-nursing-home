import logo from '../assets/logo.png'
import config from '../config'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <img src={logo} alt={config.name} className="h-8 w-auto" style={{ filter: 'hue-rotate(160deg) saturate(1.2)' }} />
              {config.name}
            </div>
            <p className="text-sm leading-relaxed">
              {config.tagline}. Serving the community with
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
                <a href={config.phoneLink} className="hover:text-teal-400 transition-colors">
                  {config.phoneDisplay}
                </a>
              </li>
              <li>{config.address.line1}</li>
              <li>{config.address.line2}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
