import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  HiOutlineChartBar, 
  HiOutlineSpeakerphone, 
  HiOutlineUsers, 
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
  HiOutlineStar
} from 'react-icons/hi'

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
    { number: "500+", label: "entrepreneurs accompagnés" },
    { number: "95%", label: "taux de satisfaction" },
    { number: "7", label: "domaines d'expertise" }
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
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-amber-50">
        {/* Background Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl opacity-30"
          />
          <motion.div
            animate={{
              x: [0, -150, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              NOVA <span className="gradient-text">IMPÉRIA</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto font-medium"
            >
              Accompagner tous les entrepreneurs dans la construction d'une image forte et cohérente
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto"
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
                className="bg-white border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 inline-flex items-center justify-center text-lg"
              >
                Nos prestations
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Formations Preview Section */}
      <section ref={formationsRef} className="section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormationsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos domaines d'expertise
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des formations complètes pour développer toutes les compétences entrepreneuriales
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
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-standard text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${
                  formation.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  formation.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  formation.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                  'from-amber-500 to-orange-500'
                } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <formation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
              className="btn-primary inline-flex items-center"
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
              Nos solutions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des packs complets pour accompagner votre développement
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
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative card-standard text-center ${
                  prestation.popular ? 'ring-2 ring-amber-500 transform scale-105' : ''
                }`}
              >
                {prestation.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Populaire
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {prestation.title}
                </h3>
                <div className="text-3xl font-bold text-amber-600 mb-6">
                  {prestation.price}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {prestation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-gray-600">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  prestation.popular
                    ? 'btn-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              className="btn-primary inline-flex items-center"
            >
              Découvrir tous nos packs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
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
              Transformons votre vision en réalité
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90"
            >
              Rejoignez les entrepreneurs qui nous font confiance pour développer leur projet
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center text-lg"
              >
                Demander un devis gratuit
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 inline-flex items-center justify-center text-lg"
              >
                Planifier un appel
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center">
                <HiOutlineLightningBolt className="w-6 h-6 mr-2" />
                <span>Démarrage 48h</span>
              </div>
              <div className="flex items-center justify-center">
                <HiOutlineStar className="w-6 h-6 mr-2" />
                <span>Expert 5 ans</span>
              </div>
              <div className="flex items-center justify-center">
                <HiOutlineCheckCircle className="w-6 h-6 mr-2" />
                <span>95% satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home