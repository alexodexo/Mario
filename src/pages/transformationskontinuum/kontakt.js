import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Calendar } from 'lucide-react'
import Hero from '../../components/common/Hero'

export default function TransformationContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const serviceOptions = [
    'Kulturanalyse mit Human Synergistics',
    'Strategische Transformationsberatung',
    'Teamworkshops & Teamdynamik',
    'Führungskräfte-Workshops & Training',
    'Berufliche Begleitung & Coaching',
    'Eignungsdiagnostik & Assessment',
    'Outplacement',
    'Virtueller Coach',
    'Sonstiges'
  ]

  const validate = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Bitte geben Sie Ihren Namen an.'
    if (!formData.email.trim()) errors.email = 'Bitte geben Sie Ihre E-Mail an.'
    else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      errors.email = 'Bitte geben Sie eine gültige E-Mail an.'
    if (!formData.company.trim()) errors.company = 'Bitte geben Sie Ihr Unternehmen an.'
    if (!formData.phone.trim()) errors.phone = 'Bitte geben Sie Ihre Telefonnummer an.'
    if (!formData.service.trim()) errors.service = 'Bitte wählen Sie einen Interessensbereich.'
    if (!formData.message.trim()) errors.message = 'Bitte geben Sie eine Nachricht ein.'
    return errors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setFormErrors(prev => ({
      ...prev,
      [name]: undefined
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('')
    setIsSubmitting(true)

    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsSubmitting(false)
      return
    }
    setFormErrors({})

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error()
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToBooking = () => {
    document.getElementById('booking-section').scrollIntoView({
      behavior: 'smooth'
    })
  }

  const contactInfo = {
    address: {
      street: 'Günthersburgallee 82',
      building: 'Beraterhaus / Hinterhaus',
      city: '60389 Frankfurt am Main',
      district: 'Nordend / Bornheim / Mitte'
    },
    phone: '069 - 9753 4440',
    email: 'berater@c5-business-partner.de',
    hours: {
      weekdays: 'Mo-Fr: 9:00 - 18:00 Uhr',
      flexible: 'Termine außerhalb der Geschäftszeiten nach Absprache'
    }
  }

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Kontakt aufnehmen"
        subtitle="Ihr Weg zu uns"
        description="Lassen Sie uns über Ihre Herausforderungen sprechen, wir freuen uns erstes Kennenlernen."
        primaryCTA={{
          text: 'E-Mail senden',
          href: 'mailto:berater@c5-business-partner.de'
        }}
        secondaryCTA={{
          text: 'Termin vereinbaren',
          href: '#booking-section'
        }}
      />

      {/* Kontaktinformationen - Zentrierte Sektion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
              Kontaktinformationen
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Erreichen Sie uns auf verschiedenen Wegen - wir sind für Sie da
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Address */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">Adresse</h3>
                <div className="text-gray-600 text-sm space-y-1 mb-4">
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.building}</p>
                  <p>{contactInfo.address.city}</p>
                  <p className="text-xs text-gray-500">{contactInfo.address.district}</p>
                </div>
                <a
                  href={`https://maps.app.goo.gl/JHc7ChhxRuT1MA4C8`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors duration-200"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Wegbeschreibung
                </a>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">Telefon</h3>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s|-/g, '')}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-lg font-medium"
                >
                  {contactInfo.phone}
                </a>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">E-Mail</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm break-words"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Hours */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">Geschäftszeiten</h3>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>{contactInfo.hours.weekdays}</p>
                  <p className="text-xs text-gray-500">{contactInfo.hours.flexible}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cal.com Integration Section */}
      <section id="booking-section" className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-navy-900" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Termin online buchen</h2>
            <p className="text-xl text-blue-100">
              Buchen Sie direkt einen passenden Termin für Ihr Erstgespräch
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6">
              {/* Cal.com Embed */}
              <div className="w-full" style={{ height: '600px' }}>
                <iframe
                  src="https://cal.com/egartner/themengespraech-60min"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  title="Terminbuchung Cal.com"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - Zentrierte Sektion */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Beratungsanfrage stellen
              </h2>
              <p className="text-xl text-gray-600">
                Beschreiben Sie uns Ihr Anliegen. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200`}
                      placeholder="Ihr Name"
                    />
                    {formErrors.name && <span className="text-red-600 text-sm mt-1 block">{formErrors.name}</span>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200`}
                      placeholder="ihre.email@unternehmen.de"
                    />
                    {formErrors.email && <span className="text-red-600 text-sm mt-1 block">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${formErrors.company ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200`}
                      placeholder="Ihr Unternehmen"
                    />
                    {formErrors.company && <span className="text-red-600 text-sm mt-1 block">{formErrors.company}</span>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200`}
                      placeholder="069 - 123 456"
                    />
                    {formErrors.phone && <span className="text-red-600 text-sm mt-1 block">{formErrors.phone}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Interessensbereich *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${formErrors.service ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200`}
                  >
                    <option value="">Bitte wählen Sie...</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {formErrors.service && <span className="text-red-600 text-sm mt-1 block">{formErrors.service}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none`}
                    placeholder="Beschreiben Sie uns Ihre Herausforderungen und Ziele..."
                  />
                  {formErrors.message && <span className="text-red-600 text-sm mt-1 block">{formErrors.message}</span>}
                </div>

                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <div className="flex items-center space-x-3 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center space-x-3 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Es gab einen Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-lg font-semibold text-white bg-blue-600 border border-transparent rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3" />
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Anfrage senden
                      <Send className="ml-3 h-5 w-5" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Kontakt - C5 Business Partner',
      description: 'Kontaktieren Sie C5 Business Partner für eine unverbindliche Beratung. Telefon: 069 - 9753 4440 oder besuchen Sie uns in Frankfurt am Main.'
    }
  }
}