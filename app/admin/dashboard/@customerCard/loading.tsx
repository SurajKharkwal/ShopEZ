"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export default function Loading() {
  return (
    <Card className=" max-w-sm w-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className=" font-semibold text-2xl">Customers</p>
        <Skeleton className="w-[100px] h-2 my-2 rounded-md " />
      </CardHeader>
      <CardBody>
        <Skeleton className="w-[120px] h-4 rounded-md" />
      </CardBody>
    </Card>
  );
}
