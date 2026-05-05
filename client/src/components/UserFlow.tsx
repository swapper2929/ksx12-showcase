import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, ShoppingCart, FileText, User } from "lucide-react";

/**
 * User Flow - Display main user journeys
 * Soft Minimalism: Clean layout, soft shadows, cute icons
 */
export default function UserFlow() {
  const flows = [
    {
      title: "Khám Phá & Tìm Kiếm",
      description: "Người dùng khám phá các danh mục tài liệu và dụng cụ học tập",
      steps: [
        { icon: Search, label: "Tìm kiếm", color: "bg-primary/10 text-primary" },
        { icon: FileText, label: "Xem chi tiết", color: "bg-secondary/10 text-secondary" },
        { icon: ShoppingCart, label: "Thêm vào giỏ", color: "bg-accent/10 text-accent" }
      ]
    },
    {
      title: "Mua Sắm & Thanh Toán",
      description: "Quá trình mua tài liệu hoặc dụng cụ học tập",
      steps: [
        { icon: ShoppingCart, label: "Xem giỏ hàng", color: "bg-primary/10 text-primary" },
        { icon: FileText, label: "Xác nhận đơn", color: "bg-secondary/10 text-secondary" },
        { icon: Search, label: "Thanh toán", color: "bg-accent/10 text-accent" }
      ]
    },
    {
      title: "Sử Dụng & Học Tập",
      description: "Trải nghiệm học tập với tài liệu đã mua",
      steps: [
        { icon: FileText, label: "Mở tài liệu", color: "bg-primary/10 text-primary" },
        { icon: Search, label: "Ghi chú & Highlight", color: "bg-secondary/10 text-secondary" },
        { icon: User, label: "Theo dõi tiến độ", color: "bg-accent/10 text-accent" }
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">
            Luồng Người Dùng
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            User Journey & Flows
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá ba luồng chính trong ứng dụng KSX12: Khám phá, Mua sắm, và Học tập
          </p>
        </div>

        {/* Flows grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flows.map((flow, flowIndex) => (
            <Card 
              key={flowIndex}
              className="p-8 border-border/50 shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="space-y-8">
                {/* Flow title */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{flow.title}</h3>
                  <p className="text-foreground/70">{flow.description}</p>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  {flow.steps.map((step, stepIndex) => {
                    const Icon = step.icon;
                    return (
                      <div key={stepIndex} className="flex items-center gap-4">
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${step.color} shadow-soft`}>
                          <Icon className="w-6 h-6" />
                        </div>

                        {/* Label and arrow */}
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{step.label}</p>
                          {stepIndex < flow.steps.length - 1 && (
                            <div className="flex items-center gap-2 mt-3 ml-4">
                              <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Flow diagram explanation */}
        <Card className="mt-12 p-8 border-border/50 shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">1</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Khám Phá</h4>
              <p className="text-foreground/70">Người dùng tìm kiếm tài liệu theo môn học, chủ đề hoặc từ khóa. Xem chi tiết sản phẩm và thêm vào giỏ hàng.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <span className="text-lg font-bold text-secondary">2</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Mua Sắm</h4>
              <p className="text-foreground/70">Xem giỏ hàng, xác nhận đơn hàng, và thực hiện thanh toán. Nhận file tài liệu hoặc theo dõi đơn hàng dụng cụ.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <span className="text-lg font-bold text-accent">3</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Học Tập</h4>
              <p className="text-foreground/70">Mở tài liệu trong trình xem, ghi chú, highlight, bookmark. Theo dõi tiến độ học tập và mục tiêu học tập.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
