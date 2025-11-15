'use client'

import { Stethoscope, Zap, Microscope, Cpu, Pill, Radio, Waves, Plus } from 'lucide-react'

export default function FacilitiesList() {
  const categories = [
    {
      icon: Radio,
      title: 'Radiologi & Imaging',
      items: [
        'CT Scanner 128 Slice',
        'Mesin Rontgen Digital',
        'USG 4D',
        'Mammografi',
      ],
    },
    {
      icon: Microscope,
      title: 'Laboratorium',
      items: [
        'Analyzer Hematologi Otomatis',
        'Analyzer Kimia Klinis',
        'Pemeriksaan Mikrobiologi',
        'Patologi Klinik',
      ],
    },
    {
      icon: Pill,
      title: 'Farmasi & Apotek',
      items: [
        'Obat-obatan Lengkap',
        'Layanan Konsultasi Farmasi',
        'Obat Injeksi',
        'Obat Generik & Paten',
      ],
    },
    {
      icon: Waves,
      title: 'Terapi & Rehabilitasi',
      items: [
        'Treadmill Medis',
        'Terapi Fisik',
        'Terapi Okupasi',
        'Terapi Wicara',
      ],
    },
    {
      icon: Cpu,
      title: 'Teknologi Medis',
      items: [
        'Sistem Informasi Rumah Sakit Terintegrasi',
        'EKG Digital',
        'Spirometri',
        'Monitoring Jarak Jauh',
      ],
    },
    {
      icon: Plus,
      title: 'Kamar Operasi',
      items: [
        'Kamar Operasi Modern',
        'Laminar Air Flow System',
        'Alat Anestesi Canggih',
        'Peralatan Bedah Lengkap',
      ],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Peralatan & Fasilitas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dilengkapi dengan teknologi medis terkini untuk memberikan layanan terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="bg-white border-2 border-primary/20 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-6 flex items-center gap-4">
                  <Icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Items */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
