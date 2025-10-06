"use client"

import { motion, useInView } from "framer-motion"
import Link from 'next/link'
import { BsArrowDownRight } from "react-icons/bs"
import { useRef } from 'react'

const ServiceCard = ({ service, index, t }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, {
		once: true,
		threshold: 0.3,
		margin: "-50px 0px -50px 0px"
	})

	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.9
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				delay: 0.4,
				ease: "easeOut"
			}
		}
	}

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={cardVariants}
			className={`flex-1 flex flex-col justify-center gap-6 group relative overflow-hidden rounded-xl p-6 border border-white/10 ${isInView ? 'bg-white/5 border-accent/30 shadow-lg shadow-accent/10' : 'hover:bg-white/5'
				} transition-all duration-700`}
		>
			<div className='w-full flex items-start gap-3'>
				<motion.div
					initial={{ scale: 0, rotate: -180 }}
					animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
					transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
					className={`text-6xl font-extrabold text-outline transition-all duration-500 ${isInView ? 'text-accent' : 'text-transparent'
						}`}
				>
					{service.num}
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, x: -20 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
					transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
					className={`text-[36px] font-bold leading-none transition-all duration-500 ${isInView ? 'text-accent' : 'text-white group-hover:text-accent'
						}`}
				>
					{t(`${service.key}.title`)}
				</motion.h2>
			</div>

			<div className='flex-1 flex flex-row justify-between'>
				<motion.ul
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
					className='text-white/60 space-y-2'
				>
					{t.raw(`${service.key}.items`).map((item, itemIndex) => (
						<motion.li
							key={itemIndex}
							initial={{ opacity: 0, x: -10 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
							transition={{
								duration: 0.3,
								delay: index * 0.1 + 0.5 + itemIndex * 0.1
							}}
							className='flex items-center gap-2'
						>
							<span className={`mt-1 transition-all duration-500 ${isInView ? 'text-accent' : 'text-accent/60'
								}`}>•</span>
							<span className={`transition-all duration-500 ${isInView ? 'text-white' : 'text-white/60 group-hover:text-accent'
								}`}>{item}</span>
						</motion.li>
					))}
				</motion.ul>
				<motion.div
					initial={{ scale: 0, rotate: 45 }}
					animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 45 }}
					transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
				>
					<Link
						href={`/contact?service=${service.num}`}
						className={`w-[70px] h-[70px] rounded-full transition-all duration-500 flex justify-center items-center hover:-rotate-45 ${isInView ? 'bg-accent text-primary' : 'bg-white group-hover:bg-accent text-primary'
							}`}
					>
						<BsArrowDownRight className='text-3xl' />
					</Link>
				</motion.div>
			</div>
			<motion.div
				initial={{ scaleX: 0 }}
				animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
				transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
				className={`border-b w-full transition-all duration-500 origin-left ${isInView ? 'border-accent' : 'border-white/20 group-hover:border-accent'
					}`}
			></motion.div>
			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				animate={isInView ? { scale: 1, opacity: 0.1 } : { scale: 0, opacity: 0 }}
				transition={{ duration: 0.8, delay: index * 0.1 }}
				className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent -z-10"
			/>
		</motion.div>
	)
}

export default ServiceCard
