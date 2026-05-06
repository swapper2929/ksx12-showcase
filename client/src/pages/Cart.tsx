import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const { isAuthenticated } = useAuth();
  const { data: cartItems } = trpc.cart.getItems.useQuery(undefined, { enabled: isAuthenticated });
  const removeFromCart = trpc.cart.removeItem.useMutation();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vui lòng đăng nhập</h1>
          <Button onClick={() => window.location.href = getLoginUrl()}>
            Đăng Nhập
          </Button>
        </div>
      </div>
    );
  }

  const total = cartItems?.reduce((sum, item) => sum + (Number(item.quantity) * 10), 0) || 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Giỏ Hàng</h1>

        {!cartItems || cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">Giỏ hàng của bạn trống</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-4 mb-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold">Sản phẩm #{item.productId}</p>
                    <p className="text-sm text-muted-foreground">Số lượng: {item.quantity}</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart.mutate(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </Card>
              ))}
            </div>

            <Card className="p-6 h-fit">
              <h2 className="text-xl font-bold mb-4">Tóm Tắt</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Tổng cộng:</span>
                  <span className="font-bold">${total}</span>
                </div>
              </div>
              <Button className="w-full">Thanh Toán</Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
