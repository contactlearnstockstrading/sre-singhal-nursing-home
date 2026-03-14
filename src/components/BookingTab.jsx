import { useState } from 'react'
import { CalendarDays, Phone, X } from 'lucide-react'
import config from '../config'

export default function BookingTab() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop: Side tab on left edge */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1 bg-teal-600 hover:bg-teal-700 text-white px-2 py-5 rounded-r-xl shadow-lg shadow-teal-600/30 transition-all hover:px-3 writing-vertical-lr"
        style={{ writingMode: 'vertical-lr' }}
      >
        <CalendarDays className="w-5 h-5 rotate-90 mb-2" />
        <span className="text-sm font-semibold tracking-wide">Book Appointment</span>
      </button>

      {/* Mobile: Bottom sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] px-4 py-3 flex gap-3">
        <button
          onClick={() => setOpen(true)}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
        >
          <CalendarDays className="w-4 h-4" />
          Book Appointment
        </button>
        <a
          href={config.phoneLink}
          className="inline-flex items-center justify-center gap-2 border-2 border-teal-600 text-teal-700 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-50 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-teal-50">
              <div>
                <h3 className="text-lg font-bold text-charcoal">Book an Appointment</h3>
                <p className="text-sm text-gray-500">Fill the form or call us directly</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick actions */}
            <div className="px-6 py-4 flex gap-3 border-b border-gray-100">
              <a
                href={config.phoneLink}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={config.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Google Form */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 180px)' }}>
              <iframe
                src={config.googleFormUrl}
                title="Book an Appointment"
                className="w-full border-0"
                style={{ height: '1391px' }}
              >
                Loading form…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
