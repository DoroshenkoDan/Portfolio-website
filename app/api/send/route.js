import { Resend } from 'resend';

// Перевіряємо наявність API ключа
if (!process.env.RESEND_API_KEY) {
  console.warn('RESEND_API_KEY is not set');
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    // Перевіряємо чи налаштований Resend
    if (!resend) {
      return Response.json({ error: 'Email service is not configured' }, { status: 500 });
    }

    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body;

    if (!email || !message) {
      return Response.json({ error: 'Будь ласка, заповніть email та повідомлення' }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333; border-bottom: 2px solid #00ff99; padding-bottom: 10px;">
          Нове повідомлення з портфоліо
        </h1>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h2 style="color: #555; margin-top: 0;">Контактна інформація:</h2>
          
          <p><strong>Ім'я:</strong> ${firstName} ${lastName || ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Телефон:</strong> ${phone || 'Не вказано'}</p>
          <p><strong>Послуга:</strong> ${service || 'Не вказано'}</p>
        </div>
        
        <div style="margin-top: 20px;">
          <h2 style="color: #555;">Повідомлення:</h2>
          <div style="background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
            ${message}
          </div>
        </div>
      </div>
    `;
    
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['doroshenko.daniil.a@gmail.com'],
      subject: `Нове повідомлення від ${firstName} ${lastName || ''}`,
      html: htmlContent,
    });

    if (error) {
      return Response.json({ error: 'Помилка відправки email' }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: 'Внутрішня помилка сервера' }, { status: 500 });
  }
}