import { Clock, ShieldCheck, HeartPulse, Users } from 'lucide-react'

const stats = [
  { icon: Clock, value: '30+', label: 'Years of Experience' },
  { icon: ShieldCheck, value: '2', label: 'Registered Surgeons' },
  { icon: HeartPulse, value: '10,000+', label: 'Successful Surgeries' },
  { icon: Users, value: '50,000+', label: 'Happy Patients' },
]

export default function TrustBar() {
  return (
    <section className="bg-charcoal py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
