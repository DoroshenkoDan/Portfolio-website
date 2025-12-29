
import { JetBrains_Mono } from "next/font/google"
import "../globals.css"
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
// Components
import Header from "@/components/Header"
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'
// import SnowFall from '@/components/SnowFall'
import Triangles from '@/components/Triangles'
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800",],
  variable: "--font-jetbrainsMono",
})

export const metadata = {
  title: "Daniil Dorosohenko",
  description: "Daniil Dorosohenko - Frontend Developer",
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html lang={locale}>
      <body className={jetbrainsMono.variable}>
        <NextIntlClientProvider locale={locale}>
          <Header />
          <StairTransition />
          {/* <SnowFall /> */}
          <Triangles />
          <PageTransition>
            {children}
          </PageTransition>
        </NextIntlClientProvider>
      </body>
    </html >
  )
}