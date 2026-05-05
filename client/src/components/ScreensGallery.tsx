import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Screens Gallery - Display main UI screens
 * Soft Minimalism: Bento grid layout, soft shadows, rounded corners
 */
export default function ScreensGallery() {
  const screens = [
    {
      id: "home",
      title: "Trang Chủ",
      subtitle: "Home Screen",
      description: "Bố cục Bento Grid với các danh mục tài liệu, dụng cụ học tập, và ghi chú nổi bật. Sử dụng không gian trắng rộng rãi và bảng màu pastel.",
      image: "/manus-storage/ksx12_home_screen_adf16b77.png",
      features: ["Bento Grid Layout", "Danh mục sản phẩm", "Carousel banner", "Navigation bar"],
      color: "bg-primary/10"
    },
    {
      id: "player",
      title: "Trình Phát",
      subtitle: "Document Viewer",
      description: "Giao diện tối giản cho việc đọc PDF tài liệu học tập. Tích hợp các công cụ như Highlight, Bookmark, Note để hỗ trợ học tập hiệu quả.",
      image: "/manus-storage/ksx12_player_screen_840ed9d5.png",
      features: ["PDF Viewer", "Highlight & Notes", "Bookmark", "Search function"],
      color: "bg-secondary/10"
    },
    {
      id: "profile",
      title: "Hồ Sơ",
      subtitle: "User Profile",
      description: "Hiển thị thông tin cá nhân, avatar dễ thương, tiến độ học tập, và lịch sử mua hàng. Cá nhân hóa trải nghiệm cho từng học sinh.",
      image: "/manus-storage/ksx12_profile_screen_ad978670.png",
      features: ["User Avatar", "Learning Progress", "Purchase History", "Academic Goals"],
      color: "bg-accent/10"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">
            Các Màn Hình Chính
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            UI Screens Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá ba màn hình chính của ứng dụng KSX12 được thiết kế theo phong cách Hàn Quốc hiện đại
          </p>
        </div>

        {/* Screens grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screens.map((screen) => (
            <Card 
              key={screen.id}
              className={`overflow-hidden hover:shadow-soft-lg transition-all duration-300 border-border/50 ${screen.color}`}
            >
              {/* Image container */}
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-background to-background/50">
                <img 
                  src={screen.image}
                  alt={screen.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary">{screen.subtitle}</p>
                  <h3 className="text-2xl font-bold text-foreground">{screen.title}</h3>
                </div>

                <p className="text-foreground/70 leading-relaxed">
                  {screen.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {screen.features.map((feature) => (
                    <Badge 
                      key={feature}
                      variant="secondary"
                      className="bg-muted/50 text-foreground/80 hover:bg-muted"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
