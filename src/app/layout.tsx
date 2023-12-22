import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DefaultSeo } from 'next-seo';
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calculadora de Juros Compostos Online | Finance Calc',
  description: 'Use nossa ferramenta online gratuita para calcular juros compostos de maneira rápida e eficiente.',
  openGraph: {
    title: 'Calculadora de Juros Compostos Online',
    description: 'Use nossa ferramenta online gratuita para calcular juros compostos de maneira rápida e eficiente.',
    images: [
      {
        url: '../../public/calc.jpg',
        width: 824,
        height: 482,
        alt: 'Imagem da nossa calculadora de juros compostos online',
      },
    ],
    siteName: 'Calculadora de Juros Compostos Online | Finance Calc',
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={`bg-black min-h-screen w-full ${inter.className} flex flex-row w-full text-gray-900 dark:text-gray-100 font-medium`}>
          {children}
        </div>
      </body>
    </html>
  )
}
