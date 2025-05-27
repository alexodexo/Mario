import Link from 'next/link'
import { ArrowRight, Users, Target, TrendingUp, Clock, CheckCircle, Star, Phone, Mail, MapPin, User, Briefcase } from 'lucide-react'
import Hero from '../../components/common/Hero'
import CTASection from '../../components/common/CTASection'
import FAQSection from '../../components/common/FAQSection'

export default function TransformationAbout() {
  const coreValues = [
    {
      icon: Users,
      title: 'Vertrauen',
      description: 'Die Erinnerung an eine vertrauensvolle Zusammenarbeit ist primär an Menschen gekoppelt, die in ihren Beziehungen aufrichtig, in ihren Aussagen authentisch, in ihrer Arbeit kompetent und in ihren Versprechen realistisch sind.',
      color: 'primary'
    },
    {
      icon: Target,
      title: 'Kompetenz',
      description: 'Mit über 20 Jahren Beratungserfahrung und wissenschaftlich fundierten Methoden bringen wir bewährte Expertise in jedes Projekt ein.',
      color: 'navy'
    },
    {
      icon: Star,
      title: 'Wertschätzung',
      description: 'Wir sehen unsere Aufgabe darin, Menschen in ihrer Ganzheit und Einzigartigkeit wahrzunehmen, zu respektieren und zu fördern.',
      color: 'primary'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Bewährte Methoden treffen auf innovative Ansätze. Unser virtueller Coach verbindet traditionelle Beratung mit modernster KI-Technologie.',
      color: 'navy'
    }
  ]

  const teamMembers = [
    {
      name: 'Mario Egartner',
      role: 'Gründer & Geschäftsführer',
      expertise: 'Business Coaching, Systemische Beratung, Organisationsentwicklung',
      experience: 'Über 15 Jahre Coaching-Erfahrung, 7.000+ Einzelgespräche',
      background: 'Nach seinem Studium der Betriebswirtschaftslehre mit Schwerpunkt Psychologie sammelte Mario wertvolle Erfahrungen bei Kienbaum, Gemini Consulting und Odgers & Berndtson, bevor er 2002 C5 Business Partner gründete.',
      image: '/team/mario-egartner.jpg'
    },
    {
      name: 'Jochen Grotenhöfer',
      role: 'Senior Berater/Coach/Trainer',
      expertise: 'Führungskräfteentwicklung, Change Management, Strategieberatung',
      experience: 'Über 18 Jahre Beratungserfahrung in der Organisationsentwicklung',
      background: 'Experte für komplexe Transformationsprojekte mit Fokus auf nachhaltige Veränderungsprozesse in Großunternehmen.',
      image: '/team/jochen-grotenhoefer.jpg'
    },
    {
      name: 'Brigitte Calmund',
      role: 'Senior Beraterin/Coach/Trainerin',
      expertise: 'Kulturanalyse, Teamdynamik, Diversity & Inclusion',
      experience: 'Über 16 Jahre Expertise in Kulturwandel und Teamarbeit',
      background: 'Spezialistin für Human Synergistics Tools und nachhaltige Kulturveränderungen mit besonderem Fokus auf Diversität und Integration.',
      image: '/team/brigitte-calmund.jpg'
    },
    {
      name: 'Christof Schlachte',
      role: 'Senior Berater/Coach/Trainer',
      expertise: 'Assessment Center, Eignungsdiagnostik, Executive Coaching',
      experience: 'Über 20 Jahre Erfahrung in Personaldiagnostik und -entwicklung',
      background: 'Führender Experte für Eignungsdiagnostik und Assessment-Verfahren mit fundierter Ausbildung in psychologischer Diagnostik.',
      image: '/team/christof-schlachte.jpg'
    }
  ]

  const milestones = [
    {
      year: '2002',
      title: 'Gründung von C5 Business Partner',
      description: 'Mario Egartner gründet C5 Business Partner mit der Vision, Menschen und Organisationen bei nachhaltigen Transformationsprozessen zu begleiten.'
    },
    {
      year: '2005',
      title: 'Partnership mit Human Synergistics',
      description: 'Strategische Partnerschaft für wissenschaftlich fundierte Kulturanalysen und Organisationsentwicklung.'
    },
    {
      year: '2010',
      title: 'Erweiterung des Berater-Netzwerks',
      description: 'Aufbau des bewährten Experten-Teams mit spezialisierten Beratern für alle Transformationsebenen.'
    },
    {
      year: '2015',
      title: '500+ erfolgreiche Projekte',
      description: 'Meilenstein von über 500 erfolgreich durchgeführten Transformationsprojekten erreicht.'
    },
    {
      year: '2020',
      title: 'Digitale Innovation',
      description: 'Entwicklung des virtuellen Coaching-Ansatzes und Hybrid-Beratungskonzepte.'
    },
    {
      year: '2024',
      title: 'Excellence in Transformation',
      description: 'Über 20 Jahre Expertise, 7.000+ Gespräche und 95% Kundenzufriedenheit - C5 ist etablierter Partner für Transformation.'
    }
  ]

  const stats = [
    { number: '375+', label: 'Erfolgreiche Projekte', icon: Target },
    { number: '20+', label: 'Jahre Erfahrung', icon: Clock },
    { number: '95%', label: 'Kundenzufriedenheit', icon: Star },
    { number: '7.000+', label: 'Beratungsgespräche', icon: Users }
  ]

  const clientTestimonials = [
    {
      text: "Von allen Beratern, die ich kennenlernen durfte, war das die angenehmste und offenste Zusammenarbeit. Sie war auch erfolgreich.",
      author: "CEO, Dienstleistungsunternehmen",
      company: "300 Mitarbeiter",
      rating: 5
    },
    {
      text: "Die Zusammenarbeit mit diesem Unternehmen hat mich absolut überzeugt. Ich würde mich jederzeit wieder dafür entscheiden und kann es nur weiterempfehlen.",
      author: "Geschäftsbereichsleiter, Maschinenbau", 
      company: "5 Mrd. Gesamtumsatz",
      rating: 5
    },
    {
      text: "C5 Business Partner hat uns bei der Kulturanalyse und Transformation hervorragend begleitet. Die Ergebnisse sprechen für sich - unsere Mitarbeiterzufriedenheit ist um 40% gestiegen.",
      author: "Vorstand Personal",
      company: "Internationaler Konzern",
      rating: 5
    }
  ]

  const philosophy = {
    title: "Unser Geheimnis? Wir lieben unsere Arbeit und sind ein Netzwerk aus warmer Hand.",
    subtitle: "C5 - Wir vertrauen uns über Jahre einander an",
    description: "Unsere Berater kennen sich seit über 20 Jahren und bringen sich nach ihren Anforderungen als Berater, Mediator und Coach ein. Mit über 25 Jahren Erfahrung in verschiedenen Branchen sind wir ein äußerst verlässlicher Partner. Wir nehmen uns Ihrer Herausforderungen an und widmen uns unseren Projekten mit maximaler Energie und Aufmerksamkeit."
  }

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Über C5 Business Partner"
        subtitle="Excellence in Transformation seit 2002"
        description="Wir sind ein bewährtes Netzwerk von Experten, die Organisationen, Teams und Menschen bei nachhaltigen Transformationsprozessen begleiten."
        primaryCTA={{
          text: 'Unser Team kennenlernen',
          href: '#team'
        }}
        secondaryCTA={{
          text: 'Leistungen entdecken',
          href: '/transformationskontinuum/leistungen'
        }}
        backgroundType="gradient"
      />

      {/* Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                {philosophy.subtitle}
              </h2>
              <blockquote className="text-2xl font-light text-primary-600 italic mb-6 leading-relaxed">
                "{philosophy.title}"
              </blockquote>
              <p className="text-gray-700 leading-relaxed mb-8">
                {philosophy.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Durch unsere unterschiedlichen Interessen und Erfahrungen ergänzen wir uns ideal. 
                Dabei setzen alle unsere Berater auf ihre individuellen Schwerpunkte, ohne die 
                Zusammenarbeit im Team aus den Augen zu verlieren. Gegenseitige Unterstützung ist 
                für uns selbstverständlich, sodass unsere Kunden vom geballten Team-Wissen profitieren.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-navy-100 rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center">
                  <Users className="h-32 w-32 text-primary-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Unsere Kernwerte</h2>
            <p className="section-subtitle">
              Fünf entscheidende Werte liegen unserem C5-Business-Partner-Netzwerk und unserer täglichen Arbeit zugrunde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up animation-delay-${index * 200}`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    value.color === 'primary' ? 'bg-primary-100 text-primary-600' : 'bg-navy-100 text-navy-600'
                  }`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vertrauen durch Erfahrung</h2>
            <p className="text-xl text-gray-300">Unsere Erfolgsbilanz in Zahlen</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Unser Expertenteam</h2>
            <p className="section-subtitle">
              Lernen Sie die Köpfe hinter C5 Business Partner kennen - ein eingespieltes Team mit jeweils mehr als 15 Jahren Berufserfahrung
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up animation-delay-${index * 200}`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-navy-100 rounded-full flex items-center justify-center">
                      <User className="h-12 w-12 text-primary-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-1">Expertise:</h4>
                        <p className="text-gray-700 text-sm">{member.expertise}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-1">Erfahrung:</h4>
                        <p className="text-gray-700 text-sm">{member.experience}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">{member.background}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Unsere Geschichte</h2>
            <p className="section-subtitle">
              Über 20 Jahre kontinuierliche Entwicklung und Wachstum
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-300" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                        {milestone.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-primary-600 font-bold text-sm mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Was Kunden über uns sagen</h2>
            <p className="section-subtitle">
              Authentische Erfahrungen aus über 20 Jahren erfolgreicher Zusammenarbeit
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 animate-slide-up animation-delay-${index * 200}`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <cite className="font-semibold text-navy-900 not-italic">
                    {testimonial.author}
                  </cite>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy and Planning */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Strategie und Planung
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Jeder Kunde ist einzigartig. Deshalb passen wir unser Angebot genau Ihren 
                Anforderungen an. Egal, ob es sich um einen kleinen Strategieentwurf oder 
                eine umfassende Planung handelt. Wir nehmen uns Zeit für Sie.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-primary-200" />
                  <span className="text-primary-100">Individuelle Bedarfsanalyse</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-primary-200" />
                  <span className="text-primary-100">Maßgeschneiderte Lösungskonzepte</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-primary-200" />
                  <span className="text-primary-100">Langfristige Partnerschaft</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-primary-200" />
                  <span className="text-primary-100">Messbare Erfolgskennzahlen</span>
                </li>
              </ul>
              
              <Link
                href="/transformationskontinuum/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border border-transparent rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Strategiegespräch vereinbaren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-full p-8 backdrop-blur-sm border border-white/20">
                <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-32 w-32 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Besuchen Sie uns in unserem Beraterhaus in Frankfurt oder vereinbaren Sie 
              ein unverbindliches Kennenlern-Gespräch.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="font-semibold text-navy-900 mb-4">Unser Standort:</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>C5 Business Partner</strong></p>
                    <p>Beraterhaus im Hinterhaus</p>
                    <p>Günthersburgallee 82</p>
                    <p>60389 Frankfurt am Main</p>
                    <p>Deutschland</p>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="font-semibold text-navy-900 mb-4">Kontakt:</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Telefon:</strong> 069 - 9753 4441</p>
                    <p><strong>E-Mail:</strong> info@c5-business-partner.de</p>
                    <p className="mt-4 text-sm">
                      <strong>Öffnungszeiten:</strong><br />
                      Mo - Fr: 9:00 - 18:00<br />
                      Sa - So: Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Link
              href="/transformationskontinuum/kontakt" 
              className="btn-primary text-lg px-8 py-4"
            >
              Kontakt aufnehmen
            </Link>
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
      title: 'Über uns - C5 Business Partner',
      description: 'Lernen Sie C5 Business Partner kennen: Über 20 Jahre Erfahrung in Organisationsentwicklung und Transformation. Unser Expertenteam begleitet Sie nachhaltig zum Erfolg.'
    }
  }
}