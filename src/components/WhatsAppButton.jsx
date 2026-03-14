import { MessageCircle } from 'lucide-react'
import config from '../config'

export default function WhatsAppButton() {
  return (
    <a
      href={config.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Request a call back on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="text-sm font-semibold hidden sm:inline">Request Call Back</span>
    </a>
  )
}
