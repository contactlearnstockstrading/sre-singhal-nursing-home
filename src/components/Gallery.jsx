import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Import all gallery images here
// Add or remove images as needed — just update this array
const images = Object.values(
  import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
)

const captions = [
  'Hospital Courtyard',
  'Hospital Premises',
  'Hospital Building & Entrance',
  'Waiting Area',
  'Reception & Lobby',
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  if (images.length === 0) return null

  function prev() {
    setLightbox((i) => (i === 0 ? images.length - 1 : i - 1))
  }

  function next() {
    setLightbox((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Our Hospital
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            A glimpse of our facilities and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 cursor-pointer ${
                images.length === 5 && i < 3 ? 'md:col-span-2' : 'md:col-span-3'
              }`}
            >
              <img
                src={src}
                alt={captions[i] || `Hospital photo ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              {captions[i] && (
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">{captions[i]}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={images[lightbox]}
            alt={captions[lightbox] || `Hospital photo ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />

          <button
            onClick={next}
            className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-6 text-center text-white/70 text-sm">
            {captions[lightbox] && <span className="block mb-1 text-white font-medium">{captions[lightbox]}</span>}
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  )
}
