import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Linkedin, Xing } from 'lucide-react'

export default function CoachFooter() {
  const serviceAreas = [
    'Frankfurt am Main',
    'Offenbach',
    'Darmstadt',
    'Wiesbaden',
    'Mainz',
    'Hanau'
  ]

  const coachingServices = [
    'Business Coaching',
    'Karriere Coaching',
    'Führungskräfte Coaching',
    'Systemische Beratung',
    'Paarberatung',
    'Outplacement'
  ]

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-primary-400" />
                <div className="text-gray-300 text-sm">
                  <p>Mario Egartner</p>
                  <p>Günthersburgallee 82</p>
                  <p>Beraterhaus / Hinterhaus</p>
                  <p>60389 Frankfurt am Main</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <a 
                  href="tel:069-97534441"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  069 - 9753 4441
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <a 
                  href="mailto:egartner@frankfurt-business-coach.de"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  egartner@frankfurt-business-coach.de
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-primary-400" />
                <div className="text-gray-300 text-sm">
                  <p>Mo-Fr: 9:00 - 18:00 Uhr</p>
                  <p>Abend- und Samstagstermine</p>
                  <p>nach Absprache</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Coaching-Leistungen</h3>
            <ul className="space-y-3">
              {coachingServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/frankfurt-business-coach/leistungen"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Einzugsgebiet */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Einzugsgebiet</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-xs mt-4">
              Online-Coaching deutschlandweit
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/frankfurt-business-coach"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/frankfurt-business-coach/coach"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Über Mario Egartner
                </Link>
              </li>
              <li>
                <Link
                  href="/frankfurt-business-coach/leistungen"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/frankfurt-business-coach/preise"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Preise
                </Link>
              </li>
              <li>
                <Link
                  href="/frankfurt-business-coach/kontakt"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Brand */}
        <div className="border-t border-navy-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="text-2xl font-bold text-white mr-8">
                Frankfurt <span className="text-primary-400">Business Coach</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/mario-egartner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn Profil von Mario Egartner"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.xing.com/profile/Mario_Egartner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Xing Profil von Mario Egartner"
                >
                  <Xing className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Quick CTA */}
            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-sm mb-2">
                Bereit für Veränderung?
              </p>
              <Link
                href="/frankfurt-business-coach/kontakt"
                className="btn-primary"
              >
                Erstgespräch vereinbaren
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Mario Egartner - Frankfurt Business Coach. Alle Rechte vorbehalten.</p>
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