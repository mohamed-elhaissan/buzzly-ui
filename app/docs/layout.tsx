export const metadata: Metadata = {
  title: "Documentation",
  icons: {
    icon: "/e.svg",
  },
  description: "docs of buzzly",
};
import { Metadata } from "next";
import { ReactNode } from "react";
import SideBarLayout from "../components/SideBarLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen font-mono tracking-[-.01em] ">
      <SideBarLayout />

      <main className="md:flex-1 w-full overflow-x-hidden h-screen p-4 ">
        {children}
      </main>
    </div>
  );
}
