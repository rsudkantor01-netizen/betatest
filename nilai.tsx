'use client'

import { Heart, Shield, Users, Lightbulb, Award } from 'lucide-react'

export default function Nilai() {
  const values = [
    {
      icon: Heart,
      title: 'Kepedulian',
      description: 'Kami peduli pada kesejahteraan dan kesehatan setiap pasien',
    },
    {
      icon: Shield,
      title: 'Keamanan',
      description: 'Standar keselamatan pasien adalah prioritas utama kami',
    },
    {
      icon: Users,
      title: 'Kolaborasi',
      description: 'Tim kerja yang solid untuk hasil yang optimal',
    },
    {
      icon: Lightbulb,
      title: 'Inovasi',
      description: 'Selalu mencari cara baru untuk meningkatkan layanan',
    },
    {
      icon: Award,
      title: 'Keunggulan',
      description: 'Berkomitmen pada standar tertinggi dalam perawatan kesehatan',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Nilai-Nilai Kami</h2>
          <p className="text-lg text-muted-foreground">
            Prinsip-prinsip yang memandu setiap tindakan kami dalam melayani Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="bg-white border-2 border-primary/10 hover:border-primary/50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
