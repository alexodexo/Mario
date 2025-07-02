import Link from 'next/link'
import {
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  UserCheck,
  Database,
  Globe
} from 'lucide-react'

export default function Datenschutz() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-width section-padding relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="hero-text mb-6">Datenschutzerklärung</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Umfassende Informationen – wie, warum und wo wir Ihre
              personenbezogenen Daten verarbeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {/* Zurück‑Link */}
            <div className="mb-12">
              <Link
                href="/"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </div>

            {/* Überblick */}
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 mb-12">
              <div className="flex items-start space-x-4">
                <UserCheck className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">
                    Datenschutz auf einen Blick
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Diese Datenschutzerklärung erläutert Art, Umfang und Zweck
                    der Verarbeitung personenbezogener Daten auf unserer
                    Website. Wir behandeln Ihre Daten vertraulich und gemäß den
                    gesetzlichen Vorgaben (DSGVO / BDSG).
                  </p>
                </div>
              </div>
            </div>

            {/* 1. Verantwortlicher */}
            <div className="space-y-12">
              {/* ---------- 1 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">
                    1. Verantwortlicher
                  </h2>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 space-y-2">
                    <strong>Mario Egartner / C5 Business Partner</strong>
                    <br />
                    Günthersburgallee 82 / Beraterhaus
                    <br />
                    60389 Frankfurt am Main – Deutschland
                  </p>
                  <p className="text-gray-700 mt-4">
                    <strong>E‑Mail:</strong>{' '}
                    <a
                      href="mailto:datenschutz@c5-business-partner.de"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      datenschutz@c5-business-partner.de
                    </a>
                    <br />
                    <strong>Telefon:</strong>{' '}
                    <a
                      href="tel:069-97534440"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      069 ‑ 9753 4440
                    </a>
                    <br />
                    <Link
                      href="/impressum"
                      className="underline text-primary-600 hover:text-primary-700"
                    >
                      Zum Impressum
                    </Link>
                  </p>
                </div>
              </div>

              {/* ---------- 2 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">
                    2. Arten der verarbeiteten Daten
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Kontakt‑ & Bestandsdaten',
                      items: [
                        'Namen, Anrede',
                        'Post‑ und E‑Mail‑Adressen',
                        'Telefonnummern',
                        'Unternehmenszugehörigkeit'
                      ]
                    },
                    {
                      title: 'Technische Daten',
                      items: [
                        'IP‑Adresse',
                        'Browser & Betriebssystem',
                        'Geräte‑ID',
                        'Zugriffszeitpunkte'
                      ]
                    },
                    {
                      title: 'Nutzungsdaten',
                      items: [
                        'Besuchte Seiten',
                        'Verweildauer',
                        'Referrer‑URLs',
                        'Klick‑ & Download‑Events'
                      ]
                    },
                    {
                      title: 'Coaching‑ / Beratungsdaten',
                      items: [
                        'Gesprächsnotizen (anonymisiert)',
                        'Terminhistorie',
                        'Ziel‑ & Entwicklungsfortschritte',
                        'Feedback'
                      ]
                    }
                  ].map(({ title, items }) => (
                    <div key={title} className="bg-gray-50 rounded-lg p-6 space-y-3">
                      <h3 className="font-semibold text-navy-900">{title}</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {items.map((i) => (
                          <li key={i}>• {i}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* ---------- 3 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">
                    3. Zwecke der Datenverarbeitung
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Wir verarbeiten Ihre Daten insbesondere zur:
                </p>
                <ul className="ml-6 space-y-1 text-gray-700">
                  <li>• Bereitstellung und Sicherheit der Website</li>
                  <li>• Bearbeitung von Kontaktanfragen</li>
                  <li>• Durchführung von Coaching‑, Beratungs‑ und Schulungsleistungen</li>
                  <li>• Vertragsabwicklung und Rechnungsstellung</li>
                  <li>• Optimierung unserer Angebote (Analyse & Marketing)</li>
                  <li>• Erfüllung gesetzlicher Pflichten</li>
                </ul>
              </div>

              {/* ---------- 4 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <UserCheck className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">4. Rechtsgrundlagen</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    ['Art. 6 Abs. 1 lit. a', 'Einwilligung (z. B. Newsletter, Cookies)'],
                    ['Art. 6 Abs. 1 lit. b', 'Vertrag / vorvertragliche Maßnahmen'],
                    ['Art. 6 Abs. 1 lit. c', 'Rechtliche Verpflichtung'],
                    ['Art. 6 Abs. 1 lit. f', 'Berechtigte Interessen (Sicherheit, Analyse)']
                  ].map(([art, desc]) => (
                    <div
                      key={art}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                    >
                      <h4 className="font-semibold text-navy-900 mb-1">{art} DSGVO</h4>
                      <p className="text-sm text-gray-700">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ---------- 5 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">
                    5. Website‑Hosting & technische Dienste
                  </h2>
                </div>

                {/* 5.1 Vercel */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    5.1 Hosting durch Vercel
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Unsere Website wird bei{' '}
                    <strong>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
                    USA</strong> gehostet. Server‑Logfiles (IP, User‑Agent,
                    Zeitstempel) werden 30 Tage gespeichert.
                  </p>
                  <p className="text-sm text-gray-700">
                    Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>

                {/* 5.2 Google Fonts */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    5.2 Google Fonts
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Wir nutzen lokal eingebundene <strong>Google Fonts</strong>;
                    es erfolgt kein externer Abruf.
                  </p>
                  <p className="text-sm text-gray-700">
                    Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>

                {/* 5.3 Airtable */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    5.3 Airtable (Cloud‑Datenbank)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Für Kontakt‑ und Projektformulare nutzen wir{' '}
                    <strong>Airtable Inc., 799 Market St, San Francisco, CA 94103, USA</strong>.
                    Formularangaben werden auf Airtable‑Servern in den USA gespeichert.
                  </p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO</p>
                    <p><strong>Übermittlung:</strong> EU‑Standardvertragsklauseln</p>
                    <p><strong>Speicherdauer:</strong> max. 24 Monate nach Abschluss</p>
                  </div>
                </div>
              </div>

              {/* ---------- 6 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">
                    6. Cookies und lokale Speicherung
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Was sind Cookies */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">
                      Was sind Cookies?
                    </h3>
                    <p className="text-sm text-gray-700">
                      Cookies sind kleine Textdateien, die auf Ihrem Gerät
                      gespeichert werden. Wir setzen nur notwendige oder von
                      Ihnen erlaubte Cookies ein.
                    </p>
                  </div>

                  {/* 2 Blöcke */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-navy-900 mb-1">
                        Technisch notwendige Cookies
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        Session‑Management, Sicherheit, Cookie‑Prefs
                      </p>
                      <p className="text-xs text-gray-500">
                        Rechtsgrundlage: Art. 6 Abs. 1 lit. f
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-navy-900 mb-1">
                        Funktionale Cookies
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        Sprache, Theme, temporäre Formulardaten
                      </p>
                      <p className="text-xs text-gray-500">
                        Rechtsgrundlage: Art. 6 Abs. 1 lit. a
                      </p>
                    </div>
                  </div>

                  {/* Cookie Verwaltung */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">
                      Cookie‑Verwaltung
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Einstellungen können jederzeit über den Banner oder Ihren
                      Browser geändert werden.
                    </p>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <button className="btn-primary text-sm">
                        Cookie‑Einstellungen verwalten
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------- 7 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">7. Kontaktaufnahme</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Bei Kontakt per Formular, E‑Mail oder Telefon verarbeiten wir
                    Ihre Angaben zur Bearbeitung der Anfrage.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm">
                    <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b</p>
                    <p><strong>Löschung:</strong> nach 3 Jahren oder auf Wunsch</p>
                  </div>
                </div>
              </div>

              {/* ---------- 8 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">
                    8. Coaching‑ und Beratungsleistungen
                  </h2>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4 text-sm">
                  Inhalte sind besonders vertraulich und werden nur anonymisiert
                  verarbeitet.
                </div>
                <p className="text-sm text-gray-700">
                  Aufbewahrung max. 3 Jahre nach Abschluss.
                </p>
              </div>

              {/* ---------- 9 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <UserCheck className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">9. Ihre Rechte</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    ['Auskunft', 'Art. 15', 'Über Ihre Daten'],
                    ['Berichtigung', 'Art. 16', 'Fehler korrigieren'],
                    ['Löschung', 'Art. 17', 'Daten entfernen'],
                    ['Einschränkung', 'Art. 18', 'Verarbeitung pausieren'],
                    ['Portabilität', 'Art. 20', 'Daten übertragen'],
                    ['Widerspruch', 'Art. 21', 'Verarbeitung stoppen']
                  ].map(([title, art, note]) => (
                    <div key={title} className="bg-gray-50 p-4 rounded-lg text-sm">
                      <h4 className="font-semibold text-navy-900">{title}</h4>
                      <p className="text-xs text-gray-600">{art} DSGVO</p>
                      <p className="text-gray-700">{note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ---------- 10 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">10. Datensicherheit</h2>
                </div>

                {/* Drei Boxen mit Icons – jetzt ohne Funktions‑Aufruf */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'SSL‑Verschlüsselung',
                      desc: 'Sichere Übertragung',
                      Icon: Lock,
                      classes: 'bg-green-50 border-green-200 text-green-600'
                    },
                    {
                      title: 'Zugriffskontrolle',
                      desc: 'Beschränkter Datenzugang',
                      Icon: Shield,
                      classes: 'bg-blue-50 border-blue-200 text-blue-600'
                    },
                    {
                      title: 'Regelmäßige Backups',
                      desc: 'Datensicherung',
                      Icon: Database,
                      classes: 'bg-purple-50 border-purple-200 text-purple-600'
                    }
                  ].map(({ title, desc, Icon, classes }) => (
                    <div
                      key={title}
                      className={`rounded-lg p-4 text-center border ${classes.split(' ')[0]} ${
                        classes.split(' ')[1]
                      }`}
                    >
                      <Icon className={`h-8 w-8 mx-auto mb-2 ${classes.split(' ')[2]}`} />
                      <h4 className="font-semibold text-navy-900 mb-1">{title}</h4>
                      <p className="text-xs text-gray-600">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ---------- 11 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">
                    11. Aufbewahrung & Löschung
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Daten werden nur solange gespeichert, wie es erforderlich oder
                  gesetzlich vorgeschrieben ist.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 text-sm">
                  <p><strong>Kontaktanfragen:</strong> 3 Jahre</p>
                  <p><strong>Rechnungen:</strong> 10 Jahre (§ 147 AO)</p>
                  <p><strong>Server‑Logs:</strong> 30 Tage</p>
                </div>
              </div>

              {/* ---------- 12 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <UserCheck className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">12. Beschwerderecht</h2>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-sm">
                  Zuständige Aufsichtsbehörde:
                  <br />
                  Der Hessische Beauftragte für Datenschutz und Informationsfreiheit
                  <br />
                  <a
                    href="https://datenschutz.hessen.de"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    datenschutz.hessen.de
                  </a>
                </div>
              </div>

              {/* ---------- 13 ---------- */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="h-6 w-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-navy-900">
                    13. Änderungen dieser Erklärung
                  </h2>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                  <strong>Letzte Aktualisierung:</strong> Dezember 2024 – Version 2.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
              Weitere rechtliche Informationen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/impressum"
                className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  Impressum
                </h3>
                <p className="text-gray-600 text-sm">
                  Angaben gemäß § 5 TMG
                </p>
              </Link>

              <Link
                href="/agb"
                className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  AGB
                </h3>
                <p className="text-gray-600 text-sm">
                  Bedingungen für unsere Dienstleistungen
                </p>
              </Link>
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
      title: 'Datenschutzerklärung',
      description:
        'Umfassende Datenschutzerklärung von Mario Egartner – C5 Business Partner. Informationen zu Hosting (Vercel), Google Fonts, Airtable & weiteren Diensten.'
    }
  }
}
