'use client';

import { useState, useEffect } from 'react';

export default function GlassboxLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already authenticated in session
    const auth = sessionStorage.getItem('glassbox-auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple password protection - replace with actual auth later
    if (password === 'glassbox2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('glassbox-auth', 'true');
      setError('');
    } else {
      setError('Invalid access code');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">🔬 Glassbox</h1>
          <p className="text-gray-600 mb-6 text-center">
            Private beta - Access code required
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Access Code
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter access code"
              />
            </div>
            
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Access Demo
            </button>
          </form>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            Contact Stef for access code
          </p>
        </div>
      </div>
    );
  }

  return children;
}