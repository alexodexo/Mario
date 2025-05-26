import Link from 'next/link'
import { Target, Users, User, BarChart3, Lightbulb, Cog, ArrowRight, CheckCircle, Star } from 'lucide-react'
import Hero from '../../components/common/Hero'
import CTASection from '../../components/common/CTASection'
import FAQSection from '../../components/common/FAQSection'

export default function TransformationServices() {
  const serviceCategories = [
    {
      id: 'organisation',
      title: 'Organisation',
      icon: Target,
      color: 'primary',
      services: [
        {
          id: 'kulturanalyse',
          title: 'Kulturanalyse mit Human Synergistics',
          subtitle: 'Ist-Zustand verstehen – Potenziale freilegen',
          description: 'Unsere Kulturanalyse mit den bewährten Tools von Human Synergistics gibt Ihnen einen objektiven Einblick in Ihre Unternehmenskultur. Wir identifizieren Stärken, decken Verbesserungspotenziale auf und entwickeln konkrete Handlungsempfehlungen.',
          features: [
            'Organizational Culture Inventory (OCI)',
            'Organisationseffektivitäts-Inventar (OEI)',
            'Detaillierte Kulturanalyse',
            'Benchmark-Vergleiche',
            'Maßgeschneiderte Handlungsempfehlungen'
          ],
          benefits: [
            'Objektive Standortbestimmung',
            'Evidenzbasierte Entscheidungen',
            'Nachhaltiger Kulturwandel',
            'Messbare Ergebnisse'
          ]
        },
        {
          id: 'strategische-beratung',
          title: 'Strategische Transformationsberatung',
          subtitle: 'Von der Vision zur Umsetzung',
          description: 'Wir begleiten Sie bei der strategischen Ausrichtung und Umsetzung von Transformationsprojekten. Von der Entwicklung der Vision bis zur operativen Implementierung.',
          features: [
            'Strategieentwicklung',
            'Change Management',
            'Projektmanagement',
            'Stakeholder-Management',
            'Implementierungsbegleitung'
          ],
          benefits: [
            'Klare strategische Ausrichtung',
            'Erfolgreiche Transformation',
            'Mitarbeiter-Engagement',
            'Nachhaltiger Wandel'
          ]
        }
      ]
    },
    {
      id: 'team',
      title: 'Team',
      icon: Users,
      color: 'navy',
      services: [
        {
          id: 'teamworkshops',
          title: 'Teamworkshops & Teamdynamik',
          subtitle: 'Teamworkshops, die wirken – nicht nur bunte Folien',
          description: 'Unsere Teamworkshops gehen über oberflächliche Aktivitäten hinaus. Wir arbeiten an der echten Teamdynamik und schaffen nachhaltige Verbesserungen in der Zusammenarbeit.',
          features: [
            'Teamdiagnose und -analyse',
            'Konfliktlösung',
            'Kommunikationsverbesserung',
            'Rollenklärung',
            'Teamentwicklungsmaßnahmen'
          ],
          benefits: [
            'Verbesserte Zusammenarbeit',
            'Höhere Produktivität',
            'Weniger Konflikte',
            'Stärkerer Teamzusammenhalt'
          ]
        },
        {
          id: 'fuehrungskraefte-training',
          title: 'Führungskräfte-Workshops & Training',
          subtitle: 'Führungskompetenzen für die Zukunft',
          description: 'Entwickeln Sie Ihre Führungskräfte zu effektiven Change Agents. Unsere praxisorientierten Trainings vermitteln moderne Führungskompetenzen.',
          features: [
            'Führungsstile und -techniken',
            'Change Leadership',
            'Mitarbeiterführung',
            'Konfliktmanagement',
            'Kommunikationstraining'
          ],
          benefits: [
            'Stärkere Führungspersönlichkeiten',
            'Bessere Mitarbeiterführung',
            'Erfolgreiche Veränderungen',
            'Höhere Mitarbeiterzufriedenheit'
          ]
        }
      ]
    },
    {
      id: 'individuum',
      title: 'Individuum',
      icon: User,
      color: 'primary',
      services: [
        {
          id: 'coaching',
          title: 'Berufliche Begleitung & Coaching',
          subtitle: 'Individuelle Entwicklung für Führungskräfte',
          description: 'Professionelles Executive Coaching für Führungskräfte und Nachwuchstalente. Wir begleiten Sie bei beruflichen Herausforderungen und Entwicklungszielen.',
          features: [
            'Executive Coaching',
            'Karriereberatung',
            'Führungskräfteentwicklung',
            '360-Grad-Feedback',
            'Persönlichkeitsentwicklung'
          ],
          benefits: [
            'Verbesserte Führungskompetenzen',
            'Klarheit über Karriereziele',
            'Bessere Work-Life-Balance',
            'Erhöhte Selbstreflexion'
          ]
        },
        {
          id: 'eignungsdiagnostik',
          title: 'Eignungsdiagnostik & Assessment',
          subtitle: 'Die richtigen Menschen für die richtigen Positionen',
          description: 'Wissenschaftlich fundierte Eignungsdiagnostik und Assessment Center für die optimale Personalauswahl und -entwicklung.',
          features: [
            'Assessment Center',
            'Persönlichkeitstests',
            'Potenzialanalysen',
            'Management Audits',
            'Nachfolgeplanung'
          ],
          benefits: [
            'Bessere Personalentscheidungen',
            'Reduziertes Fehlbesetzungsrisiko',
            'Objektive Bewertung',
            'Entwicklungspotenziale erkennen'
          ]
        },
        {
          id: 'outplacement',
          title: 'Outplacement – neue Perspektiven entwickeln',
          subtitle: 'Professionelle Begleitung bei beruflichen Veränderungen',
          description: 'Wir unterstützen Führungskräfte und Fachexperten beim Übergang in neue berufliche Herausforderungen – diskret, professionell und erfolgreich.',
          features: [
            'Karriereberatung',
            'Bewerbungscoaching',
            'Netzwerk-Aktivierung',
            'Verhandlungsführung',
            'Psychologische Begleitung'
          ],
          benefits: [
            'Schnellere Neuorientierung',
            'Bessere Positionen',
            'Erhaltung der Reputation',
            'Professionelle Unterstützung'
          ]
        }
      ]
    }
  ]

  const virtualCoach = {
    title: 'Innovativer Virtueller Coach',
    description: 'Modernste KI-Technologie trifft auf bewährte Coaching-Methoden. Unser virtueller Coach bietet 24/7 Unterstützung für Ihre Entwicklungsziele.',
    features: [
      'KI-basierte Analyse',
      '24/7 Verfügbarkeit',
      'Personalisierte Empfehlungen',
      'Fortschrittstracking',
      'Integration mit persönlichem Coaching'
    ]
  }

  const processSteps = [
    {
      step: '01',
      title: 'Erstgespräch',
      description: 'Unverbindliches Kennenlernen und Bedarfsanalyse'
    },
    {
      step: '02',
      title: 'Diagnose',
      description: 'Detaillierte Analyse Ihrer Situation und Herausforderungen'
    },
    {
      step: '03',
      title: 'Konzept',
      description: 'Entwicklung eines maßgeschneiderten Lösungskonzepts'
    },
    {
      step: '04',
      title: 'Umsetzung',
      description: 'Professionelle Durchführung mit kontinuierlicher Begleitung'
    },
    {
      step: '05',
      title: 'Erfolgsmessung',
      description: 'Evaluation der Ergebnisse und Nachhaltigkeit'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Unsere Dienstleistungen für Sie"
        description="Ganzheitliche Beratung auf drei Ebenen: Organisation, Team und Individuum. Entdecken Sie unsere bewährten Methoden für nachhaltigen Erfolg."
        primaryCTA={{
          text: 'Beratung anfragen',
          href: '/transformationskontinuum/kontakt'
        }}
        secondaryCTA={{
          text: 'Mehr über uns',
          href: '/transformationskontinuum/ueber-uns'
        }}
      />

      {/* Service Navigation */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            {serviceCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link
                  key={category.id}
                  href={`#${category.id}`}
                  className="flex items-center space-x-3 px-6 py-3 rounded-full bg-gray-50 hover:bg-primary-50 transition-colors duration-200 group"
                >
                  <IconComponent className="h-5 w-5 text-primary-600 group-hover:text-primary-700" />
                  <span className="font-medium text-gray-700 group-hover:text-primary-700">
                    {category.title}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Ihr Weg zur Beratung</h2>
            <p className="section-subtitle">
              Von der ersten Kontaktaufnahme bis zum nachhaltigen Erfolg – 
              unser bewährter 5-Stufen-Prozess
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white font-bold text-xl mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((category, categoryIndex) => {
        const IconComponent = category.icon
        return (
          <section 
            key={category.id} 
            id={category.id}
            className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container-width">
              <div className="text-center mb-16">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                  category.color === 'primary' ? 'bg-primary-100 text-primary-600' : 'bg-navy-100 text-navy-600'
                }`}>
                  <IconComponent className="h-10 w-10" />
                </div>
                <h2 className="section-title">{category.title}</h2>
              </div>

              <div className="space-y-16">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={service.id}
                    id={service.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      serviceIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={serviceIndex % 2 === 1 ? 'lg:order-2' : ''}>
                      <h3 className="text-3xl font-bold text-navy-900 mb-3">{service.title}</h3>
                      <p className="text-xl text-primary-600 font-semibold mb-6">{service.subtitle}</p>
                      <p className="text-gray-700 mb-8 leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="font-semibold text-navy-900 mb-3">Was wir tun:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                                <Cog className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-navy-900 mb-3">Ihr Nutzen:</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <Link
                        href="/transformationskontinuum/kontakt"
                        className="btn-primary"
                      >
                        Beratung anfragen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                    
                    <div className={serviceIndex % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="aspect-video bg-gradient-to-br from-primary-100 to-navy-100 rounded-xl p-8 flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="h-24 w-24 text-primary-600 mx-auto mb-4" />
                          <p className="text-gray-600 font-medium">{service.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Virtual Coach Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-navy-700 text-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">{virtualCoach.title}</h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {virtualCoach.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {virtualCoach.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Lightbulb className="h-5 w-5 text-primary-200" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/transformationskontinuum/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border border-transparent rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Mehr erfahren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-full p-8 backdrop-blur-sm border border-white/20">
                <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-32 w-32 text-white/80" />
                </div>
              </div>
            </div>
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
      title: 'Leistungen - Transformationskontinuum',
      description: 'Entdecken Sie unsere Beratungsleistungen: Kulturanalyse, strategische Transformation, Teamworkshops, Führungskräfte-Training und individuelles Coaching.'
    }
  }
}