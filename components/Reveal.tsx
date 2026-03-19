'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode, CSSProperties } from 'react'

type RevealVariant =
  | 'slide-up'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'blur'
  | 'rotate'

const variants: Record<RevealVariant, Variants> = {
  'slide-up': {
    hidden: { y: 48, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  'slide-left': {
    hidden: { y: 32, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  'slide-right': {
    hidden: { y: 32, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  'scale': {
    hidden: { scale: 0.88, opacity: 0, y: 24 },
    visible: { scale: 1, opacity: 1, y: 0 },
  },
  'blur': {
    hidden: { filter: 'blur(12px)', opacity: 0, y: 20 },
    visible: { filter: 'blur(0px)', opacity: 1, y: 0 },
  },
  'rotate': {
    hidden: { rotateX: 18, opacity: 0, y: 32, transformPerspective: 800 },
    visible: { rotateX: 0, opacity: 1, y: 0, transformPerspective: 800 },
  },
}

interface RevealProps {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  duration?: number
  className?: string
  style?: CSSProperties
}

export default function Reveal({
  children,
  variant = 'slide-up',
  delay = 0,
  duration = 1.0,
  className,
  style,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-10% 0px' }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
