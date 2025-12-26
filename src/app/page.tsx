import { HeroSection } from '@domains/marketing/ui/HeroSection'
import { FeaturesSection } from '@domains/marketing/ui/FeaturesSection'
import { CTASection } from '@domains/marketing/ui/CTASection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  )
}
