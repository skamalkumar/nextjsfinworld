'use client'
import { useState, useEffect } from 'react';
import { auth } from '../../../lib/firebase';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  // Get the return URL from query parameters or default to /contactus
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const returnUrl = params.get('returnUrl');
    if (returnUrl) {
      // Store the return URL in session storage
      sessionStorage.setItem('returnUrl', returnUrl);
    }
  }, []);

  const handleRedirectAfterLogin = () => {
    // Get the stored return URL or default to /contactus
    const returnUrl = sessionStorage.getItem('returnUrl') || '/contactus';
    // Clear the stored return URL
    sessionStorage.removeItem('returnUrl');
    // Redirect to the appropriate page
    router.push(returnUrl);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleRedirectAfterLogin();
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      handleRedirectAfterLogin();
    } catch (err) {
      setError('Could not sign in with Google');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="space-y-6">
          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <img
              className="h-5 w-5 mr-2"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTQ1LDI0YzAsMTEuNy05LjUsMjEtMjEsMjFTMywzNS43LDMsMjRTMTIuMywzLDI0LDNTNDUsMTIuMyw0NSwyNHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQsMTIuMWM0LjEsMCw3LjUsMS4zLDEwLjIsMy45bC01LjUsNS41Yy0xLjUtMS00LjItMS41LTQuNy0xLjVjLTQuMiwwLTcuOCwzLjUtNy44LDcuNmMwLDQuMSwzLjYsNy42LDcuOCw3LjZjNC42LDAsNi4zLTMuMyw2LjYtNWgtNi42di03LjNoMTQuMWMwLjIsMS4xLDAuMiwyLjIsMC4yLDMuNWMwLDguNi02LjIsMTQuNy0xNC4zLDE0LjdDMTcuNyw0MS44LDEyLDM2LjEsMTIsMjkuNEMxMiwyMi43LDE3LjcsMTcsMjQsMTd6Ii8+PC9zdmc+"
              alt="Google logo"
            />
            Sign in with Google
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="text-center text-sm">
            <a
              href="/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              New user? Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}