"use client";
import { AnimatePresence, motion } from "framer-motion";
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
      href: "github.com/mohamed-elhaissan",
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
          Buzzly<sub className="text-blue-600">docs</sub>
        </Link>
        <div className="md:flex hidden flex-col gap-3 mt-10">
          {menuItems.map((item, index) => {
            const isActive = pathName === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`${isActive && "text-blue-500 "}  rounded-lg `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      <Link
        href={"https://github.com/mohamed-elhaissan/Buzzly"}
        className="w-full"
      >
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="bg-white cursor-pointer mb-20 hidden md:block text-black w-full py-1 px-5 text-center rounded-md"
        >
          <AnimatePresence>
            {isHovered ? (
              <motion.svg
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </motion.svg>
            ) : (
              <span>Github</span>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
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
