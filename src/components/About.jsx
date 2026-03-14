import { Award, UserRound } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Suresh Singhal',
    credentials: 'M.B.B.S., D.ORTH, M.S. GEN. SURG',
    specialty: 'General & Laparoscopic Surgeon',
    regNo: '23791',
    description:
      'With decades of surgical experience, Dr. Suresh Singhal specialises in general surgery and advanced laparoscopic procedures, delivering precise, minimally-invasive care.',
  },
  {
    name: 'Dr. Sudha Singhal',
    credentials: 'M.B.B.S.',
    specialty: 'Ex. Resi. Surgeon — Queen Mary Hospital, Lucknow',
    regNo: '26708',
    description:
      'Dr. Sudha Singhal brings extensive clinical experience from Queen Mary Hospital, Lucknow, providing dedicated and compassionate patient care across a wide range of medical needs.',
  },
]

export default function About() {
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
              className="relative bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-8 sm:p-10 hover:shadow-xl hover:shadow-teal-100/50 transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center text-white shrink-0">
                  <UserRound className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal">{doc.name}</h3>
                  <p className="text-sm text-teal-600 font-semibold">{doc.credentials}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{doc.description}</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Award className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{doc.specialty}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded">
                    Regn. No. {doc.regNo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
