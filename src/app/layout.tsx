import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chavara Matrimony - Find Your Perfect Match',
  description: 'Trusted matrimony service for the Chavara community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
