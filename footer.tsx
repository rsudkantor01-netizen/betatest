import Link from 'next/link'
import { Phone, MapPin, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">RSUD Kepulauan Talaud</h3>
            <p className="text-sm opacity-90">
              Rumah Sakit Umum Daerah yang berkomitmen melayani kesehatan masyarakat Kepulauan Talaud dengan profesional dan penuh dedikasi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Menu Utama</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Beranda</Link></li>
              <li><Link href="/profil" className="hover:underline">Profil</Link></li>
              <li><Link href="/pelayanan" className="hover:underline">Pelayanan</Link></li>
              <li><Link href="/fasilitas" className="hover:underline">Fasilitas</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Kepulauan Talaud, Sulawesi Utara</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>(0435) XXXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>info@rsud-talaud.go.id</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Jam Operasional</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Senin - Jumat</p>
                  <p className="opacity-90">07:00 - 17:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sabtu - Minggu</p>
                  <p className="opacity-90">Darurat 24 Jam</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 RSUD Kepulauan Talaud. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
