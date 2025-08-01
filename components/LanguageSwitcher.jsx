'use client'

import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

export default function LanguageSwitcher() {
	const [isPending, startTransition] = useTransition()
	const router = useRouter()
	const pathname = usePathname()
	const params = useParams()
	const locale = useLocale()

	const handleLanguageChange = (nextLocale) => {
		startTransition(() => {
			router.replace(
				{ pathname, params },
				{ locale: nextLocale }
			)
		})
	}

	return (
		<div className="flex gap-3">
			<button
				className={`
          relative px-0 py-0 bg-transparent border-none cursor-pointer 
          transition-all duration-300 font-medium text-base
          hover:text-accent active:text-accent/80
          after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 
          after:w-0 after:h-[1px] after:bg-accent after:transform after:-translate-x-1/2 
          after:transition-all after:duration-300
          hover:after:w-full active:after:w-full active:after:bg-accent/80
          ${locale === 'uk'
						? 'text-white after:w-full after:bg-white'
						: 'text-white/80'
					}
        `}
				onClick={() => handleLanguageChange('uk')}
				disabled={isPending}
			>
				UA
			</button>
			<button
				className={`
          relative px-0 py-0 bg-transparent border-none cursor-pointer 
          transition-all duration-300 font-medium text-base
          hover:text-accent active:text-accent/80
          after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 
          after:w-0 after:h-[1px] after:bg-accent after:transform after:-translate-x-1/2 
          after:transition-all after:duration-300
          hover:after:w-full active:after:w-full active:after:bg-accent/80
          ${locale === 'en'
						? 'text-white after:w-full after:bg-white'
						: 'text-white/80'
					}
        `}
				onClick={() => handleLanguageChange('en')}
				disabled={isPending}
			>
				EN
			</button>
		</div>
	)
}
