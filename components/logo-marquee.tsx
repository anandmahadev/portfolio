import { Cpu, Activity, Database, Layout, Shield, Globe, Terminal, Box } from "lucide-react"

export function LogoMarquee() {
  const items = [
    { icon: <Cpu className="w-12 h-12" />, text: "OpenAI" },
    { icon: <Activity className="w-12 h-12" />, text: "CardioNerve" },
    { icon: <Database className="w-12 h-12" />, text: "SQL Optimization" },
    { icon: <Layout className="w-12 h-12" />, text: "UI/UX Architecture" },
    { icon: <Shield className="w-12 h-12" />, text: "Cyber Security" },
    { icon: <Globe className="w-12 h-12" />, text: "Scalable Systems" },
    { icon: <Terminal className="w-12 h-12" />, text: "Full Stack Dev" },
    { icon: <Box className="w-12 h-12" />, text: "Product Strategy" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-12 -rotate-[3deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0 border-y-[6px] border-white/20">
        <div className="flex items-center gap-24 animate-marquee whitespace-nowrap text-white">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-6 group">
                <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white group-hover:text-black transition-all duration-300">
                    {item.icon}
                </div>
                <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-[#FDB927] transition-all duration-300">
                    {item.text}
                </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
