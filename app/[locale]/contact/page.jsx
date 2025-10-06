"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { info } from './data'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
const Contacts = () => {
	const t = useTranslations('contact')
	const searchParams = useSearchParams()
	const [selectedService, setSelectedService] = useState("")
	const [showAlert, setShowAlert] = useState(false)
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: ''
	})
	const [isLoading, setIsLoading] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(null)
	const infoData = info(t)

	useEffect(() => {
		const serviceParam = searchParams.get('service')

		if (serviceParam) {
			const serviceKey = `service${serviceParam}`
			setSelectedService(serviceKey)
		}
	}, [searchParams])

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		setSubmitStatus(null)

		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...formData,
					service: selectedService ? t(`services.${selectedService}`) : ''
				}),
			})

			const result = await response.json()

			if (response.ok) {
				setSubmitStatus('success')
				setShowAlert(true)
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
					phone: '',
					message: ''
				})
				setSelectedService('')
				setTimeout(() => {
					setShowAlert(false)
				}, 5000)
			} else {
				setSubmitStatus('error')
				setShowAlert(true)
				setTimeout(() => {
					setShowAlert(false)
				}, 5000)
			}
		} catch (error) {
			setSubmitStatus('error')
			setShowAlert(true)
			setTimeout(() => {
				setShowAlert(false)
			}, 5000)
		}

		setIsLoading(false)
	}



	return (<motion.section
		initial={{ opacity: 0 }}
		animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}
		className="py-8 xl:py-12"
	>
		<AnimatePresence>
			{showAlert && (
				<motion.div
					initial={{ x: 400, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 400, opacity: 0 }}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
					className="fixed bottom-4 right-4 z-50 max-w-md bg-primary"
				>
					<Alert variant={submitStatus === 'success' ? 'default' : 'destructive'}>
						<AlertTitle className='text-lg font-semibold'>
							{submitStatus === 'success' ? t("form.success.title") : t("form.error.title")}
						</AlertTitle>
						<AlertDescription>
							{submitStatus === 'success' ? t("form.success.description") : t("form.error.description")}
						</AlertDescription>
					</Alert>
				</motion.div>
			)}
		</AnimatePresence>
		<div className='container mx-auto'>
			{/* <div className="flex flex-col xl:flex-row gap-[30px]"> */}
			<div className='xl:w-[60%] order-2 xl:order-none overflow-hidden rounded-xl border border-accent/30 shadow-[0_0_25px_rgba(34,197,94,0.4)] shadow-accent/10 mx-auto '>
				<form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-white/5 rounded-xl '>
					<h3 className='text-4xl text-accent'>{t("title")}</h3>
					<p className='text-white/60 whitespace-pre-line'>{t("description")}</p>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						<Input
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleInputChange}
							placeholder={t("form.firstName")}
							className="placeholder:text-white"
						/>
						<Input
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleInputChange}
							placeholder={t("form.lastName")}
							className="placeholder:text-white"
						/>
						<Input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder={t("form.email")}
							required
							className="placeholder:text-white"
						/>
						<Input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
							placeholder={t("form.phone")}
							className="placeholder:text-white"
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
						<SelectTrigger className={selectedService ? " text-accent" : "text-white"}>
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
								<SelectItem value="service10">{t("services.service10")}</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Textarea
						className="h-[200px] placeholder:text-white"
						name="message"
						value={formData.message}
						onChange={handleInputChange}
						placeholder={t("form.message")}
						required
					/>
					<div className='flex justify-center'>
						<Button
							type="submit"
							size="md"
							className='max-w-xs'
							disabled={isLoading}
						>
							{isLoading ? t("form.sending") : t("form.sendMessage")}
						</Button>
					</div>
				</form>
			</div>
			{/* <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
					<ul className='flex flex-col gap-10'>{infoData.map((item, index) => {
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
				</div> */}
		</div>
		{/* </div> */}
	</motion.section>)
}

export default Contacts