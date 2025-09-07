"use client"

import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'
import ServiceCard from '@/components/ServiceCard'

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
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 1, duration: 0.4, ease: "easeIn" }
					}}
					className='grid grid-cols-1 xl:grid-cols-2 gap-[60px]'
				>
					{services.map((service, index) => (
						<ServiceCard
							key={service.num}
							service={service}
							index={index}
							t={t}
						/>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default Services