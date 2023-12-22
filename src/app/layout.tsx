import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calculadora de Juros Compostos Online',
  description: 'Use nossa ferramenta online gratuita para calcular juros compostos de maneira rápida e eficiente.',
  openGraph: {
    title: 'Calculadora de Juros Compostos Online',
    description: 'Use nossa ferramenta online gratuita para calcular juros compostos de maneira rápida e eficiente.',
    images: [
      {
        url: 'https://juros-compostos-calculadora.vercel.app/calc.jpg',
        width: 824,
        height: 482,
        alt: 'Imagem representativa da calculadora de juros compostos',
      },
    ],
    siteName: 'Calculadora de Juros Compostos Online',
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7569021266498491"/>
      </head>
      <body>
        <div className={`bg-black min-h-screen w-full ${inter.className} flex flex-row w-full text-gray-900 dark:text-gray-100 font-medium`}>
          {children}
        </div>
      </body>
    </html>
  )
}
