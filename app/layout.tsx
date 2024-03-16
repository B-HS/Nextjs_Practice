import Header from '@/components/header/header'
import Providers from '@/providers/providers'
import './globals.css'

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <Providers>
            <html lang='ko'>
                <body className='container max-w-screen-lg'>
                    <Header />
                    {children}
                </body>
            </html>
        </Providers>
    )
}

export default RootLayout
