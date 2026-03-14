import { Scissors, Bone, Syringe, Baby } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Laparoscopic Surgery',
    description:
      'Minimally invasive surgical procedures with faster recovery times, less pain, and smaller incisions using state-of-the-art equipment.',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description:
      'Comprehensive orthopedic care including fracture management, joint treatments, and musculoskeletal rehabilitation.',
  },
  {
    icon: Syringe,
    title: 'General Surgery',
    description:
      'Expert surgical care for a wide range of conditions — from hernia repairs and appendectomies to complex abdominal surgeries.',
  },
  {
    icon: Baby,
    title: 'Maternity & Women\'s Health',
    description:
      'Compassionate maternity care and women\'s health services including prenatal care, delivery, and postnatal support.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Comprehensive medical and surgical services under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <svc.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">{svc.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
