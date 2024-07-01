"use client";
import { Link } from "@nextui-org/link";
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" text-default-600 border-t-1 flex justify-between border-neutral-300 dark:border-neutral-800 py-8">
      <div className=" mx-auto md:flex justify-around w-full px-4">
        <p className="text-center text-default-500 mt-4">
          © 2020 Your Company, Inc. All rights reserved.
        </p>
        <div className="flex justify-center mt-4">
          <Link href="#" className="mr-4">
            <FaFacebook
              className="text-default-400 hover:text-default-800"
              size={24}
            />
          </Link>
          <Link href="#" className="mr-4">
            <FaInstagram
              className="text-default-400 hover:text-default-800"
              size={24}
            />
          </Link>
          <Link href="#" className="mr-4">
            <FaGithub
              className="text-default-400 hover:text-default-800"
              size={24}
            />
          </Link>
          <Link href="#" className="mr-4">
            <FaYoutube
              className="text-default-400 hover:text-default-800"
              size={24}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
