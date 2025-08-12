"use client"

import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from 'framer-motion'
import { about, education, experience, skills } from './data.js'
import { useTranslations } from 'next-intl'

const Resume = () => {
	const t = useTranslations("resume")
	const experienceData = experience(t)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
			className='min-h-[80vh] flex items-center justify-center py-8 xl:py-12'
		>
			<div className="container mx-auto">
				<Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">{t("tabs.experience")}</TabsTrigger>
						<TabsTrigger value="education">{t("tabs.education")}</TabsTrigger>
						<TabsTrigger value="skills">{t("tabs.skills")}</TabsTrigger>
						<TabsTrigger value="about">{t("tabs.about")}</TabsTrigger>
					</TabsList>
					<div className='min-h-[70vh] w-full'>
						<TabsContent value="experience" className="w-full">
							<div className='flex flex-col gap-[30px] text-center xl:text-left '>
								<h3
									className='text-4xl font-bold text-accent'>{experienceData.title}
								</h3>
								<p
									className='max-w-[600px] mx-auto xl:mx-0'>{experienceData.description}
								</p>
								<ScrollArea className='h-[400px]'>
									<ul className='grid grid-cols-1  gap-[30px]'>
										{experienceData.items.map((item, index) => (
											<li key={index} className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1'>
												<span className='text-accent text-lg'>{item.company} | {item.duration}</span>
												<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
												<div className='flex items-center gap-3'>

													<p className='text-accent'>{item.description}</p>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="education" className="w-full">
							<div className='flex flex-col gap-[30px] text-center xl:text-left'>
								<h3
									className='text-4xl text-accent font-bold'>{education.title}
								</h3>
								<p
									className='max-w-[600px] mx-auto xl:mx-0'>{education.description}
								</p>
								<ScrollArea className='h-[400px]'>
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
										{education.items.map((item, index) => (
											<li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1'>
												<span className='text-accent'>{item.degree}</span>
												<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
												<div className='flex items-center gap-3'>
													<span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
													<p className='text-white/60'>{item.institution}</p>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className='flex flex-col gap-[30px] text-center xl:text-left'>
									<h3 className='text-4xl text-accent font-bold'>{skills.title}</h3>
									<p className='max-w-[600px] mx-auto xl:mx-0'>{skills.description}</p>
								</div>
								<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
									{skills.items.map((skill, index) => (
										<li key={index}>
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group cursor-default">
														<div className='text-6xl group-hover:text-accent group-hover:scale-110 transition-all duration-300'>{skill.icon}</div>
													</TooltipTrigger>
													<TooltipContent>
														<p className=' text-black font-semibold'>{skill.name}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>
						<TabsContent value="about" className="w-full text-center xl:text-left">
							<div className='flex flex-col gap-[30px]'>
								<h3 className='text-4xl font-bold text-accent'>{about.title}</h3>
								<p className='max-w-[600px] mx-auto xl:mx-0'>{about.description}</p>
								<ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
									{about.info.map((item, index) => (
										<li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
											<span className='text-white/60'>{item.fieldName}:</span>
											<span className='text-xl text-accent'>{item.fieldValue}</span>
										</li>
									))}
								</ul>
							</div>

						</TabsContent>

					</div>
				</Tabs>
			</div>

		</motion.div>)
}

export default Resume