

'use client'

import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import { useTranslations, useLocale } from 'next-intl'
// Components
import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Link } from '@/i18n/navigation'


const Home = () => {
  const t = useTranslations('main')
  const locale = useLocale()

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    const cvFile = locale === 'uk' ? '/CvUA.pdf' : '/CvEn.pdf'
    const fileName = locale === 'uk' ? 'Doroshenko-CV-UA.pdf' : 'Doroshenko-CV-EN.pdf'

    link.href = cvFile
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>FrontEnd Developer</span>
            <h1 className='h1 mb-6 text-accent'>{t("name")}</h1>
            <p className='max-w-[500] mb-9 text-white/80'>{t("description")}</p>

            <div className='flex flex-col xl:flex-row items-center gap-8'>
              {/* <Link> */}
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <span>{t("downloadCv")}</span>
                <FiDownload className='text-xl' />
              </Button>
              {/* </Link> */}
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div >
      <Stats />
    </section >
  )
}

export default Home