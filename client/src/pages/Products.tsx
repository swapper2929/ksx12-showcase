import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLocation } from "wouter";
import { ShoppingCart, Heart, Loader2 } from "lucide-react";

export default function Products() {
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [, setLocation] = useLocation();

  const { data: products, isLoading, error } = trpc.products.list.useQuery({ limit: 20, offset });
  const searchQuery = trpc.products.search.useQuery(
    { query: search, limit: 20, offset },
    { enabled: search.length > 0 }
  );

  const displayProducts = search ? searchQuery.data : products;
  const isSearching = search.length > 0;
  const isLoadingData = isSearching ? searchQuery.isLoading : isLoading;
  const hasError = isSearching ? searchQuery.error : error;

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Kho Tài Liệu Học Tập</h1>
          <Input
            placeholder="Tìm kiếm tài liệu..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOffset(0);
            }}
            className="max-w-md"
          />
        </div>

        {isLoadingData ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-2">Đang tải...</span>
          </div>
        ) : hasError ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
            Lỗi khi tải dữ liệu. Vui lòng thử lại.
          </div>
        ) : !displayProducts || displayProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              {isSearching ? "Không tìm thấy tài liệu nào" : "Chưa có tài liệu nào"}
            </p>
            {isSearching && (
              <Button variant="outline" onClick={() => setSearch("")}>
                Xóa tìm kiếm
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-40 flex items-center justify-center">
                  <div className="text-4xl">📄</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    <span className="text-xs bg-secondary px-2 py-1 rounded">{product.fileType}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="flex-1"
                      onClick={() => setLocation(`/product/${product.id}`)}
                    >
                      Xem Chi Tiết
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
