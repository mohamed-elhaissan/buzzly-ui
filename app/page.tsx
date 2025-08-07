 'use client'
import Link from "next/link";
import Installation from "./components/Installation";
import Config from "./components/Config";
export default function Home() {
 
  return (
    <div className="  flex items-center tracking-[-.01em] flex-col justify-center    sm:p-20">

      <div>
        <h1 className="font-mono font-semibold text-8xl  md:text-9xl">
          Buzzly
        </h1>
        <code className="bg-black/[.05] md:w-1/2 mx-auto flex items-center justify-between  gap-5  mt-5 dark:bg-white/[.06] font-mono font-semibold px-4 py-0.5 rounded">
          npm i buzzly
      
        </code>
        <div className="flex gap-10 mt-5 items-center justify-center">
          <button
            className="font-mono py-1 cursor-pointer bg-[var(--foreground)] text-black px-4 rounded"
          >
            Render a Toast
          </button>
          <Link className="font-mono  underline" href={"https://github.com/mohamed-elhaissan/buzzly"}>
            github
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full  ">
        <Installation />
        <Config />
      </div>
    </div>
  );
}
