import Head from 'next/head'
import { useRouter } from 'next/router'
import TransformationHeader from './headers/TransformationHeader'
import CoachHeader from './headers/CoachHeader'
import TransformationFooter from './footers/TransformationFooter'
import CoachFooter from './footers/CoachFooter'

export default function Layout({ children, title, description, siteType = 'transformation' }) {
  const router = useRouter()
  
  // Determine which site we're on based on the route
  const isCoachingSite = router.pathname.startsWith('/frankfurt-business-coach')
  const currentSiteType = isCoachingSite ? 'coaching' : 'transformation'
  
  // Default titles and descriptions
  const defaultTitle = currentSiteType === 'coaching' 
    ? 'Frankfurt Business Coach - Mario Egartner'
    : 'Transformationskontinuum - Excellence in Transformation'
    
  const defaultDescription = currentSiteType === 'coaching'
    ? 'Professionelles Business Coaching in Frankfurt. Mario Egartner begleitet Sie bei beruflichen und privaten Herausforderungen.'
    : 'C5 Business Partner - Ihr Spezialist für Organisationsentwicklung, Teamdynamik und strategische Transformation.'

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const pageDescription = description || defaultDescription

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mario Egartner" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Dynamic Header based on site type */}
        {currentSiteType === 'coaching' ? (
          <CoachHeader />
        ) : (
          <TransformationHeader />
        )}
        
        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Dynamic Footer based on site type */}
        {currentSiteType === 'coaching' ? (
          <CoachFooter />
        ) : (
          <TransformationFooter />
        )}
      </div>
    </>
  )
}