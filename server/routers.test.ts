import { describe, it, expect, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock database functions
vi.mock("./db", () => ({
  getProducts: vi.fn().mockResolvedValue([
    {
      id: 1,
      name: "Test Product",
      price: "10.00",
      fileType: "pdf",
      isActive: true,
    },
  ]),
  searchProducts: vi.fn().mockResolvedValue([]),
  getProductById: vi.fn().mockResolvedValue(null),
  getCartItems: vi.fn().mockResolvedValue([]),
  getOrdersByUserId: vi.fn().mockResolvedValue([]),
  getAllProducts: vi.fn().mockResolvedValue([]),
  getAllOrders: vi.fn().mockResolvedValue([]),
}));

function createAuthContext(role: "user" | "admin" = "user"): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "test-user",
      email: "test@example.com",
      name: "Test User",
      loginMethod: "manus",
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: {},
    } as any,
    res: {
      clearCookie: vi.fn(),
    } as any,
  };
}

describe("tRPC Routers", () => {
  describe("products", () => {
    it("should list products", async () => {
      const caller = appRouter.createCaller(createAuthContext());
      const result = await caller.products.list();
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it("should search products", async () => {
      const caller = appRouter.createCaller(createAuthContext());
      const result = await caller.products.search({ query: "test" });
      expect(Array.isArray(result)).toBe(true);
    });

    it("should get product by id", async () => {
      const caller = appRouter.createCaller(createAuthContext());
      const result = await caller.products.getById(1);
      expect(result).toBeDefined();
    });
  });

  describe("cart", () => {
    it("should get cart items for authenticated user", async () => {
      const caller = appRouter.createCaller(createAuthContext());
      const result = await caller.cart.getItems();
      expect(Array.isArray(result)).toBe(true);
    });

    it("should not allow unauthenticated access to cart", async () => {
      const ctx = createAuthContext();
      ctx.user = null as any;
      const caller = appRouter.createCaller(ctx);
      
      try {
        await caller.cart.getItems();
        expect.fail("Should throw error");
      } catch (error: any) {
        expect(error.code).toBe("UNAUTHORIZED");
      }
    });
  });

  describe("admin routes", () => {
    it("should allow admin to get all products", async () => {
      const caller = appRouter.createCaller(createAuthContext("admin"));
      const result = await caller.admin.getAllProducts();
      expect(Array.isArray(result)).toBe(true);
    });

    it("should deny non-admin access", async () => {
      const caller = appRouter.createCaller(createAuthContext("user"));
      
      try {
        await caller.admin.getAllProducts();
        expect.fail("Should throw error");
      } catch (error: any) {
        expect(error.code).toBe("FORBIDDEN");
      }
    });
  });

  describe("auth", () => {
    it("should get current user", async () => {
      const caller = appRouter.createCaller(createAuthContext());
      const result = await caller.auth.me();
      expect(result).toBeDefined();
      expect(result?.id).toBe(1);
    });

    it("should allow logout", async () => {
      const caller = appRouter.createCaller(createAuthContext());
      const result = await caller.auth.logout();
      expect(result.success).toBe(true);
    });
  });
});
