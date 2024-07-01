import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { NavbarItem } from "@nextui-org/navbar";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { BsChevronBarLeft } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";

interface NavRoutes {
  description: string;
  href: string;
  label: string;
  icon: any;
}

export default function NavbarDropdown() {
  const pathName = usePathname();
  const router = useRouter();
  const data: NavRoutes[] = [
    {
      description:
        "View your monthly income and manage records efficiently in one centralized location.",
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: (
        <BsChevronBarLeft
          className="text-xl text-default-500 -rotate-90"
          size={30}
        />
      ),
    },
    {
      description:
        "Easily add new products to your inventory and keep your catalog up to date.",
      href: "/manager/add-products",
      label: "Add Products",
      icon: <BiSolidMessageSquareAdd size={30} className="text-default-500" />,
    },
    {
      description:
        "Quikly add products to your cart with a single click, streamlining your shopping experience.",
      href: "/manager/products",
      label: "Products",
      icon: <FaBoxesPacking size={30} className="text-default-500" />,
    },
    {
      description:
        "Check detailed information about your orders, including status and history.",
      href: "/order",
      label: "Order",
      icon: <FaClipboardList size={30} className={"text-default-500"} />,
    },
  ];

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
            radius="sm"
            isIconOnly
            variant="light"
          >
            <BsChevronBarLeft
              size={25}
              className="text-xl text-default-500 -rotate-90"
            />
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        color="primary"
        aria-label="ShopEz features"
        className="w-[280px] sm:w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        {data.map((element: NavRoutes) => (
          <DropdownItem
            color="primary"
            href={element.href}
            as={Link}
            showDivider
            key={element.href}
            startContent={element.icon}
            className={clsx(
              { "text-indigo-500": pathName === element.href },
              " hover:text-white"
            )}
            description={element.description}
          >
            {element.label}
          </DropdownItem>))}
      </DropdownMenu>
    </Dropdown>
  );
}
