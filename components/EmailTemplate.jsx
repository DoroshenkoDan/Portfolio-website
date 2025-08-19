import * as React from 'react'

export const EmailTemplate = ({
	firstName,
	lastName,
	email,
	phone,
	service,
	message,
}) => (
	<div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
		<h1 style={{ color: '#333', borderBottom: '2px solid #00ff99', paddingBottom: '10px' }}>
			Нове повідомлення з портфоліо
		</h1>

		<div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
			<h2 style={{ color: '#555', marginTop: '0' }}>Контактна інформація:</h2>

			<p><strong>Ім'я:</strong> {firstName} {lastName}</p>
			<p><strong>Email:</strong> {email}</p>
			<p><strong>Телефон:</strong> {phone}</p>
			<p><strong>Послуга:</strong> {service}</p>
		</div>

		<div style={{ marginTop: '20px' }}>
			<h2 style={{ color: '#555' }}>Повідомлення:</h2>
			<div style={{ backgroundColor: '#fff', padding: '15px', border: '1px solid #ddd', borderRadius: '4px' }}>
				{message}
			</div>
		</div>

		<div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e8f4fd', borderRadius: '4px' }}>
			<p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
				Це повідомлення надіслано з контактної форми вашого портфоліо.
			</p>
		</div>
	</div>
)
