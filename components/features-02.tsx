import Image from 'next/image'
import ContinInsights from '@/public/images/continInsights.svg'
import FeaturePost02 from '@/public/images/feature-post-02.png'
import PostSvg from '@/public/images/post.svg'
import StandoutSvg from '@/public/images/standout.svg'
import CompanyProfileSvg from '@/public/images/companyprofile.svg'

export default function Features02() {
  return (
    <section>
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">More than just email outreach</h2>
            <p className="text-lg text-zinc-500">Unlike competitors that only automate email or provide analytics, BlueSwarm delivers real value through multi-channel campaigns that build trust and qualification before contracts.</p>
          </div>
          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
            <article className="sm:col-span-2 flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <svg className="inline-flex fill-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path d="M17 9c.6 0 1 .4 1 1v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6c.6 0 1 .4 1 1s-.4 1-1 1H4v12h12v-6c0-.6.4-1 1-1Zm-.7-6.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8Z" />
                  </svg>
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Company Profile Development</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">Deep understanding of your company through Slack, documents, and website ingestion for comprehensive profile development.</p>
              </div>
              <figure className="h-[280px] flex items-center justify-center bg-gradient-to-br from-zinc-50 to-white">
                <Image className="h-full w-full object-contain p-4" src={CompanyProfileSvg} width={600} height={280} alt="Company Profile Development" />
              </figure>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <svg className="inline-flex fill-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path d="m6.035 17.335-4-14c-.2-.8.5-1.5 1.3-1.3l14 4c.9.3 1 1.5.1 1.9l-6.6 2.9-2.8 6.6c-.5.9-1.7.8-2-.1Zm-1.5-12.8 2.7 9.5 1.9-4.4c.1-.2.3-.4.5-.5l4.4-1.9-9.5-2.7Z" />
                  </svg>
                  <h3 className="font-inter-tight font-semibold text-zinc-900">AI Swarm Intelligence</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">Swarms of browser and reasoning agents work continuously to track, analyze, and identify opportunities for your business.</p>
              </div>
              <figure>
                <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeaturePost02} width={342} height={280} alt="AI Swarm Intelligence" />
              </figure>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <svg className="inline-flex fill-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path d="M8.974 16c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6Z" />
                  </svg>
                  <h3 className="font-inter-tight font-semibold text-zinc-900">In-Person Touchpoints</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">Identify and display real-world opportunities for in-person connections and relationship building.</p>
              </div>
              <figure className="h-[280px] flex items-center justify-center bg-gradient-to-br from-zinc-50 to-white">
                <Image className="h-full w-full object-contain p-4" src={StandoutSvg} width={342} height={280} alt="In-Person Touchpoints" />
              </figure>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <svg className="inline-flex fill-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path d="M9.3 11.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM9.3 17.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM2.3 12.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z" />
                  </svg>
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Creative Outreach</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">Automated creative outreach that goes beyond templates, delivering personalized value to prospects.</p>
              </div>
              <figure className="h-[280px] flex items-center justify-center bg-gradient-to-br from-zinc-50 to-white">
                <Image className="h-full w-full object-contain p-4" src={PostSvg} width={342} height={280} alt="Creative Outreach" />
              </figure>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <svg className="inline-flex fill-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path d="M16 2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h8.667l3.733 2.8A1 1 0 0 0 18 17V4a2 2 0 0 0-2-2Zm0 13-2.4-1.8a1 1 0 0 0-.6-.2H4V4h12v11Z" />
                  </svg>
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Continuous Insights</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">Real-time distribution channel analysis and competitor intelligence delivered automatically to your dashboard.</p>
              </div>
              <figure className="h-[280px] flex items-center justify-center bg-gradient-to-br from-zinc-50 to-white">
                <Image className="h-full w-full object-contain p-4" src={ContinInsights} width={342} height={280} alt="Continuous Insights" />
              </figure>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}