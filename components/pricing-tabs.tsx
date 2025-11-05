'use client'

import Accordion from '@/components/accordion'

export default function PricingTabs() {

  const faqs = [
    {
      title: 'How does BlueSwarm understand my company?',
      text: 'BlueSwarm ingests your Slack conversations, website content, and documents to build a comprehensive understanding of your company profile, values, and positioning.',
      active: false,
    },
    {
      title: 'What makes BlueSwarm different from email outreach tools?',
      text: 'Unlike tools that only find email contacts, BlueSwarm delivers multi-channel campaigns including in-person touchpoints, distribution analysis, and creative outreach beyond email.',
      active: false,
    },
    {
      title: 'How does the AI swarm technology work?',
      text: 'Swarms of browser and reasoning agents continuously monitor your ICP and competitors, analyzing opportunities and performing creative outreach autonomously 24/7.',
      active: false,
    },
    {
      title: 'What results can I expect from BlueSwarm?',
      text: 'BlueSwarm helps you build trust before contracts by providing real value, connection, and qualification. This leads to more clients and stronger negotiation power through company profile development and mass campaigns.',
      active: true,
    },
    {
      title: 'How does BlueSwarm compare to Agentforce or Semrush?',
      text: 'Unlike Agentforce which requires you to automate pre-existing strategies, BlueSwarm develops and executes strategies autonomously. And unlike Semrush which only provides analytics, BlueSwarm combines insights with automated action.',
      active: false,
    },
    {
      title: 'Can I customize the outreach campaigns?',
      text: 'Yes! BlueSwarm offers customizable campaign strategies that align with your company profile and values. Enterprise plans include white-glove onboarding and dedicated support for custom configurations.',
      active: false,
    },
  ]

  return (
    <section>
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Choose your plan</h2>
            <p className="text-lg text-zinc-500">Scale your outreach with intelligent AI swarms that continuously work to grow your business and strengthen your negotiation position.</p>
          </div>

          {/* FAQs */}
          <div className="max-w-2xl mx-auto">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                  {faq.text}
                </Accordion>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}