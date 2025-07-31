"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
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
      href: "/docs/types",
      label: "types",
    },
    {
      href: "/docs/position",
      label: "Position",
    },
    {
      href: "/docs/others",
      label: "Others",
    },
  ];
  return (
    <div className="flex h-screen font-mono tracking-[-.01em] ">
      <div
        className="w-64 p-4"
        style={{
          borderRight: "1px solid var(--borderColor)",
        }}
      >
        <h1 className="mb-10 font-semibold text-2xl tracking-[-.01em] ">
          Documentation
        </h1>
        <div className="flex flex-col gap-3">
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
      <main className="flex-1 h-screen p-4">{children}</main>
    </div>
  );
}
