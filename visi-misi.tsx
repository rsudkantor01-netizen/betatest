'use client'

import { Target, Compass } from 'lucide-react'

export default function VisiMisi() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Visi */}
          <div className="bg-white border-2 border-primary/20 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-4">Visi</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Menjadi Rumah Sakit Umum Daerah yang unggul, terpercaya, dan berdedikasi dalam memberikan pelayanan kesehatan berkualitas tinggi dengan standar internasional untuk masyarakat Kepulauan Talaud dan sekitarnya.
                </p>
              </div>
            </div>
          </div>

          {/* Misi */}
          <div className="bg-white border-2 border-primary/20 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-4">Misi</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Memberikan pelayanan kesehatan yang mudah diakses oleh seluruh masyarakat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Meningkatkan kualitas SDM dan fasilitas kesehatan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Menjalankan praktik terbaik dalam manajemen rumah sakit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Menciptakan lingkungan kerja yang profesional dan berdedikasi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
