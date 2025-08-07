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

      {/* Formations Preview Section - PREMIUM REDESIGN */}
      <section ref={formationsRef} className="relative py-32 overflow-hidden">
        {/* Background avec image et overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('/shutterstock_2287752905.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-gray-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 via-transparent to-yellow-900/20"></div>
        </div>

        {/* Particules flottantes animées */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/60 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormationsInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold mb-6 border border-yellow-500/30">
                ⭐ NOS EXPERTISES
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-black text-white mb-8"
            >
              Domaines d'<span className="gradient-text" data-text="Excellence">Excellence</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Des formations premium qui transforment vos compétences en véritables atouts concurrentiels
            </motion.p>
          </motion.div>

          {/* NOUVELLES CARDS PREMIUM */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormationsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {formations.map((formation, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  rotateY: 2,
                  rotateX: 2,
                }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer h-80"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Image de fond spécifique */}
                <div className="absolute inset-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('/shutterstock_${
                        index === 0 ? '2574472231' : 
                        index === 1 ? '2574472231' : 
                        index === 2 ? '2574472231' : 
                        '2574472231'
                      }.jpg')`,
                    }}
                  ></div>
                  
                  {/* Overlay gradient animé */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 group-hover:from-black/40 group-hover:to-black/60 transition-all duration-500"></div>
                  
                  {/* Overlay couleur spécifique */}
                  <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${
                    formation.color === 'blue' ? 'bg-blue-500' :
                    formation.color === 'purple' ? 'bg-purple-500' :
                    formation.color === 'indigo' ? 'bg-indigo-500' :
                    'bg-yellow-500'
                  }`}></div>
                </div>

                {/* Contenu de la card */}
                <div className="relative z-20 h-full flex flex-col justify-between p-8">
                  {/* Header avec icône */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        formation.color === 'blue' ? 'bg-blue-500/20 border border-blue-400/30' :
                        formation.color === 'purple' ? 'bg-purple-500/20 border border-purple-400/30' :
                        formation.color === 'indigo' ? 'bg-indigo-500/20 border border-indigo-400/30' :
                        'bg-yellow-500/20 border border-yellow-400/30'
                      }`}
                      whileHover={{ rotate: 5 }}
                    >
                      <formation.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Badge expertise */}
                    <motion.div
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <span className="text-yellow-400 text-xs font-semibold">PREMIUM</span>
                    </motion.div>
                  </div>

                  {/* Contenu principal */}
                  <div className="space-y-4">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-black text-white group-hover:text-yellow-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {formation.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {formation.description}
                    </motion.p>

                    {/* CTA avec effet premium */}
                    <motion.div
                      className="flex items-center space-x-2 text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <span>Explorer cette expertise</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Effet de brillance au hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(251, 191, 36, 0.3), transparent)`,
                    transform: 'translateX(-100%)',
                  }}
                  whileHover={{
                    transform: 'translateX(100%)',
                    transition: { duration: 0.6 }
                  }}
                />

                {/* Bordure animée */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/30 transition-colors duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section Premium */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isFormationsInView ? "visible" : "hidden"}
            className="text-center"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <Link
                to="/formations"
                className="relative btn-primary text-xl px-12 py-6 inline-flex items-center space-x-3"
              >
                <span>🚀 Découvrir toutes nos formations</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prestations Preview Section - ULTRA PREMIUM */}
      <section ref={prestationsRef} className="relative py-32 overflow-hidden">
        {/* Background gradient ultra premium */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-yellow-50"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/30 via-transparent to-yellow-200/20"></div>
          
          {/* Pattern géométrique animé */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #F59E0B 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #F59E0B 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px, 40px 40px'
            }}></div>
          </div>
        </div>

        {/* Forme géométrique flottante */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 opacity-10"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isPrestationsInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <span className="inline-block px-4 py-2 bg-yellow-500 text-black rounded-full text-sm font-bold mb-6 shadow-lg">
                💼 NOS SOLUTIONS
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-black text-gray-900 mb-8"
            >
              Solutions <span className="gradient-text" data-text="Premium">Premium</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Des packs exclusifs conçus pour propulser votre entreprise vers l'excellence
            </motion.p>
          </motion.div>

          {/* CARDS SOLUTIONS ULTRA PREMIUM */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isPrestationsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            {prestations.map((prestation, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  rotateY: index === 1 ? 0 : (index === 0 ? -5 : 5),
                  rotateX: 5,
                }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ${
                  prestation.popular 
                    ? 'transform scale-110 z-10' 
                    : 'hover:z-20'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  height: prestation.popular ? '480px' : '450px'
                }}
              >
                {/* Background premium avec gradient */}
                <div className={`absolute inset-0 ${
                  prestation.popular
                    ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600'
                    : index === 0
                    ? 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
                    : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
                }`}></div>

                {/* Effet de brillance sur hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent, rgba(251, 191, 36, 0.4), transparent)`,
                  }}
                  whileHover={{
                    background: [
                      'linear-gradient(135deg, transparent, rgba(251, 191, 36, 0.4), transparent)',
                      'linear-gradient(315deg, transparent, rgba(251, 191, 36, 0.4), transparent)',
                      'linear-gradient(135deg, transparent, rgba(251, 191, 36, 0.4), transparent)'
                    ],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                />

                {/* Badge populaire premium */}
                {prestation.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 2, 0, -2, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="bg-white text-black px-6 py-2 rounded-full text-sm font-black shadow-xl border-2 border-yellow-300">
                      👑 PLUS POPULAIRE
                    </div>
                  </motion.div>
                )}

                {/* Contenu de la card */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  {/* Header */}
                  <div className="text-center">
                    <motion.h3 
                      className={`text-2xl md:text-3xl font-black mb-4 ${
                        prestation.popular ? 'text-white' : 'text-gray-900'
                      } group-hover:scale-105 transition-transform duration-300`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {prestation.title}
                    </motion.h3>
                    
                    <motion.div 
                      className={`text-4xl md:text-5xl font-black mb-8 ${
                        prestation.popular ? 'text-white' : 'text-gray-900'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {prestation.price}
                    </motion.div>
                  </div>

                  {/* Features avec animations */}
                  <div className="space-y-4 mb-8">
                    {prestation.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                      >
                        <motion.div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            prestation.popular 
                              ? 'bg-white/20 text-white' 
                              : 'bg-yellow-500 text-white'
                          }`}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          ✓
                        </motion.div>
                        <span className={`font-medium ${
                          prestation.popular ? 'text-white/90' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button ultra premium */}
                  <motion.button
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden ${
                      prestation.popular
                        ? 'bg-white text-yellow-600 hover:bg-gray-100'
                        : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Effet de shine sur le bouton */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <span className="relative z-10">
                      {prestation.popular ? '🚀 Commencer maintenant' : '💫 Découvrir'}
                    </span>
                  </motion.button>
                </div>

                {/* Bordure animée */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent"
                  whileHover={{
                    borderColor: prestation.popular ? 'rgba(255,255,255,0.5)' : 'rgba(251, 191, 36, 0.5)',
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Particules flottantes au hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section Ultra Premium */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isPrestationsInView ? "visible" : "hidden"}
            className="text-center"
          >
            <div className="relative inline-block">
              {/* Effet de glow animé */}
              <motion.div
                className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <Link
                to="/prestations"
                className="relative btn-primary text-xl px-16 py-6 inline-flex items-center space-x-4 group"
              >
                <span>🎯 Explorer toutes nos solutions</span>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                >
                  →
                </motion.div>
              </Link>
            </div>
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