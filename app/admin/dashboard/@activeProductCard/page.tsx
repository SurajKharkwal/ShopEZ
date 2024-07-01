import { delay } from "@/utils/helperFunctios";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Progress } from "@nextui-org/progress";
import { Tooltip } from "@nextui-org/tooltip";

export interface ActiveProductCardProps {
  activeProducts: number;
  totalProducts: number;
}

export default async function ActiveProductCard({}: ActiveProductCardProps) {
  await delay(5000);
  const activeProducts = 5;
  const totalProducts = 10;
  return (
    <Card className="max-w-sm w-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className=" font-semibold text-2xl">Active Products</p>
        <small className="text-default-500 font-extralight">
          {totalProducts - activeProducts} Inactive
        </small>
      </CardHeader>
      <CardBody>
        <Tooltip content={(activeProducts / totalProducts) * 100}>
          <Progress
            color="secondary"
            aria-label="Loading..."
            value={(activeProducts / totalProducts) * 100}
          />
        </Tooltip>
      </CardBody>
    </Card>
  );
}
