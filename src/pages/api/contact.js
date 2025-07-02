// /pages/api/contact.js
import Airtable from 'airtable'

const requiredFields = ['name', 'email', 'message']

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN })
  .base(process.env.AIRTABLE_BASE_ID)

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
    const airtableFields = {
      Name: name,
      Email: email,
      Unternehmen: company || '',
      Telefonnummer: phone || '',
      Interessenbereich: service || '',
      Nachricht: message,
    }

    await base(process.env.AIRTABLE_TABLE_NAME).create(airtableFields)
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('[Airtable API Error]', err)
    return res.status(500).json({ error: 'Serverfehler beim Speichern der Anfrage.' })
  }
}
