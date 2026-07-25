"use server";

import { deleteProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";

export async function removeProduct(productId: number) {
  await deleteProduct(productId);
  revalidatePath("/products-db");
}
