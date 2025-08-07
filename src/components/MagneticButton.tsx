import { motion } from 'framer-motion'
import { useState, useRef, MouseEvent, ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  magnetStrength?: number
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  magnetStrength = 0.3
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * magnetStrength
    const deltaY = (e.clientY - centerY) * magnetStrength

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary'
      case 'secondary':
        return 'btn-secondary'
      case 'ghost':
        return 'bg-transparent text-yellow-600 border-2 border-transparent hover:border-yellow-500 hover:bg-yellow-50'
      default:
        return 'btn-primary'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm'
      case 'md':
        return 'px-6 py-3 text-base'
      case 'lg':
        return 'px-8 py-4 text-lg'
      default:
        return 'px-6 py-3 text-base'
    }
  }

  return (
    <div className="relative inline-block">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 bg-yellow-400/20 blur-xl"
        animate={{
          opacity: position.x !== 0 || position.y !== 0 ? 0.6 : 0,
          scale: position.x !== 0 || position.y !== 0 ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.button
        ref={buttonRef}
        onClick={onClick}
        disabled={disabled}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`
          relative z-10 rounded-full font-bold transition-all duration-300 cursor-pointer
          transform-gpu will-change-transform
          ${getVariantClasses()}
          ${getSizeClasses()}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.8
        }}
        whileHover={{
          scale: disabled ? 1 : 1.05,
        }}
        whileTap={{
          scale: disabled ? 1 : 0.95,
        }}
      >
        {/* Content avec effet de parallax */}
        <motion.div
          className="relative z-20 flex items-center justify-center"
          animate={{
            x: position.x * 0.1,
            y: position.y * 0.1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25
          }}
        >
          {children}
        </motion.div>

        {/* Effet de particules au hover */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(circle at ${50 + position.x * 0.5}% ${50 + position.y * 0.5}%, 
              rgba(251, 191, 36, 0.1) 0%, 
              transparent 50%)
            `
          }}
          animate={{
            opacity: position.x !== 0 || position.y !== 0 ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Ripple effect au clic */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/30"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{
            scale: [0, 1.2],
            opacity: [0.5, 0],
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.button>

      {/* Effet de trailing particles */}
      {(position.x !== 0 || position.y !== 0) && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: position.x * (0.7 - i * 0.2) + (Math.random() - 0.5) * 10,
                y: position.y * (0.7 - i * 0.2) + (Math.random() - 0.5) * 10,
                opacity: [0.8, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: 0.8 + i * 0.2,
                ease: 'easeOut'
              }}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default MagneticButton