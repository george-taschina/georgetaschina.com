import './globals.css'
import Navbar from './Navbar'
import { Archivo } from 'next/font/google'
import Head from 'next/head' // Next.js Head API for adding meta tags

const archivo = Archivo({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'George Taschina | Freelancer, Web Developer, Cloud Architect',
  description: 'George Taschina, a professional Freelancer, Web Developer, and Cloud Architect. Providing top-tier web development and cloud architecture services.',
  keywords: 'Freelancer, Web Developer, Cloud Architect, George Taschina', 
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={archivo.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
