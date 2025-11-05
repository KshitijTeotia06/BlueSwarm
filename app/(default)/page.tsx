export const metadata = {
  title: 'Home - BlueSwarm',
  description: 'Intelligent distribution powered by AI swarms. BlueSwarm understands your company and continuously tracks your ICP and competitors to deliver multi-channel campaigns that build trust before contracts.',
}

import Hero from '@/components/hero'
import Features01 from '@/components/features-01'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import PricingTabs from '@/components/pricing-tabs'

export default function Home() {
  return (
    <>
      <Hero />
      <Features01 />
      <Features02 />
      <Features03 />
      <PricingTabs />
    </>
  )
}
