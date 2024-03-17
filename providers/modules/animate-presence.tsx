'use client'

import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

const AnimateProvider = ({ children }: { children: ReactNode }) => {
    return <AnimatePresence initial={false}> {children}</AnimatePresence>
}

export default AnimateProvider
