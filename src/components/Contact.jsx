import { useState } from 'react'
import { MapPin, Clock, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Book an Appointment
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Reach out to us for consultations, appointments, or emergencies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We've received your appointment request. Our team will contact you shortly to confirm.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
                    placeholder="Describe your concern or preferred time..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
                >
                  Request Appointment
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal mb-1">Location</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Singhal Nursing Home<br />
                  Near City Center, Main Road<br />
                  Your City, Uttar Pradesh
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal mb-1">Hours</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Monday – Saturday: 9:00 AM – 8:00 PM<br />
                  Sunday: 10:00 AM – 2:00 PM<br />
                  <span className="text-teal-600 font-medium">Emergency: 24/7</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">
                  <a href="tel:+911234567890" className="hover:text-teal-600 transition-colors">
                    +91 12345 67890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
