# Chavara Public Web

## Bounded Context: Marketing & Lead Capture

This is the public-facing website for Chavara Matrimony, focused on SEO, marketing, and user acquisition.

## Domain Structure

```
src/
├── domains/
│   ├── marketing/          # Landing pages, hero sections, CTAs
│   │   ├── ui/            # React components
│   │   ├── services/      # API calls for marketing data
│   │   └── types/         # TypeScript interfaces
│   ├── content/           # Blog, articles, success stories
│   │   ├── ui/
│   │   ├── services/
│   │   └── types/
│   └── lead-capture/      # Registration forms, email capture
│       ├── ui/
│       ├── services/
│       └── types/
├── shared/                # Cross-cutting concerns (utils, config)
└── app/                   # Next.js App Router pages
```

## Key Principles

- **NO authentication logic** - only redirects to backend
- **SEO optimized** - static generation where possible
- **Performance focused** - minimal JavaScript, fast load times
- **Conversion optimized** - clear CTAs, lead capture

## Authentication Flow

1. User clicks "Login" button
2. Redirects to `BACKEND_AUTH_URL` (backend handles auth)
3. Backend authenticates and sets HttpOnly cookie
4. Backend redirects to dashboard subdomain

## Local Development

```bash
npm install
npm run dev
```

Visit: http://localhost:3000

## Docker Build

```bash
docker build -t chavara-public-web .
docker run -p 3000:3000 chavara-public-web
```

## Environment Variables

See `.env.example` for required configuration.

## Production Deployment

- Deploy to: https://chavaramatrimony.com
- CDN: Cloudflare or CloudFront
- Static assets cached aggressively
