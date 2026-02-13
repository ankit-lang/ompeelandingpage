'use client'

import { motion } from 'framer-motion'
import { Users, MapPin, MessageCircle, FileCheck } from 'lucide-react'
import { useState } from 'react';

const steps = [
  {
    icon: Users,
    title: 'Register Your Child',
    description: 'Begin your journey with us',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Experience our campus',
  },
  {
    icon: MessageCircle,
    title: 'Consult',
    description: 'Discuss with our team',
  },
  {
    icon: FileCheck,
    title: 'Admission',
    description: 'Secure your admission',
  },
]

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  class: string;
  city: string;
};
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwQIi7GXl-dOKGvG2KLoCiod7Wc0c4HF9kRSmj39wDa5eBHQDAGgZCWehK-2NHGEWii/exec";

export function Journey() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    class: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify(form),
      });

      alert("Submitted successfully!");
      setForm({
        name: "",
        email: "",
        whatsapp: "",
        class: "",
        city: "",
      });
    } catch (error) {
      alert("Submission failed");
    }

    setLoading(false);
  }

    
    return (
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Ready to Begin a Journey of Lifelong Excellence?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-blue-100 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div id='contact-form' className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl opacity-20 blur-xl" />
              <div className="relative bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                <p className="text-blue-100 text-sm text-center  mb-6">
                  Ompee Global School
                  <br />
                  Sector 1, IMT Manesar (Gurgaon) Haryana – 122052

                </p>
                <h3 className="text-2xl text-center font-bold text-white mb-6">
                  <p>                Admissions Open</p>
                  Classes-Pre-Nursery to Grade 8 <br />
                  Session 2026-27

                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}  >
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={form.name}
                      name="name"
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-green-400 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name='email'
                      onChange={handleChange}
                      value={form.email}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-green-400 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="whatsapp"
                      onChange={handleChange}
                      value={form.whatsapp}
                      placeholder="Whatsapp No."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-green-400 transition-colors"
                    />
                  </div>
                  <div>
                    <select
                      defaultValue=""
                      onChange={handleChange}
                      value={form.class}
                      required
                      name="class"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-400 focus:outline-none focus:border-green-400 transition-colors"
                    >
                      <option value="" disabled>
                        Select Class
                      </option>
                      <option className='text-black' value="prenursery">Pre-Nursery</option>
                      <option className='text-black' value="nursery">Nursery</option>
                      <option className='text-black' value="kg1">KG 1</option>
                      <option className='text-black' value="kg2">KG 2</option>
                      <option className='text-black' value="class1">Class 1</option>
                      <option className='text-black' value="class2">Class 2</option>
                      <option className='text-black' value="class3">Class 3</option>
                      <option className='text-black' value="class4">Class 4</option>
                      <option className='text-black' value="class5">Class 5</option>
                      <option className='text-black' value="class6">Class 6</option>
                      <option className='text-black' value="class7">Class 7</option>
                      <option className='text-black' value="class8">Class 8</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      value={form.city}
                      onChange={handleChange}
                      required
                      placeholder="City"
                      name='city'
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-green-400 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-300"
                  >
                    {loading ? "Submitting..." : "Submit Now"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
