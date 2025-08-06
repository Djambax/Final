import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX, HiOutlineShoppingBag } from 'react-icons/hi'

// Icônes stylées
const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const BookIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const ServicesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
)

const ContactIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

interface NavbarProps {
  activeItem?: string
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Accueil', path: '/', icon: <HomeIcon /> },
    { label: 'Qui sommes-nous', path: '/qui-sommes-nous', icon: <UsersIcon /> },
    { label: 'Nos formations', path: '/formations', icon: <BookIcon /> },
    { label: 'Prestations', path: '/prestations', icon: <ServicesIcon /> },
    { label: 'Contact', path: '/contact', icon: <ContactIcon /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile quand on change de page
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const isActiveItem = (path: string) => {
    return location.pathname === path
  }

  return (
    <>
      {/* Navbar principale */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-6 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-white/95 shadow-2xl border border-gray-200/50' 
            : 'backdrop-blur-md bg-white/85 shadow-xl border border-gray-100/30'
        } rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 max-w-5xl mx-auto w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)]`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight">
              <span className="text-black">
                NOVA
              </span>
              <span className="ml-1 gradient-text" data-text="IMPÉRIA">
                IMPÉRIA
              </span>
            </Link>
          </motion.div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  className={`group relative flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActiveItem(item.path)
                      ? 'text-black bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg'
                      : 'text-gray-700 hover:text-black hover:bg-yellow-50'
                  }`}
                >
                  {/* Icône avec animation */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon className={`w-4 h-4 ${
                      isActiveItem(item.path) ? 'text-black' : 'text-gray-500 group-hover:text-yellow-600'
                    }`} />
                  </motion.div>
                  
                  <span className="relative">
                    {item.label}
                    {/* Effet de soulignement animé */}
                    {isActiveItem(item.path) && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="hidden lg:flex items-center space-x-3">
            
            {/* Se connecter */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-yellow-600 font-semibold text-sm transition-all duration-300 px-4 py-2 rounded-lg hover:bg-yellow-50"
            >
              Se connecter
            </motion.button>

            {/* Bouton Prestations premium */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/prestations"
                className="btn-primary text-sm px-6 py-3"
              >
                Prestations
              </Link>
            </motion.div>

            {/* Panier avec compteur */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative text-gray-700 hover:text-yellow-600 font-semibold text-sm transition-all duration-300 px-4 py-2 rounded-lg hover:bg-yellow-50"
            >
              <div className="flex items-center space-x-2">
                <HiOutlineShoppingBag className="w-5 h-5" />
                <span>Panier</span>
                {/* Badge compteur */}
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Menu mobile"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenu className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 pt-20">
                {/* Header du menu mobile */}
                <div className="mb-8 pb-6 border-b border-gray-200">
                  <Link 
                    to="/" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-black tracking-tight"
                  >
                    <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                      NOVA
                    </span>
                    <span className="ml-1 bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                      IMPÉRIA
                    </span>
                  </Link>
                </div>

                {/* Navigation mobile */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group flex items-center space-x-4 p-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                          isActiveItem(item.path)
                            ? 'text-white bg-gradient-to-r from-black to-gray-800 shadow-lg'
                            : 'text-gray-700 hover:text-black hover:bg-gray-100'
                        }`}
                      >
                        <motion.div
                          className={`transition-colors duration-300 ${
                            isActiveItem(item.path) ? 'text-white' : 'text-gray-500 group-hover:text-black'
                          }`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {item.icon}
                        </motion.div>
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer du menu mobile */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    © 2024 Nova Impéria
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar