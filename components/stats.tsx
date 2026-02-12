'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    number: '9000+',
    label: 'Students',
    icon: '👥',
  },
  {
    number: '170+',
    label: 'Expert Faculty',
    icon: '👨‍🏫',
  },
  {
    number: '20+',
    label: 'Years Legacy',
    icon: '📚',
  },
  {
    number: '9.2',
    label: 'CGPA Average',
    icon: '⭐',
  },
]

export function Stats() {
  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-bl from-green-500 opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            What Makes Us Best
          </h2>
          <p className="text-xl text-blue-100 text-balance">
            Proud achievements and growing community of excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={counterVariants}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />

              <div className="relative bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-blue-100 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
