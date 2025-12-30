"use client"

import ProjectSliderBtns from '@/components/ProjectSliderBtns'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BsBrowserChrome, BsGithub } from 'react-icons/bs'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { projects } from './data.js'
import { useTranslations } from 'next-intl'

const Projects = () => {
	const t = useTranslations()
	const projectsData = projects(t)
	const [project, setProject] = useState(projectsData[0])
	const [showAlert, setShowAlert] = useState(false)

	const handleSlideChange = (swiper) => {
		const currentIndex = swiper.activeIndex
		setProject(projectsData[currentIndex])
	}

	const handleGithubClick = (e) => {
		if (!project.github) {
			e.preventDefault()
			setShowAlert(true)
			setTimeout(() => {
				setShowAlert(false)
			}, 5000)
		}
	}

	return (<motion.section
		initial={{ opacity: 0, }}
		animate={{ opacity: 1, transition: { delay: 1.7, duration: 0.4, ease: "easeIn" } }}
		className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
	>
		<AnimatePresence>
			{showAlert && (
				<motion.div
					initial={{ x: -400, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -400, opacity: 0 }}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
					className="fixed bottom-4 left-4 z-50 max-w-md bg-primary"
				>
					<Alert variant="default">
						<AlertTitle className='text-lg font-semibold'>{t("projects.alertMessage.title")}</AlertTitle>
						<AlertDescription>
							{t("projects.alertMessage.description")}
						</AlertDescription>
					</Alert>
				</motion.div>
			)}
		</AnimatePresence>
		<div className='container mx-auto'>
			<div className='flex flex-col xl:flex-row xl:gap-[30px]'>
				<div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
					<div className='flex flex-col gap-[30px] h-[50%]'>
						<div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
						<h2 className='text-[42px] font-bold leading-none text-accent transition-all duration-500 capitalize'>
							{project.title}
						</h2>
						<p className='text-white/60'>{project.description}</p>
						<div className='border border-white/20'></div>
						<div className='flex items-center gap-4'>
							<Link href={project.live} target="_blank">
								<TooltipProvider delayDuration={100}>
									<Tooltip>
										<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center
										items-center group">
											<BsBrowserChrome className='text-white text-3xl group-hover:text-accent' />
										</TooltipTrigger>
										<TooltipContent>
											<p>Live Project</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</Link>
							<Link href={project.github || "#"} onClick={handleGithubClick}>
								<TooltipProvider delayDuration={100}>
									<Tooltip>
										<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center
										items-center group">
											<BsGithub className='text-white text-3xl group-hover:text-accent' />
										</TooltipTrigger>
										<TooltipContent>
											<p>Github repository</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</Link>
						</div>
					</div>
				</div>
				<div className='w-full xl:w-[50%]'>
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						className="xl:h-[520px] mb-12"
						onSlideChange={handleSlideChange}
					>
						{projectsData.map((project, index) => (
							<SwiperSlide
								key={index}
								className='w-full '
							>
								<div
									className='h-[420px] relative group flex justify-center items-center  bg-white'
								>
									<div className='absolute top-0 bottom-0 w-full bg-[rgba(0,0,0,0.1)] z-10'></div>
									<div className='relative w-full h-full'>
										<Image src={project.image}
											fill
											className="object-contain"
											alt="Project image" />
									</div>
								</div>
							</SwiperSlide>
						))}
						<ProjectSliderBtns
							containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-8 z-20 w-full justify-between xl:w-max xl:justify-none"
							btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
						/>
					</Swiper>
				</div>
			</div>
		</div>
	</motion.section>)
}

export default Projects