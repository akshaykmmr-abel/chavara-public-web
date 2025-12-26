'use client'

import { useState } from 'react'
import { submitLeadCapture } from '../services/leadCaptureService'

export function LeadCaptureForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitLeadCapture({ email })
    setSubmitted(true)
  }

  if (submitted) {
    return <p>Thank you! We'll be in touch soon.</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Get Started</button>
    </form>
  )
}
