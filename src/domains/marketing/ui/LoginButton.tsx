'use client'

export function LoginButton() {
  const handleLogin = () => {
    window.location.href = '/login'
  }

  return (
    <button onClick={handleLogin} className="login-btn">
      Login / Register
    </button>
  )
}
