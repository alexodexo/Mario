import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Calendar, ArrowRight } from 'lucide-react'

export default function TransformationFooter() {
  const footerSections = [
    {
      title: 'Unternehmen',
      links: [
        { name: 'Über uns', href: '/transformationskontinuum/ueber-uns' },
        { name: 'Unser Team', href: '/transformationskontinuum' },
        { name: 'Unsere Geschichte', href: '/transformationskontinuum/ueber-uns#timeline' },
        { name: 'Die 5 Cs', href: '/transformationskontinuum/ueber-uns#values' }
      ]
    },
    {
      title: 'Leistungen',
      links: [
        { name: 'Übersicht', href: '/transformationskontinuum/leistungen' },
        { name: 'Human Synergistics', href: '/transformationskontinuum/HumanSynergistics' },
        { name: 'Organisation beraten', href: '/transformationskontinuum/leistungen#organisation' },
        { name: 'Teams ausrichten', href: '/transformationskontinuum/leistungen#team' },
        { name: 'Mitarbeiter begleiten', href: '/transformationskontinuum/leistungen#coaching' }
      ]
    },
    {
      title: 'Expertise',
      links: [
        { name: 'Kulturanalyse (OCI)', href: '/transformationskontinuum/HumanSynergistics' },
        { name: 'Strategische Beratung', href: '/transformationskontinuum/leistungen#strategische-beratung' },
        { name: 'Teamworkshops', href: '/transformationskontinuum/leistungen#teamworkshops' },
        { name: 'Executive Coaching', href: '/transformationskontinuum/leistungen#executive-coaching' },
        { name: 'Eignungsdiagnostik', href: '/transformationskontinuum/leistungen#assessment' },
        { name: 'Outplacement', href: '/transformationskontinuum/leistungen#outplacement' }
      ]
    },
    {
      title: 'Kontakt',
      isContact: true,
      content: {
        address: 'Günthersburgallee 82\nBeraterhaus / Hinterhaus\n60389 Frankfurt am Main',
        phone: '069 - 9753 4440',
        email: 'berater@c5-business-partner.de',
        hours: 'Mo-Fr: 9:00 - 18:00 Uhr'
      }
    }
  ]

  const quickLinks = [
    { name: 'Beratung anfragen', href: '/transformationskontinuum/kontakt', primary: true },
    { name: 'Termin buchen', href: '/transformationskontinuum/kontakt#booking-section', secondary: true },
    { name: 'Direkt anrufen', href: 'tel:069-97534440', phone: true }
  ]

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-width section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6 text-white">{section.title}</h3>
              
              {section.isContact ? (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 mt-1 text-primary-400 flex-shrink-0" />
                    <div className="text-gray-300 text-sm">
                      <p className="whitespace-pre-line">{section.content.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-400" />
                    <a 
                      href={`tel:${section.content.phone.replace(/\s|-/g, '')}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {section.content.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary-400" />
                    <a 
                      href={`mailto:${section.content.email}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {section.content.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 mt-1 text-primary-400" />
                    <div className="text-gray-300 text-sm">
                      <p>{section.content.hours}</p>
                      <p className="text-xs text-gray-400">Termine außerhalb nach Absprache</p>
                    </div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Quick Action Bar */}
        <div className="border-t border-navy-700 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="flex items-center text-2xl font-bold text-white mr-8">
              
                <span className="text-orange">C5 Business Partner</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://de.linkedin.com/in/mario-egartner-c5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn Profil von Mario Egartner"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                
              </div>
            </div>
            
            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    link.primary 
                      ? 'text-navy-900 bg-white hover:bg-gray-50' 
                      : link.phone
                        ? 'text-white bg-green-600 hover:bg-green-700'
                        : 'text-white bg-primary-600 hover:bg-primary-700'
                  }`}
                >
                  {link.phone && <Phone className="h-4 w-4 mr-2" />}
                  {link.secondary && <Calendar className="h-4 w-4 mr-2" />}
                  {link.name}
                  {!link.phone && <ArrowRight className="h-4 w-4 ml-2" />}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-lg text-primary-200 font-medium">
            Excellence in Transformation - Von der Kultur über das Team zum Individuum
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 C5 Business Partner. Alle Rechte vorbehalten.</p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/impressum"
                className="hover:text-white transition-colors duration-200"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="hover:text-white transition-colors duration-200"
              >
                Datenschutz
              </Link>
              <Link
                href="/agb"
                className="hover:text-white transition-colors duration-200"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}