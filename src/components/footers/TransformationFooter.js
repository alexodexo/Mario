import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function TransformationFooter() {
  const footerSections = [
    {
      title: 'Unternehmen',
      links: [
        { name: 'Über uns', href: '/transformationskontinuum/ueber-uns' },
        { name: 'Team', href: '/transformationskontinuum/ueber-uns#team' },
        { name: 'Karriere', href: '/transformationskontinuum/karriere' },
        { name: 'Partner', href: '/transformationskontinuum/partner' }
      ]
    },
    {
      title: 'Leistungen',
      links: [
        { name: 'Kulturanalyse', href: '/transformationskontinuum/leistungen#kulturanalyse' },
        { name: 'Strategische Beratung', href: '/transformationskontinuum/leistungen#strategische-beratung' },
        { name: 'Teamworkshops', href: '/transformationskontinuum/leistungen#teamworkshops' },
        { name: 'Führungskräfte-Training', href: '/transformationskontinuum/leistungen#fuehrungskraefte-training' },
        { name: 'Coaching', href: '/transformationskontinuum/leistungen#coaching' }
      ]
    },
    {
      title: 'Branchen',
      links: [
        { name: 'Finanzdienstleistungen', href: '/transformationskontinuum/branchen/finanzdienstleistungen' },
        { name: 'Versicherungen', href: '/transformationskontinuum/branchen/versicherungen' },
        { name: 'Automobil', href: '/transformationskontinuum/branchen/automobil' },
        { name: 'Technologie', href: '/transformationskontinuum/branchen/technologie' }
      ]
    },
    {
      title: 'Kontakt',
      isContact: true,
      content: {
        address: 'Günthersburgallee 82\nBeraterhaus / Hinterhaus\n60389 Frankfurt am Main',
        phone: '069 - 9753 4441',
        email: 'info@c5-business-partner.de'
      }
    }
  ]

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6 text-white">{section.title}</h3>
              
              {section.isContact ? (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 mt-1 text-primary-400" />
                    <p className="text-gray-300 text-sm whitespace-pre-line">
                      {section.content.address}
                    </p>
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
                </div>
              ) : (
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Social Media & Company Logo */}
        <div className="border-t border-navy-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="text-2xl font-bold text-white mr-8">
                C5 <span className="text-primary-400">Business Partner</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/mario-egartner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn Profil von Mario Egartner"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.xing.com/profile/Mario_Egartner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Xing Profil von Mario Egartner"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536L14.421 13.7c-.193-.26-.193-.432 0-.66L19.825.874c.193-.9.193-.346.105-.534C19.852.078 19.688 0 19.477 0h-1.289zm-7.754 13.428c-.207 0-.37.093-.463.25-.09.151-.090.346.009.534l1.232 2.262c.193.26.193.432 0 .66l-2.395 4.364c-.193.26-.193.432 0 .66C8.912 19.93 9.075 20 9.286 20h3.454c.207 0 .37-.093.463-.25.090-.151.090-.346-.009-.534l-2.874-5.199c-.193-.26-.193-.432 0-.66l3.663-6.684c.207-.370.207-.61 0-.98L11.111.874c-.193-.26-.436-.660-.967-.66H6.69c-.211 0-.375.093-.463.25-.089.151-.089.346.009.534l2.463 4.516c.193.26.193.432 0 .66z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick CTA */}
            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-sm mb-2">
                Transformation beginnt mit einem Gespräch
              </p>
              <Link
                href="/transformationskontinuum/kontakt"
                className="btn-primary"
              >
                Jetzt Beratung anfragen
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 C5 Business Partner. Alle Rechte vorbehalten.</p>
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