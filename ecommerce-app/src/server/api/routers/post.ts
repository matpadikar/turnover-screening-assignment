import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import bcrypt from "bcrypt";

export const postRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(z.object({ email: z.string().min(3), name: z.string(), password: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      return await ctx.db.user.create({
        data: {
          email: input.email,
          name: input.name,
          password_hash: await bcrypt.hash(input.password, 10),
        },
      });
    }),

  matchPassword: publicProcedure
    .input(z.object({ email: z.string().min(3), password: z.string().min(1)}))
    .mutation(async ({ ctx, input }) => {
      const user_info = await ctx.db.user.findFirstOrThrow ({
        where: { email: input.email },
      });

      const is_success = await bcrypt.compare(input.password, user_info.password_hash);

      if (!is_success) {
        throw new Error("Invalid password");
      }

      return is_success;
    }),

  updateUserCategories: publicProcedure
    .input(z.object({ email: z.string().min(3), category: z.string()}))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.user.update({
        where: { email: input.email },
        data: {
          selected_categories: input.category,
        },
      });
    }),
});
