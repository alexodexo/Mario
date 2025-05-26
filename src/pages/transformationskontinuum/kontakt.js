import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Hero from '../../components/common/Hero'
import FAQSection from '../../components/common/FAQSection'

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
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

  const contactInfo = {
    address: {
      street: 'Günthersburgallee 82',
      building: 'Beraterhaus / Hinterhaus',
      city: '60389 Frankfurt am Main',
      district: 'Nordend / Bornheim / Mitte'
    },
    phone: '069 - 9753 4441',
    email: 'info@c5-business-partner.de',
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
        description="Lassen Sie uns über Ihre Herausforderungen sprechen. Wir freuen uns auf ein unverbindliches Erstgespräch mit Ihnen."
        primaryCTA={{
          text: 'Direkt anrufen',
          href: 'tel:069-97534441'
        }}
        secondaryCTA={{
          text: 'E-Mail senden',
          href: 'mailto:info@c5-business-partner.de'
        }}
      />

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Beratungsanfrage stellen
              </h2>
              <p className="text-gray-600 mb-8">
                Beschreiben Sie uns Ihr Anliegen. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Ihr Name"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="ihre.email@unternehmen.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="069 - 123 456"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Interessensbereich
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  >
                    <option value="">Bitte wählen Sie...</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Beschreiben Sie uns Ihre Herausforderungen und Ziele..."
                  />
                </div>

                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                    <span>Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <span>Es gab einen Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Anfrage senden
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Kontaktinformationen
              </h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Adresse</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>{contactInfo.address.street}</p>
                      <p>{contactInfo.address.building}</p>
                      <p>{contactInfo.address.city}</p>
                      <p className="text-sm text-gray-500">{contactInfo.address.district}</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Telefon</h3>
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\s|-/g, '')}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">E-Mail</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Geschäftszeiten</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>{contactInfo.hours.weekdays}</p>
                      <p className="text-sm">{contactInfo.hours.flexible}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Box */}
              <div className="mt-12 bg-gradient-to-br from-primary-50 to-navy-50 p-6 rounded-xl border border-primary-100">
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Lieber persönlich sprechen?
                </h3>
                <p className="text-gray-600 mb-4">
                  Rufen Sie uns direkt an oder vereinbaren Sie einen Rückruf-Termin. 
                  Wir nehmen uns gerne Zeit für Ihr Anliegen.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s|-/g, '')}`}
                    className="btn-primary flex-1 justify-center"
                  >
                    Jetzt anrufen
                  </a>
                  <button className="btn-secondary flex-1 justify-center">
                    Rückruf vereinbaren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="section-title">Termin online buchen</h2>
            <p className="section-subtitle">
              Buchen Sie direkt einen passenden Termin für Ihr Erstgespräch
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              {/* Placeholder for Calendly Integration */}
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Calendly-Widget wird hier eingebettet</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Ermöglicht direkte Terminbuchung für Erstgespräche
                  </p>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                <p>• Kostenfreies 30-minütiges Erstgespräch</p>
                <p>• Wahlweise persönlich in Frankfurt oder online</p>
                <p>• Flexible Terminauswahl</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-width text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Transformation beginnt mit einem Gespräch. Lassen Sie uns gemeinsam 
            Ihre Herausforderungen analysieren und Lösungen entwickeln.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${contactInfo.phone.replace(/\s|-/g, '')}`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border border-transparent rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Phone className="mr-2 h-5 w-5" />
              {contactInfo.phone}
            </a>
            
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              E-Mail senden
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection variant="transformation" />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Kontakt - C5 Business Partner',
      description: 'Kontaktieren Sie C5 Business Partner für eine unverbindliche Beratung. Telefon: 069 - 9753 4441 oder besuchen Sie uns in Frankfurt am Main.'
    }
  }
}