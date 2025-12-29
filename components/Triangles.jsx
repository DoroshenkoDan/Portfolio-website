"use client"

import { useEffect, useMemo, useState, useCallback } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function Triangles() {

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine)
		})
	}, [])


	const options = useMemo(
		() => ({
			background: { color: { value: "inherit" } },
			fpsLimit: 120,
			interactivity: {
				events: {
					onHover: { enable: true, mode: "repulse" },
					resize: true,
				},
				modes: {
					repulse: { distance: 100, duration: 0.4 },
				},
			},
			particles: {
				color: { value: "#ffffff" },
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: { default: "bounce" },
					random: false,
					speed: 1,
					straight: false,
				},
				number: { density: { enable: true }, value: 120 },
				opacity: { value: 0.5 },
				shape: { type: "triangle" },
				size: { value: { min: 1, max: 3 } },
			},
			detectRetina: true,
		}),
		[]
	)
	return (
		<Particles
			id="tsparticles"
			options={options}
		/>
	)
}
