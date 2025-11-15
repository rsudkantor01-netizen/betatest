'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/profil' },
  { label: 'Pelayanan', href: '/pelayanan' },
  { label: 'Ruangan', href: '/ruangan' },
  { label: 'Fasilitas', href: '/fasilitas' },
  { label: 'Akreditasi', href: '/akreditasi' },
  { label: 'Komite', href: '/komite' },
  { label: 'Survey', href: '/survey' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Hospital Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow">
              RS
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-primary font-bold text-lg">RSUD</span>
              <span className="text-primary text-xs">Kepulauan Talaud</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-primary hover:bg-muted transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
