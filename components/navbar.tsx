"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { FaOpencart } from "react-icons/fa";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon, Logo } from "@/components/icons";
import { Tooltip } from "@nextui-org/tooltip";
import { Badge } from "@nextui-org/badge";
import NavbarDropdown from "./navber-dropdown";

export const Navbar = () => {
  return (
    <NextUINavbar
      isBordered
      isBlurred
      shouldHideOnScroll
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link
            color="foreground"
            className="flex justify-start text-default-500 items-center gap-1"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">SHOP EZ</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex basis-full" justify="end">
        <NavbarItem className="items-center flex gap-3">
          <Tooltip content="Github" radius="sm">
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500 hidden sm:flex" />
            </Link>
          </Tooltip>
          <ThemeSwitch />
          <Badge content="5" variant="flat">
            <Tooltip content="Cart" radius="sm">
              <Link aria-label="Cart" href={siteConfig.links.github}>
                <FaOpencart size={25} className="text-default-500" />
              </Link>
            </Tooltip>
          </Badge>
          <SearchIcon className="text-default-500 hidden sm:flex cursor-pointer text-xl" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarDropdown />
      </NavbarContent>
    </NextUINavbar>
  );
};
