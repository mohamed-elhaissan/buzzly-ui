"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SideBarLayout() {
  const [isHovered, setHovered] = useState<boolean>(false);
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
  ];
  return (
    <div
      className="w-64 hidden md:flex  p-4 flex-col justify-between items-start"
      style={{
        borderRight: "1px solid var(--borderColor)",
      }}
    >
      <div>
        <Link href={"/"} className="font-semibold text-2xl tracking-[-.01em] ">
          Buzzly<sub className="text-blue-600">docs</sub>
        </Link>
        <div className="flex flex-col gap-3 mt-10">
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
          className="bg-white cursor-pointer mb-20 text-black w-full py-1 px-5 text-center rounded-md"
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
    </div>
  );
}
