import Link from 'next/link'
import Image from 'next/image'
import { Target, Users, User, BarChart3, Lightbulb, Cog, ArrowRight, CheckCircle, Star, Brain } from 'lucide-react'
import Hero from '../../components/common/Hero'
import CTASection from '../../components/common/CTASection'

export default function TransformationServices() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Unsere Dienstleistungen"
        description="Erfahren Sie mehr über unsere Dienstleistungen, die das Transformationskontinuum von C5 und fbc ausmachen."
        primaryCTA={{
          text: 'Kontaktiere uns',
          href: '/transformationskontinuum/kontakt'
        }}
        secondaryCTA={{
          text: 'Mehr über uns',
          href: '/transformationskontinuum/ueber-uns'
        }}
      />



      {/* Beratung zur Unternehmenskultur Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Beratung zur Unternehmenskultur
              </h2>
              <p className="text-gray-700 mb-6">
                Unsere Unternehmenskulturberatung bietet maßgeschneiderte Lösungen zur Optimierung der Unternehmenskultur und -performance.
              </p>
              <p className="text-gray-700 mb-8">
                Unsere Dienstleistungen bieten nachweisbare Ergebnisse, die einen positiven ROI für Ihr Unternehmen generieren.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Maßgeschneiderte Lösungen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BarChart3 className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Optimierung von Unternehmenskultur und -performance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Erfahrung und Expertise in der Branche</span>
                </li>
              </ul>
              <Link
                href="/transformationskontinuum/kontakt"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Kontaktiere uns
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/team-meeting-discussion.webp"
                  alt="Team Meeting"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQABAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Teams ausrichten Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/team-meeting-discussion.webp"
                  alt="Geschäftsteam in Diskussion"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                TEAMS ausrichten
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Strategische Entwicklung effektiver Teamstrukturen und -dynamiken
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Teamdynamiken präzise analysieren und entwickeln</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Teambildungsprozesse strategisch begleiten</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Führungskräfte in ihrer Teamverantwortung stärken</span>
                </li>
              </ul>
              <p className="text-gray-700 mb-8">
                Unterstützen Sie ihre Teams und Führungskräfte in Ihrer Entwicklung
              </p>
              <Link
                href="/transformationskontinuum/kontakt"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Kontaktiere uns
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Innovative KI-Coaching-Technologie Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Innovative KI-Coaching-Technologie
              </h2>
              <p className="text-gray-700 mb-6">
                Unsere innovative KI-Coaching-Technologie kombiniert Maria Voicebot und Mario Egartner zur individuellen und messbaren Transformation von Organisationen und Einzelpersonen.
              </p>
              <p className="text-gray-700 mb-8">
                Durch unsere innovativen Technologien und Coaching-Tools können wir eine nachhaltige Veränderung auf organisatorischer und individueller Ebene gewährleisten.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Innovative KI-Coaching-Technologie</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Individuelle und messbare Transformation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Cog className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Integration von Maria Voicebot und Coaches</span>
                </li>
              </ul>
              <Link
                href="/transformationskontinuum/kontakt"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Kontaktiere uns
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/executive-portrait.webp"
                  alt="Führungskraft Portrait"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerschaft mit Human Synergistics Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/team-collaboration-postits.webp"
                  alt="Team Kollaboration mit Post-its"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Partnerschaft mit Human Synergistics
              </h2>
              <p className="text-gray-700 mb-6">
                Durch die Anwendung von Human Synergistics' bewährten Instrumenten unterstützen wir Unternehmen bei der Entwicklung einer gesunden und effektiven Organisationskultur.
              </p>
              <p className="text-gray-700 mb-8">
                Wir arbeiten eng mit unseren Kunden zusammen, um maßgeschneiderte Lösungen zu entwickeln, die ihren individuellen Anforderungen entsprechen.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Bewährte Instrumente von Human Synergistics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Entwicklung gesunder Organisationskulturen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Effektivität und Nachhaltigkeit in der Transformation</span>
                </li>
              </ul>
              <Link
                href="/transformationskontinuum/kontakt"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Kontaktiere uns
              </Link>
            </div>
          </div>
        </div>
      </section>




      {/* Detailed Services Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Weitere Dienstleistungen
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Entdecken Sie unser vollständiges Dienstleistungsangebot für nachhaltigen Erfolg
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Executive Coaching */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <User className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Executive Coaching</h3>
              <p className="text-gray-700 mb-6">
                Individuelle Begleitung für Führungskräfte und Nachwuchstalente bei beruflichen Herausforderungen.
              </p>
              <Link
                href="/transformationskontinuum/kontakt"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
              >
                Mehr erfahren →
              </Link>
            </div>

            {/* Assessment Center */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Eignungsdiagnostik</h3>
              <p className="text-gray-700 mb-6">
                Wissenschaftlich fundierte Assessment Center für optimale Personalauswahl und -entwicklung.
              </p>
              <Link
                href="/transformationskontinuum/kontakt"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
              >
                Mehr erfahren →
              </Link>
            </div>

            {/* Outplacement */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <ArrowRight className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Outplacement</h3>
              <p className="text-gray-700 mb-6">
                Professionelle Begleitung bei beruflichen Veränderungen - diskret und erfolgreich.
              </p>
              <Link
                href="/transformationskontinuum/kontakt"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
              >
                Mehr erfahren →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection variant="transformation" />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Unsere Dienstleistungen - Transformationskontinuum',
      description: 'Entdecken Sie unsere Beratungsleistungen: Teams ausrichten, KI-Coaching-Technologie, Human Synergistics Partnerschaft und Unternehmenskulturberatung.'
    }
  }
}