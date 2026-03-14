import { Maximize2 } from 'lucide-react'
import config from '../config'

const embedUrl = `https://www.google.com/maps/embed?pb=!4v!6m8!1m7!1s${config.googleMapsPanoId}!2m2!1d29.968!2d77.546!3f19.9!4f0!5f0.75`
const fullViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&pano=${config.googleMapsPanoId}`

export default function VirtualTour() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Virtual Tour
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Take a 360° look around our hospital. Drag to explore.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
          <iframe
            src={embedUrl}
            title="360° Virtual Tour of Singhal Nursing Home"
            className="w-full border-0"
            style={{ height: '500px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            href={fullViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 inline-flex items-center gap-2 bg-white/90 hover:bg-white text-charcoal px-4 py-2 rounded-lg text-sm font-medium shadow-md backdrop-blur transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
            Full Screen
          </a>
        </div>
      </div>
    </section>
  )
}
