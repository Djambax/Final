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
  FaFacebook 
} from 'react-icons/fa'

const Footer: React.FC = () => {
  const entrepriseLinks = [
    { label: 'À propos', path: '/qui-sommes-nous' },
    { label: 'Notre équipe', path: '/qui-sommes-nous' },
    { label: 'Nos valeurs', path: '/qui-sommes-nous' },
    { label: 'Témoignages', path: '#' },
  ]

  const servicesLinks = [
    { label: 'Formations', path: '/formations' },
    { label: 'Prestations OF', path: '/prestations' },
    { label: 'Prestations Entreprise', path: '/prestations' },
    { label: 'Accompagnement', path: '/prestations' },
  ]

  const ressourcesLinks = [
    { label: 'Blog', path: '#' },
    { label: 'Guides pratiques', path: '#' },
    { label: 'Webinaires', path: '#' },
    { label: 'FAQ', path: '/contact' },
  ]

  const legalLinks = [
    { label: 'Mentions légales', path: '#' },
    { label: 'Politique de confidentialité', path: '#' },
    { label: 'CGV', path: '#' },
    { label: 'CGU', path: '#' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-600' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-700' },
  ]

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
              NOVA <span className="gradient-text">IMPÉRIA</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Accompagner tous les entrepreneurs dans la construction d'une image forte et cohérente. 
              Formation d'excellence et conseil stratégique pour développer votre projet avec succès.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <HiOutlineMail className="w-5 h-5 mr-3 text-amber-500" />
                <a href="mailto:contact@nova-imperia.fr" className="hover:text-amber-500 transition-colors">
                  contact@nova-imperia.fr
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <HiOutlinePhone className="w-5 h-5 mr-3 text-amber-500" />
                <a href="tel:+33123456789" className="hover:text-amber-500 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <HiOutlineLocationMarker className="w-5 h-5 mr-3 text-amber-500" />
                <span>Paris, France</span>
              </div>
            </div>
          </motion.div>

          {/* Entreprise */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Entreprise</h3>
            <ul className="space-y-3">
              {entrepriseLinks.map((link) => (
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
              {servicesLinks.map((link) => (
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
              {ressourcesLinks.map((link) => (
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
              {legalLinks.map((link) => (
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
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center sm:text-right">
              © 2025 NOVA IMPÉRIA. Made with ❤️ in France
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer