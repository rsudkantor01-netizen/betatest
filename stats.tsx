'use client'

export default function Stats() {
  const stats = [
    { number: '24/7', label: 'Layanan Darurat' },
    { number: '50+', label: 'Dokter Spesialis' },
    { number: '200+', label: 'Tempat Tidur' },
    { number: '15+', label: 'Tahun Melayani' },
  ]

  return (
    <section className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
