import { delay } from "@/utils/helperFunctios";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

export interface CustomersCardProps {
  averageValue: number;
  totalCustomer: number;
}
export default async function CustomersCard({}: CustomersCardProps) {
  const averageValue = 18;
  const totalCustomer = 190;
  await delay(5000);
  return (
    <Card className=" max-w-sm w-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className=" font-semibold text-2xl">Customers</p>
        <small className="text-default-500 font-extralight">
          Rs {averageValue} Average Value
        </small>
      </CardHeader>
      <CardBody>{totalCustomer} Total Customers</CardBody>
    </Card>
  );
}
