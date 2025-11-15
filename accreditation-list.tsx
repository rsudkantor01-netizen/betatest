'use client'

import { Award, Shield, CheckCircle, Trophy } from 'lucide-react'

export default function AccreditationList() {
  const accreditations = [
    {
      icon: Award,
      title: 'Akreditasi Penuh',
      body: 'RSUD Kepulauan Talaud telah mendapat akreditasi penuh dari Komisi Akreditasi Rumah Sakit (KARS) dengan standar pelayanan nasional.',
      year: '2023',
    },
    {
      icon: Shield,
      title: 'Keselamatan Pasien',
      body: 'Sertifikasi Keselamatan Pasien tingkat Lanjut dari Kementerian Kesehatan RI menunjukkan komitmen kami pada keamanan pasien.',
      year: '2023',
    },
    {
      icon: CheckCircle,
      title: 'ISO 9001:2015',
      body: 'Sertifikasi Manajemen Mutu internasional yang membuktikan sistem manajemen kami yang efektif dan efisien.',
      year: '2022',
    },
    {
      icon: Trophy,
      title: 'Penghargaan Pelayanan',
      body: 'Penghargaan Rumah Sakit Terbaik Kategori Pelayanan dari Dinas Kesehatan Provinsi Sulawesi Utara.',
      year: '2023',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Penghargaan & Sertifikasi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bukti nyata komitmen kami terhadap kualitas pelayanan kesehatan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accreditations.map((accred, index) => {
            const Icon = accred.icon
            return (
              <div
                key={index}
                className="bg-white border-2 border-primary/20 rounded-xl p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary">{accred.title}</h3>
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {accred.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{accred.body}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
