import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://easyscheduling.com.br'), // Atualize com o URL real do seu site
  title:
    'EasyScheduling - Sistema de Agendamento e Controle de Negócios',
  description:
    'Otimize a gestão de agendamentos, colaboradores, serviços, produtos e controle financeiro com nosso sistema.',
  keywords:
    'sistema de agendamento, controle financeiro, gestão de negócios, agendamentos online, software para salões de beleza',
  authors: [
    {
      name: 'Mateus Monteiro dos Santos - Github : Mateusmont-1'
    }
  ],
  publisher: 'EasyScheduling',
  openGraph: {
    title:
      'EasyScheduling - Sistema de Agendamento e Controle de Negócios',
    description:
      'Otimize a gestão de agendamentos, colaboradores, serviços, produtos e controle financeiro com nosso sistema.',
    images: ['/icon1.png']
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'EasyScheduling - Sistema de Agendamento e Controle de Negócios',
    description:
      'Otimize a gestão de agendamentos, colaboradores, serviços, produtos e controle financeiro com nosso sistema.',
    images: ['https://i.imgur.com/NJ1OJ4h.png']
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className="antialiased"
    >
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BPVWD9S99B"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BPVWD9S99B');
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main
            className={`flex min-h-screen flex-col ${inter.className}`}
          >
            <Header />
            <div className="flex flex-1 justify-center w-full">
              <div className="flex w-full max-w-[1280px] h-full">
                {children}
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
