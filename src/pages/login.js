// src/pages/login.js
import { useState, useEffect } from 'react';
import { auth } from '../../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import api from '../utils/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    document.title = "Login - telefonieren.ai";
  }, []);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Vorabvalidierung
    if (!isValidEmail(email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Das Passwort muss mindestens 6 Zeichen lang sein.');
      setLoading(false);
      return;
    }

    let userCredential;
    try {
      // Explizites Promise-Handling für Firebase Login
      userCredential = await signInWithEmailAndPassword(auth, email, password)
        .catch(err => {
          const errorMessages = {
            'auth/user-not-found': 'Kein Konto mit dieser E-Mail-Adresse gefunden.',
            'auth/wrong-password': 'Falsches Passwort.',
            'auth/invalid-email': 'Ungültige E-Mail-Adresse.',
            'auth/too-many-requests': 'Zu viele fehlgeschlagene Versuche. Bitte versuchen Sie es später erneut.',
            'auth/invalid-credential': 'Ungültige Anmeldedaten. Bitte überprüfen Sie E-Mail und Passwort.',
            'auth/user-disabled': 'Dieses Konto wurde deaktiviert.',
            'auth/operation-not-allowed': 'Die E-Mail/Passwort Anmeldung ist nicht aktiviert.',
          };
          setError(errorMessages[err.code] || 'Ein Fehler ist aufgetreten.');
          return null;
        });

      if (!userCredential) {
        setLoading(false);
        return;
      }

      // Wenn Login erfolgreich, fahre fort
      const user = userCredential.user;
      const idToken = await user.getIdToken();

      // Backend-Anfrage
      try {
        const response = await api.get('/users/me', {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        console.log('Login erfolgreich:', response.data);
        router.push('/dashboard');
      } catch (apiError) {
        setError('Backend-Fehler: ' + (apiError.response?.data?.message || 'Ein unerwarteter Fehler ist aufgetreten.'));
      }
    } catch (error) {
      console.error('Unerwarteter Fehler:', error);
      setError('Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EBF5EE] dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 transition-colors duration-300">
        <h2 className="text-4xl font-semibold mb-6 text-center text-gray-700 dark:text-gray-200 transition-colors duration-300">Anmelden</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl dark:bg-red-700 dark:text-red-100 transition-colors duration-300">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 transition-colors duration-300">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-black dark:text-white bg-white dark:bg-gray-700 transition-colors duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="beispiel@domain.com"
            />
          </div>
          
          {/* Passwort und "Passwort vergessen?" Link auf derselben Zeile */}
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 transition-colors duration-300">
              Passwort
            </label>
            <a href="/password-reset" className="text-sm text-[var(--accent-color)] hover:underline">
              Passwort vergessen?
            </a>
          </div>

          <div>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-black dark:text-white bg-white dark:bg-gray-700 transition-colors duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Ihr Passwort"
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-[var(--accent-color)] text-white py-2 rounded-xl hover:bg-[var(--accent-color)] transition-colors duration-300 disabled:opacity-50`}
            disabled={loading}
          >
            {loading ? 'Anmelden...' : 'Anmelden'}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 transition-colors duration-300">
          Noch kein Konto?{' '}
          <a href="https://www.telefonieren.ai/pricing" className="text-[var(--accent-color)] hover:underline">
            Registrieren
          </a>
        </p>
      </div>
    </div>
  );
}

Login.noLayout = true;
