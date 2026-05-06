import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { TRPCError } from "@trpc/server";

// Helper to check if user is admin
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'admin') {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
  }
  return next({ ctx });
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  products: router({
    list: publicProcedure
      .input(z.object({ limit: z.number().default(20), offset: z.number().default(0) }).optional())
      .query(async ({ input }) => {
        const { limit = 20, offset = 0 } = input || {};
        return await db.getProducts(limit, offset);
      }),

    search: publicProcedure
      .input(z.object({ query: z.string(), limit: z.number().default(20), offset: z.number().default(0) }))
      .query(async ({ input }) => {
        return await db.searchProducts(input.query, input.limit, input.offset);
      }),

    getById: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return await db.getProductById(input);
      }),

    create: adminProcedure
      .input(z.object({
        categoryId: z.number(),
        name: z.string(),
        description: z.string().optional(),
        price: z.string(),
        fileType: z.enum(['pdf', 'word', 'powerpoint', 'markdown', 'html', 'image', 'video', 'mp3']),
        fileUrl: z.string(),
        fileKey: z.string(),
        fileName: z.string(),
        fileSizeBytes: z.number().optional(),
        thumbnail: z.string().optional(),
        subject: z.string().optional(),
        grade: z.string().optional(),
        author: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return await db.createProduct({
          ...input,
          price: input.price as any,
        });
      }),
  }),

  cart: router({
    getItems: protectedProcedure
      .query(async ({ ctx }) => {
        return await db.getCartItems(ctx.user.id);
      }),

    addItem: protectedProcedure
      .input(z.object({ productId: z.number(), quantity: z.number().default(1) }))
      .mutation(async ({ ctx, input }) => {
        return await db.addToCart(ctx.user.id, input.productId, input.quantity);
      }),

    removeItem: protectedProcedure
      .input(z.number())
      .mutation(async ({ input }) => {
        return await db.removeFromCart(input);
      }),
  }),

  orders: router({
    list: protectedProcedure
      .query(async ({ ctx }) => {
        return await db.getOrdersByUserId(ctx.user.id);
      }),

    create: protectedProcedure
      .input(z.object({
        items: z.array(z.object({
          productId: z.number(),
          quantity: z.number(),
        })),
        totalAmount: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        const orderNumber = `ORD-${Date.now()}`;
        return await db.createOrder({
          userId: ctx.user.id,
          orderNumber,
          totalAmount: input.totalAmount as any,
          status: 'pending',
        });
      }),
  }),

  admin: router({
    getAllProducts: adminProcedure
      .input(z.object({ limit: z.number().default(50), offset: z.number().default(0) }).optional())
      .query(async ({ input }) => {
        const { limit = 50, offset = 0 } = input || {};
        return await db.getAllProducts(limit, offset);
      }),

    getAllOrders: adminProcedure
      .input(z.object({ limit: z.number().default(50), offset: z.number().default(0) }).optional())
      .query(async ({ input }) => {
        const { limit = 50, offset = 0 } = input || {};
        return await db.getAllOrders(limit, offset);
      }),
  }),
});

export type AppRouter = typeof appRouter;
