export const metadata: Metadata = {
  title: "Documentation",
  icons: {
    icon: "/e.svg",
  },
  description: "docs of buzzly",
};
import { Metadata } from "next";
import { ReactNode } from "react";
import GithubLink from "../components/GithubLink";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen font-mono tracking-[-.01em] ">
      <GithubLink />
      <main className="flex-1 h-screen p-4">{children}</main>
    </div>
  );
}
