import Header from '@/components/header/header'
import Providers from '@/providers/providers'
import './globals.css'

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang='ko'>
            <Providers>
                <body className='container max-w-screen-lg'>
                    <Header />
                    {children}
                </body>
            </Providers>
        </html>
    )
}

export default RootLayout
