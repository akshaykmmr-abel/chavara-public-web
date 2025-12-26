import { NextResponse } from 'next/server'

export async function GET() {
  const response = NextResponse.redirect('http://localhost:3001')
  
  response.cookies.set('auth_token', 'mock-jwt-token-12345', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
    path: '/',
  })

  return response
}
