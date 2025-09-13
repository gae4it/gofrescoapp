import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const variantRouter = createTRPCRouter({
  getByIds: publicProcedure
    .input(z.object({ ids: z.array(z.number()) }))
    .query(({ ctx, input }) => {
  // ...rimosso accesso db...
        where: { id: { in: input.ids } },
        include: { product: true },
      });
    }),
});
