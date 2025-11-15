'use client'

import { Users, Wifi, Tv, Coffee, Wind, Heart } from 'lucide-react'

export default function RoomsList() {
  const rooms = [
    {
      id: 1,
      name: 'Ruang VIP',
      capacity: '1 Pasien',
      price: 'Rp 500.000/hari',
      features: ['AC Pribadi', 'TV 32"', 'WiFi Gratis', 'Kamar Mandi Pribadi', 'Dapur Mini', 'Kursi Tamu'],
    },
    {
      id: 2,
      name: 'Ruang Kelas I',
      capacity: '1-2 Pasien',
      price: 'Rp 350.000/hari',
      features: ['AC Bersama', 'TV 24"', 'WiFi', 'Kamar Mandi Bersama', 'Tempat Istirahat Keluarga'],
    },
    {
      id: 3,
      name: 'Ruang Kelas II',
      capacity: '2-3 Pasien',
      price: 'Rp 200.000/hari',
      features: ['Kipas Angin', 'TV Bersama', 'WiFi', 'Kamar Mandi Bersama', 'Tempat Parkir'],
    },
    {
      id: 4,
      name: 'Ruang Kelas III',
      capacity: '3-4 Pasien',
      price: 'Rp 100.000/hari',
      features: ['Kipas Angin', 'Kamar Mandi Bersama', 'Tempat Parkir', 'Monitor Kesehatan 24 Jam'],
    },
    {
      id: 5,
      name: 'ICU',
      capacity: '1 Pasien',
      price: 'Rp 1.500.000/hari',
      features: ['AC Pribadi', 'Monitor 24 Jam', 'Ventilator', 'Alat Resusitasi', 'Dokter On-Call'],
    },
    {
      id: 6,
      name: 'PICU (Pediatric ICU)',
      capacity: '1 Pasien',
      price: 'Rp 1.200.000/hari',
      features: ['Khusus Anak', 'Monitor Khusus', 'AC Terkontrol', 'Ruang Orang Tua', 'Dokter Anak'],
    },
  ]

  const featureIcons = {
    'AC Pribadi': Wind,
    'AC Bersama': Wind,
    'WiFi Gratis': Wifi,
    'WiFi': Wifi,
    'TV 32"': Tv,
    'TV 24"': Tv,
    'TV Bersama': Tv,
    'Kipas Angin': Wind,
    'Dapur Mini': Coffee,
    'Monitor Kesehatan 24 Jam': Heart,
    'Monitor 24 Jam': Heart,
    'Alat Resusitasi': Heart,
    'Dokter On-Call': Users,
    'Dokter Anak': Users,
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Pilihan Ruangan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai pilihan ruangan dengan fasilitas yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white border-2 border-primary/20 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-6">
                <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
                <p className="text-primary-foreground/90 mb-2">{room.capacity}</p>
                <p className="text-lg font-semibold">{room.price}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-bold text-primary mb-4">Fasilitas:</h4>
                <div className="space-y-3">
                  {room.features.map((feature, idx) => {
                    const IconComponent = featureIcons[feature as keyof typeof featureIcons] || Coffee
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:shadow-lg hover:bg-primary/90 transition-all">
                  Pesan Ruangan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
