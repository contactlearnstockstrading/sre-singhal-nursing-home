import { Phone, CalendarDays } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-white to-teal-50 pt-16">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #0D9488 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
              Trusted Since Decades
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight animate-fade-in-up animation-delay-200">
            Advanced Surgical Care,{' '}
            <span className="text-teal-600">Family Values</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400">
            At Singhal Nursing Home, we combine modern surgical expertise with
            compassionate, personalised care. Your health is our family's
            commitment.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
            >
              <CalendarDays className="w-5 h-5" />
              Book Appointment
            </a>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 border-2 border-teal-600 text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Emergency Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
