import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineAcademicCap,
  HiOutlineOfficeBuilding,
  HiOutlineChartBar
} from 'react-icons/hi'

const About: React.FC = () => {
  const heroRef = useRef(null)
  const histoireRef = useRef(null)
  const missionRef = useRef(null)
  const valeursRef = useRef(null)
  const visionRef = useRef(null)
  const statsRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isHistoireInView = useInView(histoireRef, { once: true, margin: "-100px" })
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" })
  const isValeursInView = useInView(valeursRef, { once: true, margin: "-100px" })
  const isVisionInView = useInView(visionRef, { once: true, margin: "-100px" })
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })

  const valeurs = [
    {
      title: "Éthique",
      description: "Transparence et intégrité dans chacune de nos actions",
      engagement: "Nous privilégions l'honnêteté et la transparence dans tous nos échanges, créant une relation de confiance durable avec nos clients",
      icon: HiOutlineShieldCheck,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Excellence",
      description: "La quête permanente de la perfection dans nos services",
      engagement: "Nous nous engageons à délivrer des prestations de la plus haute qualité, en nous appuyant sur notre expertise et notre expérience",
      icon: HiOutlineStar,
      color: "from-black to-gray-800"
    },
    {
      title: "Élégance",
      description: "Un style raffiné et une approche esthétique premium",
      engagement: "Nous apportons une touche d'élégance à chaque projet, alliant fonctionnalité et esthétisme pour un rendu professionnel",
      icon: HiOutlineSparkles,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Engagement",
      description: "Dévoués à votre réussite avec passion et détermination",
      engagement: "Nous nous investissons pleinement dans chaque projet, avec la ferme volonté de vous accompagner vers le succès",
      icon: HiOutlineHeart,
      color: "from-pink-500 to-pink-600"
    }
  ]

  const stats = [
    {
      number: "500+",
      label: "entrepreneurs accompagnés",
      icon: HiOutlineUsers,
      color: "text-blue-600"
    },
    {
      number: "95%",
      label: "taux de satisfaction client",
      icon: HiOutlineStar,
      color: "text-amber-600"
    },
    {
      number: "5 ans",
      label: "d'expérience terrain",
      icon: HiOutlineAcademicCap,
      color: "text-purple-600"
    },
    {
      number: "7",
      label: "domaines d'expertise",
      icon: HiOutlineChartBar,
      color: "text-green-600"
    },
    {
      number: "50+",
      label: "organismes de formation créés",
      icon: HiOutlineOfficeBuilding,
      color: "text-indigo-600"
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
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
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
              Qui sommes-<span className="gradient-text">nous</span> ?
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              L'histoire d'une équipe passionnée au service de votre réussite
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
            >
              Découvrez notre vision, nos valeurs et notre engagement pour accompagner tous les entrepreneurs dans leur développement
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center text-lg"
              >
                Rencontrons-nous
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Histoire Section */}
      <section ref={histoireRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHistoireInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
            >
              Notre histoire
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl p-8 md:p-12"
            >
              <div className="flex items-start mb-6">
                                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <HiOutlineHeart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Notre ambition
                  </h3>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chez NOVA IMPÉRIA, notre ambition est claire : <strong>accompagner tous les entrepreneurs</strong>, quels que soient leur profil, leur secteur ou le stade de leur projet, avec un service clé en main et un accompagnement sur mesure.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous croyons fermement que <strong>chaque projet mérite d'être porté avec excellence</strong>. C'est pourquoi nous mettons à disposition notre savoir-faire stratégique, administratif, graphique et digital, pour que chaque client reparte avec une structure solide, une identité forte et des outils professionnels.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-amber-200">
                <p className="text-gray-600 italic text-center">
                  "Notre mission est de transformer chaque vision entrepreneuriale en une réalité concrète et durable"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isMissionInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
            >
              Notre mission
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <HiOutlineAcademicCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Accompagnement des organismes de formation
                  </h3>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous accompagnons également les <strong>organismes de formation</strong>, quelle que soit leur taille ou leur ancienneté :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <HiOutlineUsers className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Création de centre</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <HiOutlineChartBar className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Structuration de l'offre</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <HiOutlineShieldCheck className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Mise en conformité Qualiopi</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <HiOutlineAcademicCap className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Certifications RNCP ou RS</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <HiOutlineOfficeBuilding className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Démarches France Compétences</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <HiOutlineStar className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Parcours pédagogiques</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Grâce à notre expérience, nous sommes capables de guider nos clients <strong>de l'idée à la reconnaissance officielle</strong> de leur activité.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-blue-900 font-medium text-center">
                  Notre objectif : permettre à chaque organisme de se positionner avec sérieux, visibilité et impact.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Valeurs Section (4E) */}
      <section ref={valeursRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isValeursInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos valeurs : les 4E
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quatre piliers fondamentaux qui guident chacune de nos actions
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isValeursInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {valeurs.map((valeur, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-standard group"
              >
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${valeur.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mr-4 flex-shrink-0`}>
                    <valeur.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {valeur.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium mb-4">
                      {valeur.description}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Notre engagement :</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {valeur.engagement}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
              <section ref={visionRef} className="py-20 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisionInView ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Notre vision
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="max-w-4xl mx-auto"
            >
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
                "Accompagner les porteurs de projet dans la construction d'une image forte et cohérente, en leur offrant des services professionnels sur mesure, allant de la création d'entreprise à la communication visuelle."
              </blockquote>
              
              <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
                Faire de chaque projet une marque à part entière, porteuse de sens, de cohérence et de rayonnement.
              </p>
              
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <p className="text-xl font-semibold">
                  NOVA IMPÉRIA se positionne comme un tremplin vers la réussite, en alliant expertise, exigence et esthétisme.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos résultats en chiffres
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              5 ans d'expérience au service de l'excellence entrepreneuriale
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="card-standard text-center group"
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prêt à rejoindre nos clients satisfaits ?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Faites confiance à notre expertise pour développer votre projet avec succès. 
                Découvrez comment nous pouvons vous accompagner dans votre réussite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Discutons de votre projet
                </Link>
                <Link
                  to="/prestations"
                  className="bg-white border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Voir nos solutions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About