'use client'

export default function Certificates() {
  const certificates = [
    {
      title: 'Standar Keselamatan Pasien',
      details: ['Identifikasi Pasien', 'Komunikasi Efektif', 'Pencegahan Infeksi', 'Pencegahan Cedera Pasien'],
    },
    {
      title: 'Standar Mutu Layanan',
      details: ['Kepuasan Pasien', 'Waktu Tunggu', 'Aksesibilitas', 'Profesionalisme Tim'],
    },
    {
      title: 'Standar Hygiene & Sanitasi',
      details: ['Sterilisasi Alat', 'Kebersihan Lingkungan', 'Pengelolaan Limbah', 'Kesehatan Lingkungan'],
    },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Standar yang Kami Terapkan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prinsip-prinsip kualitas yang menjadi dasar operasional kami setiap hari
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border-l-4 border-primary hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{cert.title}</h3>
              <ul className="space-y-3">
                {cert.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
