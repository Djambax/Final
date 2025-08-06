import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

interface NavbarProps {
  activeItem?: string
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Qui sommes-nous', path: '/qui-sommes-nous' },
    { label: 'Nos formations', path: '/formations' },
    { label: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActiveItem = (path: string) => {
    return location.pathname === path
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-lg bg-white/90 shadow-2xl' 
            : 'backdrop-blur-sm bg-white/80 shadow-lg'
        } rounded-full px-8 py-4`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            NOVA <span className="gradient-text">IMPÉRIA</span>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8 ml-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActiveItem(item.path)
                    ? 'text-amber-500'
                    : 'text-gray-700 hover:text-amber-500'
                }`}
              >
                {item.label}
                {isActiveItem(item.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Bouton Prestations */}
          <Link
            to="/prestations"
            className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 ml-8"
          >
            Prestations
          </Link>

          {/* Bouton Connexion */}
          <button className="hidden md:block text-gray-700 hover:text-amber-500 font-medium text-sm ml-4 transition-colors duration-300">
            Connexion
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-amber-500 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <HiOutlineX className="w-6 h-6" />
            ) : (
              <HiOutlineMenu className="w-6 h-6" />
            )}
          </button>
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
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 pt-20">
                <div className="space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-lg font-medium transition-colors duration-300 ${
                        isActiveItem(item.path)
                          ? 'text-amber-500'
                          : 'text-gray-700 hover:text-amber-500'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/prestations"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-center font-semibold mt-8"
                  >
                    Prestations
                  </Link>
                  <button className="block w-full text-left text-gray-700 hover:text-amber-500 font-medium mt-4 transition-colors duration-300">
                    Connexion
                  </button>
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