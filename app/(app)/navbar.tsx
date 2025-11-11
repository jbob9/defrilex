"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="relative bg-white z-10 shadow-[0px,0px,30px,0px,rgba(0,0,0,0.05)]"
      id="header"
    >
      <div className="container mx-auto w-full px-3 md:px-6">
        <nav className="relative flex items-center justify-between flex-wrap md:flex-nowrap md:justify-start p-0 py-3">
          <Link className="mr-16" href="/">
            <Image
              src="/logo.webp"
              className="w-36 h-8 md:h-11"
              alt=""
              width={168}
              height={45}
            />
          </Link>
          <div className="block md:hidden ml-auto">
            <Link href="/jobs/post" className={cn(buttonVariants())}>
              Post Job{" "}
            </Link>
          </div>

          <Button
            className="block md:hidden border-transparent bg-transparent text-black p-0 border-0 ml-2"
            type="button"
            size={"icon-lg"}
            onClick={handleClick}
          >
            <Menu className="size-7" />
          </Button>

          <div
            className={cn(
              "flex grow basis-full md:basis-auto items-center mt-6 md:mt-0 transition-all duration-300 ease-in-out",
              {
                "hidden": !isOpen,
              }
            )}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center me-auto py-0 mb-0 list-none pl-0 gap-3 md:gap-4 w-full md:w-auto">
              <li className="relative w-full md:w-auto border-b  pb-2 md:pb-0 md:border-b-0">
                <Link
                  className="relative cursor-pointer font-semibold text-base text-[hsl(226,100%,33%)] hover:text-primary"
                  href="/"
                >
                  Home{" "}
                </Link>
              </li>

              <li className="relative w-full md:w-auto border-b pb-2 md:pb-0 md:border-b-0 ">
                <Link
                  className="relative cursor-pointer font-semibold text-base py-5"
                  href="/jobs"
                >
                  {" "}
                  Find Jobs{" "}
                </Link>
              </li>
              <li className="relative w-full md:w-auto border-b  pb-2 md:pb-0 md:border-b-0">
                <Link
                  className="relative cursor-pointer font-semibold text-base"
                  href="/talents"
                >
                  {" "}
                  Find Talents{" "}
                </Link>
              </li>

              <li className="relative w-full md:w-auto border-b  pb-2 md:pb-0 md:border-b-0">
                <a
                  className="relative cursor-pointer font-semibold text-base"
                  href="/blogs"
                >
                  Blogs{" "}
                </a>
              </li>
              <li className="relative w-full md:w-auto border-b  pb-2 md:pb-0 md:border-b-0">
                <a
                  className="relative cursor-pointer font-semibold text-base"
                  href="/contact"
                >
                  Contact{" "}
                </a>
              </li>
              <li className="flex justify-between w-full md:hidden relative pr-0">
                <div className="w-full">
                  <ul className="flex flex-wrap justify-between items-center gap-5">
                    <li className="flex items-center gap-3">
                      <Link
                        href="/login"
                        className="font-semibold text-black dark:text-white"
                      >
                        Login{" "}
                      </Link>
                      <Link
                        href="/register"
                        className="font-semibold text-black dark:text-white"
                      >
                        Register{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-wrap justify-between items-center">
              <ul className="gap-6 flex flex-wrap justify-between items-center">
                <li>
                  <Link
                    href="/login"
                    className="font-semibold text-[hsl(0,0%,13%)]"
                  >
                    Login{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="font-semibold text-[hsl(0,0%,13%)]"
                  >
                    Register{" "}
                  </Link>
                </li>

                <li>
                  <Link href="/job/post" className={cn(buttonVariants())}>
                    {" "}
                    Post Job{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
