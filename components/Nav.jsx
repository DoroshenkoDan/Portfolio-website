"use client"

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'


const Nav = () => {
	const t = useTranslations('header')
	const pathname = usePathname()
	const links = [
		{ href: "/", label: t("nav.home") },
		{ href: "/services", label: t("nav.services") },
		{ href: "/resume", label: t("nav.resume") },
		{ href: "/projects", label: t("nav.projects") },
		{ href: "/contact", label: t("nav.contact") },
	]
	return (<nav className='flex gap-8 '>
		{links.map((link, index) => {
			return <Link href={link.href} key={index}
				className={`${link.href === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{link.label}</Link>
		})}
	</nav>)
}

export default Nav