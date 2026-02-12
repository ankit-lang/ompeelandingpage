'use client'

import { motion } from 'framer-motion'
import {
  BookOpen,
  Users,
  Leaf,
  Globe,
  Heart,
  Zap,
  Award,
  Music,
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Rigorous curriculum combining innovation with proven teaching methodologies',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Heart,
    title: 'Values-Based Education',
    description: 'Instilling integrity, compassion, and social responsibility in every student',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Celebrating diverse cultures while honoring Indian traditions and heritage',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Leaf,
    title: 'Holistic Development',
    description: 'Nurturing mind, body, and soul through integrated learning approaches',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Users,
    title: 'Community Learning',
    description: 'Building strong bonds between students, teachers, and families',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Innovation Hub',
    description: 'Modern facilities and technology-enhanced learning environments',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Award,
    title: 'World-Class Faculty',
    description: 'Experienced educators passionate about student success and growth',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Music,
    title: 'Cultural Programs',
    description: 'Celebrating heritage through music, dance, and artistic expression',
    color: 'from-orange-500 to-orange-600',
  },
]

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
            Why Ompee Global School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Discover what sets us apart: a unique blend of academic rigor, cultural values, and student-centered learning
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
