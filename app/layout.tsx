import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Electrolize } from 'next/font/google'


const electrolize = Electrolize({
  weight: ['400', ],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Avaliação Diaria',
  description: 'Pagina criada para gerar avaliação do aluno.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={electrolize.className}>{children}</body>
    </html>
  )
}
