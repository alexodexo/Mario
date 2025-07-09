// pages/404.js

import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    // Redirect zur Startseite nach 2 Sekunden
    const timer = setTimeout(() => {
      router.replace('/')
    }, 1000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-navy-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-gray-600 mb-8">
            Die angeforderte Seite konnte nicht gefunden werden. 
            Sie werden automatisch zur Startseite weitergeleitet.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
          <p className="text-sm text-gray-500">
            Weiterleitung in wenigen Sekunden...
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={() => router.replace('/')}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
          >
            Sofort zur Startseite
          </button>
        </div>
      </div>
    </div>
  )
}