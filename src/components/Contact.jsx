import { MapPin, Clock, Phone, CalendarDays } from 'lucide-react'
import config from '../config'

export default function Contact({ onBookAppointment }) {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Reach out to us for consultations, appointments, or emergencies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Location */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-charcoal mb-2">Location</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {config.name}<br />
              {config.address.line1}<br />
              {config.address.line2}
            </p>
          </div>

          {/* Hours */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-charcoal mb-2">Hours</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {config.hours.weekdays}<br />
              {config.hours.weekends}<br />
              <span className="text-teal-600 font-medium">{config.hours.emergency}</span>
            </p>
          </div>

          {/* Phone */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-charcoal mb-2">Phone</h3>
            <p className="text-gray-600 text-sm mb-4">
              <a href={config.phoneLink} className="hover:text-teal-600 transition-colors text-lg font-medium">
                {config.phoneDisplay}
              </a>
            </p>
            <a
              href={config.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Book Appointment CTA */}
        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
          >
            <CalendarDays className="w-6 h-6" />
            Book an Appointment
          </button>
          <p className="mt-3 text-sm text-gray-500">Fill out a quick form and we'll get back to you</p>
        </div>
      </div>
    </section>
  )
}
