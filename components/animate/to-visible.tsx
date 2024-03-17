'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const ToVisible = ({ children, delay }: { children: ReactNode; delay: number }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration: 0.2 }}>
            {children}
        </motion.div>
    )
}

export default ToVisible
