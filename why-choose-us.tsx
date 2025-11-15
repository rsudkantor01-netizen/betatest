'use client'

import { CheckCircle, Users, Award, Clock } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Dokter dan tenaga medis bersertifikat internasional',
    },
    {
      icon: Award,
      title: 'Terakreditasi',
      description: 'Terakreditasi penuh oleh lembaga kesehatan nasional',
    },
    {
      icon: Clock,
      title: 'Responsif',
      description: 'Pelayanan cepat dan responsif 24 jam setiap hari',
    },
    {
      icon: CheckCircle,
      title: 'Terpercaya',
      description: 'Dipercaya oleh ribuan pasien dan keluarganya',
    },
  ]

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Mengapa Pilih Kami?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Komitmen kami adalah memberikan pelayanan kesehatan terbaik dengan standar internasional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="bg-primary-foreground/10 rounded-xl p-8 text-primary-foreground">
                <Icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="opacity-90">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
