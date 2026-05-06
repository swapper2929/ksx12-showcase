import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { useRoute, useLocation } from "wouter";
import { Heart, Download, Loader2, ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const { isAuthenticated } = useAuth();
  const productId = params?.id ? parseInt(params.id) : null;

  const { data: product, isLoading, error } = trpc.products.getById.useQuery(productId || 0, {
    enabled: !!productId,
  });
  const addToCart = trpc.cart.addItem.useMutation();

  if (!match) return null;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">Không tìm thấy sản phẩm</p>
          <Button onClick={() => setLocation("/products")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay Lại
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      window.location.href = getLoginUrl();
      return;
    }

    try {
      await addToCart.mutateAsync({ productId: product.id, quantity: 1 });
      alert("Đã thêm vào giỏ hàng!");
    } catch (error) {
      alert("Lỗi khi thêm vào giỏ hàng");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Button variant="ghost" onClick={() => setLocation("/products")} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay Lại
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-96 rounded-lg flex items-center justify-center mb-6">
              <div className="text-8xl">📄</div>
            </div>

            <Card className="p-6">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{product.description}</p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Loại File</p>
                  <p className="font-semibold">{product.fileType.toUpperCase()}</p>
                </div>
                {product.subject && (
                  <div>
                    <p className="text-sm text-muted-foreground">Môn Học</p>
                    <p className="font-semibold">{product.subject}</p>
                  </div>
                )}
                {product.grade && (
                  <div>
                    <p className="text-sm text-muted-foreground">Khối Lớp</p>
                    <p className="font-semibold">{product.grade}</p>
                  </div>
                )}
                {product.author && (
                  <div>
                    <p className="text-sm text-muted-foreground">Tác Giả</p>
                    <p className="font-semibold">{product.author}</p>
                  </div>
                )}
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 sticky top-4">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Giá</p>
                <p className="text-4xl font-bold text-primary">${product.price}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Lượt Xem</span>
                  <span className="font-semibold">{product.views}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Lượt Tải</span>
                  <span className="font-semibold">{product.downloads}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full"
                  onClick={handleAddToCart}
                  disabled={addToCart.isPending}
                >
                  {addToCart.isPending ? "Đang xử lý..." : "Thêm Vào Giỏ Hàng"}
                </Button>
                <Button variant="outline" className="w-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Yêu Thích
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Tải Xuống
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
