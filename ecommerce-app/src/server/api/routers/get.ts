import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import bcrypt from "bcrypt";

export const getRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getCategories: publicProcedure
    .input(z.object({ page_no: z.number()}))
    .query(({ ctx, input }) => {
      return ctx.db.category.findMany ({
        skip: (input.page_no - 1) * 6,
        take: 6,
        orderBy: { name: "asc" },
      });
  }),

  getUser: publicProcedure
    .input(z.object({ email: z.string()}))
    .query(({ ctx, input }) => {
      return ctx.db.user.findFirstOrThrow ({
        where: { email: input.email },
      });
  }),

  matchPassword: publicProcedure
    .input(z.object({ email: z.string().min(3), password: z.string().min(1)}))
    .query(async ({ ctx, input }) => {
      const user_info = await ctx.db.user.findFirstOrThrow ({
        where: { email: input.email },
      });

      return await bcrypt.compare(input.password, user_info.password_hash);
  }),
});
