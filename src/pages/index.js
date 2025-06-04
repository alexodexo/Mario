import Link from 'next/link'
import { ArrowRight, Users, User, Target, CheckCircle, Phone, Mail, MapPin, Star, TrendingUp, Award, Shield } from 'lucide-react'

export default function HomePage() {
  const coreValues = [
    {
      icon: Users,
      title: 'Vertrauen',
      description: 'Die Erinnerung an eine vertrauensvolle Zusammenarbeit ist primär an Menschen gekoppelt, die in ihren Beziehungen aufrichtig, in ihren Aussagen authentisch, in ihrer Arbeit kompetent und in ihren Versprechen realistisch sind.',
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Target,
      title: 'Kompetenz',
      description: 'Mit über 20 Jahren Beratungserfahrung und wissenschaftlich fundierten Methoden bringen wir bewährte Expertise in jedes Projekt ein.',
      color: 'navy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Star,
      title: 'Wertschätzung',
      description: 'Wir sehen unsere Aufgabe darin, Menschen in ihrer Ganzheit und Einzigartigkeit wahrzunehmen, zu respektieren und zu fördern.',
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Bewährte Methoden treffen auf innovative Ansätze. Unser virtueller Coach verbindet traditionelle Beratung mit modernster KI-Technologie.',
      color: 'navy',
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
                Transformationskontinuum
              </h1>
              <p className="text-2xl sm:text-3xl text-primary-200 font-semibold mb-8 animate-slide-up animation-delay-200 drop-shadow-md">
                Von der Kultur über das Team zum Individuum
              </p>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400 drop-shadow-sm">
                Excellence in Transformation - Ganzheitliche Begleitung für nachhaltige Veränderungen 
                auf drei Ebenen der Organisation.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animation-delay-600">
              <Link
                href="/transformationskontinuum"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy-900 bg-white border border-transparent rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group backdrop-blur-sm"
              >
                <Target className="mr-3 h-6 w-6" />
                C5 Business Partner
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/frankfurt-business-coach"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                <User className="mr-3 h-6 w-6" />
                Frankfurt Business Coach
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      {/* Transformationskontinuum Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Das Transformationskontinuum</h2>
            <p className="section-subtitle">
              Ganzheitliche Begleitung auf drei Ebenen - von der Organisationskultur bis zur individuellen Entwicklung
            </p>
          </div>

          {/* Three Levels of Transformation */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Level 1: Kulturberatung */}
            <div className="bg-gradient-to-br from-primary-600 to-navy-700 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Frankfurter Hochhäuser - Außenperspektive auf Unternehmen"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Kulturberatung</h3>
                <p className="text-lg font-semibold text-white/80 mb-4">Organisation</p>
                <p className="text-white/90 leading-relaxed mb-6">
                  Der Blick von außen auf Ihre Organisation. Wir analysieren Ihre Unternehmenskultur 
                  objektiv und entwickeln strategische Transformationspläne.
                </p>
              </div>

              <div className="mb-6">
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
                href="/transformationskontinuum"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold bg-white text-gray-900 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                C5 Business Partner
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Level 2: Teamberatung */}
            <div className="bg-gradient-to-br from-navy-700 to-primary-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Fröhliches Team bei der Zusammenarbeit am Laptop"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Teamberatung</h3>
                <p className="text-lg font-semibold text-white/80 mb-4">Team</p>
                <p className="text-white/90 leading-relaxed mb-6">
                  Teams unterstützen, symbiosieren und weiterentwickeln. Wir schaffen nachhaltige 
                  Verbesserungen in der Zusammenarbeit und Teamdynamik.
                </p>
              </div>

              <div className="mb-6">
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
                Team-Lösungen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Level 3: Individualberatung */}
            <div className="bg-gradient-to-br from-primary-600 to-navy-700 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Coaching-Gespräch zwischen zwei Menschen mit KI-Elementen"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Individualberatung</h3>
                <p className="text-lg font-semibold text-white/80 mb-4">Individuum</p>
                <p className="text-white/90 leading-relaxed mb-6">
                  Persönliche Begleitung mit innovativer KI-Unterstützung. Vertrauensvolle 
                  Mensch-zu-Mensch UND Mensch-zu-Maschine Kommunikation.
                </p>
              </div>

              <div className="mb-6">
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
                    Systemische Beratung & Paartherapie
                  </li>
                </ul>
              </div>

              <Link
                href="/frankfurt-business-coach"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold bg-white text-gray-900 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 group"
              >
                Frankfurt Business Coach
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Unsere Kernwerte</h2>
            <p className="section-subtitle">
              Vier entscheidende Werte liegen unserem C5-Business-Partner-Netzwerk und unserer täglichen Arbeit zugrunde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up animation-delay-${index * 200}`}
                >
                  {/* Value Image */}
                  <div className="aspect-video">
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                      value.color === 'primary' ? 'bg-primary-100 text-primary-600' : 'bg-navy-100 text-navy-600'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                  </div>
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

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Transformation beginnt mit einem Gespräch. Kontaktieren Sie uns für eine 
              unverbindliche Beratung und entdecken Sie die Möglichkeiten für Ihr Unternehmen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center space-x-3 text-lg">
                <Phone className="h-6 w-6 text-primary-600" />
                <a 
                  href="tel:069-97534441"
                  className="hover:text-primary-700 transition-colors duration-200"
                >
                  069 - 9753 4441
                </a>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-400" />
              <div className="flex items-center space-x-3 text-lg">
                <Mail className="h-6 w-6 text-primary-600" />
                <a 
                  href="mailto:info@c5-business-partner.de"
                  className="hover:text-primary-700 transition-colors duration-200"
                >
                  info@c5-business-partner.de
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                <strong>Standort:</strong> Günthersburgallee 82, 60389 Frankfurt am Main
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/transformationskontinuum/kontakt"
                  className="btn-primary"
                >
                  Beratung anfragen
                </Link>
                <Link
                  href="/transformationskontinuum/team"
                  className="btn-outline"
                >
                  Unser Team kennenlernen
                </Link>
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