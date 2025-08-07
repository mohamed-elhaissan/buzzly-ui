"use client";

import { motion, easeInOut } from "framer-motion";
import { useState } from "react";

export default function Position() {
  const [activatedButton, setActivatedButton] = useState<string>(positions[0]);
  const [isCLickedButton, setIsCLickedButton] = useState<number>(0);
  return (
    <section className="mb-4 w-[90%] xl:w-1/2">
      <div>
        <motion.h1
          variants={itemVariants}
          initial="closed"
          animate="open"
          className="text-2xl font-bold  "
        >
          Positions
        </motion.h1>
        <motion.p
          variants={itemVariants}
          initial="closed"
          animate="open"
          className="dark:text-[#c1c1c6] font-mono"
          style={{
            wordSpacing: "-0.1rem",
          }}
        >
          Swipe direction changes depending on the position.
        </motion.p>

        <div className="mt-4   flex items-center font-mono  gap-x-3 gap-y-2 flex-wrap w-full">
          {positions.map((position: string, index: number) => (
            <motion.div
              variants={itemVariants}
              initial="closed"
              animate="open"
              key={index}
            >
              <button
                style={{
                  background: isCLickedButton === index ? "white" : "#1D1D1D",
                  color: isCLickedButton === index ? "black" : "#fff",
                }}
                onClick={() => {
                  setIsCLickedButton(index);
                  setActivatedButton(position);
                }}
                className="codeText text-sm   hover:bg-[#F3F3F3] transition duration-75 ease-in p-2 px-4 rounded cursor-pointer  "
              >
                {position}
              </button>
            </motion.div>
          ))}
          {
            <motion.div
              variants={itemVariants}
              initial="closed"
              animate="open"
              className=" text-white  mt-5 w-full border bg-[#111111] border-[#2e2e2d]  flex justify-between items-center py-4 px-5 rounded"
            >
              {activatedButton ? (
                <motion.p
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="codeBlock text-white text-sm"
                >
                  {"<"}
                  <span className="dark:text-[#5ab170]">Toaster </span>
                  <span className="dark:text-[#9166c8]">position=</span>
                  {`{"`}
                  <span className="dark:text-[#448c69]">{activatedButton}</span>
                  {`"} />`}
                </motion.p>
              ) : (
                <motion.p
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="codeBlock text-sm text-red-500"
                >
                  Oops! Something went wrong
                </motion.p>
              )}
            </motion.div>
          }
        </div>
      </div>
    </section>
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
const positions = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];
