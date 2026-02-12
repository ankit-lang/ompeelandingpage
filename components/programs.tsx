'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    name: 'Pre-Primary & Primary',
    image:
      'https://images.unsplash.com/photo-1427504494785-405a6e8a69ba?w=400&h=300&fit=crop',
    description:
      'Building strong foundations through play-based and experiential learning',
  },
  {
    name: 'Middle School',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop',
    description:
      'Transitioning to deeper learning with subject specialization and skill development',
  },
  {
    name: 'Senior Secondary',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    description:
      'Preparing for higher education with rigorous academics and career guidance',
  },
  {
    name: 'Co-Curricular Activities',
    image:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop',
    description:
      'Sports, arts, music, and clubs fostering well-rounded development',
  },
]

export function Programs() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            We do it differently! But how?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Our comprehensive programs are designed to nurture every aspect of student development
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-gray-900 h-80 cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${program.image}')`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {program.name}
                </h3>
                <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {program.description}
                </p>
                <motion.div
                  className="flex items-center text-green-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
