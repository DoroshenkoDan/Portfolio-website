import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaDocker, FaGitAlt, FaServer } from "react-icons/fa"
import { SiGithub, SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiMui, SiFramer, SiGraphql, SiWebpack, SiVite } from "react-icons/si"

export const about = (t) => ({
	title: t('about.title'),
	description: t('about.description'),
	info: [
		{
			fieldName: t('about.info.name'),
			fieldValue: t('about.values.name')
		},
		{
			fieldName: t('about.info.phone'),
			fieldValue: t('about.values.phone')
		}, 
		{
			fieldName: t('about.info.experience'),
			fieldValue: t('about.values.experience')
		}, 
		{
			fieldName: t('about.info.telegram'),
			fieldValue: t('about.values.telegram')
		}, 
		{
			fieldName: t('about.info.nationality'),
			fieldValue: t('about.values.nationality')
		}, 
		{
			fieldName: t('about.info.email'),
			fieldValue: t('about.values.email')
		}, 
		{
			fieldName: t('about.info.freelance'),
			fieldValue: t('about.values.freelance')
		}, 
		{
			fieldName: t('about.info.languages'),
			fieldValue: t('about.values.languages')
		}
	]
})

export const experience = (t) => ({
	icon: "/assets/resume/badge.svg",
	title: t('experience.title'),
	description: t('experience.description'),
	items: [
		{
			company: "Born2CodeLab",
			position: "Frontend Developer",
			duration: t('experience.durations.born2codelab'),
			description: t('experience.born2codelab'),
		},
		{
			company: "UpWork",
			position: "Frontend Developer",
			duration: t('experience.durations.upwork'),
			description: t('experience.upwork'),
		},
		{
			company: "Toptal",
			position: "Frontend Developer",
			duration: t('experience.durations.toptal'),
			description: t('experience.toptal'),
		},
	]
})


export const skills = (t) => ({
	title: t('skills.title'),
	description: t('skills.description'),
	items: [
		{
			icon: <FaHtml5 />,
			name: "HTML"
		},
		{
			icon: <FaCss3 />,
			name: "CSS"
		},
		{
			icon: <FaJs />,
			name: "JavaScript"
		},
		{
			icon: <SiTypescript />,
			name: "TypeScript"
		},
		{
			icon: <FaReact />,
			name: "React"
		},
		{
			icon: <SiNextdotjs />,
			name: "Next.js"
		},
		{
			icon: <SiRedux />,
			name: "Redux"
		},
		{
			icon: <FaJs />,
			name: "Zustand"
		},
		{
			icon: <SiTailwindcss />,
			name: "Tailwind CSS"
		},
		{
			icon: <SiMui />,
			name: "Material UI"
		},
		{
			icon: <FaCss3 />,
			name: "Emotion"
		},
		{
			icon: <SiFramer />,
			name: "Framer Motion"
		},
		{
			icon: <FaServer />,
			name: "REST API"
		},
		{
			icon: <SiGraphql />,
			name: "GraphQL"
		},
		{
			icon: <FaDocker />,
			name: "Docker"
		},
		{
			icon: <SiWebpack />,
			name: "Webpack"
		},
		{
			icon: <SiVite />,
			name: "Vite"
		},
		{
			icon: <FaGitAlt />,
			name: "Git"
		},
		{
			icon: <SiGithub />,
			name: "GitHub"
		},
		{
			icon: <FaFigma />,
			name: "Figma"
		},
		{
			icon: <FaGitAlt />,
			name: "CI/CD"
		},
	]
})
