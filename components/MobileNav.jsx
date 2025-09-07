"use client"

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Link from 'next/link'
import { usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { CiMenuFries } from 'react-icons/ci'
import { Button } from "./ui/button"




const MobileNav = () => {
	const pathname = usePathname()
	const t = useTranslations('header')

	const links = [
		{ href: "/", label: t("nav.home") },
		{ href: "/services", label: t("nav.services") },
		{ href: "/resume", label: t("nav.resume") },
		{ href: "/projects", label: t("nav.projects") },
		{ href: "/contact", label: t("nav.contact") },
	]

	return (
		<Sheet>
			<SheetTrigger className='flex justify-center items-center '>
				<CiMenuFries className='text-[32px] text-accent' />
			</SheetTrigger>
			<SheetContent className='flex flex-col'>
				<SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
				<div className='mt-8 mb-8 text-center text-2xl'>
					<SheetClose asChild key="/">
						<Link className='text-4xl font-semibold mb-8' href="/">
							<h1 className='text-accent'>Dan .</h1>
						</Link>
					</SheetClose>
				</div>
				<nav className='flex flex-col gap-8 justify-center items-center'>
					{links.map((link) => (
						<SheetClose asChild key={link.href}>
							<Link
								key={link.href}
								href={link.href}
								className={`${pathname === link.href && 'text-accent font-semibold border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}
							>
								{link.label}
							</Link>
						</SheetClose>
					))}
					<SheetClose asChild key="/contact">
						<Link href="/contact" className="w-full p-4">
							<Button className="w-full">
								{t("btnContact")}
							</Button>
						</Link>
					</SheetClose>
				</nav>

			</SheetContent>
		</Sheet>)
}

export default MobileNav
