"use client"

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'


const data = [
	{
		icon: <FaGithub />,
		url: "https://github.com/DoroshenkoDan"
	},
	{
		icon: <FaLinkedin />,
		url: "https://www.linkedin.com/in/doroshenkodan"
	},
	{
		icon: <FaTelegram />,
		url: "https://t.me/DoroshenkoDan"
	}
]

const Social = ({ containerStyles, iconStyles }) => {

	return (
		<div className={containerStyles}>
			{data.map((item, index) => (
				<Link
					key={index}
					href={item.url}
					target="_blank"
					className={iconStyles}
				>
					{item.icon}
				</Link>
			))}
		</div>
	)
}

export default Social