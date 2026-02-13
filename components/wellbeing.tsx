'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Zap } from 'lucide-react'

const wellbeingItems = [
  {
    icon: Shield,
    title: 'Campus Safety & Security',
    description: 'State-of-the-art facilities designed with safety as our priority',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Heart,
    title: 'Student Well-being Programs',
    description: 'Comprehensive support for mental, emotional, and physical health',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Zap,
    title: 'COVID-19 Protocols',
    description: 'Advanced health and safety measures for a secure learning environment',
    color: 'from-amber-500 to-amber-600',
  },
]

export function Wellbeing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 text-balance">
            Emphasize Safety and Student Well-Being:
          </h2>
          <p className="text-xl text-gray-400 text-balance">
            Given modern concerns
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {wellbeingItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-4 hover:border-gray-600 transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  {/* <button className="text-green-400 hover:text-green-300 font-semibold text-sm transition-colors">
                    Learn More →
                  </button> */}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
