"use client";
import useCopyToClipBoard from "@/app/hooks/useCopyToClipboard";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Page() {
  const { isCopied, copyToClipboard } =
    useCopyToClipBoard("npm install buzzly");
  return (
    <div className="p-4 mt-20 ">
      <div>
        <h2 className="font-semibold  mb-2 text-blue-600 ">Installation</h2>
        <p>
          The quickest way to Install Buzzly Notification is using
          <span className="text-blue-600"> npm install Buzzly</span>
        </p>
        <div
          className="flex  gap-2 text-sm items-center justify-between mt-5 w-1/3 px-4 py-2 bg-[#000000] "
          style={{
            border: "1px solid var(--borderColor)",
          }}
        >
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            Terminal
          </span>
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
        </div>
        <code
          style={{
            border: "1px solid var(--borderColor)",
          }}
          className="bg-black/[.05] flex w-1/3 items-center justify-between gap-5 text-sm   dark:bg-white/[.06] font-mono  px-4 py-3 "
        >
          npm install buzzly
          <button disabled={isCopied} onClick={copyToClipboard}></button>
        </code>
      </div>
      <div
        style={{
          borderTop: "1px solid var(--borderColor)",
        }}
        className="w-1/3 mt-10 mb-4 sm:w-[80%] xl:w-1/2 2xl:w-1/2"
      >
        <div className="py-10">
          <h2 className="font-semibold  mb-2 text-blue-600 ">Usage</h2>

          <p className="dark:text-[#c1c1c6]">
            Render the toaster in the root of your app.
          </p>
          <div
            className="flex  gap-2 text-sm items-center justify-between mt-5  px-4 py-2 bg-[#000000] "
            style={{
              border: "1px solid var(--borderColor)",
            }}
          >
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              Terminal
            </span>
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
          </div>
          <div className="bg-[#FCFCFC] border dark:bg-[#171716] dark:border-[#2e2e2d] dark:text-white   border-[#e4e4e7] flex justify-between items-center p-2 px-5 rounded">
            <div className="text-sm">
              <p className="codeBlock">
                <span className="text-[#00BBFF] font-semibold codeBlock">
                  import
                </span>{" "}
                {"      { Toaster, toast }    "}
                <span className="text-[#00BBFF] font-semibold codeBlock">
                  from
                </span>{" "}
                <span className="text-[#bb88ff]">{"   'buzzly'  "}</span>
              </p>
              <p className="my-3">{"// ..."}</p>
              <p className="my-3 codeBlock ">
                <span className="text-[#C792EA] font-semibold">function</span>
                {" App() {"}
              </p>
              <pre>
                <code className=" codeBlock">
                  {"  "}
                  <span className="text-[#89DDFF] font-semibold ">
                    return
                  </span>{" "}
                  ({"\n"}
                  {"    <"}
                  <span className="text-[#FFCB6B]">div</span>
                  {">\n"}
                  {"      <"}
                  <span className="text-[#FFCB6B]">Toaster</span> {"/> \n"}
                  {"      <"}
                  <span className="text-[#FFCB6B]">button</span>{" "}
                  <span className="text-[#C792EA]">onClick</span>
                  {"={() => "}
                  <span className="text-[#82AAFF]">toast.</span>
                  <span className="text-[#F07178]">success</span>
                  <span className="text-[#C3E88D]">
                    {"('My first toast')}>"}
                  </span>
                  {"\n"}
                  {"          "}Give me a Toast{"\n"}
                  {"      </"}
                  <span className="text-[#FFCB6B]">button</span>
                  {">\n"}
                  {"    </"}
                  <span className="text-[#FFCB6B]">div</span>
                  {">\n"}
                  {"  "});{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid var(--borderColor)",
        }}
        className="text-end   mx-auto flex justify-around py-5 "
      >
        <Link
          href={"/docs/installation"}
          className="flex text-blue-600 items-center justify-end  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          Installation{" "}
        </Link>
        <Link
          href={"/docs/types"}
          className="flex text-blue-600 items-center justify-end  "
        >
          Types{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
