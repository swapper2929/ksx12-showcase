import HeroSection from "@/components/HeroSection";
import ScreensGallery from "@/components/ScreensGallery";
import UserFlow from "@/components/UserFlow";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import Footer from "@/components/Footer";

/**
 * Home Page - KSX12 UI/UX Showcase
 * Soft Minimalism Korean Aesthetic
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30 shadow-soft">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">KSX12</div>
            <span className="text-sm text-muted-foreground">UI/UX Showcase</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#screens" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
              Màn Hình
            </a>
            <a href="#flows" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
              Luồng
            </a>
            <a href="#design" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
              Thiết Kế
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Screens Gallery */}
        <section id="screens">
          <ScreensGallery />
        </section>

        {/* User Flow */}
        <section id="flows">
          <UserFlow />
        </section>

        {/* Design Philosophy */}
        <section id="design">
          <DesignPhilosophy />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
