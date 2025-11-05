'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import DistSvg from '@/public/images/dist.svg'
import IngestSvg from '@/public/images/ingest.svg'

export default function Features01() {

  const [tab, setTab] = useState<number>(1)

  return (
    <section id="features" className="relative bg-zinc-50">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Continuous intelligence that works for you</h2>
            <p className="text-lg text-zinc-500">Our swarms of browser and reasoning agents continuously monitor your ICP and competitors, delivering insights and distribution opportunities autonomously.</p>
          </div>
          <div>
            {/* Tabs buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <button
                className={`text-left px-4 py-5 border border-transparent rounded-sm ${tab !== 1 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] shadow-xs rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(1); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">Company Intelligence</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 1 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Ingest Slack, websites, and documents to deeply understand your company profile.</div>
              </button>
              <button
                className={`text-left px-4 py-5 border border-transparent rounded-sm ${tab !== 2 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] shadow-xs rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">Continuous Monitoring</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 2 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Swarms of browser and reasoning agents continuously track your ICP and competitors.</div>
              </button>
              <button
                className={`text-left px-4 py-5 border border-transparent rounded-sm ${tab !== 3 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] shadow-xs rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">Multi-Channel Distribution</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 3 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Creative outreach beyond email - including in-person touchpoints and distribution channels.</div>
              </button >
              <button
                className={`text-left px-4 py-5 border border-transparent rounded-sm ${tab !== 4 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] shadow-xs rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(4); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">Distribution Analysis</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 4 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Get continuous distribution channel analysis and actionable insights delivered automatically.</div>
              </button >
            </div>
            {/* Tabs items */}
            <div className="relative lg:max-w-none [mask-image:linear-gradient(white_0%,white_calc(100%-40px),_transparent_calc(100%-1px))] -mx-6">
              <div className="relative flex flex-col pt-12 md:pt-20 mx-6">
                {/* Item 1 - Company Intelligence */}
                <Transition show={tab === 1}>
                  <div className="w-full text-center transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-4 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-4">                
                    <div className="inline-flex relative align-top">
                      <div className="rounded-t-lg border border-transparent [background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] box-content shadow-2xl p-6 bg-white flex items-center justify-center" style={{ width: '600px', height: '360px' }}>
                        <Image className="w-full h-full object-contain" src={IngestSvg} width={600} height={360} alt="Company Intelligence" />
                      </div>
                    </div>
                  </div>
                </Transition>
                {/* Item 2 - Continuous Monitoring */}
                <Transition show={tab === 2}>
                  <div className="w-full text-center transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-4 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-4">                
                    <div className="inline-flex relative align-top">
                      <div className="rounded-t-lg border border-transparent [background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] box-content shadow-2xl p-6 bg-white" style={{ width: '600px', height: '360px' }}>
                        <svg viewBox="0 0 600 360" className="w-full h-full">
                          {/* Header */}
                          <rect x="50" y="30" width="500" height="35" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="1" rx="4"/>
                          <text x="300" y="52" textAnchor="middle" fill="#18181b" fontSize="14" fontFamily="system-ui" fontWeight="600">Continuous Monitoring Feed</text>
                          
                          {/* Notification 1 - LinkedIn */}
                          <g opacity="0">
                            <animate attributeName="opacity" values="0;1" dur="0.5s" fill="freeze"/>
                            <rect x="50" y="80" width="500" height="50" fill="#fef3c7" stroke="#fbbf24" strokeWidth="1.5" rx="6"/>
                            <circle cx="75" cy="105" r="12" fill="#0077b5"/>
                            <text x="75" y="110" textAnchor="middle" fill="white" fontSize="10" fontFamily="system-ui" fontWeight="600">in</text>
                            <text x="100" y="98" fill="#18181b" fontSize="12" fontFamily="system-ui" fontWeight="600">LinkedIn Activity</text>
                            <text x="100" y="115" fill="#71717a" fontSize="10" fontFamily="system-ui">Competitor "TechCorp" posted new job: VP of Sales</text>
                            <circle cx="540" cy="105" r="6" fill="#22c55e">
                              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                            </circle>
                            <text x="525" y="115" textAnchor="end" fill="#71717a" fontSize="9" fontFamily="system-ui">2m ago</text>
                          </g>
                          
                          {/* Notification 2 - Website Visit */}
                          <g opacity="0">
                            <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.3s" fill="freeze"/>
                            <rect x="50" y="145" width="500" height="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" rx="6"/>
                            {/* Center-aligned website icon, adjusted into notification box */}
                            <rect x="68" y="158" width="24" height="24" fill="#3b82f6" rx="4"/>
                            <path d="M 74 166 L 80 172 L 86 162" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                            <path d="M 72 132 L 78 138 L 82 132" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                            <text x="100" y="163" fill="#18181b" fontSize="12" fontFamily="system-ui" fontWeight="600">Website Activity</text>
                            <text x="100" y="180" fill="#71717a" fontSize="10" fontFamily="system-ui">ICP customer visited competitor website</text>
                            <circle cx="540" cy="170" r="6" fill="#22c55e">
                              <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                            </circle>
                            <text x="525" y="180" textAnchor="end" fill="#71717a" fontSize="9" fontFamily="system-ui">5m ago</text>
                          </g>
                          
                          {/* Notification 3 - LinkedIn Update */}
                          <g opacity="0">
                            <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.6s" fill="freeze"/>
                            <rect x="50" y="210" width="500" height="50" fill="#fef3c7" stroke="#fbbf24" strokeWidth="1.5" rx="6"/>
                            <circle cx="75" cy="235" r="12" fill="#0077b5"/>
                            <text x="75" y="240" textAnchor="middle" fill="white" fontSize="10" fontFamily="system-ui" fontWeight="600">in</text>
                            <text x="100" y="228" fill="#18181b" fontSize="12" fontFamily="system-ui" fontWeight="600">LinkedIn Update</text>
                            <text x="100" y="245" fill="#71717a" fontSize="10" fontFamily="system-ui">Competitor executive shared: "New product launch Q2"</text>
                            <circle cx="540" cy="235" r="6" fill="#22c55e">
                              <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="1s" repeatCount="indefinite"/>
                            </circle>
                            <text x="525" y="245" textAnchor="end" fill="#71717a" fontSize="9" fontFamily="system-ui">8m ago</text>
                          </g>
                          
                          {/* Notification 4 - Social Media */}
                          <g opacity="0">
                            <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>
                            <rect x="50" y="275" width="500" height="50" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5" rx="6"/>
                            <circle cx="75" cy="300" r="12" fill="#ec4899"/>
                            <text x="75" y="305" textAnchor="middle" fill="white" fontSize="10" fontFamily="system-ui" fontWeight="600">@</text>
                            <text x="100" y="293" fill="#18181b" fontSize="12" fontFamily="system-ui" fontWeight="600">Social Media</text>
                            <text x="100" y="310" fill="#71717a" fontSize="10" fontFamily="system-ui">Customer engaged with competitor content on Twitter</text>
                            <circle cx="540" cy="300" r="6" fill="#22c55e">
                              <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="1.5s" repeatCount="indefinite"/>
                            </circle>
                            <text x="525" y="310" textAnchor="end" fill="#71717a" fontSize="9" fontFamily="system-ui">12m ago</text>
                          </g>
                          
                          {/* Scroll indicator */}
                          <rect x="550" y="80" width="4" height="245" fill="#e4e4e7" rx="2"/>
                          <rect x="550" y="80" width="4" height="60" fill="#71717a" rx="2">
                            <animate attributeName="y" values="80;145;210;275" dur="4s" repeatCount="indefinite"/>
                          </rect>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Transition>
                {/* Item 3 - Multi-Channel Outreach */}
                <Transition show={tab === 3}>
                  <div className="w-full text-center transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-4 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-4">                
                    <div className="inline-flex relative align-top">
                      <div className="rounded-t-lg border border-transparent [background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] box-content shadow-2xl p-6 bg-white" style={{ width: '600px', height: '360px' }}>
                        <svg viewBox="0 0 600 360" className="w-full h-full">
                          {/* Central content source */}
                          <rect x="250" y="40" width="100" height="60" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="2" rx="6"/>
                          <rect x="260" y="50" width="80" height="8" fill="#71717a" rx="2"/>
                          <rect x="260" y="62" width="60" height="6" fill="#a1a1aa"/>
                          <rect x="260" y="72" width="70" height="6" fill="#a1a1aa"/>
                          <rect x="260" y="82" width="50" height="6" fill="#a1a1aa"/>
                          {/* <text x="300" y="115" textAnchor="middle" fill="#71717a" fontSize="11" fontFamily="system-ui" fontWeight="600">Content Source</text> */}
                          
                          {/* LinkedIn Platform */}
                          <g opacity="0">
                            <animate attributeName="opacity" values="0;1" dur="0.6s" begin="0.2s" fill="freeze"/>
                            <rect x="50" y="150" width="160" height="90" fill="#fef3c7" stroke="#fbbf24" strokeWidth="1.5" rx="6"/>
                            <circle cx="70" cy="170" r="10" fill="#0077b5"/>
                            <text x="70" y="175" textAnchor="middle" fill="white" fontSize="8" fontFamily="system-ui" fontWeight="600">in</text>
                            <text x="90" y="172" fill="#18181b" fontSize="11" fontFamily="system-ui" fontWeight="600">LinkedIn</text>
                            <rect x="60" y="185" width="140" height="8" fill="#d4d4d8" rx="2"/>
                            <rect x="60" y="197" width="120" height="6" fill="#d4d4d8"/>
                            <rect x="60" y="206" width="100" height="6" fill="#d4d4d8"/>
                            <rect x="60" y="220" width="80" height="12" fill="#0077b5" rx="2"/>
                            <text x="100" y="229" textAnchor="middle" fill="white" fontSize="9" fontFamily="system-ui">Post</text>
                          </g>
                          
                          {/* Medium Platform */}
                          <g opacity="0">
                            <animate attributeName="opacity" values="0;1" dur="0.6s" begin="0.5s" fill="freeze"/>
                            <rect x="220" y="150" width="160" height="90" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5" rx="6"/>
                            <rect x="240" y="165" width="25" height="25" fill="#000000" rx="3"/>
                            <text x="252" y="182" textAnchor="middle" fill="white" fontSize="12" fontFamily="system-ui" fontWeight="600">M</text>
                            <text x="275" y="172" fill="#18181b" fontSize="11" fontFamily="system-ui" fontWeight="600">Medium</text>
                            <rect x="230" y="185" width="140" height="8" fill="#d4d4d8" rx="2"/>
                            <rect x="230" y="197" width="130" height="6" fill="#d4d4d8"/>
                            <rect x="230" y="206" width="110" height="6" fill="#d4d4d8"/>
                            <rect x="230" y="220" width="100" height="12" fill="#000000" rx="2"/>
                            <text x="280" y="229" textAnchor="middle" fill="white" fontSize="9" fontFamily="system-ui">Article</text>
                          </g>
                          
                          {/* Twitter/X Platform */}
                          <g opacity="0">
                            <animate attributeName="opacity" values="0;1" dur="0.6s" begin="0.8s" fill="freeze"/>
                            <rect x="390" y="150" width="160" height="90" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" rx="6"/>
                            <circle cx="410" cy="170" r="10" fill="#1da1f2"/>
                            <text x="410" y="175" textAnchor="middle" fill="white" fontSize="8" fontFamily="system-ui" fontWeight="600">𝕏</text>
                            <text x="430" y="172" fill="#18181b" fontSize="11" fontFamily="system-ui" fontWeight="600">Twitter</text>
                            <rect x="400" y="185" width="140" height="8" fill="#d4d4d8" rx="2"/>
                            <rect x="400" y="197" width="100" height="6" fill="#d4d4d8"/>
                            <rect x="400" y="206" width="120" height="6" fill="#d4d4d8"/>
                            <rect x="400" y="220" width="90" height="12" fill="#1da1f2" rx="2"/>
                            <text x="445" y="229" textAnchor="middle" fill="white" fontSize="9" fontFamily="system-ui">Tweet</text>
                          </g>
                          
                          {/* Distribution arrows */}
                          <path d="M 300 100 L 130 150" stroke="#a1a1aa" strokeWidth="2" fill="none" strokeDasharray="4,4" markerEnd="url(#arrowhead3)">
                            <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.3s" fill="freeze"/>
                          </path>
                          <path d="M 300 100 L 300 150" stroke="#a1a1aa" strokeWidth="2" fill="none" strokeDasharray="4,4" markerEnd="url(#arrowhead3)">
                            <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.6s" fill="freeze"/>
                          </path>
                          <path d="M 300 100 L 470 150" stroke="#a1a1aa" strokeWidth="2" fill="none" strokeDasharray="4,4" markerEnd="url(#arrowhead3)">
                            <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.9s" fill="freeze"/>
                          </path>
                          
                          {/* Additional platforms indicator */}
                          <rect x="220" y="260" width="160" height="50" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="1.5" rx="6"/>
                          <text x="300" y="280" textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="system-ui" fontWeight="600">+ More Platforms</text>
                          <text x="300" y="298" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="system-ui">Email, Events, Direct</text>
                          
                          <defs>
                            <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                              <polygon points="0 0, 10 3, 0 6" fill="#a1a1aa"/>
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Transition>
                {/* Item 4 - Distribution Analysis */}
                <Transition show={tab === 4}>
                  <div className="w-full text-center transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-4 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-4">                
                    <div className="inline-flex relative align-top">
                      <div className="rounded-t-lg border border-transparent [background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] box-content shadow-2xl p-6 bg-white flex items-center justify-center" style={{ width: '600px', height: '360px' }}>
                        <Image className="w-full h-full object-contain" src={DistSvg} width={600} height={360} alt="Distribution Analysis" />
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}