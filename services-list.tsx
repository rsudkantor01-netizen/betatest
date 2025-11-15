'use client'

import { Heart, Brain, Zap, Eye, Smile, Bug as Lung, Activity, Users, Clock, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ServicesList() {
  const services = [
    {
      id: 1,
      icon: Heart,
      title: 'Jantung & Vaskuler',
      description: 'Layanan kardiologi lengkap dengan peralatan diagnostik modern',
      features: ['Ekokardiografi', 'EKG', 'Angiografi'],
    },
    {
      id: 2,
      icon: Brain,
      title: 'Saraf',
      description: 'Diagnosis dan pengobatan gangguan saraf dengan dokter spesialis',
      features: ['CT Scan', 'EEG', 'Konsultasi Saraf'],
    },
    {
      id: 3,
      icon: Lung,
      title: 'Paru-Paru & Respirasi',
      description: 'Perawatan penyakit paru-paru dengan fasilitas lengkap',
      features: ['Spirometri', 'Rontgen Paru', 'Terapi Oksigen'],
    },
    {
      id: 4,
      icon: Eye,
      title: 'Mata & Optik',
      description: 'Layanan oftalmologi dan pemeriksaan mata komprehensif',
      features: ['Pemeriksaan Refraksi', 'Tonometri', 'Funduskopi'],
    },
    {
      id: 5,
      icon: Smile,
      title: 'Gigi & Mulut',
      description: 'Pelayanan gigi dan kebersihan mulut profesional',
      features: ['Cleaning', 'Pencabutan', 'Scaling'],
    },
    {
      id: 6,
      icon: Activity,
      title: 'Laboratorium',
      description: 'Pemeriksaan laboratorium dengan hasil akurat dan cepat',
      features: ['Darah', 'Urin', 'Mikrobiologi'],
    },
    {
      id: 7,
      icon: Zap,
      title: 'Radiologi',
      description: 'Pemeriksaan radiologi modern dengan teknologi terkini',
      features: ['Rontgen', 'CT Scan', 'USG'],
    },
    {
      id: 8,
      icon: Users,
      title: 'Kebidanan & Kandungan',
      description: 'Pelayanan kesehatan ibu dan anak yang terpadu',
      features: ['Persalinan', 'Konsultasi Prenatal', 'Posyandu'],
    },
    {
      id: 9,
      icon: Clock,
      title: 'Rawat Jalan',
      description: 'Layanan konsultasi dokter tanpa perlu rawat inap',
      features: ['Dokter Umum', 'Dokter Spesialis', 'Triage'],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Daftar Layanan Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Klik pada layanan untuk mengetahui informasi lebih detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white border-2 border-primary/20 rounded-xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
