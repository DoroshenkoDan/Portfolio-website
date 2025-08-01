"use client"

import CountUp from 'react-countup'
import { useTranslations } from 'next-intl'

const Stats = () => {
	const t = useTranslations('main')

	const stats = [
		{
			num: 3,
			text: t("yearsOfExperience"),
			suffix: "+"
		},
		{
			num: 9,
			text: t("projects"),
			suffix: ""
		},
		{
			num: 21,
			text: t("technologies"),
			suffix: ""
		},
		{
			num: 999,
			text: t("codeLines"),
			suffix: "+"
		},
	]


	return (<section
		className='pt-4 pb-12 xl:pt-0 xl:pb-0'
	>
		<div className="container mx-auto ">
			<div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
				{stats.map((item, index) => {
					return <div
						key={index}
						className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
						<CountUp
							end={item.num}
							duration={5}
							delay={2}
							suffix={item.suffix}
							className="text-4xl xl:text-6xl font-extrabold text-accent"
						/>
						<p
							className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
						>
							{item.text}
						</p>
					</div>
				})}
			</div>
		</div>

	</section>)
}

export default Stats