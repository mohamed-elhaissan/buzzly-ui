"use client";
import FooterLinks from "@/app/components/FooterLinks";
import useCopyToClipBoard from "@/app/hooks/useCopyToClipboard";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
export default function Page() {
  const { isCopied, copyToClipboard } =
    useCopyToClipBoard("npm install buzzly");
  return (
    <motion.div
      variants={itemVariants}
      initial="closed"
      animate="open"
      className="md:p-4 mt-20 "
    >
      <div className=" w-full">
        <h2 className="font-semibold  mb-2  ">Installation</h2>
        <p className="text-gray-400 text-xs text-wrap  ">
          The quickest way to Install Buzzly Notification is using
          <span className="text-white"> npm install Buzzly</span>
        </p>
        <div
          className="flex  gap-2 text-sm items-center justify-between mt-5  lg:w-1/3 px-4 py-2 bg-[#000000] "
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
          className="bg-black/[.05] flex lg:w-1/3 items-center justify-between gap-5 text-sm   dark:bg-white/[.06] font-mono  px-4 py-3 "
        >
          <code>
            <span className="text-purple-500">npm</span>{" "}
            <span className="text-green-500">install buzzly</span>
          </code>
          <button disabled={isCopied} onClick={copyToClipboard}></button>
        </code>
      </div>
      <div
        style={{
          borderTop: "1px solid var(--borderColor)",
        }}
        className=" mt-10 mb-4  xl:w-1/2 2xl:w-1/3"
      >
        <div className="py-10">
          <h2 className="font-semibold  mb-2 ">Usage</h2>

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
          <div className="bg-[#FCFCFC] border dark:bg-[#0a0a0a] dark:border-[#2e2e2d] dark:text-white   border-[#e4e4e7] flex justify-between items-center p-2 px-5 rounded">
            <div className="text-sm">
              <p className="codeBlock">
                <span className="text-pink-600 font-semibold codeBlock">
                  import
                </span>{" "}
                {"      { Toaster, toast }    "}
                <span className="text-pink-500 font-semibold codeBlock">
                  from
                </span>{" "}
                <span className="text-green-500">{"   'buzzly'  "}</span>
              </p>
              <p className="my-3">{"// ..."}</p>
              <p className="my-3 codeBlock ">
                <span className="text-[#eb5b89] font-semibold">function</span>
                <span className="text-purple-500">{" App() {"}</span>
              </p>
              <pre>
                <code className=" codeBlock">
                  {"  "}
                  <span className="text-[#eb5b89] font-semibold ">
                    return
                  </span>{" "}
                  ({"\n"}
                  {"    <"}
                  <span className="text-green-500">div</span>
                  {">\n"}
                  {"      <"}
                  <span className="text-green-500">Toaster</span> {"/> \n"}
                  {"      <"}
                  <span className="text-green-500">button</span>{" "}
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
                  <span className="text-green-500">button</span>
                  {">\n"}
                  {"    </"}
                  <span className="text-green-500">div</span>
                  {">\n"}
                  {"  "});{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <FooterLinks
        prevPageHref="/docs"
        prevPageText="Introduction"
        nextPageHref="/docs/configuration"
        nextPageText="Configuration"
      />
    </motion.div>
  );
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      ease: easeInOut,
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      ease: easeInOut,
    },
  },
};
