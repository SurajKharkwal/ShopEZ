"use client";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Spinner } from "@nextui-org/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { productsProps } from "@/app/manager/products/page";

interface ProductTableProps {
  productsData: productsProps[];
}

export default function ProductTable({ productsData }: ProductTableProps) {
  const columns = [
    "PRODUCT_NAME",
    "DESCRIPTION",
    "TYPE",
    "PRICE",
    "CREATED_ON",
    "RATING",
    "ACTION",
  ];

  return (
    <div className="max-w-7xl">
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
        {productsData.length > 0 ? (
          <TableBody>
            {productsData.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.createdAt.toLocaleDateString()}</TableCell>
                <TableCell>{product.rating}</TableCell>
                <TableCell>
                  <div className="relative flex justify-end items-center gap-2">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button isIconOnly size="sm" variant="light">
                          <BsThreeDotsVertical />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu>
                        <DropdownItem>View</DropdownItem>
                        <DropdownItem>Edit</DropdownItem>
                        <DropdownItem>Delete</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody
            loadingContent={<Spinner label="Please Wait ..." />}
            emptyContent={"No rows to display."}
          >
            {[]}
          </TableBody>
        )}
      </Table>
    </div>
  );
}
