"use client";
import { useState } from "react";
import { motion, easeInOut } from "framer-motion";

interface TypesSnippet {
  name: string;
  snippet: string;
  tag: string;
}

const Others = () => {
  const [isActivatedButton, setIsActivatedButton] = useState<TypesSnippet>(
    allTypes[0]
  );
  const [isCLickedButton, setIsCLickedButton] = useState<number>(0);

  return (
    <section className="w-[90%] lg:w-1/2">
      <div>
        <motion.h1
          variants={itemVariants}
          initial="closed"
          animate="open"
          className="text-2xl font-bold "
        >
          Others
        </motion.h1>
        <motion.p
          variants={itemVariants}
          initial="closed"
          animate="open"
          className="dark:text-[#c1c1c6] font-mono"
          style={{
            wordSpacing : '-0.1rem'
          }}
        >
          You can use more options to customize the toast.
        </motion.p>

        <motion.div className="mt-4   flex items-center gap-3 font-mono  flex-wrap w-full">
          {allTypes.map((item, index) => (
            <motion.div
              variants={itemVariants}
              initial="closed"
              animate="open"
              key={index}
            >
              <button
                onClick={() => {
                  setIsCLickedButton(index);
                  setIsActivatedButton(item);
                }}
                style={{
                  background: isCLickedButton === index ? "#ffffff" : "#1D1D1D",
                  color: isCLickedButton === index ? "black" : "#fff",
                }}
                className="codeText text-sm    hover:bg-[#F3F3F3] transition duration-75 ease-in p-2 px-4 rounded cursor-pointer "
              >
                {item.name}
              </button>
            </motion.div>
          ))}
          {
            <motion.div
              variants={itemVariants}
              initial="closed"
              animate="open"
              className="bg-[#171716] text-white border-[#2e2e2d] border mt-5 w-full  flex justify-between items-center py-4 px-5 rounded"
            >
              {isActivatedButton.snippet ? (
                <motion.span
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="codeBlock text-sm"
                >
                  <span className="dark:text-[#4c9beb]">toast</span>
                  <span className="dark:text-[#bf7af0]">
                    .{isActivatedButton.tag}
                  </span>
                  <span className="dark:text-[#5eb76e]">
                    {isActivatedButton.snippet}
                  </span>
                  <pre>
                    <code className="text-[#6f6f6f ] codeText">
                      {"\n"}
                      {`// ...\n`}
                      {"<"}
                      <span className="text-[#ffcc66]">Toaster </span>
                      <span className="text-[#77dddd]">richColors</span>
                      {" />"}
                    </code>
                  </pre>
                </motion.span>
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
        </motion.div>
      </div>
    </section>
  );
};
export default Others;

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
