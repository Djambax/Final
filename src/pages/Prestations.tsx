import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import ProgressiveSteps from '../components/ProgressiveSteps'
import { 
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineGift,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineDesktopComputer,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineSupport,
  HiOutlineSearchCircle,
  HiOutlineDocumentText,
  HiOutlineCheck,
  HiOutlinePlay,
  HiOutlineTruck,
  HiOutlineChat
} from 'react-icons/hi'

const Prestations: React.FC = () => {
  const heroRef = useRef(null)
  const prestationsOFRef = useRef(null)
  const prestationsEntreprisesRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isPrestationsOFInView = useInView(prestationsOFRef, { once: true, margin: "-100px" })
  const isPrestationsEntreprisesInView = useInView(prestationsEntreprisesRef, { once: true, margin: "-100px" })

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

  // Données du processus avec jauges progressives
  const processusSteps = [
    {
      step: 1,
      title: "Diagnostic gratuit",
      description: "Analyse approfondie de vos besoins, de votre secteur et de vos objectifs. Nous définissons ensemble la stratégie optimale pour votre projet.",
      icon: HiOutlineSearchCircle,
      duration: "30 minutes",
      progress: 100
    },
    {
      step: 2,
      title: "Proposition personnalisée",
      description: "Élaboration d'un devis détaillé avec timeline précise, livrables définis et recommandations adaptées à votre budget.",
      icon: HiOutlineDocumentText,
      duration: "48 heures",
      progress: 85
    },
    {
      step: 3,
      title: "Validation et planning",
      description: "Finalisation des détails, signature du contrat et planification des étapes avec points de validation réguliers.",
      icon: HiOutlineCheck,
      duration: "1 semaine",
      progress: 95
    },
    {
      step: 4,
      title: "Exécution avec suivi",
      description: "Mise en œuvre de votre projet avec reporting hebdomadaire, ajustements en temps réel et communication transparente.",
      icon: HiOutlinePlay,
      duration: "Variable",
      progress: 75
    },
    {
      step: 5,
      title: "Livraison et formation",
      description: "Remise des livrables, formation complète aux outils et processus, documentation technique et guide utilisateur.",
      icon: HiOutlineTruck,
      duration: "1-2 semaines",
      progress: 90
    },
    {
      step: 6,
      title: "Support post-livraison",
      description: "Accompagnement personnalisé, maintenance préventive, mise à jour et optimisations continues selon vos besoins.",
      icon: HiOutlineSupport,
      duration: "6-12 mois",
      progress: 80
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

                      {/* Processus Section avec ProgressiveSteps */}
        <ProgressiveSteps 
          steps={processusSteps}
          title="Notre processus d'accompagnement"
          subtitle="6 étapes pour garantir le succès de votre projet"
        />
    </div>
  )
}

export default Prestations