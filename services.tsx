'use client'

import Link from 'next/link'
import { Activity, Heart, Stethoscope, Pill, Eye, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Pelayanan Jantung',
      description: 'Layanan kardiologi dan perawatan jantung terkemuka dengan teknologi modern',
    },
    {
      icon: Stethoscope,
      title: 'Pemeriksaan Umum',
      description: 'Konsultasi dokter umum dan pemeriksaan kesehatan rutin',
    },
    {
      icon: Pill,
      title: 'Farmasi',
      description: 'Obat-obatan lengkap dan konsultasi farmasis profesional',
    },
    {
      icon: Eye,
      title: 'Mata & Gigi',
      description: 'Klinik mata dan perawatan gigi dengan dokter berpengalaman',
    },
    {
      icon: Activity,
      title: 'Laboratorium',
      description: 'Pemeriksaan laboratorium lengkap dengan hasil akurat',
    },
    {
      icon: Zap,
      title: 'Emergency',
      description: 'Tim emergency response 24 jam siap membantu Anda',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Layanan Kesehatan Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan kesehatan terpadu untuk memenuhi kebutuhan medis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white border-2 border-primary/20 rounded-xl p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 group-hover:bg-primary group-hover:text-white rounded-lg mb-4 transition-all">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/pelayanan"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Lihat Semua Layanan
          </Link>
        </div>
      </div>
    </section>
  )
}
