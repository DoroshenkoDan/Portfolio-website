"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useRef, useEffect } from 'react'
import TriangleLoader from './TriangleLoader'

export default function HalvesPageTransition() {
	const pathname = usePathname()

	const initialPlayedRef = useRef(false)
	const isInitial = !initialPlayedRef.current

	const inDuration = 0.4
	const holdDuration = 1.0
	const outDuration = 0.4

	const initialTotal = holdDuration + outDuration
	const initialTimes = [0, holdDuration / initialTotal, 1]

	const fullTotal = inDuration + holdDuration + outDuration
	const fullTimes = [0, inDuration / fullTotal, (inDuration + holdDuration) / fullTotal, 1]

	useEffect(() => {
		initialPlayedRef.current = true
	}, [])

	return (
		<AnimatePresence mode="wait">
			<div key={pathname}>
				<motion.div
					className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
					initial={{ opacity: isInitial ? 1 : 0 }}
					animate={{ opacity: isInitial ? [1, 1, 0] : [0, 1, 1, 0] }}
					transition={{
						duration: isInitial ? initialTotal : fullTotal,
						times: isInitial ? initialTimes : fullTimes,
						ease: 'easeInOut'
					}}
				>
					<TriangleLoader />
				</motion.div>

				<motion.div
					className="fixed top-0 left-0 w-screen h-1/2 bg-primary pointer-events-none z-30"
					initial={{ y: isInitial ? '0%' : '-100%' }}
					animate={{
						y: isInitial
							? ['0%', '0%', '-100%']
							: ['-100%', '0%', '0%', '-100%']
					}}
					transition={{
						duration: isInitial ? initialTotal : fullTotal,
						times: isInitial ? initialTimes : fullTimes,
						ease: 'easeInOut'
					}}
				/>

				<motion.div
					className="fixed bottom-0 left-0 w-screen h-1/2 bg-primary pointer-events-none z-30"
					initial={{ y: isInitial ? '0%' : '100%' }}
					animate={{
						y: isInitial
							? ['0%', '0%', '100%']
							: ['100%', '0%', '0%', '100%']
					}}
					transition={{
						duration: isInitial ? initialTotal : fullTotal,
						times: isInitial ? initialTimes : fullTimes,
						ease: 'easeInOut'
					}}
				/>
			</div>
		</AnimatePresence>
	)
}