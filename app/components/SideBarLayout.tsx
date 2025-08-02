"use client";
import {  motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SideBarLayout() {
  const [isHovered, setHovered] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const pathName = usePathname();
  const menuItems = [
    {
      href: "/docs",
      label: "introduction",
    },
    {
      href: "/docs/installation",
      label: "Installation",
    },
    {
      href: "/docs/configuration",
      label: "Configuration ",
    },
    {
      href: "https://github.com/mohamed-elhaissan/Buzzly",
      label: "Github",
    },
  ];
  return (
    <div
      className="md:w-1/5 2xl:w-64 flex  p-4 md:flex-col justify-between items-start"
      style={{
        borderRight: "1px solid var(--borderColor)",
      }}
    >
      <div>
        <Link href={"/"} className="font-semibold text-2xl tracking-[-.01em] ">
          Buzzly<sub className="text-[#87CEEB]">docs</sub>
        </Link>
        <div className="md:flex hidden flex-col gap-3 mt-10">
          {menuItems.map((item, index) => {
            const isActive = pathName === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`${isActive && "text-[#87CEEB] "}  rounded-lg `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => setIsOpened(!isOpened)}
        className="cursor-pointer md:hidden hover:text-blue-500 text-xl"
      >
        Menu
      </button>
      {isOpened && (
        <motion.div
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          className="flex h-screen fixed left-0 top-0 bg-black w-full items-center justify-center flex-col gap-3 mt-10"
        >
          {menuItems.map((item, index) => {
            const isActive = pathName === item.href;
            return (
              <Link
                onClick={() => setIsOpened(false)}
                key={index}
                href={item.href}
                className={`${isActive && "text-blue-500 "}  rounded-lg `}
              >
                {item.label}
              </Link>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
