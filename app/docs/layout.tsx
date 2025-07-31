import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
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
    <div className="flex h-screen font-">
      <div className="w-64 p-4">
        <h1 className="mb-5">Docs</h1>
        <div className="flex flex-col gap-3">
          {menuItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
}
