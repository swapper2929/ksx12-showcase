import { Heart } from "lucide-react";

/**
 * Footer - Soft Minimalism aesthetic
 */
export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-primary/5 to-background border-t border-border/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">KSX12</h3>
            <p className="text-foreground/70 leading-relaxed">
              Ứng dụng TMĐT học sinh bán tài liệu học tập và dụng cụ học tập.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Sản Phẩm</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Trang Chủ</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Trình Phát</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Hồ Sơ</a></li>
            </ul>
          </div>

          {/* Design */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Thiết Kế</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Phong Cách</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Màu Sắc</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Typography</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Tài Nguyên</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Tài Liệu</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Hỗ Trợ</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Liên Hệ</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © 2026 KSX12. Thiết kế UI/UX phong cách Hàn Quốc.
          </p>
          <div className="flex items-center gap-2 text-foreground/60 text-sm">
            <span>Được thiết kế với</span>
            <Heart className="w-4 h-4 text-secondary fill-secondary" />
            <span>cho học sinh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
