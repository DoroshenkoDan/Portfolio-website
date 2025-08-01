import Link from 'next/link'
import { Button } from "./ui/button"
//Components
import MobileNav from './MobileNav'
import Nav from './Nav'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
	const t = useTranslations('header')
	return (<header className='py-8 xl:py-12 text-white'>
		<div className='container mx-auto flex justify-between items-center'>

			{/* Logo */}
			<Link href="/" className='text-4xl font-semibold'>
				<h1 className='text-accent'>Dan .</h1>
			</Link>

			{/*Desctop Navigation & HireMe Btn */}
			<div className='hidden xl:flex items-center justify-between gap-32'>
				<Nav />
				<div className='flex items-center gap-6'>
					<LanguageSwitcher />
					<Link href="/contact">
						<Button>
							{t("btnContact")}
						</Button>
					</Link>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className='xl:hidden'>
				<MobileNav />
				<div />
			</div>
		</div>
	</header>)
}

export default Header