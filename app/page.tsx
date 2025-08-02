"use client";
import { motion, scale } from "framer-motion";
import useCopyToClipBoard from "./hooks/useCopyToClipboard";
import Link from "next/link";
export default function Home() {
  const { isCopied, copyToClipboard } =
    useCopyToClipBoard("npm install buzzly");
  return (
    <div className="  flex items-center tracking-[-.01em] flex-col justify-center  min-h-screen  sm:p-20">
      <h1 className="font-mono font-semibold text-8xl  md:text-9xl">Buzzly</h1>

      <code className="bg-black/[.05] flex items-center justify-center gap-5  mt-5 dark:bg-white/[.06] font-mono font-semibold px-2 py-0.5 rounded">
        npm i buzzly
        <button disabled={isCopied} onClick={copyToClipboard}>
          {isCopied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          ) : (
            <motion.svg
              whileHover={{ scale: 1.01 }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </motion.svg>
          )}
        </button>
      </code>
      <Link className="font-mono mt-5 underline" href={"/docs"}>
        Documentation
      </Link>
    </div>
  );
}
