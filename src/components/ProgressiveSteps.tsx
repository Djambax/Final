import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import type { IconType } from 'react-icons'

interface StepData {
  step: number
  title: string
  description: string
  icon: IconType
  duration: string
  progress: number
}

interface ProgressiveStepsProps {
  steps: StepData[]
  title?: string
  subtitle?: string
}

const ProgressiveSteps: React.FC<ProgressiveStepsProps> = ({ steps, title, subtitle }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [visibleSteps, setVisibleSteps] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setVisibleSteps(prev => {
          if (prev < steps.length) {
            return prev + 1
          }
          clearInterval(timer)
          return prev
        })
      }, 300) // Révèle une étape toutes les 300ms

      return () => clearInterval(timer)
    }
  }, [isInView, steps.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.2) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Timeline Container */}
        <div className="relative">
          {/* Ligne de progression centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-700 md:block hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"
              initial={{ height: 0 }}
              animate={{ height: isInView ? '100%' : 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={visibleSteps > index ? "visible" : "hidden"}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Card de l'étape */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="card-premium bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500/20 relative group cursor-pointer"
                    whileHover={{ 
                      scale: 1.02, 
                      rotateY: index % 2 === 0 ? 3 : -3,
                      boxShadow: "0 25px 50px rgba(251, 191, 36, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Badge numéro */}
                    <div className="absolute -top-4 -left-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                    </div>

                    {/* Icône */}
                    <div className="flex items-start mb-4">
                      <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-yellow-500/20 transition-colors duration-300">
                        <step.icon className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium mb-3">
                          ⏱️ {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Barre de progression */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Progression</span>
                        <span className="text-sm text-yellow-400 font-bold">{step.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full relative"
                          initial={{ width: 0 }}
                          animate={{ width: visibleSteps > index ? `${step.progress}%` : 0 }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        >
                          {/* Effet de brillance */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Point central (desktop uniquement) */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    className="w-6 h-6 bg-yellow-500 rounded-full border-4 border-gray-900 relative z-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: visibleSteps > index ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  >
                    {/* Effet de pulsation */}
                    <motion.div
                      className="absolute inset-0 bg-yellow-400 rounded-full -z-10"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Espace pour l'autre côté */}
                <div className="w-full md:w-5/12"></div>

                {/* Flèche de connexion (mobile) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="flex md:hidden justify-center my-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: visibleSteps > index ? 1 : 0 }}
                    transition={{ delay: index * 0.2 + 0.8 }}
                  >
                    <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            className="card-premium bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/30 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à démarrer votre projet ? 🚀
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Commençons par un diagnostic gratuit de 30 minutes pour comprendre vos besoins et vous proposer la solution la plus adaptée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Planifier mon diagnostic gratuit
              </button>
              <button className="btn-secondary">
                Poser une question
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgressiveSteps