import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getLoginUrl } from "@/const";
import { useLocation } from "wouter";
import { ShoppingCart, BookOpen, Users, BarChart3 } from "lucide-react";

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/30 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">KSX12</div>
            <span className="text-sm text-muted-foreground">Kho Tài Liệu Học Tập</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => setLocation("/products")}>
              Sản Phẩm
            </Button>
            <Button variant="ghost" onClick={() => setLocation("/cart")}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Giỏ Hàng
            </Button>
            {isAuthenticated ? (
              <>
                {user?.role === 'admin' && (
                  <Button variant="ghost" onClick={() => setLocation("/admin")}>
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                )}
                <Button variant="outline" onClick={() => logout()}>
                  Đăng Xuất
                </Button>
              </>
            ) : (
              <Button onClick={() => window.location.href = getLoginUrl()}>
                Đăng Nhập
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Kho Tài Liệu Học Tập Toàn Diện
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            KSX12 là nền tảng TMĐT dành cho học sinh, cung cấp tài liệu học tập, dụng cụ học tập, và các tài nguyên giáo dục chất lượng cao.
          </p>
          <div className="flex gap-4">
            <Button size="lg" onClick={() => setLocation("/products")}>
              Khám Phá Ngay
            </Button>
            <Button size="lg" variant="outline">
              Tìm Hiểu Thêm
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Tính Năng Chính</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <BookOpen className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-bold mb-2">Tài Liệu Đa Dạng</h3>
            <p className="text-sm text-muted-foreground">
              PDF, Word, PowerPoint, Markdown, HTML, Hình ảnh, Video, MP3
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <ShoppingCart className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-bold mb-2">Mua Sắm Dễ Dàng</h3>
            <p className="text-sm text-muted-foreground">
              Giỏ hàng, thanh toán an toàn, lịch sử đơn hàng
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-bold mb-2">Cộng Đồng Học Tập</h3>
            <p className="text-sm text-muted-foreground">
              Chia sẻ, đánh giá, bình luận tài liệu
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <BarChart3 className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-bold mb-2">Quản Lý Toàn Diện</h3>
            <p className="text-sm text-muted-foreground">
              Dashboard admin, thống kê, báo cáo
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <Card className="p-12 bg-gradient-to-r from-primary to-purple-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Bắt Đầu Học Tập Ngay</h2>
          <p className="mb-6 text-lg opacity-90">
            Truy cập hàng ngàn tài liệu học tập chất lượng cao
          </p>
          <Button size="lg" variant="secondary" onClick={() => setLocation("/products")}>
            Khám Phá Sản Phẩm
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2026 KSX12. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </div>
  );
}
