"use server";

import { addProduct, deleteProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function removeProduct(productId: number) {
  await deleteProduct(productId);
  revalidatePath("/products-db");
}

export type FormState = {
  errors: {
    title?: string;
    price?: string;
    description?: string;
  };
};

export async function createProduct(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const title = formData.get("title") as string;
  const priceRaw = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: FormState["errors"] = {};

  if (!title || title.trim().length === 0) {
    errors.title = "Title is required";
  }

  const price = Number(priceRaw);
  if (!priceRaw || isNaN(price) || price <= 0) {
    errors.price = "Price must be a positive number";
  }

  if (!description || description.trim().length === 0) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProduct(title, price, description);
  revalidatePath("/products-db");
  redirect("/products-db");
}
