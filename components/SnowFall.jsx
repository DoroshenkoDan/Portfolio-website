"use client"

import { useState, useEffect } from 'react'
import Snowfall from 'react-snowfall'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaDocker, FaGitAlt, FaServer } from "react-icons/fa"
import { SiGithub, SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiMui, SiFramer, SiGraphql, SiWebpack, SiVite } from "react-icons/si"
import ReactDOMServer from 'react-dom/server'

const SnowFall = () => {
	const [showSnow, setShowSnow] = useState(false)

	const techIcons = [
		{ icon: FaHtml5, color: '#535354', size: 18 },
		{ icon: FaCss3, color: '#535354', size: 18 },
		{ icon: FaJs, color: '#535354', size: 18 },
		{ icon: SiTypescript, color: '#535354', size: 18 },
		{ icon: FaReact, color: '#535354', size: 18 },
		{ icon: SiNextdotjs, color: '#535354', size: 18 },
		{ icon: SiTailwindcss, color: '#535354', size: 18 },
		{ icon: SiRedux, color: '#535354', size: 18 },
		{ icon: SiMui, color: '#535354', size: 18 },
		{ icon: SiFramer, color: '#535354', size: 18 },
		{ icon: FaFigma, color: '#535354', size: 18 },
		{ icon: SiGithub, color: '#535354', size: 18 },
		{ icon: FaGitAlt, color: '#535354', size: 18 },
		{ icon: SiGraphql, color: '#535354', size: 18 },
		{ icon: SiWebpack, color: '#535354', size: 16 },
		{ icon: SiVite, color: '#535354', size: 18 },
		{ icon: FaDocker, color: '#535354', size: 18 },
		{ icon: FaServer, color: '#535354', size: 18 }
	]
	const createCustomSnowflakes = () => {
		return techIcons.map((tech) => {
			const svgString = ReactDOMServer.renderToString(
				<tech.icon style={{ color: tech.color, fontSize: tech.size }} />
			)
			const blob = new Blob([svgString], { type: 'image/svg+xml' })
			const url = URL.createObjectURL(blob)
			const img = new Image()
			img.src = url
			return img
		})
	}

	useEffect(() => {

		const timer = setTimeout(() => {
			setShowSnow(true)
		}, 1200)

		return () => clearTimeout(timer)
	}, [])

	if (!showSnow) return null

	return (
		<>
			<Snowfall
				snowflakeCount={150}
				speed={[0.5, 1]}
				wind={[-0.5, 0.5]}
				radius={[10, 25]}
				images={createCustomSnowflakes()}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					zIndex: -1,
					pointerEvents: 'none'
				}}
			/>
		</>
	)
}

export default SnowFall
