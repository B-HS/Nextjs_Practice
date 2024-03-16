import React from 'react'
import QueryProvider from './modules/query-client'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <QueryProvider>{children}</QueryProvider>
}

export default Providers
