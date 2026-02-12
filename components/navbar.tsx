'use client'

import { useState } from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#programs', label: 'Programs' },
    { href: '#admission', label: 'Admission' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 hidden md:block bg-white border-b border-border shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and School Info */}
            <div className="flex items-center gap-4">
              {/* Logo Circle */}
              <div className="w-[140px]">
                <img src="/ompeelogo.png" alt="Ompee Global School Logo" />

              </div>

              {/* School Info */}
              <div className="flex flex-col">
                {/* <h1 className="text-xl font-bold text-primary">Ompee Global School</h1>
                <p className="text-xs text-muted-foreground">
                  Affiliated to CBSE, Leading Cambridge School
                </p> */}
              </div>
            </div>

            {/* Center Navigation Links */}
            {/* <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-secondary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div> */}

            {/* Right Info */}
            <div className="flex items-center gap-6">
              {/* Location Info */}
              <div className="hidden sm:flex items-start gap-2">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col text-right">
                  <p className="text-xs font-semibold text-secondary">Sector 1, IMT Manesar
                    (Gurgaon) Haryana </p>
                  <p className="text-xs text-foreground">
                    122052</p>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>

          {/* Secondary Nav for Medium Screens */}
          <div className="hidden md:flex lg:hidden items-center gap-4 mt-3 pt-3 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 md:hidden bg-white border-b border-border shadow-sm"
      >
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Logo and School Info */}
          <div className="flex items-center gap-3 flex-1">
            {/* Logo Circle */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
              <div className="text-white font-bold text-lg">O</div>
            </div>

            {/* School Info */}
            <div className="flex flex-col min-w-0">
              <h1 className="text-base font-bold text-primary truncate">Ompee Global</h1>
              <p className="text-xs text-muted-foreground truncate">
                CBSE Affiliated
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors ml-2"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden border-t border-border"
        >
          <div className="px-4 py-3 space-y-2 bg-muted/50">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-background rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 py-3 mt-3 border-t border-border pt-3">
              <p className="text-xs font-semibold text-secondary flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Location
              </p>
              <p className="text-xs text-foreground mt-1">Multiple Campuses</p>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}
