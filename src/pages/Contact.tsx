import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineChevronDown,
  HiOutlineChevronUp
} from 'react-icons/hi'

interface FormData {
  prenom: string
  nom: string
  email: string
  telephone?: string
  entreprise?: string
  typebesoin: 'formation' | 'prestation-of' | 'prestation-entreprise' | 'autre'
  message: string
  accepteContact: boolean
}

const Contact: React.FC = () => {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const faqRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" })
  const isInfoInView = useInView(infoRef, { once: true, margin: "-100px" })
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState<FormData>({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    typebesoin: 'formation',
    message: '',
    accepteContact: false
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const contactInfo = {
    email: "contact@nova-imperia.fr",
    telephone: "+33 1 23 45 67 89", 
    adresse: "Paris, France",
    horaires: "Lundi-Vendredi 9h-18h"
  }

  const faq = [
    {
      question: "Combien coûtent vos formations ?",
      reponse: "Nos tarifs varient selon la durée et le format choisis. Nous proposons des formations d'1 jour à plusieurs semaines, avec des tarifs adaptés. Contactez-nous pour recevoir un devis personnalisé selon vos besoins spécifiques."
    },
    {
      question: "Proposez-vous du financement ?", 
      reponse: "Oui, nous acceptons plusieurs modes de financement : CPF (Compte Personnel de Formation), OPCO, financement entreprise et Pôle Emploi. Nous vous accompagnons dans les démarches administratives."
    },
    {
      question: "Les formations sont-elles certifiantes ?",
      reponse: "Certaines de nos formations donnent lieu à des certifications selon le programme choisi. Nous proposons des attestations de formation, des certifications métier et des badges de compétences avec suivi post-formation."
    },
    {
      question: "Combien de temps pour créer un organisme de formation ?",
      reponse: "La création d'un organisme de formation prend généralement 3 à 6 mois selon la complexité du projet. Cela inclut la déclaration d'activité, la mise en conformité Qualiopi et toutes les démarches administratives."
    },
    {
      question: "Accompagnez-vous après la création ?",
      reponse: "Absolument ! Notre support est inclus selon le pack choisi, allant de 6 mois à 12 mois d'accompagnement. Nous restons à vos côtés pour assurer le succès de votre projet."
    },
    {
      question: "Travaillez-vous partout en France ?",
      reponse: "Oui, nous intervenons partout en France. Nous proposons des formations en présentiel, en distanciel ou en format mixte selon vos besoins et contraintes géographiques."
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    alert('Merci pour votre message ! Nous vous recontacterons sous 48h.')
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
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
      {/* Hero */}
      <section ref={heroRef} className="py-20 bg-white">
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
              Contactez-<span className="gradient-text">nous</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Discutons de votre projet ensemble
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
            >
              Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans la réalisation de vos ambitions
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Contact Form */}
        <section ref={formRef} className="py-20 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold text-gray-900 mb-8"
              >
                Envoyez-nous un message
              </motion.h2>

              <motion.form 
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Prénom et Nom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                {/* Téléphone et Entreprise */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="entreprise"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                {/* Type de besoin */}
                <div>
                  <label htmlFor="typebesoin" className="block text-sm font-medium text-gray-700 mb-2">
                    Type de besoin *
                  </label>
                  <select
                    id="typebesoin"
                    name="typebesoin"
                    required
                    value={formData.typebesoin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  >
                    <option value="formation">Formation</option>
                    <option value="prestation-of">Prestation Organisme de Formation</option>
                    <option value="prestation-entreprise">Prestation Entreprise</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                    placeholder="Décrivez-nous votre projet ou vos besoins..."
                  />
                </div>

                {/* Accepte Contact */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="accepteContact"
                    name="accepteContact"
                    required
                    checked={formData.accepteContact}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <label htmlFor="accepteContact" className="ml-3 text-sm text-gray-600">
                    J'accepte d'être recontacté(e) par NOVA IMPÉRIA concernant ma demande *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg font-semibold"
                >
                  Envoyer ma demande
                </button>
              </motion.form>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section ref={infoRef} className="py-20 bg-gray-50">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInfoInView ? "visible" : "hidden"}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold text-gray-900 mb-8"
              >
                Informations de contact
              </motion.h2>

              <motion.div 
                variants={itemVariants}
                className="space-y-8"
              >
                {/* Email */}
                <div className="flex items-start">
                                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <HiOutlineMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                          <a href={`mailto:${contactInfo.email}`} className="text-black hover:text-gray-700 transition-colors">
                      {contactInfo.email}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Réponse sous 24h garantie
                    </p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <HiOutlinePhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <a href={`tel:${contactInfo.telephone}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                      {contactInfo.telephone}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Lundi-Vendredi 9h-18h
                    </p>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <HiOutlineLocationMarker className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-700">{contactInfo.adresse}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Interventions dans toute la France
                    </p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <HiOutlineClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                    <p className="text-gray-700">{contactInfo.horaires}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Urgences : réponse sous 2h
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div 
                variants={itemVariants}
                className="mt-12 p-6 bg-white rounded-2xl shadow-lg"
              >
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <HiOutlineCheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  Diagnostic gratuit
                </h3>
                <p className="text-gray-600 mb-4">
                  Bénéficiez d'un appel de 30 minutes gratuit pour faire le point sur vos besoins et recevoir nos premiers conseils.
                </p>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300">
                  Réserver mon créneau gratuit
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFaqInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600">
              Les réponses aux questions les plus posées
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFaqInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {faq.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  {openFaq === index ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">{item.reponse}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isFaqInView ? "visible" : "hidden"}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <button className="btn-primary">
              Contactez-nous directement
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact