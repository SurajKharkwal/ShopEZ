import { ProductsData } from "@/_actions/getData";
import ProductTable from "@/components/manager/ProductTable";
import { ProductType } from "@prisma/client";
import { useEffect, useState } from "react";

export interface productsProps {
  id: string;
  title: string;
  price: number;
  type: ProductType;
  imagePath: string[];
  description: string;
  isAvailableforPurchase: boolean;
  createdAt: Date;
  updatedAt: Date;
  managerId: string;
  rating: number;
  ratedby: number;
}

export default async function Product() {
  const data = await ProductsData();
  return <ProductTable productsData={data} />;
}
