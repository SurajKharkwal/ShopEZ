"use server";
export async function GetDashboarTableData() {}

export async function GetDashboarCardData() {}
import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import { GetLatestdropsType } from "@/types/schema";

const prisma = new PrismaClient();

export interface orderInterface {
  title: string;
  imagePath: string[];
  description: string;
  rating: number;
  ratedby: number;
}
const { userId } = auth();

export async function OrderData() {
  if (!userId) throw new Error("Unaothorized User");
  const order = await prisma.order.findMany({
    where: {
      orderedBy: userId,
    },
    select: {
      Products: {
        select: {
          title: true,
          imagePath: true,
          description: true,
          ratedby: true,
          rating: true,
        },
      },
    },
  });
  console.log(order);
  console.log("okh");
  return order;
}

export async function ProductsData() {
  if (!userId) throw new Error("UnAuthorized User");
  const products = await prisma.products.findMany({
    where: {
      managerId: userId,
    },
  });
  return products;
}

export async function GetLatestdrops() {
  if (!userId) throw new Error("UnAuthorized User");
  const latestDrops: GetLatestdropsType[] = await prisma.products.findMany({
    take: 3,
    select: {
      rating: true,
      ratedby: true,
      title: true,
      imagePath: true,
    },
  });
  return latestDrops;
}

export async function viewProduct(pId: string) {
  if (!userId) throw new Error("UnAuthorized User");
  const data = await prisma.products.findUnique({
    where: {
      id: pId,
    },
    select: {
      imagePath: true,
      title: true,
      about: true,
      description: true,
      ratedby: true,
      rating: true,
      price: true,
      isAvailableforPurchase: true,
    },
  });
  return data;
}
