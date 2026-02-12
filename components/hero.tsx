'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-green-500 opacity-10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-500 opacity-10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left column - Text */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-green-400 text-lg font-semibold tracking-wide uppercase"
              >
                Welcome to Excellence
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold text-white text-balance leading-tight"
              >
                Empowering Minds, Shaping Future
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-blue-100 leading-relaxed text-balance"
              >
                At Ompee Global School, we don't just provide education—we create life-changing experiences. Combining Indian traditions with global perspectives to nurture well-rounded, confident individuals.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
                <span className="relative flex items-center justify-center gap-2">
                  Apply for Admission
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right column - Stats showcase */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '100%', label: 'Holistic Development' },
              { number: '30+', label: 'Active Programs' },
              { number: '#1', label: 'Academic Excellence' },
              { number: '1000+', label: 'Happy Families' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300"
              >
                <p className="text-4xl font-bold text-green-400 mb-2">{stat.number}</p>
                <p className="text-sm text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
