"use client"

import { useEffect, useState } from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { useSwiper } from 'swiper/react'


const ProjectSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
	const swiper = useSwiper()
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	useEffect(() => {
		if (!swiper) return

		const update = () => {
			setIsBeginning(swiper.isBeginning)
			setIsEnd(swiper.isEnd)
		}

		update()
		swiper.on('slideChange', update)
		swiper.on('reachBeginning', update)
		swiper.on('reachEnd', update)

		return () => {
			swiper.off('slideChange', update)
			swiper.off('reachBeginning', update)
			swiper.off('reachEnd', update)
		}
	}, [swiper])

	const disabledStyles = "opacity-30 pointer-events-none"

	return (<div className={containerStyles}>
		<button
			className={`${btnStyles} ${isBeginning ? disabledStyles : ""}`}
			onClick={() => swiper.slidePrev()}
			disabled={isBeginning}
		>
			<PiCaretLeftBold className={iconStyles} />
		</button>
		<button
			className={`${btnStyles} ${isEnd ? disabledStyles : ""}`}
			onClick={() => swiper.slideNext()}
			disabled={isEnd}
		>
			<PiCaretRightBold className={iconStyles} />
		</button>
	</div>)
}

export default ProjectSliderBtns
