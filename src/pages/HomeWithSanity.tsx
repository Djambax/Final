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
  HiOutlineHeart,
  HiOutlineDesktopComputer,
  HiOutlineAcademicCap,
  HiOutlineCalculator,
  HiOutlineCog,
  HiOutlineShoppingCart
} from 'react-icons/hi'
import { useHomePageData } from '../hooks/useSanity'
import { urlFor } from '../lib/sanity'

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

// Mapping des icônes pour les formations
const formationIconMap = {
  business: HiOutlineChartBar,
  marketing: HiOutlineSpeakerphone,
  management: HiOutlineUsers,
  ai: HiOutlineLightningBolt,
  finance: HiOutlineCalculator,
  commerce: HiOutlineShoppingCart,
  technique: HiOutlineCog,
  default: HiOutlineAcademicCap
}

// Mapping des icônes pour les services
const serviceIconMap = {
  chart: HiOutlineChartBar,
  megaphone: HiOutlineSpeakerphone,
  users: HiOutlineUsers,
  briefcase: HiOutlineDesktopComputer,
  lightning: HiOutlineLightningBolt,
  cog: HiOutlineCog,
  globe: HiOutlineDesktopComputer,
  bulb: HiOutlineLightningBolt,
  default: HiOutlineDesktopComputer
}

const HomeWithSanity: React.FC = () => {
  const heroRef = useRef(null)
  const formationsRef = useRef(null)
  const prestationsRef = useRef(null)
  const ctaRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isFormationsInView = useInView(formationsRef, { once: true, margin: "-100px" })
  const isPrestationsInView = useInView(prestationsRef, { once: true, margin: "-100px" })
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  // Récupération des données depuis Sanity
  const { hero, formations, services, loading, error } = useHomePageData()

  // Données de fallback
  const fallbackHero = {
    branding: { brandName1: 'NOVA', brandName2: 'IMPÉRIA' },
    headline: 'Accompagner tous les entrepreneurs dans la construction d\'une image forte et cohérente',
    subheadline: 'Formation d\'excellence et conseil stratégique pour développer votre projet avec succès',
    backgroundMedia: {
      type: 'video',
      videoUrl: '/shutterstock_3614788497.mov',
      overlayOpacity: 0.7
    },
    ctaButtons: [
      { text: 'Découvrir nos formations', link: '/formations', style: 'primary' },
      { text: 'Nos prestations', link: '/prestations', style: 'secondary' }
    ],
    statistics: [
      { value: 500, suffix: '+', label: 'entrepreneurs accompagnés', isActive: true },
      { value: 95, suffix: '%', label: 'taux de satisfaction', isActive: true },
      { value: 7, suffix: '', label: 'domaines d\'expertise', isActive: true }
    ]
  }

  const fallbackFormations = [
    {
      _id: 'fallback-1',
      title: "Business & Entrepreneuriat",
      iconType: "business",
      colorTheme: "blue",
      description: "De l'idée au lancement, maîtrisez tous les aspects de la création d'entreprise"
    },
    {
      _id: 'fallback-2',
      title: "Marketing & Communication",
      iconType: "marketing",
      colorTheme: "purple",
      description: "Développez votre visibilité avec les outils digitaux modernes"
    },
    {
      _id: 'fallback-3',
      title: "Recrutement & Management",
      iconType: "management",
      colorTheme: "indigo",
      description: "Constituez et managez efficacement vos équipes"
    },
    {
      _id: 'fallback-4',
      title: "Intelligence Artificielle",
      iconType: "ai",
      colorTheme: "amber",
      description: "Intégrez l'IA dans votre stratégie d'entreprise"
    }
  ]

  const fallbackServices = [
    {
      _id: 'fallback-1',
      title: "Pack OF Lancement",
      pricing: { label: "Sur devis", type: "quote" },
      colorTheme: "blue",
      features: ["Création OF complète", "Mise en conformité Qualiopi", "Support juridique"],
      isPopular: false
    },
    {
      _id: 'fallback-2',
      title: "Pack Communication",
      pricing: { label: "À partir de 2500€", type: "from", amount: 2500 },
      isPopular: true,
      colorTheme: "purple",
      features: ["Site internet professionnel", "Image de marque", "Stratégie digitale"]
    },
    {
      _id: 'fallback-3',
      title: "Pack Entreprise",
      pricing: { label: "Sur mesure", type: "custom" },
      colorTheme: "orange",
      features: ["Solution complète", "Accompagnement 12 mois", "Support prioritaire"]
    }
  ]

  // Utiliser les données Sanity ou fallback
  const heroData = hero.data || fallbackHero
  const formationsData = formations.data?.length > 0 ? formations.data : fallbackFormations
  const servicesData = services.data?.length > 0 ? services.data : fallbackServices

  if (error) {
    console.warn('Erreur lors du chargement des données:', error)
  }

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
        {/* Média de fond */}
        <div className="absolute inset-0 w-full h-full">
          {heroData.backgroundMedia?.type === 'video' && heroData.backgroundMedia.videoUrl && (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={heroData.backgroundMedia.videoUrl} type="video/quicktime" />
            </video>
          )}
          
          {heroData.backgroundMedia?.type === 'image' && heroData.backgroundMedia.backgroundImage && (
            <img 
              src={urlFor(heroData.backgroundMedia.backgroundImage).width(1920).height(1080).url()}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          
          {/* Overlay gradient premium */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-yellow-900/70"
            style={{ 
              opacity: heroData.backgroundMedia?.overlayOpacity || 0.7 
            }}
          ></div>
          
          {/* Overlay avec effet de particules */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
            `
          }}></div>
        </div>

        {/* Background Animated Orbs */}
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
            >
              {heroData.branding?.brandName1} <span className="gradient-text">{heroData.branding?.brandName2}</span>
              {loading && <span className="text-sm text-gray-300 ml-4">🔄 Chargement...</span>}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto font-medium"
            >
              {heroData.headline}
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              {heroData.subheadline}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              {heroData.ctaButtons?.map((button, index) => (
                <Link
                  key={index}
                  to={button.link}
                  className={`inline-flex items-center justify-center text-lg ${
                    button.style === 'primary' 
                      ? 'btn-primary' 
                      : 'btn-secondary'
                  }`}
                >
                  {button.text}
                </Link>
              ))}
            </motion.div>

            {/* Stats Premium */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {heroData.statistics?.filter(stat => stat.isActive).map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-2 relative">
                    <AnimatedCounter 
                      target={stat.value} 
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
              Domaines d'<span className="gradient-text">Excellence</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Des formations premium qui transforment vos compétences en véritables atouts concurrentiels
            </motion.p>
          </motion.div>

          {/* CARDS FORMATIONS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormationsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {formationsData.slice(0, 4).map((formation, index) => {
              const IconComponent = formationIconMap[formation.iconType as keyof typeof formationIconMap] || formationIconMap.default
              
              return (
                <motion.div
                  key={formation._id}
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
                  {/* Image de fond */}
                  <div className="absolute inset-0">
                    {formation.image ? (
                      <img 
                        src={urlFor(formation.image).width(600).height(400).url()}
                        alt={formation.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url('/shutterstock_${
                            index === 0 ? '2598931365' : 
                            index === 1 ? '2605610799' : 
                            index === 2 ? '2589155169' : 
                            '2574472231'
                          }.jpg')`,
                        }}
                      ></div>
                    )}
                    
                    {/* Overlay gradient animé */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 group-hover:from-black/40 group-hover:to-black/60 transition-all duration-500"></div>
                    
                    {/* Overlay couleur spécifique */}
                    <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${
                      formation.colorTheme === 'blue' ? 'bg-blue-500' :
                      formation.colorTheme === 'purple' ? 'bg-purple-500' :
                      formation.colorTheme === 'indigo' ? 'bg-indigo-500' :
                      formation.colorTheme === 'amber' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}></div>
                  </div>

                  {/* Contenu de la card */}
                  <div className="relative z-20 h-full flex flex-col justify-between p-8">
                    {/* Header avec icône */}
                    <div className="flex items-start justify-between">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                          formation.colorTheme === 'blue' ? 'bg-blue-500/20 border border-blue-400/30' :
                          formation.colorTheme === 'purple' ? 'bg-purple-500/20 border border-purple-400/30' :
                          formation.colorTheme === 'indigo' ? 'bg-indigo-500/20 border border-indigo-400/30' :
                          formation.colorTheme === 'amber' ? 'bg-yellow-500/20 border border-yellow-400/30' :
                          'bg-blue-500/20 border border-blue-400/30'
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className={`text-2xl ${
                          formation.colorTheme === 'blue' ? 'text-blue-400' :
                          formation.colorTheme === 'purple' ? 'text-purple-400' :
                          formation.colorTheme === 'indigo' ? 'text-indigo-400' :
                          formation.colorTheme === 'amber' ? 'text-yellow-400' :
                          'text-blue-400'
                        }`} />
                      </motion.div>

                      {/* Badge premium */}
                      <motion.div
                        className="bg-yellow-500/90 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                        whileHover={{ scale: 1.05 }}
                      >
                        ⭐ PREMIUM
                      </motion.div>
                    </div>

                    {/* Contenu principal */}
                    <div>
                      <motion.h3 
                        className="text-2xl font-black text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {formation.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed"
                        whileHover={{ scale: 1.01 }}
                      >
                        {formation.description}
                      </motion.p>

                      {/* CTA avec flèche animée */}
                      <motion.div 
                        className="mt-6 flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span>Découvrir</span>
                        <motion.svg 
                          className="w-5 h-5 ml-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA vers formations */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isFormationsInView ? "visible" : "hidden"}
            className="text-center"
          >
            <Link
              to="/formations"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-2xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <HiOutlineAcademicCap className="mr-3 text-xl" />
              Découvrir toutes nos formations
              <motion.svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section ref={prestationsRef} className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                🚀 NOS SERVICES
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-black text-gray-900 mb-8"
            >
              Solutions <span className="gradient-text">Complètes</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"
            >
              Des accompagnements sur-mesure pour développer votre activité
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isPrestationsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {servicesData.slice(0, 3).map((service, index) => (
              <motion.div
                key={service._id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  service.isPopular ? 'ring-2 ring-yellow-400 transform scale-105' : ''
                }`}
              >
                {service.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ POPULAIRE
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="text-3xl font-black text-blue-600 mb-4">
                    {service.pricing?.label}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <HiOutlineCheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/prestations"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    service.isPopular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  En savoir plus
                </Link>
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
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Voir tous nos services
              <motion.svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Final */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-white mb-6"
            >
              Prêt à développer votre projet ?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Contactez-nous pour construire ensemble votre stratégie de réussite
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+33123456789"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Nous appeler
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomeWithSanity