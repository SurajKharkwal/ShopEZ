import { delay } from "@/utils/helperFunctios";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Progress } from "@nextui-org/progress";
import { Tooltip } from "@nextui-org/tooltip";

export default async function SalesCard() {
  await delay(5000);
  const order = 10;
  return (
    <Card className="max-w-sm w-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className=" font-semibold text-2xl">Sales</p>
        <small className="text-default-500 font-extralight">
          {order} order
        </small>
      </CardHeader>
      <CardBody>
        <Tooltip content={"70"}>
          <Progress
            color="success"
            aria-label="Loading..."
            value={(order / 30) * 100}
          />
        </Tooltip>
      </CardBody>
    </Card>
  );
}
