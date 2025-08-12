"use client"

import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowDownRight } from "react-icons/bs"
import { useTranslations } from 'next-intl'

const Services = () => {
	const t = useTranslations('services')

	const services = [
		{ num: 1, key: 'service1' },
		{ num: 2, key: 'service2' },
		{ num: 3, key: 'service3' },
		{ num: 4, key: 'service4' },
		{ num: 5, key: 'service5' },
		{ num: 6, key: 'service6' },
		{ num: 7, key: 'service7' },
		{ num: 8, key: 'service8' },
		{ num: 9, key: 'service9' },
	]


	return (
		<section className='min-h-[80vh] flex flex-col justify-center py-8 xl:py-12'>
			<div className='container mx-auto'>
				<motion.div
					initial={{
						opacity: 0
					}}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
					}}
					className='grid grid-cols-1 xl:grid-cols-2 gap-[60px]'
				>
					{services.map((service, index) => {
						return <div
							key={index}
							className='flex-1 flex flex-col justify-center gap-6 group'
						>
							<div className='w-full flex items-start gap-3'>
								<div
									className='text-6xl font-extrabold text-outline text-transparent'>
									{service.num}
								</div>

								<h2
									className='text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'
								>{t(`${service.key}.title`)}</h2>
							</div>

							<div className='flex-1 flex flex-row justify-between'>
								<ul className='text-white/60 space-y-2'>
									{t.raw(`${service.key}.items`).map((item, itemIndex) => (
										<li key={itemIndex} className='flex items-center gap-2'>
											<span className='text-accent mt-1'>•</span>
											<span className='group-hover:text-accent transition-all duration-500'>{item}</span>
										</li>
									))}
								</ul>
								<div>
									<Link
										href={`/contact?service=${service.num}`}
										className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
										<BsArrowDownRight className='text-primary text-3xl' />
									</Link>
								</div>
							</div>
							<div className='border-b border-white/20 w-full transition-all duration-500 group-hover:border-accent'></div>
						</div>
					})
					}
				</motion.div>
			</div>

		</section>)
}

export default Services