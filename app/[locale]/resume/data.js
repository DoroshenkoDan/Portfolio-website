import { FaCss3, FaFigma, FaHtml5, FaJs } from "react-icons/fa"
import { SiGithub, SiNextdotjs, SiTailwindcss } from "react-icons/si"

export const about = {
	title: "About me",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat ex, neque consequatur quisquam deleniti aliquid delectu.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Daniil Dorosohenko"
		},
		{
			fieldName: "Phone",
			fieldValue: "+380 96 014 28 71"
		}, 
		{
			fieldName: "Experience",
			fieldValue: "3+ Years"
		}, 
		{
			fieldName: "Telegram",
			fieldValue: "@daniil_dorosohenko"
		}, 
		{
			fieldName: "Nationality",
			fieldValue: "Ukrainian"
		}, 
		{
			fieldName: "Email",
			fieldValue: "doroshenko_dan@gmail.com"
		}, 
		{
			fieldName: "Freelance",
			fieldValue: "Available"
		}, 
		{
			fieldName: "Languages",
			fieldValue: "English, Ukrainian"
		}
	]
}

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

export const education = {
	icon: "/assets/resume/cap.svg",
	title: "My education",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat ex, neque consequatur quisquam deleniti aliquid delectu.",
	items: [
		{
			institution: "Institution Name",
			degree: "Degree",
			duration: "2015 - 2019",
		},
		{
			institution: "Institution Name",
			degree: "Degree",
			duration: "2015 - 2019",
		}
	]
}

export const skills = {
	title: "My skills",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat ex, neque consequatur quisquam deleniti aliquid delectu.",
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
			icon: <SiNextdotjs />,
			name: "Next.js"
		},
		{
			icon: <SiTailwindcss />,
			name: "Tailwind CSS"
		},
		{
			icon: <FaFigma />,
			name: "Figma"
		},
		{
			icon: <SiGithub />,
			name: "GitHub"
		},
	]
}
