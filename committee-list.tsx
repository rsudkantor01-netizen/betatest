'use client'

import { Users, ClipboardList, Shield, Heart, Stethoscope, Cog } from 'lucide-react'

export default function CommitteeList() {
  const committees = [
    {
      icon: Users,
      title: 'Direksi',
      members: ['Direktur Utama', 'Direktur Medis', 'Direktur Perawatan', 'Direktur Penunjang'],
      description: 'Pimpinan tertinggi yang mengarahkan visi dan misi RSUD Kepulauan Talaud',
    },
    {
      icon: ClipboardList,
      title: 'Komite Mutu',
      members: ['Koordinator Mutu', 'Tim QA/QC', 'Tim Akreditasi', 'Tim Audit Internal'],
      description: 'Memastikan standar kualitas pelayanan tetap tinggi dan konsisten',
    },
    {
      icon: Shield,
      title: 'Komite Keselamatan Pasien',
      members: ['Ketua Komite', 'Tim Keselamatan', 'Risk Manager', 'Patient Safety Officer'],
      description: 'Mengimplementasikan dan mengawasi program keselamatan pasien',
    },
    {
      icon: Heart,
      title: 'Komite Medis',
      members: ['Ketua Komite', 'Dokter Spesialis', 'Tim Kredensial', 'Supervisor Medis'],
      description: 'Mengawasi kompetensi dan praktik medis di rumah sakit',
    },
    {
      icon: Stethoscope,
      title: 'Komite Etika',
      members: ['Ketua Komite', 'Tim Etika', 'Konsultan Etika', 'Wakil Pasien'],
      description: 'Memastikan etika medis dan hak pasien selalu terjaga',
    },
    {
      icon: Cog,
      title: 'Komite Manajemen',
      members: ['Kepala Bagian HRD', 'Kepala Keuangan', 'Kepala Operasional', 'Kepala Teknis'],
      description: 'Mengelola aspek operasional dan administratif rumah sakit',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Komite & Departemen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Struktur organisasi yang terkoordinasi untuk memberikan layanan terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee, index) => {
            const Icon = committee.icon
            return (
              <div
                key={index}
                className="bg-white border-2 border-primary/20 rounded-xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary flex-1">{committee.title}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{committee.description}</p>
                
                <div className="pt-4 border-t border-primary/10">
                  <p className="text-xs font-semibold text-primary mb-2">Anggota:</p>
                  <ul className="space-y-1">
                    {committee.members.map((member, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{member}</span>
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
