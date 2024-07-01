import { ProductType } from "@prisma/client";
import { z } from "zod";

export const ProductDataValidator = z.object({
  title: z.string().min(25),
  price: z.coerce.number(),
  type: z.nativeEnum(ProductType),
  imagePath: z.string().url().array(),
  description: z.string().min(50),
  about: z.string().min(25).array(),
  isAvailableforpurchase: z.boolean(),
});

export type ProductForm = z.infer<typeof ProductDataValidator>;
export type GetLatestdropsType = {
  title: string;
  imagePath: string[];
  rating: number;
  ratedby: number;
};
