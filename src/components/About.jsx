import { Award, UserRound, Clock, Stethoscope, BadgeCheck, CalendarDays } from 'lucide-react'
import config from '../config'

const doctors = [
  {
    name: 'Dr. Suresh Singhal',
    credentials: 'M.B.B.S., D.ORTH, M.S. GEN. SURG',
    role: 'Chief Surgeon & Director',
    specialty: 'General & Laparoscopic Surgery',
    departments: ['General Surgery', 'Laparoscopic Surgery', 'Orthopedics'],
    experience: '30+',
    regNo: '23791',
    description:
      'With decades of surgical experience, Dr. Suresh Singhal specialises in general surgery and advanced laparoscopic procedures, delivering precise, minimally-invasive care.',
  },
  {
    name: 'Dr. Sudha Singhal',
    credentials: 'M.B.B.S.',
    role: 'Senior Consultant',
    specialty: 'General Medicine & Women\'s Health',
    departments: ['General Medicine', 'Maternity Care', 'Women\'s Health'],
    experience: '25+',
    regNo: '26708',
    description:
      'Dr. Sudha Singhal brings extensive clinical experience from Queen Mary Hospital, Lucknow, providing dedicated and compassionate patient care across a wide range of medical needs.',
  },
]

export default function About({ onBookAppointment }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Meet Our Doctors
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            A family of skilled medical professionals dedicated to your well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {doctors.map((doc) => (
            <div
              key={doc.regNo}
              className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-teal-100/50 transition-shadow duration-300"
            >
              {/* Top banner */}
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-3">
                <p className="text-teal-100 text-xs font-semibold uppercase tracking-wider">{doc.role}</p>
              </div>

              {/* Profile header */}
              <div className="px-6 sm:px-8 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center text-teal-600 shrink-0 border border-teal-200">
                    <UserRound className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">{doc.name}</h3>
                    <p className="text-sm text-teal-600 font-semibold mt-0.5">{doc.credentials}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <BadgeCheck className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="text-xs text-gray-500 font-mono">Regn. No. {doc.regNo}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="px-6 sm:px-8 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Stethoscope className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="text-sm font-semibold text-charcoal">{doc.specialty}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {doc.departments.map((dept) => (
                    <span
                      key={dept}
                      className="text-xs bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full font-medium"
                    >
                      {dept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats bar */}
              <div className="mx-6 sm:mx-8 mt-5 py-4 border-t border-b border-gray-100 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <div>
                    <span className="text-lg font-bold text-charcoal">{doc.experience}</span>
                    <span className="text-xs text-gray-500 ml-1">Years Exp.</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-teal-600" />
                  <div>
                    <span className="text-xs text-gray-500">Specialist</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="px-6 sm:px-8 pt-4">
                <p className="text-sm text-gray-600 leading-relaxed">{doc.description}</p>
              </div>

              {/* Actions */}
              <div className="px-6 sm:px-8 py-5 flex gap-3">
                <button
                  onClick={onBookAppointment}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
                >
                  <CalendarDays className="w-4 h-4" />
                  Book Appointment
                </button>
                <a
                  href={config.phoneLink}
                  className="inline-flex items-center justify-center gap-2 border-2 border-teal-600 text-teal-700 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-50 transition-colors"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
