"use client";

import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { Table, TableBody, TableColumn, TableHeader } from "@nextui-org/table";
import Link from "next/link";

const columns = [
  "PRODUCT_NAME",
  "DESCRIPTION",
  "TYPE",
  "PRICE",
  "CREATED_ON",
  "RATING",
  "ACTION",
];

export default function Loading() {
  return (
    <div className="max-w-7xl w-full">
      <div className="w-full flex pb-4 px-8">
        <Link className="ml-auto" href="/manager/add-products">
          <Button color="primary">ADD-Products</Button>
        </Link>
      </div>
      <Table aria-label="Product Details">
        <TableHeader>
          {columns.map((column, index) => (
            <TableColumn key={index}>{column}</TableColumn>
          ))}
        </TableHeader>
        <TableBody
          isLoading
          loadingContent={<Spinner label="Please Wait ..." />}
        >
          {[]}
        </TableBody>
      </Table>
    </div>
  );
}
