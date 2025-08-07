import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen font-mono flex flex-col items-center justify-center text-center bg-black text-white p-6">
      <h2 className="text-2xl mb-2 font-semibold text-amber-500">
        Page Not Found
      </h2>
      <p className=" text-gray-400">
        Sorry, we couldn't find the page you're looking for
      </p>
      <Link href={"/"} className="text-white">
        {" "}
        Go home{" "}
      </Link>
    </div>
  );
}
