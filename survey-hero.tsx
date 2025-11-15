import { Star } from 'lucide-react'

export default function SurveyHero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          <Star className="w-8 h-8" />
          <h1 className="text-5xl font-bold">Survei Kepuasan Pasien</h1>
        </div>
        <p className="text-xl opacity-90 max-w-2xl">
          Suara Anda penting bagi kami! Bagikan pengalaman Anda untuk membantu kami memberikan layanan lebih baik
        </p>
      </div>
    </section>
  )
}
