import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineLightbulb,
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineGift,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineDesktopComputer,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineSupport
} from 'react-icons/hi'

const Prestations: React.FC = () => {
  const heroRef = useRef(null)
  const prestationsOFRef = useRef(null)
  const prestationsEntreprisesRef = useRef(null)
  const processusRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isPrestationsOFInView = useInView(prestationsOFRef, { once: true, margin: "-100px" })
  const isPrestationsEntreprisesInView = useInView(prestationsEntreprisesRef, { once: true, margin: "-100px" })
  const isProcessusInView = useInView(processusRef, { once: true, margin: "-100px" })

  const prestationsOF = [
    {
      title: "Pack 1 - Lancement & Admin",
      price: "Sur devis selon complexité",
      color: "from-blue-500 to-blue-600",
      features: [
        "Création OF avec options multiples ou simple",
        "Déclaration d'activité + numéro OF", 
        "Mise en conformité Qualiopi (accompagnement complet)",
        "Accompagnement à l'élaboration certifications RNCP ou RS",
        "Démarches auprès de France Compétences",
        "Structuration de l'offre pédagogique",
        "Gestion administrative complète",
        "Support juridique et réglementaire"
      ],
      delai: "3-6 mois selon complexité",
      garantie: "Conformité Qualiopi assurée"
    },
    {
      title: "Pack 2 - Communication", 
      price: "À partir de 2500€",
      popular: true,
      color: "from-purple-500 to-purple-600",
      features: [
        "Création de votre image de marque complète",
        "Logo, charte graphique, supports print",
        "Site internet professionnel responsive", 
        "Stratégie réseaux sociaux + templates",
        "Référencement SEO + publicités ciblées",
        "Formation aux outils de communication",
        "Support maintenance 6 mois"
      ],
      delai: "6-8 semaines",
      garantie: "Site livré clé en main"
    }
  ]

  const prestationsEntreprises = [
    {
      title: "Pack 1 - Lancement & Admin",
      price: "Sur devis",
      color: "from-green-500 to-green-600",
      features: [
        "Création avec options multiples ou simple",
        "Gestion administrative complète", 
        "Coaching personnalisé",
        "Accompagnement juridique et fiscal"
      ]
    },
    {
      title: "Pack 2 - Communication",
      price: "À partir de 1800€", 
      color: "from-amber-500 to-orange-500",
      features: [
        "Site internet professionnel",
        "Réseaux sociaux + templates",
        "Stratégie digitale",
        "Formation aux outils"
      ]
    },
    {
      title: "Pack 3 - Complet",
      price: "Sur mesure",
      color: "from-indigo-500 to-indigo-600",
      popular: true,
      features: [
        "Tout Pack 1 + Pack 2",
        "Gestion financière", 
        "Accompagnement 12 mois",
        "Support prioritaire"
      ]
    }
  ]

  const processusSteps = [
    {
      step: "1",
      title: "Diagnostic gratuit",
      description: "Appel de 30 minutes pour comprendre vos besoins et objectifs",
      icon: HiOutlineClipboardList,
      duration: "30min"
    },
    {
      step: "2", 
      title: "Proposition personnalisée",
      description: "Nous vous envoyons un devis détaillé adapté à votre projet",
      icon: HiOutlineLightbulb,
      duration: "48h"
    },
    {
      step: "3",
      title: "Validation et planning",
      description: "Signature du contrat et planification des étapes de réalisation",
      icon: HiOutlineCheckCircle,
      duration: "1 semaine"
    },
    {
      step: "4",
      title: "Exécution avec suivi",
      description: "Réalisation de votre projet avec des points réguliers",
      icon: HiOutlineCog,
      duration: "Selon projet"
    },
    {
      step: "5",
      title: "Livraison et formation",
      description: "Livraison finale avec formation sur les outils mis en place",
      icon: HiOutlineGift,
      duration: "1 journée"
    },
    {
      step: "6",
      title: "Support post-livraison",
      description: "Accompagnement et support selon votre pack choisi",
      icon: HiOutlineSupport,
      duration: "6-12 mois"
    }
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
      {/* Hero */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-white via-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Nos <span className="gradient-text">prestations</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Des solutions complètes pour accompagner votre développement
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
            >
              Que vous soyez un organisme de formation ou une entreprise, nous vous proposons des packs adaptés à vos besoins spécifiques
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center text-lg"
              >
                Demander un devis gratuit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Prestations Organismes de Formation */}
      <section ref={prestationsOFRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isPrestationsOFInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pour les Organismes de Formation
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accompagnement complet pour créer, structurer et développer votre organisme de formation
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isPrestationsOFInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            {prestationsOF.map((prestation, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative card-standard ${
                  prestation.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
                }`}
              >
                {prestation.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus choisi
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {prestation.title}
                  </h3>
                  <div className="text-3xl font-bold text-purple-600 mb-4">
                    {prestation.price}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <HiOutlineClock className="w-4 h-4 mr-1" />
                      {prestation.delai}
                    </div>
                    <div className="flex items-center">
                      <HiOutlineShieldCheck className="w-4 h-4 mr-1" />
                      {prestation.garantie}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {prestation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  prestation.popular
                    ? 'btn-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-500 hover:text-white'
                }`}>
                  Demander un devis
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prestations Entreprises */}
      <section ref={prestationsEntreprisesRef} className="section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isPrestationsEntreprisesInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pour les Entreprises
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions adaptées à tous types d'entreprises pour votre développement et votre croissance
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isPrestationsEntreprisesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {prestationsEntreprises.map((prestation, index) => (
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
                      Recommandé
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
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-500 hover:text-white'
                }`}>
                  En savoir plus
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Processus Section */}
      <section ref={processusRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isProcessusInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre processus d'accompagnement
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              6 étapes pour garantir le succès de votre projet
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isProcessusInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processusSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-standard text-center group relative"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                
                <step.icon className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-amber-500 transition-colors duration-300" />
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
                  <HiOutlineClock className="w-4 h-4 mr-1" />
                  {step.duration}
                </div>

                {index < processusSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isProcessusInView ? "visible" : "hidden"}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prêt à démarrer votre projet ?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Commençons par un diagnostic gratuit de 30 minutes pour comprendre vos besoins et vous proposer la solution la plus adaptée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Planifier mon diagnostic gratuit
                </Link>
                <Link
                  to="/contact"
                  className="bg-white border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Poser une question
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Prestations