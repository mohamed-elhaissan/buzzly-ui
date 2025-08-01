'use client'


import Link from "next/link";
import {easeInOut, motion} from "framer-motion"
export default function Page() {
  return (
    <motion.div
    variants={itemVariants}
    initial="closed"
    animate="open"
    className="p-4 flex flex-col justify-evenly h-full  gap-5  ">
      <div
        className="p-4"
        style={{
          borderTop: "1px solid var(--borderColor)",
        }}
      >
        <h1 className="text-3xl my-5 font-bold">Introduction</h1>
        <p className="text-zinc-400 mt-2 font-medium">
          Welcome to Buzzly — a lightweight, customizable, and modern toast
          notification library for React. Whether you're building a small
          project or a full-scale application, Buzzly makes it easy to display
          beautiful toast messages with smooth animations, clean API, and full
          TypeScript support.
        </p>
      </div>
      <div
        className="p-4"
        style={{
          borderTop: "1px solid var(--borderColor)",
        }}
      >
        <h2 className="text-3xl font-semibold my-5">Why Buzzly?</h2>
        <p>Buzzly is built for developers who want: </p>
        <ul className="text-zinc-400 list-disc mx-10">
          <li>Fast, zero-hassle toast notifications</li>
          <li>Fully customizable design using Tailwind CSS</li>
          <li>Smooth animations powered by Framer Motion</li>
          <li> Type-safe and intuitive API with TypeScript</li>
          <li>Easy integration with any React project</li>
          <li>Open-source and actively maintained</li>
        </ul>
        <p
          className="opacity-55 mt-5 text-sm inline"
          style={{
            border: "1px solid var(--borderColor) ",
          }}
        >
          From success messages to error alerts, Buzzly helps you create a
          polished user experience in seconds.
        </p>
      </div>
      <div className="text-end  w-1/2 mx-auto ">
        <Link
          href={"/docs/installation"}
          className="flex text-blue-600 items-center justify-end  "
        >
          Installation{" "}
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