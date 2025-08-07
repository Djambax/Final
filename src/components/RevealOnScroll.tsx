import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate' | 'slide-rotate'
  delay?: number
  duration?: number
  distance?: number
  className?: string
  triggerOnce?: boolean
  threshold?: number
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  className = '',
  triggerOnce = true,
  threshold = 0.1
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: triggerOnce, 
    margin: `-${100 * (1 - threshold)}px` 
  })

  const getVariants = () => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] // easeOutCubic
    }

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: baseTransition }
        }
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0, transition: baseTransition }
        }
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0, transition: baseTransition }
        }
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0, transition: baseTransition }
        }
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: baseTransition }
        }
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: -10, scale: 0.9 },
          visible: { opacity: 1, rotate: 0, scale: 1, transition: baseTransition }
        }
      case 'slide-rotate':
        return {
          hidden: { opacity: 0, x: -distance, rotate: -5, scale: 0.95 },
          visible: { opacity: 1, x: 0, rotate: 0, scale: 1, transition: baseTransition }
        }
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: baseTransition }
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll