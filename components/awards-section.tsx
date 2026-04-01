import { Trophy, Star, Award } from "lucide-react"

export function AwardsSection() {
  const awards = [
    {
      title: "Top 74 Finalist @ OpenAI Buildathon 2026",
      issuer: "OpenAI",
      description: "Recognized as a top-tier project amongst 75,000+ teams globally for innovative AI systems architecture.",
      date: "Feb 2026",
      icon: <Trophy className="w-8 h-8 text-[#FDB927]" />
    },
    {
      title: "GSSoC '25 Top Contributor",
      issuer: "GirlScript Summer of Code",
      description: "Recognized for significant contributions to the open-source ecosystem, particularly in AI-focused repositories.",
      date: "Nov 2025",
      icon: <Star className="w-8 h-8 text-[#6366F1]" />
    }
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-16 underline decoration-[#FF4A60] decoration-8">
            Awards & <span className="text-[#FF4A60]">Recognitions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="flex gap-6 items-center p-8 border-[3px] border-black rounded-[32px] hover:bg-gray-50 transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="p-4 bg-white border-2 border-black rounded-2xl flex-shrink-0">
                  {award.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{award.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-bold text-[#6366F1] uppercase">{award.issuer}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm font-bold text-gray-500 italic">{award.date}</span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
