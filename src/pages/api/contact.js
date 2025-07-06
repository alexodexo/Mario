// /pages/api/contact.js
import { Resend } from 'resend'

const requiredFields = ['name', 'email', 'message']
const resend = new Resend(process.env.RESEND_API_KEY)

function isValidEmail(email) {
  return typeof email === 'string' &&
    /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
}

export default async function handler(req, res) {
  // --- CORS: alle Origins ---
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Nur POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Optional: Spam-Honeypot
  if (req.body._honeypot) {
    return res.status(200).json({ success: true })
  }

  const { name, email, company, phone, service, message } = req.body

  // Validierung
  for (const f of requiredFields) {
    if (!req.body[f] || req.body[f].toString().trim().length === 0) {
      return res.status(400).json({ error: `Feld "${f}" fehlt` })
    }
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'E-Mail ungültig' })
  }
  if ((name && name.length > 120) || (company && company.length > 120)) {
    return res.status(400).json({ error: 'Name oder Unternehmen zu lang' })
  }
  if (message && message.length > 1500) {
    return res.status(400).json({ error: 'Nachricht zu lang' })
  }

  try {
    // HTML Template für die E-Mail
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
              line-height: 1.6; 
              color: #374151; 
              background-color: #f9fafb;
              margin: 0;
              padding: 20px;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: white; 
              border-radius: 12px; 
              overflow: hidden;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
            .header { 
              background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); 
              color: white; 
              padding: 30px; 
              text-align: center; 
            }
            .header h1 { 
              margin: 0; 
              font-size: 24px; 
              font-weight: 700; 
            }
            .content { 
              padding: 30px; 
            }
            .field { 
              margin-bottom: 20px; 
              padding: 15px; 
              background: #f8fafc; 
              border-radius: 8px;
              border-left: 4px solid #2563eb;
            }
            .field-label { 
              font-weight: 600; 
              color: #1e40af; 
              margin-bottom: 5px; 
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .field-value { 
              color: #374151; 
              font-size: 16px;
            }
            .message-field {
              background: #eff6ff;
              border-left-color: #f56518;
            }
            .footer { 
              background: #f8fafc; 
              padding: 20px 30px; 
              text-align: center; 
              font-size: 14px; 
              color: #6b7280;
              border-top: 1px solid #e5e7eb;
            }
            .logo {
              color: #f56518;
              font-weight: 700;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Neue Beratungsanfrage</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">C5 Business Partner - Transformationskontinuum</p>
            </div>
            
            <div class="content">
              <p style="font-size: 18px; margin-bottom: 25px; color: #1e40af;">
                Eine neue Beratungsanfrage ist über die Website eingegangen:
              </p>
              
              <div class="field">
                <div class="field-label">👤 Name</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📧 E-Mail</div>
                <div class="field-value">${email}</div>
              </div>
              
              ${company ? `
                <div class="field">
                  <div class="field-label">🏢 Unternehmen</div>
                  <div class="field-value">${company}</div>
                </div>
              ` : ''}
              
              ${phone ? `
                <div class="field">
                  <div class="field-label">📞 Telefon</div>
                  <div class="field-value">${phone}</div>
                </div>
              ` : ''}
              
              ${service ? `
                <div class="field">
                  <div class="field-label">🎯 Interessensbereich</div>
                  <div class="field-value">${service}</div>
                </div>
              ` : ''}
              
              <div class="field message-field">
                <div class="field-label">💬 Nachricht</div>
                <div class="field-value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <p><span class="logo">C5 Business Partner</span> - Excellence in Transformation</p>
              <p>Günthersburgallee 82, 60389 Frankfurt am Main</p>
              <p>Diese E-Mail wurde automatisch von der Website generiert.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // E-Mail senden mit Resend
    const { data, error } = await resend.emails.send({
      from: 'website@mail.c5-business-partner.de', // Deine verifizierte Domain bei Resend
      to: ['berater@c5-business-partner.de'], // Ziel-E-Mail(s)
      replyTo: email, // Antwort geht direkt an den Kunden
      subject: `🚀 Neue Beratungsanfrage von ${name} (${company || 'Privat'})`,
      html: htmlContent,
      text: `
        Neue Beratungsanfrage über die Website:
        
        Name: ${name}
        E-Mail: ${email}
        ${company ? `Unternehmen: ${company}` : ''}
        ${phone ? `Telefon: ${phone}` : ''}
        ${service ? `Interessensbereich: ${service}` : ''}
        
        Nachricht:
        ${message}
        
        ---
        C5 Business Partner - Excellence in Transformation
        Diese E-Mail wurde automatisch von der Website generiert.
      `
    })

    if (error) {
      console.error('[Resend API Error]', error)
      return res.status(500).json({ error: 'Fehler beim Versenden der E-Mail.' })
    }

    console.log('[Resend Success]', data)
    return res.status(200).json({ success: true, messageId: data.id })

  } catch (err) {
    console.error('[Contact API Error]', err)
    return res.status(500).json({ error: 'Serverfehler beim Verarbeiten der Anfrage.' })
  }
}