"use client";
import useCopyToClipBoard from "@/app/hooks/useCopyToClipboard";
import { easeInOut, motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      variants={itemVariants}
      initial="closed"
      animate="open"
      className="md:p-4  w-full mt-40 flex flex-col font-mono  items-center justify-center"
    >
      <div className="w-[90%] lg:w-1/2">
        <h2 className="font-mono  mb-2 text-xl font-semibold tracking-tighter  ">
          Installation
        </h2>

        <code
          style={{
            border: "1px solid var(--borderColor)",
          }}
          className="bg-black/[.05] flex font-mono  items-center justify-between gap-5 rounded-md   dark:bg-white/[.06] px-4 py-3 "
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
        className=" mt-10 mb-4 w-[90%]  xl:w-1/2"
      >
        <div className="py-10">
          <h2 className="font-semibold  mb-2 text-2xl">Usage</h2>

          <p className="dark:text-[#c1c1c6]">
            Render the toaster in the root of your app.
          </p>

          <div className="bg-[#FCFCFC] mt-5  border dark:bg-[#0a0a0a] dark:border-[#2e2e2d] dark:text-white   border-[#e4e4e7] flex justify-between items-center p-2 px-5 rounded-md">
            <div className="text-xs lg:text-sm">
              <p className="codeBlock">
                <span className="dark:text-[#a34160] font-semibold codeBlock">
                  import
                </span>{" "}
                {"      { Toaster, toast }    "}
                <span className="dark:text-[#a34160] font-semibold codeBlock">
                  from
                </span>{" "}
                <span className="dark:text-[#5db56d]">{"   'buzzly'  "}</span>
              </p>
              <p className="my-3">{"// ..."}</p>
              <p className="my-3 codeBlock ">
                <span className="dark:text-[#c84e74] font-semibold">
                  function
                </span>
                <span className="dark:text-[#9a63c1]">{" App() {"}</span>
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
