'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-balance">
            Welcome to Ompee Global School
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-balance">
            At Ompee Global School, we don't just provide education—we create life-changing experiences. Here, children from around the world come together to grow, learn, and discover their true potential in a nurturing environment that honors both Indian traditions and global perspectives.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-balance">
            As a modern educational institution, we focus on holistic development—nurturing the mind, body, and soul. Our approach combines personalized mentorship, values-based learning, and innovative academic programs to prepare students for every stage of life. From daily yoga and meditation to celebrating global festivals, we instill a deep sense of self-awareness and cultural understanding in every child.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {/* Vision */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur" />
            <div className="relative bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Empowering young minds to become confident, compassionate global citizens who combine academic excellence with strong values and cultural pride.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur" />
            <div className="relative bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Offering inclusive, student-centered education that nurtures intellectual curiosity, moral character, and a commitment to serving others while celebrating global diversity.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur" />
            <div className="relative bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Philosophy</h3>
              <p className="text-gray-700 leading-relaxed">
                Education transcends classrooms. We believe in developing responsible citizens through experiential learning, character building, and fostering global awareness.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
