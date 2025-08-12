"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const Contacts = () => {
	const t = useTranslations('contact')
	const searchParams = useSearchParams()
	const [selectedService, setSelectedService] = useState("")

	useEffect(() => {
		const serviceParam = searchParams.get('service')

		if (serviceParam) {
			const serviceKey = `service${serviceParam}`
			setSelectedService(serviceKey)
		}
	}, [searchParams])


	const info = [
		{
			icon: <FaPhoneAlt />,
			title: t("info.phone"),
			content: "+1 234 567 890"
		},
		{
			icon: <FaEnvelope />,
			title: t("info.email"),
			content: "doroshenko.daniil.a@gmail.com"
		},
		{
			icon: <FaMapMarkerAlt />,
			title: t("info.address"),
			content: "123 Main St, City, Country"
		}
	]


	return (<motion.section
		initial={{ opacity: 0 }}
		animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}
		className="py-8 xl:py-12"
	>
		<div className='container mx-auto'>
			<div className="flex flex-col xl:flex-row gap-[30px]">
				<div className='xl:w-[54%] order-2 xl:order-none'>
					<form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
						<h3 className='text-4xl text-accent'>{t("title")}</h3>
						<p className='text-white/60'>{t("description")}</p>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
							<Input
								type="text"
								placeholder={t("form.firstName")}
							/>
							<Input
								type="text"
								placeholder={t("form.lastName")}
							/>
							<Input
								type="email"
								placeholder={t("form.email")}
							/>
							<Input
								type="tel"
								placeholder={t("form.phone")}
							/>
						</div>
						<Select
							value={selectedService}
							onValueChange={(newValue) => {
								if (newValue && newValue.trim() !== "") {
									setSelectedService(newValue)
								}
							}}
						>
							<SelectTrigger className={selectedService ? " text-accent" : ""}>
								<SelectValue placeholder={t("form.selectService")} />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>{t("form.selectService")}</SelectLabel>
									<SelectItem value="service1">{t("services.service1")}</SelectItem>
									<SelectItem value="service2">{t("services.service2")}</SelectItem>
									<SelectItem value="service3">{t("services.service3")}</SelectItem>
									<SelectItem value="service4">{t("services.service4")}</SelectItem>
									<SelectItem value="service5">{t("services.service5")}</SelectItem>
									<SelectItem value="service6">{t("services.service6")}</SelectItem>
									<SelectItem value="service7">{t("services.service7")}</SelectItem>
									<SelectItem value="service8">{t("services.service8")}</SelectItem>
									<SelectItem value="service9">{t("services.service9")}</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Textarea className="h-[200px]" placeholder={t("form.message")} />
						<div className='flex justify-center'>
							<Button size="md" className='max-w-xs'>{t("form.sendMessage")}</Button>
						</div>
					</form>
				</div>
				<div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
					<ul className='flex flex-col gap-10'>{info.map((item, index) => {
						return (
							<li key={index} className='flex items-center gap-6'>
								<div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
									<div className='text-[28px]'>{item.icon}</div>
								</div>
								<div className='flex-1'>
									<p className='text-white/60'>{item.content}</p>
									<h3 className='text-xl'>{item.title}</h3>
								</div>
							</li>
						)
					})}</ul>
				</div>
			</div>
		</div>
	</motion.section>)
}

export default Contacts