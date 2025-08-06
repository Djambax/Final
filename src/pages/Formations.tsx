import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  HiOutlineChartBar, 
  HiOutlineSpeakerphone, 
  HiOutlineShoppingCart,
  HiOutlineCalculator,
  HiOutlineUsers, 
  HiOutlineCog,
  HiOutlineLightningBolt,
  HiOutlineClock,
  HiOutlineDesktopComputer,
  HiOutlineAcademicCap,
  HiOutlineCheckCircle
} from 'react-icons/hi'

const Formations: React.FC = () => {
  const heroRef = useRef(null)
  const formationsRef = useRef(null)
  const modalitesRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isFormationsInView = useInView(formationsRef, { once: true, margin: "-100px" })
  const isModalitesInView = useInView(modalitesRef, { once: true, margin: "-100px" })

  const formations = [
    {
      title: "Business & Entrepreneuriat",
      icon: HiOutlineChartBar,
      color: "from-blue-500 to-blue-600",
      modules: [
        "Création d'entreprise : de l'idée au lancement",
        "Construire un business model et business plan efficace", 
        "Développement stratégique et pilotage d'activité",
        "Gestion de projet entrepreneurial",
        "Outils de gestion pour indépendants et TPE"
      ],
      duree: "2-5 jours selon module",
      format: "Présentiel/Distanciel/Mixte"
    },
    {
      title: "Marketing & Communication",
      icon: HiOutlineSpeakerphone,
      color: "from-purple-500 to-purple-600",
      modules: [
        "Marketing digital (réseaux sociaux, SEO, publicité en ligne)",
        "Communication de marque et identité visuelle",
        "Élaboration et pilotage stratégie de contenu",
        "Outils numériques (Canva, Meta Business Suite, Mailchimp)",
        "Campagnes publicitaires (Meta, Google, TikTok)",
        "IA dans la communication"
      ],
      duree: "1-3 jours selon module",
      format: "Ateliers pratiques + certification"
    },
    {
      title: "Vente & Animation commerciale",
      icon: HiOutlineShoppingCart,
      color: "from-green-500 to-green-600",
      modules: [
        "Techniques de vente et négociation client",
        "Animation de point de vente & merchandising", 
        "Relation client et parcours d'achat",
        "Vente conseil en magasin ou en ligne",
        "Fidélisation et satisfaction client"
      ],
      duree: "2-4 jours",
      format: "Jeux de rôles + mise en situation"
    },
    {
      title: "Gestion d'entreprise & Administrative",
      icon: HiOutlineCalculator,
      color: "from-indigo-500 to-indigo-600",
      modules: [
        "Bases de la comptabilité pour non-comptables",
        "Organisation administrative de l'entreprise",
        "Suivi de trésorerie & gestion budgétaire", 
        "Outils de facturation, devis, relance",
        "Tableaux de bord et indicateurs clés"
      ],
      duree: "3-5 jours",
      format: "Formation + outils pratiques"
    },
    {
      title: "Recrutement & Management",
      icon: HiOutlineUsers,
      color: "from-teal-500 to-teal-600",
      modules: [
        "Recruter efficacement : du besoin au choix final",
        "Mener un entretien de recrutement structuré",
        "Manager une équipe au quotidien",
        "Leadership, motivation et cohésion d'équipe", 
        "Gérer les conflits et favoriser communication interne"
      ],
      duree: "2-3 jours selon module", 
      format: "Théorie + cas pratiques"
    },
    {
      title: "Formations sur mesure & accompagnement",
      icon: HiOutlineCog,
      color: "from-gray-500 to-gray-600",
      modules: [
        "Diagnostic des besoins de montée en compétences",
        "Élaboration programme individualisé",
        "Choix du format : présentiel, distanciel ou mixte",
        "Modules courts, intensifs ou alternance",
        "Intégration de cas concrets liés à votre secteur",
        "Coaching & Mentorat professionnel",
        "Suivi personnalisé"
      ],
      duree: "Variable selon besoins",
      format: "100% personnalisé"
    },
    {
      title: "Intelligence Artificielle en entreprise",
      icon: HiOutlineLightningBolt,
      color: "from-amber-500 to-orange-500",
      modules: [
        "Introduction à l'IA et ses applications business",
        "Outils IA pour la productivité",
        "Automatisation des processus",
        "IA dans la communication et marketing",
        "Éthique et bonnes pratiques IA",
        "Veille technologique et tendances"
      ],
      duree: "1-2 jours",
      format: "Ateliers pratiques + certification"
    }
  ]

  const modalites = [
    {
      title: "Formats disponibles",
      icon: HiOutlineDesktopComputer,
      items: ["Présentiel", "Distanciel", "Mixte (hybride)", "Intra-entreprise"]
    },
    {
      title: "Durées proposées",
      icon: HiOutlineClock,
      items: ["Modules de 1 jour", "Formations intensives", "Parcours de plusieurs semaines", "Accompagnement long terme"]
    },
    {
      title: "Financement",
      icon: HiOutlineCheckCircle,
      items: ["CPF (Compte Personnel de Formation)", "OPCO", "Financement entreprise", "Pôle Emploi"]
    },
    {
      title: "Certification",
      icon: HiOutlineAcademicCap,
      items: ["Attestations de formation", "Certifications métier", "Badges de compétences", "Suivi post-formation"]
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
      {/* Hero Formations */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
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
              Formations d'<span className="gradient-text">excellence</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              7 domaines pour développer vos compétences entrepreneuriales
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
            >
              Des programmes complets adaptés à vos besoins, dispensés par des experts avec plus de 5 ans d'expérience terrain
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center text-lg"
              >
                Demander un programme personnalisé
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Formations Grid Section */}
      <section ref={formationsRef} className="py-20 bg-white">
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
              Découvrez nos 7 domaines de formation pour développer toutes les compétences nécessaires à votre réussite entrepreneuriale
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormationsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {formations.map((formation, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-standard group cursor-pointer"
              >
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${formation.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mr-4 flex-shrink-0`}>
                    <formation.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {formation.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <HiOutlineClock className="w-4 h-4 mr-1" />
                        {formation.duree}
                      </div>
                      <div className="flex items-center">
                        <HiOutlineDesktopComputer className="w-4 h-4 mr-1" />
                        {formation.format}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-4">Modules inclus :</h4>
                  {formation.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex items-start">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{module}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 py-3 rounded-full font-semibold hover:from-amber-500 hover:to-orange-500 hover:text-white transition-all duration-300">
                    Demander plus d'informations
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modalités Section */}
      <section ref={modalitesRef} className="section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isModalitesInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modalités pratiques
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions flexibles adaptées à vos contraintes et objectifs
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isModalitesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {modalites.map((modalite, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-standard text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <modalite.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {modalite.title}
                </h3>
                
                <ul className="space-y-3">
                  {modalite.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isModalitesInView ? "visible" : "hidden"}
            className="text-center"
          >
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Formation sur mesure ?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nous concevons également des programmes de formation entièrement personnalisés selon vos besoins spécifiques, 
                votre secteur d'activité et vos objectifs de développement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Discuter de mon projet
                </Link>
                <Link
                  to="/contact"
                  className="bg-white border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Formations