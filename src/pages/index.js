import Link from 'next/link'
import { ArrowRight, Users, User, Target, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'

export default function HomePage() {
  const websites = [
    {
      title: 'C5 Business Partner',
      subtitle: 'Transformationskontinuum',
      description: 'Ganzheitliche Unternehmensberatung für Organisationen, Teams und Führungskräfte. Spezialisiert auf Kulturanalyse, strategische Transformation und nachhaltige Veränderungsprozesse.',
      icon: Users,
      href: '/transformationskontinuum',
      target: 'Unternehmen & Organisationen',
      features: [
        'Kulturanalyse mit Human Synergistics',
        'Strategische Transformationsberatung', 
        'Teamworkshops & Führungskräfte-Training',
        'Organisationsentwicklung'
      ],
      color: 'primary',
      bgGradient: 'from-primary-600 to-navy-700'
    },
    {
      title: 'Frankfurt Business Coach',
      subtitle: 'Individuelles Coaching',
      description: 'Professionelle Begleitung für Führungskräfte und Privatpersonen bei beruflichen und persönlichen Herausforderungen. Über 15 Jahre Erfahrung in der Region Frankfurt.',
      icon: User,
      href: '/frankfurt-business-coach',
      target: 'Privatpersonen & Führungskräfte',
      features: [
        'Business & Karriere Coaching',
        'Systemische Beratung & Paartherapie',
        'Individuelles Training',
        'Outplacement & Potenzialanalyse'
      ],
      color: 'navy',
      bgGradient: 'from-navy-700 to-primary-600'
    }
  ]

  const commonFeatures = [
    'Über 20 Jahre Beratungserfahrung',
    'Mehr als 7.000 erfolgreiche Gespräche',
    'Standort Frankfurt am Main',
    'Online und vor Ort verfügbar'
  ]

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source 
              src="https://fastly-signed-us-east-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/1971571337001/b5cd680e-938d-4b44-9083-d3e5d7eb3ca5/117d8dd0-356e-4035-83a0-99fa3e4987c1/main.mp4?fastly_token=NjgzNTJjNzJfODJiZjdhZWFjYzE1OTk4MjEwYzJhMWZiOTFmZGMwMzkyMmM5MjM2NjAwMGJkYjRmMjgyMjk2YTYzMWMyYWE4MF8vL2Zhc3RseS1zaWduZWQtdXMtZWFzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMTk3MTU3MTMzNzAwMS9iNWNkNjgwZS05MzhkLTRiNDQtOTA4My1kM2U1ZDdlYjNjYTUvMTE3ZDhkZDAtMzU2ZS00MDM1LTgzYTAtOTlmYTNlNDk4N2MxL21haW4ubXA0" 
              type="video/mp4" 
            />
          </video>
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-800/60 to-primary-900/80" />
        </div>
        
        <div className="container-width section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
                Mario Egartner
              </h1>
              <p className="text-2xl sm:text-3xl text-primary-200 font-semibold mb-8 animate-slide-up animation-delay-200 drop-shadow-md">
                Excellence in Transformation
              </p>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400 drop-shadow-sm">
                Willkommen! Ich begleite Unternehmen und Menschen bei Transformationsprozessen. 
                Wählen Sie den passenden Bereich für Ihr Anliegen.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animation-delay-600">
              <Link
                href="/transformationskontinuum"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy-900 bg-white border border-transparent rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group backdrop-blur-sm"
              >
                <Users className="mr-3 h-6 w-6" />
                Für Unternehmen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/frankfurt-business-coach"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                <User className="mr-3 h-6 w-6" />
                Für Privatpersonen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Websites Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Zwei Bereiche, ein Experte</h2>
            <p className="section-subtitle">
              Wählen Sie den passenden Bereich für Ihre Bedürfnisse
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {websites.map((site, index) => {
              const IconComponent = site.icon
              return (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br ${site.bgGradient} rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up animation-delay-${index * 200}`}
                >
                  <div className="absolute top-4 right-4">
                    <IconComponent className="h-12 w-12 text-white/30" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{site.title}</h3>
                    <p className="text-lg font-semibold text-white/80 mb-4">{site.subtitle}</p>
                    <p className="text-white/90 leading-relaxed mb-6">{site.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-white/80 mb-3">Zielgruppe:</div>
                    <div className="text-white font-medium mb-4">{site.target}</div>
                    
                    <div className="text-sm font-semibold text-white/80 mb-3">Leistungen:</div>
                    <ul className="space-y-2">
                      {site.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-white/90">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={site.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold bg-white text-gray-900 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
                  >
                    Bereich erkunden
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Mario Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-navy-100 rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Placeholder for Mario's photo */}
                  <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Mario Egartner</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Über Mario Egartner
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>51 Jahre, Familienvater und erfahrener Begleiter.</strong> Seit über 15 Jahren unterstütze ich 
                  Menschen und Organisationen bei Veränderungsprozessen. Mit über 7.000 Einzelgesprächen und 
                  500 Workshops bringe ich umfassende Praxis- und Methodenerfahrung mit.
                </p>
                <p>
                  Nach meinem Studium der Betriebswirtschaftslehre mit Schwerpunkt Psychologie sammelte ich 
                  wertvolle Erfahrungen in führenden Beratungshäusern wie Kienbaum, Gemini Consulting und 
                  Odgers & Berndtson.
                </p>
                <p className="text-primary-600 font-semibold italic">
                  "Ich sehe meine Aufgabe darin, Menschen in ihrer Ganzheit und Einzigartigkeit wahr zu nehmen, 
                  zu respektieren und zu fördern."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {commonFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Unabhängig von Ihrem Anliegen - der erste Schritt ist immer ein Gespräch. 
              Kontaktieren Sie mich für eine unverbindliche Beratung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center space-x-3 text-lg">
                <Phone className="h-6 w-6 text-primary-400" />
                <a 
                  href="tel:069-97534441"
                  className="hover:text-primary-300 transition-colors duration-200"
                >
                  069 - 9753 4441
                </a>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-600" />
              <div className="flex items-center space-x-3 text-lg">
                <Mail className="h-6 w-6 text-primary-400" />
                <a 
                  href="mailto:egartner@frankfurt-business-coach.de"
                  className="hover:text-primary-300 transition-colors duration-200"
                >
                  E-Mail senden
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-6">
                <strong>Standort:</strong> Günthersburgallee 82, 60389 Frankfurt am Main
              </p>
              <p className="text-sm text-gray-500">
                Termine wahlweise vor Ort in Frankfurt oder online • Abend- und Samstagstermine nach Absprache
              </p>
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
      title: 'Mario Egartner - Excellence in Transformation',
      description: 'Mario Egartner begleitet Unternehmen und Menschen bei Transformationsprozessen. C5 Business Partner für Organisationen, Frankfurt Business Coach für Privatpersonen.'
    }
  }
}