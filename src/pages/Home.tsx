import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  HiOutlineChartBar, 
  HiOutlineSpeakerphone, 
  HiOutlineUsers, 
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
  HiOutlineStar,
  HiOutlineClock,
  HiOutlineHeart
} from 'react-icons/hi'

// Composant pour les compteurs animés
const AnimatedCounter: React.FC<{ target: number; suffix: string; isInView: boolean }> = ({ target, suffix, isInView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 secondes
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target, isInView])

  return (
    <span className="text-3xl md:text-4xl font-bold text-black">
      {count}{suffix}
    </span>
  )
}

const Home: React.FC = () => {
  const heroRef = useRef(null)
  const formationsRef = useRef(null)
  const prestationsRef = useRef(null)
  const ctaRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isFormationsInView = useInView(formationsRef, { once: true, margin: "-100px" })
  const isPrestationsInView = useInView(prestationsRef, { once: true, margin: "-100px" })
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const formations = [
    {
      title: "Business & Entrepreneuriat",
      icon: HiOutlineChartBar,
      color: "blue",
      description: "De l'idée au lancement, maîtrisez tous les aspects de la création d'entreprise"
    },
    {
      title: "Marketing & Communication",
      icon: HiOutlineSpeakerphone,
      color: "purple",
      description: "Développez votre visibilité avec les outils digitaux modernes"
    },
    {
      title: "Recrutement & Management",
      icon: HiOutlineUsers,
      color: "indigo",
      description: "Constituez et managez efficacement vos équipes"
    },
    {
      title: "Intelligence Artificielle",
      icon: HiOutlineLightningBolt,
      color: "amber",
      description: "Intégrez l'IA dans votre stratégie d'entreprise"
    }
  ]

  const prestations = [
    {
      title: "Pack OF Lancement",
      price: "Sur devis",
      color: "blue",
      features: ["Création OF complète", "Mise en conformité Qualiopi", "Support juridique"]
    },
    {
      title: "Pack Communication",
      price: "À partir de 2500€",
      popular: true,
      color: "purple",
      features: ["Site internet professionnel", "Image de marque", "Stratégie digitale"]
    },
    {
      title: "Pack Entreprise",
      price: "Sur mesure",
      color: "orange",
      features: ["Solution complète", "Accompagnement 12 mois", "Support prioritaire"]
    }
  ]

  const stats = [
    { target: 500, suffix: "+", label: "entrepreneurs accompagnés" },
    { target: 95, suffix: "%", label: "taux de satisfaction" },
    { target: 7, suffix: "", label: "domaines d'expertise" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="pt-24">
      {/* Hero Section Premium */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Vidéo Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/shutterstock_3614788497.mov" type="video/quicktime" />
          </video>
          
          {/* Overlay gradient premium */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-yellow-900/70"></div>
          
          {/* Overlay avec effet de particules */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
            `
          }}></div>
        </div>

        {/* Background Animated Orbs - Version Premium (par-dessus la vidéo) */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -150, 0],
              y: [0, 100, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -80, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-gradient-to-r from-white/10 to-yellow-200/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              data-text="IMPÉRIA"
            >
              NOVA <span className="gradient-text" data-text="IMPÉRIA">IMPÉRIA</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto font-medium"
            >
              Accompagner tous les entrepreneurs dans la construction d'une image forte et cohérente
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Formation d'excellence et conseil stratégique pour développer votre projet avec succès
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Link
                to="/formations"
                className="btn-primary inline-flex items-center justify-center text-lg"
              >
                Découvrir nos formations
              </Link>
              <Link
                to="/prestations"
                className="btn-secondary inline-flex items-center justify-center text-lg"
              >
                Nos prestations
              </Link>
            </motion.div>

            {/* Stats Premium */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-2 relative">
                    <AnimatedCounter 
                      target={stat.target} 
                      suffix={stat.suffix} 
                      isInView={isHeroInView} 
                    />
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"></div>
                  </div>
                  <div className="text-gray-300 font-medium group-hover:text-yellow-400 transition-colors duration-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Formations Preview Section */}
      <section ref={formationsRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormationsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos domaines d'<span className="gradient-text" data-text="expertise">expertise</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des formations d'excellence pour développer vos compétences entrepreneuriales
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormationsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {formations.map((formation, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-premium text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${
                  formation.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  formation.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  formation.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                  'from-yellow-500 to-yellow-600'
                } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <formation.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {formation.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {formation.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isFormationsInView ? "visible" : "hidden"}
            className="text-center"
          >
            <Link
              to="/formations"
              className="btn-primary inline-flex items-center text-lg"
            >
              Voir toutes nos formations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Prestations Preview Section */}
      <section ref={prestationsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isPrestationsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos <span className="gradient-text" data-text="solutions">solutions</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des packs complets pour tous vos besoins d'accompagnement
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isPrestationsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {prestations.map((prestation, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(251, 191, 36, 0.2)"
                }}
                className={`relative text-center group cursor-pointer transition-all duration-500 ${
                  prestation.popular ? 'card-premium ring-2 ring-yellow-400 transform scale-105' : 'card-standard'
                }`}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {prestation.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Populaire
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {prestation.title}
                </h3>
                <div className="text-3xl font-bold mb-6">
                  <span className="gradient-text" data-text={prestation.price}>{prestation.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {prestation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <HiOutlineCheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  prestation.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}>
                  En savoir plus
                </button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isPrestationsInView ? "visible" : "hidden"}
            className="text-center"
          >
            <Link
              to="/prestations"
              className="btn-primary inline-flex items-center text-lg"
            >
              Découvrir tous nos packs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Final Section Premium */}
      <section ref={ctaRef} className="section-premium text-white overflow-hidden relative">
        {/* Effet de particules animées */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Transformons votre vision en <span className="gradient-text" data-text="réalité">réalité</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
            >
              Rejoignez les 500+ entrepreneurs qui nous font confiance
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center text-lg"
              >
                Demander un devis gratuit
              </Link>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center justify-center text-lg"
              >
                Planifier un appel
              </Link>
            </motion.div>

            {/* Trust indicators premium */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { icon: HiOutlineClock, text: "Démarrage 48h", accent: "⚡" },
                { icon: HiOutlineStar, text: "Expert 5 ans", accent: "🏆" },
                { icon: HiOutlineHeart, text: "95% satisfaction", accent: "❤️" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center space-x-3 text-gray-200 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                    {item.accent}
                  </span>
                  <item.icon className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                  <span className="font-medium group-hover:text-yellow-400 transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home