import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, Users, User, CheckCircle, TrendingUp, Award, Clock } from 'lucide-react'
import CTASection from '../../components/common/CTASection'
import FAQSection from '../../components/common/FAQSection'

export default function TransformationHome() {
  const transformationLevels = [
    {
      icon: Target,
      title: 'Organisation',
      subtitle: 'Kulturanalyse & strategische Ausrichtung',
      description: 'Wir analysieren Ihre Unternehmenskultur mit bewährten Tools und entwickeln strategische Transformationspläne für nachhaltige Veränderungen.',
      features: ['Human Synergistics Kulturanalyse', 'Strategische Beratung', 'Change Management'],
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Team',
      subtitle: 'Teamdynamik & Führungsentwicklung',
      description: 'Stärken Sie Ihre Teams durch zielgerichtete Workshops und entwickeln Sie Führungskompetenzen auf allen Ebenen.',
      features: ['Teamworkshops & Teamdynamik', 'Führungskräfte-Training', 'Konfliktmoderation'],
      color: 'navy'
    },
    {
      icon: User,
      title: 'Individuum',
      subtitle: 'Coaching & Personalentwicklung',
      description: 'Individuelle Begleitung für Führungskräfte und Mitarbeiter bei beruflichen Herausforderungen und Karriereentwicklung.',
      features: ['Executive Coaching', 'Eignungsdiagnostik', 'Outplacement'],
      color: 'primary'
    }
  ]

  const comparisonFeatures = [
    'Über 20 Jahre Beratungserfahrung',
    'Bewährtes Netzwerk aus Experten',
    'Branchenspezifische Expertise',
    'Messbare Erfolgskennzahlen',
    'Ganzheitlicher Beratungsansatz',
    'Langfristige Partnerschaft'
  ]

  const stats = [
    { number: '375+', label: 'Erfolgreiche Projekte' },
    { number: '18+', label: 'Jahre Erfahrung' },
    { number: '95%', label: 'Kundenzufriedenheit' },
    { number: '300+', label: 'Trainierte Führungskräfte' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-width section-padding relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="hero-text mb-6">
                Excellence in <span className="text-gradient">Transformation</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Als C5 Business Partner begleiten wir Sie auf allen Ebenen Ihrer Organisation – 
                von der strategischen Ausrichtung bis zur individuellen Entwicklung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/transformationskontinuum/kontakt"
                  className="btn-primary bg-white text-navy-900 hover:bg-gray-100"
                >
                  C5 BP entdecken
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/frankfurt-business-coach"
                  className="btn-outline border-white text-white hover:bg-white hover:text-navy-900"
                >
                  Frankfurt Business Coach kennenlernen
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-gradient-to-br from-primary-400/20 to-navy-600/20 rounded-full p-8 backdrop-blur-sm border border-white/20">
                <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-32 w-32 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Continuum Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Das Transformationskontinuum</h2>
            <p className="section-subtitle">
              Unser ganzheitlicher Ansatz für nachhaltige Veränderungen auf drei Ebenen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformationLevels.map((level, index) => {
              const IconComponent = level.icon
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 animate-slide-up animation-delay-${index * 200}`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    level.color === 'primary' ? 'bg-primary-100 text-primary-600' : 'bg-navy-100 text-navy-600'
                  }`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{level.title}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{level.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{level.description}</p>
                  <ul className="space-y-2">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Excellence Comparison Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Exzellenz nach Maß
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Der Vergleich zwischen C5 Business Partner und Frankfurt Business Coach zeigt: 
                Wir bieten maßgeschneiderte Lösungen für jede Situation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">C5 Business Partner</h3>
                  <p className="text-gray-600">Organisationsentwicklung & Strategische Beratung</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Frankfurt Business Coach</h3>
                  <p className="text-gray-600">Individuelles Coaching & Persönliche Entwicklung</p>
                </div>
              </div>

              <ul className="space-y-3">
                {comparisonFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-navy-100 rounded-xl p-8 flex items-center justify-center">
                <Award className="h-32 w-32 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Zahlen, die für sich sprechen</h2>
            <p className="text-xl text-gray-300">Unsere Erfolgsbilanz in der Unternehmensberatung</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection variant="transformation" />

      {/* CTA Section */}
      <CTASection variant="transformation" />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Excellence in Transformation',
      description: 'C5 Business Partner - Ihr Spezialist für ganzheitliche Organisationsentwicklung. Wir begleiten Sie auf allen Ebenen: Organisation, Team und Individuum.'
    }
  }
}