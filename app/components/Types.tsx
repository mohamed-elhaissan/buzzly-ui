"use client";

import { useState } from "react";
import { motion, easeInOut } from "framer-motion";

interface TypesSnippet {
  name: string;
  snippet: string;
  tag: string;
}

const Types = () => {
  const [isActivatedButton, setIsActivatedButton] = useState<TypesSnippet>(
    allTypes[0]
  );
  const [isCLickedButton, setIsCLickedButton] = useState<number>(0);

  return (
    <section className="md:w-1/3 mb-4 sm:w-[80%] xl:w-1/2 2xl:w-1/3">
      <div>
        <motion.h1
          variants={itemVariants}
          initial="closed"
          animate="open"
          className="text-2xl font-bold text-blue-600"
        >
          Types
        </motion.h1>
        <motion.p
          variants={itemVariants}
          initial="closed"
          animate="open"
          className="text-gray-500"
        >
          Types are used to define the type of the data that is being passed to
          the component.
        </motion.p>

        <div className="mt-4   flex items-center gap-3  flex-wrap w-full">
          {allTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="closed"
              animate="open"
            >
              <button
                onClick={() => {
                  setIsCLickedButton(index);
                  setIsActivatedButton(type);
                }}
                style={{
                  background: isCLickedButton === index ? "#ffffff" : "#1D1D1D",
                  color: isCLickedButton === index ? "black" : "#fff",
                }}
                className="codeText text-sm    text-white  hover:opacity-50 transition duration-75 ease-in p-2 px-4 rounded cursor-pointer  "
              >
                {type.name}
              </button>
            </motion.div>
          ))}
          {
            <motion.div
              variants={itemVariants}
              initial="closed"
              animate="open"
              className=" mt-5 w-full border bg-[#111111] border-[#2e2e2d] text-white flex justify-between items-center py-4 px-5 rounded"
            >
              {isActivatedButton.snippet ? (
                <motion.p
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="codeBlock text-sm"
                >
                  <span className="text-[#77dddd]">toast</span>
                  <span className="text-[#F07178]">
                    .{isActivatedButton.tag}
                  </span>
                  <span className="text-[#C3E88D]">
                    {isActivatedButton.snippet}
                  </span>
                </motion.p>
              ) : (
                <motion.p
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="codeBlock text-sm text-[#F07178]"
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
};
export default Types;

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

const allTypes = [
  {
    name: "Default",
    tag: "normal",
    snippet: `('Event has been created')`,
  },
  {
    name: "Success",
    tag: "success",
    snippet: `('Event has been created')`,
  },
  {
    name: "Info",
    tag: "info",
    snippet: `('Be at the area 10 minutes before the event time')`,
  },
  {
    name: "Warning",
    tag: "warning",
    snippet: `('Event start time cannot be earlier than 8am')`,
  },
  {
    name: "Error",
    tag: "error",
    snippet: `('Event has not been created')`,
  },
];
