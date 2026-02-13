'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-r from-blue-950 to-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-96 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ompee Global School
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering minds, shaping future leaders through values-based education combining Indian traditions with global perspective.
            </p>
          </motion.div>

          {/* Quick Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About Us', 'Programs', 'Admissions', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Resources */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {['Alumni', 'Facilities', 'Blog', 'Events'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 mb-1 text-gray-400">
                <MapPin className="w-4 h-4 text-green-400" />
                Sector 1, IMT Manesar
                (Gurgaon) Haryana –
                122052
              </li>
              <a href="tel:+919953350151" className="text-gray-400 hover:text-green-400 transition-colors">
                
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-green-400" />
                +91 9953350151
              </li>
              </a>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-green-400" />
                <a href="mailto:admission@ompeeglobalschool.com" className="text-green-400 hover:text-green-300 transition-colors">
                  admission@ompeeglobalschool.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-sm text-gray-400"
          >
            <p>
              © {currentYear} Ompee Global School. All rights reserved. | Empowering minds, Shaping future
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
