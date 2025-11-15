'use client'

import Link from 'next/link'
import { ArrowRight, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-96">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full w-fit">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">Kesehatan Anda adalah Prioritas Kami</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              RSUD Kepulauan Talaud
            </h1>
            
            <p className="text-lg opacity-90 leading-relaxed max-w-lg">
              Rumah Sakit Umum Daerah yang berkomitmen memberikan pelayanan kesehatan berkualitas dengan sentuhan kemanusiaan untuk masyarakat Kepulauan Talaud dan sekitarnya.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/pelayanan"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Jelajahi Pelayanan
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/profil"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-primary-foreground/10 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary-foreground/5 rounded-2xl transform -rotate-6"></div>
              <div className="relative bg-gradient-to-br from-primary-foreground to-primary-foreground/80 rounded-2xl w-full h-full flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <Heart className="w-32 h-32 mx-auto mb-4 opacity-80" />
                  <p className="text-2xl font-bold">Peduli Kesehatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
