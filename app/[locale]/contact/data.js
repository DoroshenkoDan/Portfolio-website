import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"

export const info = (t) => [
	{
		icon: <FaPhoneAlt />,
		title: t("info.phone"),
		content: "+38 (096) 014-28-71"
	},
	{
		icon: <FaEnvelope />,
		title: t("info.email"),
		content: "doroshenko.daniil.a@gmail.com"
	},
]