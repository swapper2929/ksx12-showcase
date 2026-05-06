import { useAuth } from "@/_core/hooks/useAuth";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    fileType: "pdf" as const,
    fileUrl: "",
    fileKey: "",
    fileName: "",
    categoryId: 1,
  });

  const { data: products } = trpc.admin.getAllProducts.useQuery();
  const { data: orders } = trpc.admin.getAllOrders.useQuery();
  const createProduct = trpc.products.create.useMutation();

  if (user?.role !== 'admin') {
    return <div className="text-center py-12">Bạn không có quyền truy cập trang này</div>;
  }

  const handleAddProduct = async () => {
    try {
      await createProduct.mutateAsync(formData);
      setFormData({
        name: "",
        description: "",
        price: "",
        fileType: "pdf",
        fileUrl: "",
        fileKey: "",
        fileName: "",
        categoryId: 1,
      });
      setShowAddProduct(false);
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-muted-foreground">Quản lý sản phẩm, đơn hàng và người dùng</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <p className="text-sm text-muted-foreground">Tổng Sản Phẩm</p>
            <p className="text-3xl font-bold">{products?.length || 0}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground">Tổng Đơn Hàng</p>
            <p className="text-3xl font-bold">{orders?.length || 0}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground">Doanh Thu</p>
            <p className="text-3xl font-bold">$0</p>
          </Card>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Quản Lý Sản Phẩm</h2>
            <Button onClick={() => setShowAddProduct(!showAddProduct)}>
              <Plus className="w-4 h-4 mr-2" />
              Thêm Sản Phẩm
            </Button>
          </div>

          {showAddProduct && (
            <Card className="p-6 mb-6">
              <div className="space-y-4">
                <Input
                  placeholder="Tên sản phẩm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  placeholder="Mô tả"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <Input
                  placeholder="Giá"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
                <Input
                  placeholder="URL File"
                  value={formData.fileUrl}
                  onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })}
                />
                <Button onClick={handleAddProduct} className="w-full">
                  Lưu Sản Phẩm
                </Button>
              </div>
            </Card>
          )}

          <div className="space-y-2">
            {products?.map((product) => (
              <Card key={product.id} className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-bold">{product.name}</p>
                  <p className="text-sm text-muted-foreground">${product.price}</p>
                </div>
                <Button variant="outline" size="sm">Sửa</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
