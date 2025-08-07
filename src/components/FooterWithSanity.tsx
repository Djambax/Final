import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker 
} from 'react-icons/hi'
import { 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter, 
  FaFacebook,
  FaYoutube,
  FaTiktok 
} from 'react-icons/fa'
import { useFooterConfig } from '../hooks/useSanity'

// Mapping des icônes sociales
const socialIconMap = {
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  twitter: FaTwitter,
  facebook: FaFacebook,
  youtube: FaYoutube,
  tiktok: FaTiktok,
}

const socialColorMap = {
  linkedin: 'hover:text-blue-600',
  instagram: 'hover:text-pink-600',
  twitter: 'hover:text-blue-400',
  facebook: 'hover:text-blue-700',
  youtube: 'hover:text-red-600',
  tiktok: 'hover:text-black',
}

const FooterWithSanity: React.FC = () => {
  const { data: footerConfig, loading, error } = useFooterConfig()

  // Configuration de fallback
  const fallbackConfig = {
    branding: {
      brandName1: 'NOVA',
      brandName2: 'IMPÉRIA',
      description: 'Accompagner tous les entrepreneurs dans la construction d\'une image forte et cohérente. Formation d\'excellence et conseil stratégique pour développer votre projet avec succès.'
    },
    contactInfo: {
      email: 'contact@nova-imperia.fr',
      phone: '+33 1 23 45 67 89',
      address: 'Paris, France'
    },
    entrepriseLinks: [
      { label: 'À propos', path: '/qui-sommes-nous' },
      { label: 'Notre équipe', path: '/qui-sommes-nous' },
      { label: 'Nos valeurs', path: '/qui-sommes-nous' },
      { label: 'Témoignages', path: '#' },
    ],
    servicesLinks: [
      { label: 'Formations', path: '/formations' },
      { label: 'Prestations OF', path: '/prestations' },
      { label: 'Prestations Entreprise', path: '/prestations' },
      { label: 'Accompagnement', path: '/prestations' },
    ],
    ressourcesLinks: [
      { label: 'Blog', path: '#' },
      { label: 'Guides pratiques', path: '#' },
      { label: 'Webinaires', path: '#' },
      { label: 'FAQ', path: '/contact' },
    ],
    legalLinks: [
      { label: 'Mentions légales', path: '#' },
      { label: 'Politique de confidentialité', path: '#' },
      { label: 'CGV', path: '#' },
      { label: 'CGU', path: '#' },
    ],
    socialLinks: [
      { platform: 'linkedin', url: '#', isActive: true },
      { platform: 'instagram', url: '#', isActive: true },
      { platform: 'twitter', url: '#', isActive: true },
      { platform: 'facebook', url: '#', isActive: true },
    ],
    copyright: '© 2025 NOVA IMPÉRIA. Made with ❤️ in France'
  }

  // Utiliser les données Sanity ou fallback
  const config = footerConfig || fallbackConfig

  if (error) {
    console.warn('Erreur lors du chargement du footer:', error)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 block">
              {config.branding.brandName1} <span className="gradient-text">{config.branding.brandName2}</span>
              {loading && <span className="text-xs text-gray-400 ml-2">🔄</span>}
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {config.branding.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <HiOutlineMail className="w-5 h-5 mr-3 text-amber-500" />
                <a 
                  href={`mailto:${config.contactInfo.email}`} 
                  className="hover:text-amber-500 transition-colors"
                >
                  {config.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <HiOutlinePhone className="w-5 h-5 mr-3 text-amber-500" />
                <a 
                  href={`tel:${config.contactInfo.phone.replace(/\s/g, '')}`} 
                  className="hover:text-amber-500 transition-colors"
                >
                  {config.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <HiOutlineLocationMarker className="w-5 h-5 mr-3 text-amber-500" />
                <span>{config.contactInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Entreprise */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Entreprise</h3>
            <ul className="space-y-3">
              {config.entrepriseLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {config.servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ressources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Ressources</h3>
            <ul className="space-y-3">
              {config.ressourcesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Légal */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Légal</h3>
            <ul className="space-y-3">
              {config.legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Links & Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              {config.socialLinks
                .filter(social => social.isActive)
                .map((social, index) => {
                  const IconComponent = socialIconMap[social.platform as keyof typeof socialIconMap]
                  const colorClass = socialColorMap[social.platform as keyof typeof socialColorMap] || 'hover:text-gray-300'
                  
                  if (!IconComponent) return null
                  
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${colorClass} transition-colors duration-300`}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  )
                })}
            </div>
            <p className="text-gray-400 text-sm text-center sm:text-right">
              {config.copyright}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default FooterWithSanity