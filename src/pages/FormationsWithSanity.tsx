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
import { useFormations } from '../hooks/useSanity'
import { urlFor } from '../lib/sanity'

// Mapping des icônes pour correspondre aux données Sanity
const iconMap: Record<string, any> = {
  'business': HiOutlineChartBar,
  'marketing': HiOutlineSpeakerphone,
  'commerce': HiOutlineShoppingCart,
  'finance': HiOutlineCalculator,
  'management': HiOutlineUsers,
  'technique': HiOutlineCog,
  'digital': HiOutlineLightningBolt,
  'default': HiOutlineAcademicCap
}

const FormationsWithSanity: React.FC = () => {
  const heroRef = useRef(null)
  const formationsRef = useRef(null)
  const modalitesRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isFormationsInView = useInView(formationsRef, { once: true, margin: "-100px" })
  const isModalitesInView = useInView(modalitesRef, { once: true, margin: "-100px" })

  // Récupération des données depuis Sanity
  const { data: formations, loading, error } = useFormations()

  // Données de fallback si Sanity n'est pas encore configuré
  const fallbackFormations = [
    {
      _id: 'fallback-1',
      title: "Business & Entrepreneuriat",
      description: "Formation complète sur la création et gestion d'entreprise",
      duration: "2-5 jours selon module",
      price: 1200,
      iconType: 'business',
      image: null,
      modules: [
        "Création d'entreprise : de l'idée au lancement",
        "Construire un business model et business plan efficace", 
        "Développement stratégique et pilotage d'activité"
      ]
    },
    {
      _id: 'fallback-2',
      title: "Marketing & Communication",
      description: "Maîtrisez les outils du marketing moderne",
      duration: "3-4 jours",
      price: 950,
      iconType: 'marketing',
      image: null,
      modules: [
        "Marketing digital (réseaux sociaux, SEO, publicité en ligne)",
        "Communication de marque et identité visuelle",
        "Stratégies de contenu et storytelling"
      ]
    }
  ]

  // Utilise les données Sanity si disponibles, sinon les données de fallback
  const displayFormations = formations && formations.length > 0 ? formations : fallbackFormations

  if (error) {
    console.warn('Erreur Sanity:', error)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Section Hero */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Nos <span className="text-blue-300">Formations</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Développez vos compétences avec nos formations professionnelles adaptées aux enjeux actuels du marché
            </p>
            {loading && (
              <div className="text-blue-200 text-sm">
                🔄 Chargement du contenu depuis Sanity...
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Section Formations */}
      <section ref={formationsRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Catalogue de Formations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez notre gamme complète de formations conçues pour vous accompagner dans votre développement professionnel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {displayFormations.map((formation, index) => {
              const IconComponent = iconMap[formation.iconType || 'default'] || HiOutlineAcademicCap
              
              return (
                <motion.div
                  key={formation._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFormationsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image ou gradient de fallback */}
                  <div className="relative h-48 overflow-hidden">
                    {formation.image ? (
                      <img 
                        src={urlFor(formation.image).width(400).height(200).url()}
                        alt={formation.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <IconComponent className="text-6xl text-white" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <HiOutlineClock className="text-lg" />
                        {formation.duration}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {formation.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {formation.description}
                    </p>

                    {formation.modules && formation.modules.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Modules principaux :</h4>
                        <ul className="space-y-1">
                          {formation.modules.slice(0, 3).map((module, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <HiOutlineCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                              {module}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      {formation.price && (
                        <div className="text-2xl font-bold text-blue-600">
                          {formation.price}€
                        </div>
                      )}
                      <Link
                        to={`/formations/${formation.slug?.current || formation._id}`}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Modalités (gardée identique) */}
      <section ref={modalitesRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isModalitesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Modalités & Financement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos formations sont accessibles et adaptées à tous les profils professionnels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isModalitesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl"
            >
              <HiOutlineDesktopComputer className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Formats Flexibles</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Présentiel dans nos locaux</li>
                <li>• Distanciel en ligne</li>
                <li>• Mixte (blended learning)</li>
                <li>• Sur-mesure en entreprise</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isModalitesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl"
            >
              <HiOutlineCheckCircle className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certifications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Organisme certifié Qualiopi</li>
                <li>• Attestations de fin de formation</li>
                <li>• Certifications professionnelles</li>
                <li>• Suivi post-formation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isModalitesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl"
            >
              <HiOutlineCalculator className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financement</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Prise en charge CPF</li>
                <li>• OPCO et plan de formation</li>
                <li>• Pôle Emploi (AIF)</li>
                <li>• Facilités de paiement</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à développer vos compétences ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour construire ensemble votre parcours de formation personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FormationsWithSanity