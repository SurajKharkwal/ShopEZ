"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export default function Loading() {
  return (
    <Card className="max-w-sm w-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className=" font-semibold text-2xl">Active Products</p>
        <Skeleton className="w-[50px] h-2 rounded-md my-2 " />
      </CardHeader>
      <CardBody className=" w-full pt-1">
        <Skeleton className=" w-full h-4 rounded-md " />
      </CardBody>
    </Card>
  );
}
