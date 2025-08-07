"use client";
import Link from "next/link";
import Installation from "./components/Installation";
import Config from "./components/Config";
import CopyBtn from "./components/CopyBtn";
import ThemeToggle from "./components/ThemeToggle";
export default function Home() {
  return (
    <>
      <div className="  flex items-center transition-all duration-300 tracking-[-.01em] flex-col justify-center dark:bg-black bg-white    sm:p-20">
        <span
          className="bg-red-900/20 gap-1 font-mono flex items-center justify-center mt-10    text-red-500 py-1 px-4 text-sm rounded-full"
          style={{
            border: "1px solid #fb2c36",
          }}
        >
          <span className="w-2 h-2 bg-red-500 rounded-full" />
          current Bug : Tailwind Css Classes not working
        </span>
        <div>
          <h1 className="font-mono font-semibold text-8xl dark:text-white text-black md:text-9xl">
            Buzzly
          </h1>
          <code className="bg-black/[.05] md:w-1/2 mx-auto flex items-center justify-between  gap-5  mt-5 dark:bg-white/[.06] font-mono font-semibold px-4 py-0.5 rounded">
            npm i buzzly
            <CopyBtn text="npm i buzzly" />
          </code>
          <div className="flex gap-10 mt-5 items-center justify-center">
            <button className="font-mono py-1 cursor-pointer bg-[var(--foreground)] text-black px-4 rounded">
              Render a Toast
            </button>
            <Link
              className="font-mono  underline"
              href={"https://github.com/mohamed-elhaissan/buzzly"}
            >
              github
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full  ">
          <Installation />
          <Config />
        </div>
      </div>
    </>
  );
}
