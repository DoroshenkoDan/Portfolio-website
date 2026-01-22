"use client"
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const DownloadCvBtn = () => {
	const t = useTranslations('main')

	const handleDownloadCV = () => {
		const link = document.createElement('a')
		link.href = '/Doroshenko Daniil CV-En.pdf'
		link.download = 'Dorooshenko Daniil CV-En.pdf'
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}
	return (<Button
		variant="outline"
		size="lg"
		className="uppercase flex items-center gap-2"
		onClick={handleDownloadCV}
	>
		<span>{t("downloadCv")}</span>
		<FiDownload className='text-xl' />
	</Button>)
}

export default DownloadCvBtn