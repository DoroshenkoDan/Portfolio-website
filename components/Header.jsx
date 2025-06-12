import Link from 'next/link'
import { Button } from "./ui/button"
//Components
import MobileNav from './MobileNav'
import Nav from './Nav'

const Header = () => {
	return (<header className='py-8 xl:py-12 text-white'>
		<div className='container mx-auto flex justify-between items-center'>

			{/* Logo */}
			<Link href="/" className='text-4xl font-semibold'>
				<h1>Dan <span className='text-accent'>.</span></h1>
			</Link>

			{/*Desctop Navigation & HireMe Btn */}
			<div className='hidden xl:flex items-center gap-8'>
				<Nav />
				<Link href="/contact">
					<Button>
						Hire Me
					</Button>
				</Link>
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