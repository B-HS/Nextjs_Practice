import { AnimatePresence } from 'framer-motion'
import React from 'react'
import QueryProvider from './modules/query-client'
import AnimateProvider from './modules/animate-presence'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryProvider>
            <AnimateProvider>{children}</AnimateProvider>
        </QueryProvider>
    )
}

export default Providers
