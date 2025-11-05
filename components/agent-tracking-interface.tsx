'use client'

import { useEffect, useState, useRef } from 'react'

interface Activity {
  id: number
  type: 'post' | 'engagement'
  content: string
  timestamp: number
  platform?: string
}

interface ClientLocation {
  id: number
  x: number
  y: number
  name: string
  company: string
  status: 'active' | 'potential' | 'engaged'
}

export default function AgentTrackingInterface() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [activeAgents, setActiveAgents] = useState(0)
  const [clientLocations] = useState<ClientLocation[]>([
    { id: 1, x: 25, y: 35, name: 'TechCorp', company: 'SaaS Platform', status: 'active' },
    { id: 2, x: 45, y: 25, name: 'DataFlow', company: 'AI Analytics', status: 'potential' },
    { id: 3, x: 65, y: 45, name: 'CloudSync', company: 'Enterprise Cloud', status: 'engaged' },
    { id: 4, x: 35, y: 60, name: 'DevOps Inc', company: 'Infrastructure', status: 'potential' },
    { id: 5, x: 55, y: 30, name: 'AI Solutions', company: 'ML Platform', status: 'active' },
    { id: 6, x: 75, y: 55, name: 'StartupXYZ', company: 'B2B SaaS', status: 'potential' },
    { id: 7, x: 40, y: 40, name: 'Enterprise Co', company: 'Enterprise Software', status: 'engaged' },
    { id: 8, x: 60, y: 20, name: 'GrowthTech', company: 'Growth Platform', status: 'active' },
  ])
  const timeRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      timeRef.current += 1
      
      // Simulate new activities
      const newActivities: Activity[] = []
      const platforms = ['LinkedIn', 'Twitter', 'Instagram', 'Medium', 'Reddit']
      const locations = ['San Francisco, CA', 'New York, NY', 'Austin, TX', 'Seattle, WA', 'Boston, MA']
      const postTypes = ['shared', 'liked', 'commented on', 'retweeted']
      const topics = ['AI/ML', 'SaaS', 'Product Management', 'Tech Leadership', 'Startups', 'Venture Capital']
      
      if (Math.random() > 0.7) {
        newActivities.push({
          id: Date.now(),
          type: 'post',
          content: `${postTypes[Math.floor(Math.random() * postTypes.length)]} a post about ${topics[Math.floor(Math.random() * topics.length)]}`,
          timestamp: Date.now(),
          platform: platforms[Math.floor(Math.random() * platforms.length)],
        })
      }
      
      if (Math.random() > 0.85) {
        newActivities.push({
          id: Date.now() + 2,
          type: 'engagement',
          content: `Engaged with content from competitor`,
          timestamp: Date.now(),
          platform: platforms[Math.floor(Math.random() * platforms.length)],
        })
      }
      
      if (newActivities.length > 0) {
        setActivities(prev => [...newActivities, ...prev].slice(0, 12))
      }
      
      // Update active agents count
      setActiveAgents(8 + Math.floor(Math.random() * 5))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto rounded-lg border border-zinc-200 bg-zinc-900 shadow-2xl overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.1)' }}>
      {/* Header */}
      <div className="bg-zinc-800 border-b border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm text-zinc-400 font-mono">agent-tracker://icp-monitor</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-xs text-zinc-400 font-mono">{activeAgents} agents active</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-0">
        {/* Left Panel - Agent Activity */}
        <div className="md:col-span-2 border-r border-zinc-700 bg-zinc-900">
          {/* SF Map View */}
          <div className="relative h-80 bg-zinc-950 border-b border-zinc-700 overflow-hidden">
            {/* Map Base - City Blocks */}
            <div className="absolute inset-0">
              {/* Background blocks/buildings */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* City blocks - darker areas */}
                <rect x="0" y="0" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="20" y="0" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="40" y="0" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="60" y="0" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="80" y="0" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                
                <rect x="0" y="20" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="20" y="20" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="40" y="20" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="60" y="20" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="80" y="20" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                
                <rect x="0" y="40" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="20" y="40" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="40" y="40" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="60" y="40" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="80" y="40" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                
                <rect x="0" y="60" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="20" y="60" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="40" y="60" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="60" y="60" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="80" y="60" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                
                <rect x="0" y="80" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="20" y="80" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="40" y="80" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="60" y="80" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                <rect x="80" y="80" width="18" height="18" fill="#1a1a1a" opacity="0.6"/>
                
                {/* Streets - vertical (wider for major streets) */}
                <rect x="19" y="0" width="1" height="100" fill="#27272a"/>
                <rect x="39" y="0" width="1.5" height="100" fill="#3f3f46"/>
                <rect x="59" y="0" width="1" height="100" fill="#27272a"/>
                <rect x="79" y="0" width="1" height="100" fill="#27272a"/>
                
                {/* Streets - horizontal */}
                <rect x="0" y="19" width="100" height="1" fill="#27272a"/>
                <rect x="0" y="39" width="100" height="2" fill="#3f3f46"/>
                <rect x="0" y="59" width="100" height="1" fill="#27272a"/>
                <rect x="0" y="79" width="100" height="1" fill="#27272a"/>
                
                {/* Diagonal street for Market St */}
                <line x1="0" y1="50" x2="100" y2="50" stroke="#3f3f46" strokeWidth="2" opacity="0.8"/>
                
                {/* Smaller cross streets */}
                <rect x="9" y="0" width="0.5" height="100" fill="#27272a" opacity="0.5"/>
                <rect x="29" y="0" width="0.5" height="100" fill="#27272a" opacity="0.5"/>
                <rect x="49" y="0" width="0.5" height="100" fill="#27272a" opacity="0.5"/>
                <rect x="69" y="0" width="0.5" height="100" fill="#27272a" opacity="0.5"/>
                <rect x="89" y="0" width="0.5" height="100" fill="#27272a" opacity="0.5"/>
                
                <rect x="0" y="9" width="100" height="0.5" fill="#27272a" opacity="0.5"/>
                <rect x="0" y="29" width="100" height="0.5" fill="#27272a" opacity="0.5"/>
                <rect x="0" y="49" width="100" height="0.5" fill="#27272a" opacity="0.5"/>
                <rect x="0" y="69" width="100" height="0.5" fill="#27272a" opacity="0.5"/>
                <rect x="0" y="89" width="100" height="0.5" fill="#27272a" opacity="0.5"/>
              </svg>
            </div>

            {/* Water/Bay area (bottom right) */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-zinc-800/40 border-t border-l border-zinc-700/50">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(161, 161, 170, 0.1) 10px, rgba(161, 161, 170, 0.1) 20px)'
              }}></div>
              <div className="absolute bottom-2 right-2 text-xs text-zinc-600 font-mono">Bay</div>
            </div>

            {/* SF Neighborhood Labels */}
            <div className="absolute top-2 left-2 text-xs text-zinc-500 font-mono font-semibold bg-zinc-900/80 px-1.5 py-0.5 rounded">SOMA</div>
            <div className="absolute top-2 right-2 text-xs text-zinc-500 font-mono font-semibold bg-zinc-900/80 px-1.5 py-0.5 rounded">Financial District</div>
            <div className="absolute bottom-2 left-2 text-xs text-zinc-500 font-mono font-semibold bg-zinc-900/80 px-1.5 py-0.5 rounded">Mission Bay</div>
            <div className="absolute bottom-2 right-2 text-xs text-zinc-500 font-mono font-semibold bg-zinc-900/80 px-1.5 py-0.5 rounded">South Beach</div>
            <div className="absolute top-1/2 left-[45%] -translate-y-1/2 text-xs text-zinc-500 font-mono font-semibold bg-zinc-900/80 px-1.5 py-0.5 rounded">Market St</div>
            
            {/* Street names */}
            <div className="absolute top-[19%] left-[42%] text-[10px] text-zinc-600 font-mono">Mission St</div>
            <div className="absolute top-[39%] left-[2%] text-[10px] text-zinc-600 font-mono">Market St</div>
            <div className="absolute top-[59%] left-[42%] text-[10px] text-zinc-600 font-mono">Folsom St</div>
            
            {/* Parks/Open Spaces */}
            <div className="absolute top-[20%] right-[25%] w-[8%] h-[15%] bg-zinc-800/60 border border-zinc-700/50 rounded-sm">
              <div className="absolute inset-0 flex items-center justify-center text-[8px] text-zinc-600 font-mono">Park</div>
            </div>

            {/* Client Location Markers */}
            {clientLocations.map((client, idx) => {
              const getStatusColor = () => {
                switch (client.status) {
                  case 'active':
                    return '#22c55e'
                  case 'engaged':
                    return '#3b82f6'
                  case 'potential':
                    return '#f59e0b'
                  default:
                    return '#71717a'
                }
              }
              
              return (
                <div
                  key={client.id}
                  className="absolute group"
                  style={{
                    left: `${client.x}%`,
                    top: `${client.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="relative">
                    {/* Pulsing ring */}
                    <div
                      className="absolute top-0 left-0 w-4 h-4 rounded-full animate-ping opacity-75"
                      style={{
                        backgroundColor: getStatusColor(),
                        animationDelay: `${idx * 0.2}s`,
                      }}
                    ></div>
                    {/* Main marker */}
                    <div
                      className="relative w-4 h-4 rounded-full border-2 border-zinc-900"
                      style={{
                        backgroundColor: getStatusColor(),
                        boxShadow: `0 0 8px ${getStatusColor()}80`,
                      }}
                    ></div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300 font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="font-semibold">{client.name}</div>
                      <div className="text-zinc-500">{client.company}</div>
                      <div className="text-zinc-500 text-[10px] mt-0.5 capitalize">{client.status}</div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Moving agent indicators tracking clients */}
            <MovingAgent x={25} y={35} color="#22c55e" delay={0} />
            <MovingAgent x={45} y={25} color="#3b82f6" delay={0.3} />
            <MovingAgent x={65} y={45} color="#ec4899" delay={0.6} />
            <MovingAgent x={35} y={60} color="#f59e0b" delay={0.9} />

            {/* Connection lines from agents to clients */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M 25% 35% Q 30% 30% 35% 35%" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="3,3">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M 45% 25% Q 50% 30% 55% 25%" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="3,3">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" begin="0.5s" repeatCount="indefinite" />
              </path>
              <path d="M 65% 45% Q 70% 40% 75% 45%" stroke="#ec4899" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="3,3">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" begin="1s" repeatCount="indefinite" />
              </path>
            </svg>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-zinc-900/90 border border-zinc-700 rounded px-3 py-2 text-xs font-mono">
              <div className="text-zinc-400 mb-2">SF Client Map</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-zinc-500">Active</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-zinc-500">Engaged</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-zinc-500">Potential</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 text-xs text-zinc-500 font-mono">
              <div>Clients: {clientLocations.length}</div>
              <div>Agents: {activeAgents} active</div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="p-4 bg-zinc-900">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-zinc-200 font-mono">Activity Feed</h3>
              <div className="text-xs text-zinc-500 font-mono">Real-time</div>
            </div>
            
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {activities.length === 0 ? (
                <div className="text-center py-8 text-zinc-500 text-sm font-mono">
                  Initializing tracking...
                </div>
              ) : (
                activities.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Panel - ICP Profile & Stats */}
        <div className="bg-zinc-900 p-4">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-zinc-200 font-mono mb-4">ICP Profile</h3>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-zinc-500 font-mono mb-1">Target</div>
                <div className="text-sm text-zinc-300 font-mono">Tech Founder/CEO</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-mono mb-1">Industry</div>
                <div className="text-sm text-zinc-300 font-mono">SaaS / AI</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-mono mb-1">Company Size</div>
                <div className="text-sm text-zinc-300 font-mono">10-50 employees</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-zinc-200 font-mono mb-4">Engagement Stats</h3>
            <div className="space-y-3">
              <StatItem label="Posts Liked" value={activities.filter(a => a.type === 'post').length} />
              <StatItem label="Clients Tracked" value={clientLocations.length} />
              <StatItem label="Platforms" value={new Set(activities.map(a => a.platform).filter(Boolean)).size} />
              <StatItem label="Engagement Rate" value="87%" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-200 font-mono mb-4">Active Platforms</h3>
            <div className="space-y-2">
              {['LinkedIn', 'Twitter', 'Medium'].map((platform) => (
                <div key={platform} className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-mono">{platform}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-zinc-500 font-mono">Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-zinc-800 border-t border-zinc-700 px-6 py-2 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-4 text-zinc-500">
          <span>Status: Monitoring</span>
          <span>•</span>
          <span>Last update: {new Date().toLocaleTimeString()}</span>
        </div>
        <div className="text-zinc-500">
          BlueSwarm Agent Network v2.1
        </div>
      </div>
    </div>
  )
}

function MovingAgent({ x, y, color, delay }: { x: number; y: number; color: string; delay: number }) {
  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
        animation: `float 4s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative">
        <div
          className="w-4 h-4 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}40`,
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-4 h-4 rounded-full animate-ping"
          style={{
            backgroundColor: color,
            animationDelay: `${delay}s`,
          }}
        ></div>
      </div>
    </div>
  )
}

function ActivityItem({ activity }: { activity: Activity }) {
  const timeAgo = Math.floor((Date.now() - activity.timestamp) / 1000)
  const getIcon = () => {
    switch (activity.type) {
      case 'post':
        return '💬'
      case 'engagement':
        return '🔗'
      default:
        return '•'
    }
  }

  const getColor = () => {
    switch (activity.type) {
      case 'post':
        return 'text-blue-400'
      case 'engagement':
        return 'text-purple-400'
      default:
        return 'text-zinc-400'
    }
  }

  return (
    <div className="flex items-start gap-3 p-2 rounded bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-colors">
      <div className={`text-lg ${getColor()}`}>{getIcon()}</div>
      <div className="flex-1 min-w-0">
        <div className="text-sm text-zinc-300 font-mono">
          {activity.content}
          {activity.platform && (
            <span className="text-zinc-500 ml-1">on {activity.platform}</span>
          )}
        </div>
        <div className="text-xs text-zinc-500 font-mono mt-1">
          {timeAgo < 60 ? `${timeAgo}s ago` : `${Math.floor(timeAgo / 60)}m ago`}
        </div>
      </div>
    </div>
  )
}

function StatItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-zinc-500 font-mono">{label}</span>
      <span className="text-sm text-zinc-300 font-mono font-semibold">{value}</span>
    </div>
  )
}

