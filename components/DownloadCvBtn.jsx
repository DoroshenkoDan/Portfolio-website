"use client"
import { useTranslations, useLocale } from 'next-intl'
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const DownloadCvBtn = () => {
	const t = useTranslations('main')
	const locale = useLocale()

	const handleDownloadCV = () => {
		const link = document.createElement('a')
		const cvFile = locale === 'uk' ? '/CvUA.pdf' : '/CvEn.pdf'
		const fileName = locale === 'uk' ? 'Daniil Doroshenko CV-UA.pdf' : 'Daniil Doroshenko CV-EN.pdf'

		link.href = cvFile
		link.download = fileName
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