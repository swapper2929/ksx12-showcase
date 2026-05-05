import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section - Soft Minimalism Korean Aesthetic
 * Features: Gradient background, soft shadows, cute illustrations
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10 py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                KSX12
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Thiết kế UI/UX phong cách Hàn Quốc
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-md">
              Khám phá thiết kế hiện đại, thân thiện và tối giản cho ứng dụng TMĐT học sinh. Bao gồm các màn hình chính: Trang chủ, Trình phát tài liệu, và Hồ sơ người dùng.
            </p>

            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-foreground shadow-soft-md hover:shadow-soft-lg transition-all"
              >
                Khám phá thiết kế <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-muted/50"
              >
                Tìm hiểu thêm
              </Button>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3</div>
                <p className="text-sm text-muted-foreground">Màn hình chính</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">∞</div>
                <p className="text-sm text-muted-foreground">Luồng người dùng</p>
              </div>
            </div>
          </div>

          {/* Right - Image showcase */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl shadow-soft-lg overflow-hidden border border-border/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">📱</div>
                  <p className="text-foreground/60 font-medium">UI Showcase</p>
                </div>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
