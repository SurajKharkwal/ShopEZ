"use client";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Spinner } from "@nextui-org/spinner";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/components/icons";
import { IoIosArrowDown } from "react-icons/io";
import { delay } from "@/utils/helperFunctios";

const columns = [
  "Name",
  "Earning",
  "No Of Product",
  "Rating",
  "Date",
  "Action",
];

export interface ColleagueDataProps {
  name: string;
  email: string;
  earning: number;
  date: Date;
  rating: number;
  noOfProduct: number;
  avatar: string;
}

export default function ColleaguesTableComp({
  colleaguesData,
}: {
  colleaguesData: ColleagueDataProps[];
}) {
  const [isLoading, setIsLoading] = useState(false);

  const [hasMore, setHasMore] = useState(true);

  return (
    <div className="space-y-6 w-full">
      <section className="px-6 flex">
        <Input
          placeholder="Search"
          radius="sm"
          className="max-w-[300px] mr-auto"
          startContent={<SearchIcon />}
        />
        <Dropdown>
          <DropdownTrigger>
            <Button radius="sm" endContent={<IoIosArrowDown />} color="primary">
              Column
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            {columns.map((column) => (
              <DropdownItem key={column}>{column}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </section>
      <Table
        shadow="md"
        aria-label="Product Details"
        bottomContent={
          hasMore && !isLoading ? (
            <div className="flex w-full justify-center">
              <Button color="primary" isDisabled={isLoading} variant="flat">
                {isLoading && <Spinner color="white" size="sm" />}
                Load More
              </Button>
            </div>
          ) : null
        }
      >
        <TableHeader>
          {columns.map((column, index) => (
            <TableColumn className="uppercase" key={index}>
              {column}
            </TableColumn>
          ))}
        </TableHeader>
        {colleaguesData.length > 0 ? (
          <TableBody>
            {colleaguesData.map((colleague, index) => (
              <TableRow key={index}>
                <TableCell>
                  <User
                    name={colleague.name}
                    description={colleague.email}
                    avatarProps={{ src: colleague.avatar }}
                  />
                </TableCell>
                <TableCell>{colleague.earning}</TableCell>
                <TableCell>{colleague.noOfProduct}</TableCell>
                <TableCell>{colleague.rating}</TableCell>
                <TableCell>{colleague.date.toDateString()}</TableCell>
                <TableCell className="flex items-center justify-center">
                  <div className="relative flex justify-end items-center gap-2">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button isIconOnly size="sm" variant="light">
                          <BsThreeDotsVertical className="text-default-300" />
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
