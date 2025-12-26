'use client'

import { useEffect } from 'react'

export default function LoginPage() {
  useEffect(() => {
    // Check if already logged in (has cookie)
    const hasAuthCookie = document.cookie.includes('auth_token=')
    if (hasAuthCookie) {
      window.location.href = 'http://localhost:3001'
    }
  }, [])

  const handleMockLogin = () => {
    window.location.href = '/api/mock-login'
  }

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px' }}>
      <h1>Chavara Matrimony Login</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Click below to login and access the dashboard
      </p>
      
      <button
        onClick={handleMockLogin}
        style={{
          width: '100%',
          padding: '15px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          borderRadius: '5px',
        }}
      >
        Login to Dashboard
      </button>
    </div>
  )
}
