import Link from 'next/link'
import { ArrowRight, Users, User, Target, CheckCircle, Phone, Mail, MapPin, Star, TrendingUp, Award, Shield, Eye, Heart, Compass, Handshake, HeartHandshake } from 'lucide-react'

export default function HomePage() {
  // Die 5 Cs nach Warren Bennis - Neue Kernwerte
  const coreValues = [
    {
      icon: Award,
      title: 'Kompetenz',
      subtitle: 'Competence',
      description: 'Mit über 20 Jahren Beratungserfahrung und wissenschaftlich fundierten Methoden bringen wir bewährte Expertise in jedes Projekt ein. Unser Team verfügt über tiefgreifende Fachkenntnisse in allen Bereichen der Transformation.',
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Shield,
      title: 'Kontinuität',
      subtitle: 'Constancy',
      description: 'Beständigkeit und Verlässlichkeit prägen unsere Arbeitsweise. Wir stehen für langfristige Partnerschaften und begleiten Sie durchgehend auf Ihrem Transformationsweg.',
      color: 'navy',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Heart,
      title: 'Fürsorge',
      subtitle: 'Care',
      description: 'Wir sehen unsere Aufgabe darin, Menschen in ihrer Ganzheit und Einzigartigkeit wahrzunehmen, zu respektieren und zu fördern. Echte Fürsorge für unsere Kunden und deren Erfolg steht im Mittelpunkt.',
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Eye,
      title: 'Klarheit',
      subtitle: 'Candor',
      description: 'Offene, ehrliche Kommunikation und transparente Prozesse sind unser Markenzeichen. Wir sprechen Klartext und schaffen Transparenz in allen Projektphasen.',
      color: 'navy',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: HeartHandshake,
      title: 'Glaubwürdigkeit',
      subtitle: 'Congruity',
      description: 'Übereinstimmung zwischen Worten und Taten, zwischen Versprechen und Erfüllung. Unsere langjährige Erfolgsbilanz spricht für sich und macht uns zu einem verlässlichen Partner.',
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const stats = [
    { number: '375+', label: 'Erfolgreiche Projekte', icon: Target },
    { number: '20+', label: 'Jahre Erfahrung', icon: Award },
    { number: '95%', label: 'Kundenzufriedenheit', icon: Star },
    { number: '7.000+', label: 'Beratungsgespräche', icon: Users }
  ]

  const philosophy = {
    title: "Unser Geheimnis? Wir lieben unsere Arbeit und sind ein Netzwerk aus warmer Hand.",
    subtitle: "C5 - Wir vertrauen uns über Jahre einander an",
    description: "Unsere Berater kennen sich seit über 20 Jahren und bringen sich nach ihren Anforderungen als Berater, Mediator und Coach ein. Mit über 25 Jahren Erfahrung in verschiedenen Branchen sind wir ein äußerst verlässlicher Partner. Wir nehmen uns Ihrer Herausforderungen an und widmen uns unseren Projekten mit maximaler Energie und Aufmerksamkeit."
  }

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Image as fallback */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"></div>
          {/* Try video first, fallback to gradient */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => e.target.style.display = 'none'}
          >
            <source 
              src="https://fastly-signed-us-east-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/1971571337001/b5cd680e-938d-4b44-9083-d3e5d7eb3ca5/117d8dd0-356e-4035-83a0-99fa3e4987c1/main.mp4?fastly_token=Njg0MGRmMzJfYmFjNjY0ZmJjN2RlYzVkOGMxYWQ0NzdhOWEyYjM5MGEwM2QzMzAwNjViMjI1YTE0ZmQxOTUxOWQxNzg4MTQ1Nl8vL2Zhc3RseS1zaWduZWQtdXMtZWFzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMTk3MTU3MTMzNzAwMS9iNWNkNjgwZS05MzhkLTRiNDQtOTA4My1kM2U1ZDdlYjNjYTUvMTE3ZDhkZDAtMzU2ZS00MDM1LTgzYTAtOTlmYTNlNDk4N2MxL21haW4ubXA0" 
              type="video/mp4" 
            />
          </video>
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-">
                Transformationskontinuum
              </h1>
              <p className="text-2xl sm:text-3xl text-blue-200 font-semibold mb-8 drop-shadow-md">
                Von der Kultur über das Team zum Individuum
              </p>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                Excellence in Transformation - Ganzheitliche Begleitung für nachhaltige Veränderungen 
                auf drei Ebenen der Organisation.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/transformationskontinuum"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white border border-transparent rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group backdrop-blur-sm"
              >
                <Target className="mr-3 h-6 w-6" />
                C5 Business Partner
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/frankfurt-business-coach"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                <User className="mr-3 h-6 w-6" />
                Frankfurt Business Coach
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformationskontinuum Overview - JETZT ZWEITE SEKTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Das Transformationskontinuum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ganzheitliche Begleitung auf drei Ebenen - von der Organisationskultur bis zur individuellen Entwicklung
            </p>
          </div>

          {/* Three Levels of Transformation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Level 1: Kulturberatung */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-400  rounded-2xl p-6 lg:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-video mb-4 lg:mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Frankfurter Hochhäuser - Außenperspektive auf Unternehmen"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-4 lg:mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">Kulturberatung</h3>
                <p className="text-base lg:text-lg font-semibold text-white/80 mb-3 lg:mb-4">Organisation</p>
                <p className="text-sm lg:text-base text-white/90 leading-relaxed mb-4 lg:mb-6">
                  Der Blick von außen auf Ihre Organisation. Wir analysieren Ihre Unternehmenskultur 
                  objektiv und entwickeln strategische Transformationspläne.
                </p>
              </div>

              <div className="mb-4 lg:mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Human Synergistics Kulturanalyse
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Strategische Transformationsberatung
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Change Management
                  </li>
                </ul>
              </div>

              <Link
                href="/transformationskontinuum/leistungen#organisation"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold bg-white text-gray-900 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                Organisationslösungen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Level 2: Teamberatung */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 lg:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-video mb-4 lg:mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Fröhliches Team bei der Zusammenarbeit am Laptop"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-4 lg:mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">Changeberatung</h3>
                <p className="text-base lg:text-lg font-semibold text-white/80 mb-3 lg:mb-4">Team & Führungskräfte</p>
                <p className="text-sm lg:text-base text-white/90 leading-relaxed mb-4 lg:mb-6">
                  Teams unterstützen, symbiosieren und weiterentwickeln. Wir schaffen nachhaltige 
                  Verbesserungen in der Zusammenarbeit und Teamdynamik.
                </p>
              </div>

              <div className="mb-4 lg:mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Teamworkshops & Teamdynamik
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Führungskräfte-Coaching (B2B)
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Konfliktmoderation
                  </li>
                </ul>
              </div>

              <Link
                href="/transformationskontinuum/leistungen#team"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold bg-white text-gray-900 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                Teamlösungen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Level 3: Individualberatung */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 lg:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="aspect-video mb-4 lg:mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Coaching-Gespräch zwischen zwei Menschen mit KI-Elementen"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-4 lg:mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">Individualberatung</h3>
                <p className="text-base lg:text-lg font-semibold text-white/80 mb-3 lg:mb-4">Individuum</p>
                <p className="text-sm lg:text-base text-white/90 leading-relaxed mb-4 lg:mb-6">
                  Persönliche Begleitung mit innovativer KI-Unterstützung. Vertrauensvolle 
                  Mensch-zu-Mensch UND Mensch-zu-Maschine Kommunikation.
                </p>
              </div>

              <div className="mb-4 lg:mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Business & Karriere Coaching (B2C)
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    KI-basierter Chatbot & Voicebot
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    Systemische Beratung & EAP
                  </li>
                </ul>
              </div>

              <Link
                href="/transformationskontinuum/leistungen#coaching"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold bg-white text-gray-900 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                Frankfurt Business Coach
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - JETZT DRITTE SEKTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                {philosophy.subtitle}
              </h2>
              <blockquote className="text-2xl font-light text-blue-600 italic mb-6 leading-relaxed">
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
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-100 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Team bei der Zusammenarbeit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics - Vertrauen durch Erfahrung - VIERTE SEKTION */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-orange-400">Vertrauen durch Erfahrung</h2>
            <p className="text-xl text-gray-300">Unsere Erfolgsbilanz in Zahlen</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-orange-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-800 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Values - Die 5 Cs nach Warren Bennis - FÜNFTE SEKTION */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Die 5 Cs unserer Partnerschaft</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fünf Vertrauenselemente nach Warren Bennis - weil echter Erfolg auf Vertrauen basiert
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              if (!IconComponent) {
                console.error('Icon component is undefined for value:', value.title)
                return null
              }
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-blue-100 text-blue-600">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{value.title}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-3">{value.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Strategy, Planning & Contact - Combined Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Strategie und Planung
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Jeder Kunde ist einzigartig. Deshalb passen wir unser Angebot genau Ihren 
                Anforderungen an. Egal, ob es sich um einen kleinen Strategieentwurf oder 
                eine umfassende Planung handelt. Wir nehmen uns Zeit für Sie.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-200 flex-shrink-0" />
                  <span className="text-blue-100">Individuelle Bedarfsanalyse</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-200 flex-shrink-0" />
                  <span className="text-blue-100">Maßgeschneiderte Lösungskonzepte</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-200 flex-shrink-0" />
                  <span className="text-blue-100">Langfristige Partnerschaft</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-200 flex-shrink-0" />
                  <span className="text-blue-100">Messbare Erfolgskennzahlen</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-full p-8 backdrop-blur-sm border border-white/20">
                <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-32 w-32 text-white/80" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-white/20 pt-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Lassen Sie uns sprechen
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Transformation beginnt mit einem Gespräch. Kontaktieren Sie uns für eine 
                unverbindliche Beratung und entdecken Sie die Möglichkeiten für Ihr Unternehmen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-lg">
                  <Phone className="h-8 w-8 text-blue-200" />
                  <a 
                    href="tel:069-97534440"
                    className="hover:text-blue-200 transition-colors duration-200 font-semibold"
                  >
                    069 - 9753 4440
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-lg">
                  <Mail className="h-8 w-8 text-blue-200" />
                  <a 
                    href="mailto:berater@c5-business-partner.de"
                    className="hover:text-blue-200 transition-colors duration-200 font-semibold"
                  >
                    berater@c5-business-partner.de
                  </a>
                </div>
              </div>

              <div className="text-center">
                <p className="text-blue-100 mb-8 text-lg">
                  <MapPin className="inline-block h-6 w-6 mr-2" />
                  <strong>Standort:</strong> Günthersburgallee 82, 60389 Frankfurt am Main
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/transformationskontinuum/kontakt"
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-blue-600 bg-white border border-transparent rounded-lg shadow-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    Strategiegespräch vereinbaren
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/transformationskontinuum/ueber-uns"
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white/30 transition-colors duration-200"
                  >
                    Unser Team kennenlernen
                  </Link>
                </div>
              </div>
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
      title: 'Excellence in Transformation - C5 Business Partner',
      description: 'Ganzheitliche Transformation von der Organisationskultur bis zur individuellen Entwicklung. C5 Business Partner und Frankfurt Business Coach - Ihr Netzwerk für nachhaltige Veränderung.'
    }
  }
}