'use client'

import { Check } from 'lucide-react'

export default function ServicesProcedure() {
  const steps = [
    {
      number: '1',
      title: 'Pendaftaran',
      description: 'Daftarkan diri Anda di loket pendaftaran dengan membawa identitas',
    },
    {
      number: '2',
      title: 'Triage',
      description: 'Tim medis kami akan melakukan pemeriksaan awal untuk menentukan prioritas',
    },
    {
      number: '3',
      title: 'Konsultasi',
      description: 'Konsultasi dengan dokter spesialis sesuai dengan kebutuhan Anda',
    },
    {
      number: '4',
      title: 'Pemeriksaan',
      description: 'Lakukan pemeriksaan tambahan jika diperlukan sesuai rekomendasi dokter',
    },
    {
      number: '5',
      title: 'Diagnosa',
      description: 'Dokter akan memberikan hasil diagnosa dan rencana pengobatan',
    },
    {
      number: '6',
      title: 'Terapi',
      description: 'Menerima terapi atau resep obat sesuai dengan rekomendasi dokter',
    },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Prosedur Pelayanan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah tahapan pelayanan yang akan Anda alami di RSUD Kepulauan Talaud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border-l-4 border-primary hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
