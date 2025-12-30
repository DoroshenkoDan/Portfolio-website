"use client"
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

// Components
import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import DownloadCvBtn from '@/components/DownloadCvBtn'

const Home = () => {
  const t = useTranslations('main')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.7, duration: 0.4, ease: "easeIn" } }}
      className='h-full'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>FrontEnd Developer</span>
            <h1 className='h1 mb-6 text-accent'>{t("name")}</h1>
            <p className='max-w-[500] mb-9 text-white/80'>{t("description")}</p>

            <div className='flex flex-col xl:flex-row items-center gap-8'>

              <DownloadCvBtn />

              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0 '>
            <Photo />
          </div>
        </div>
      </div >
      <Stats />
    </motion.div>
  )
}

export default Home