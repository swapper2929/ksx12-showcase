import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Zap, Smile, Layers } from "lucide-react";

/**
 * Design Philosophy - Display design principles
 * Soft Minimalism: Clean presentation, soft colors, organized layout
 */
export default function DesignPhilosophy() {
  const principles = [
    {
      icon: Palette,
      title: "Bảng Màu Mềm Mại",
      description: "Sử dụng bảng màu pastel (xanh mint, hồng nhạt, vàng kem) để tạo cảm giác thân thiện, không gây áp lực cho học sinh.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Zap,
      title: "Micro-Interactions",
      description: "Các hiệu ứng chuyển động mượt mà, feedback visual rõ ràng khi người dùng tương tác với giao diện.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Smile,
      title: "Cute & Friendly",
      description: "Tích hợp các icon và hình minh họa dễ thương, phong cách cartoon để gần gũi với đối tượng học sinh.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Layers,
      title: "Không Gian Trắng",
      description: "Sử dụng không gian trắng rộng rãi, bố cục sạch sẽ để tập trung vào nội dung chính.",
      color: "bg-muted/10 text-muted-foreground"
    }
  ];

  const colorPalette = [
    { name: "Mint Green", value: "#B8E6D5", hex: "B8E6D5" },
    { name: "Soft Pink", value: "#F5C6D8", hex: "F5C6D8" },
    { name: "Soft Yellow", value: "#F9E5B8", hex: "F9E5B8" },
    { name: "Soft Lavender", value: "#E8D5F2", hex: "E8D5F2" },
    { name: "Cream White", value: "#F8F7F3", hex: "F8F7F3" },
    { name: "Dark Gray", value: "#2C2C2C", hex: "2C2C2C" }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container space-y-20">
        {/* Design Principles */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Triết Lý Thiết Kế
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Design Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Các nguyên tắc thiết kế cốt lõi của phong cách Soft Minimalism Hàn Quốc
            </p>
          </div>

          {/* Principles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 border-border/50 shadow-soft hover:shadow-soft-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${principle.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{principle.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Color Palette */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Bảng Màu Chính
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bảng màu pastel được lựa chọn cẩn thận để tạo cảm giác thân thiện và dễ chịu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {colorPalette.map((color, index) => (
              <Card 
                key={index}
                className="p-4 border-border/50 shadow-soft hover:shadow-soft-md transition-all text-center"
              >
                <div 
                  className="w-full h-24 rounded-lg mb-3 shadow-soft border border-border/30 transition-transform hover:scale-105"
                  style={{ backgroundColor: color.value }}
                />
                <p className="font-medium text-foreground text-sm">{color.name}</p>
                <p className="text-xs text-muted-foreground font-mono">#{color.hex}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Hệ Thống Typography
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sử dụng Noto Sans KR để phù hợp với phong cách Hàn Quốc
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 border-border/50 shadow-soft">
              <p className="text-xs font-medium text-primary mb-3">DISPLAY</p>
              <h2 className="text-4xl font-bold text-foreground mb-2">Heading</h2>
              <p className="text-sm text-muted-foreground">Noto Sans KR Bold 700 (32-48px)</p>
            </Card>

            <Card className="p-8 border-border/50 shadow-soft">
              <p className="text-xs font-medium text-secondary mb-3">SUBHEADING</p>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Subheading</h3>
              <p className="text-sm text-muted-foreground">Noto Sans KR Medium 500 (18-24px)</p>
            </Card>

            <Card className="p-8 border-border/50 shadow-soft">
              <p className="text-xs font-medium text-accent mb-3">BODY</p>
              <p className="text-base text-foreground mb-2">Body Text</p>
              <p className="text-sm text-muted-foreground">Noto Sans KR Regular 400 (14-16px)</p>
            </Card>
          </div>
        </div>

        {/* Design Features */}
        <Card className="p-8 md:p-12 border-border/50 shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">Đặc Điểm Thiết Kế</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Bố Cục</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-foreground/80">Bento Grid: Các ô vuông/chữ nhật có bo góc sắp xếp không đối xứng</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-foreground/80">Asymmetric balance: Kết hợp các kích thước khác nhau</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-foreground/80">Vertical flow: Cuộn dọc tự nhiên, không bị ngắt quãng</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Hiệu Ứng</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-foreground/80">Soft shadows: Bóng đổ nhẹ, không sắc nét (0 2px 8px)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-foreground/80">Rounded corners: Tất cả phần tử có bo góc 14px</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-foreground/80">Smooth transitions: Tất cả animation 300-400ms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
