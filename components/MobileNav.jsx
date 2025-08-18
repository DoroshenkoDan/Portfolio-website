"use client"

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Link from 'next/link'
import { usePathname } from '@/i18n/navigation'
import { CiMenuFries } from 'react-icons/ci'


const links = [
	{ href: "/", label: "Home" },
	{ href: "/services", label: "Services" },
	{ href: "/resume", label: "Resume" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
]


const MobileNav = () => {
	const pathname = usePathname()

	return (
		<Sheet>
			<SheetTrigger className='flex justify-center items-center '>
				<CiMenuFries className='text-[32px] text-accent' />
			</SheetTrigger>
			<SheetContent className='flex flex-col'>
				<SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
				<div className='mt-8 mb-8 text-center text-2xl'>
					<Link className='text-4xl font-semibold mb-8' href="/">
						<h1 className='text-accent'>Dan .</h1>
					</Link>
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
				</nav>
			</SheetContent>
		</Sheet>)
}

export default MobileNav
