import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { userId, password } = await request.json()

    const backendUrl = 'https://finder-api.chavaramatrimony.org'
    
    const payload = {
      userId,
      password,
      deviceName: 'desktop',
      osName: 'Windows',
      browsingAppName: 'Edge',
      latitude: '10.010229',
      longitude: '76.361159',
      ipAddress: '125.20.182.146',
      networkProviderName: '',
      firebaseToken: null,
    }

    console.log('Sending to backend:', payload)

    const response = await fetch(`${backendUrl}/Auth/login-v2`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    console.log('Backend response:', data)

    if (data.success && data.token) {
      const nextResponse = NextResponse.json(data)
      
      nextResponse.cookies.set('auth_token', data.token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24,
        path: '/',
      })

      return nextResponse
    }

    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Login error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Cannot connect to backend',
      error: error.message 
    }, { status: 500 })
  }
}
