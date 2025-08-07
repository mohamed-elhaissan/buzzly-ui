"use client";
import useCopyToClipBoard from "@/app/hooks/useCopyToClipboard";
import { easeInOut, motion } from "framer-motion";

export default function Page() {

  return (
    <motion.div
      variants={itemVariants}
      initial="closed"
      animate="open"
      className="md:p-4 w-full mt-40 flex flex-col  items-center justify-center"
    >
      <div className="w-[40%]">
        <h2 className="font-mono  mb-2 text-xl font-semibold tracking-tighter  ">
          Installation
        </h2>

        <code
          style={{
            border: "1px solid var(--borderColor)",
          }}
          className="bg-black/[.05] flex font-mono  items-center justify-between gap-5    dark:bg-white/[.06] px-4 py-3 "
        >
          <code>
            <span className="dark:text-[#52c3f1]">npm</span>{" "}
            <span className="dark:text-[#189b6a]">install buzzly</span>
          </code>
        </code>
      </div>
      <div
        style={{
          borderTop: "1px solid var(--borderColor)",
        }}
        className=" mt-10 mb-4  w-[40%]"
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
