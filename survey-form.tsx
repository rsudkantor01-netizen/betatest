'use client'

import { useState } from 'react'
import { Star, Send } from 'lucide-react'

export default function SurveyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitDate: '',
    department: '',
    doctorRating: 0,
    nurseRating: 0,
    facilityRating: 0,
    cleanlinessRating: 0,
    serviceRating: 0,
    comments: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (field: string, rating: number) => {
    setFormData(prev => ({ ...prev, [field]: rating }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Survey submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        visitDate: '',
        department: '',
        doctorRating: 0,
        nurseRating: 0,
        facilityRating: 0,
        cleanlinessRating: 0,
        serviceRating: 0,
        comments: '',
      })
    }, 3000)
  }

  const RatingInput = ({ label, field }: { label: string; field: string }) => (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map(rating => (
          <button
            key={rating}
            type="button"
            onClick={() => handleRatingChange(field, rating)}
            className="transition-all hover:scale-110"
          >
            <Star
              className={`w-8 h-8 ${
                rating <= formData[field as keyof typeof formData]
                  ? 'fill-primary text-primary'
                  : 'text-muted-foreground'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border-2 border-primary/20 p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Star className="w-8 h-8 text-primary fill-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Terima Kasih!</h3>
              <p className="text-muted-foreground">
                Kami menghargai feedback Anda. Data Anda telah kami terima dan akan membantu kami meningkatkan kualitas layanan.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="border-b border-primary/10 pb-8">
                <h3 className="text-lg font-bold text-primary mb-6">Informasi Pribadi</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="(0435) XXXX-XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Tanggal Kunjungan</label>
                    <input
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">Departemen yang Dikunjungi</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Pilih Departemen</option>
                    <option value="emergency">Gawat Darurat</option>
                    <option value="cardiology">Jantung</option>
                    <option value="neurology">Saraf</option>
                    <option value="orthopedic">Ortopedi</option>
                    <option value="pediatric">Anak</option>
                    <option value="obstetric">Kebidanan</option>
                    <option value="dental">Gigi</option>
                    <option value="eye">Mata</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
              </div>

              {/* Ratings */}
              <div className="border-b border-primary/10 pb-8">
                <h3 className="text-lg font-bold text-primary mb-6">Penilaian Layanan</h3>
                <div className="space-y-6">
                  <RatingInput label="Kualitas Dokter" field="doctorRating" />
                  <RatingInput label="Kualitas Perawat" field="nurseRating" />
                  <RatingInput label="Kualitas Fasilitas" field="facilityRating" />
                  <RatingInput label="Kebersihan & Sanitasi" field="cleanlinessRating" />
                  <RatingInput label="Kecepatan Layanan" field="serviceRating" />
                </div>
              </div>

              {/* Comments */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Komentar & Saran</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  placeholder="Silakan bagikan pengalaman dan saran Anda untuk meningkatkan pelayanan kami..."
                  rows={6}
                  className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Kirim Survey
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
