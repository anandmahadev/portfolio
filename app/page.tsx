import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { AwardsSection } from "@/components/awards-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <HeroSection />
      <LogoMarquee />
      <ServicesSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <CaseStudiesSection />
      <AwardsSection />
      <TestimonialsSection />
      <ArticlesSection />
      <Footer />
    </main>
  )
}
