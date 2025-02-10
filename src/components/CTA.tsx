'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import FuturisticButton from './FuturisticButton'

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      className="relative py-20 bg-black overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gt-gold via-gt-gold-light to-white">
              Ready to Start Your Research Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our waitlist today and be the first to know when we launch.
          </p>
          <FuturisticButton
            size="lg"
            onClick={() => window.open('https://form.typeform.com/to/EgU0G2Fa', '_blank')}
            className="inline-flex items-center"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </FuturisticButton>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-72 h-72 bg-gt-gold/5 rounded-full filter blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}
