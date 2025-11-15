'use client'

export default function SurveyStats() {
  const stats = [
    { label: 'Total Responden', value: '2,458' },
    { label: 'Rata-rata Rating', value: '4.7/5' },
    { label: 'Tingkat Kepuasan', value: '94%' },
    { label: 'Rekomendasi', value: '92%' },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Kepuasan Pasien</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data kepuasan pasien berdasarkan survei tahun ini
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border-2 border-primary/10 text-center hover:border-primary/50 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 border-2 border-primary/20">
          <h3 className="text-xl font-bold text-primary mb-6">Implementasi Feedback</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Analisis Data</h4>
                <p className="text-sm text-muted-foreground">Kami menganalisis setiap feedback untuk memahami kebutuhan pasien</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Perencanaan</h4>
                <p className="text-sm text-muted-foreground">Mengembangkan strategi untuk meningkatkan area yang perlu ditingkatkan</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Implementasi</h4>
                <p className="text-sm text-muted-foreground">Melaksanakan perbaikan dan evaluasi hasilnya secara berkelanjutan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
