import Link from "next/link";

interface IFooterLinks {
  prevPageText: string;
  prevPageHref: string;
  nextPageText: string;
  nextPageHref: string;
}

export default function FooterLinks({
  prevPageText,
  prevPageHref,
  nextPageText,
  nextPageHref,
}: IFooterLinks) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--borderColor)",
      }}
      className="text-end hidden    mx-auto md:flex justify-around py-5 "
    >
      <Link
        href={prevPageHref}
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
        {prevPageText}
      </Link>
      <Link
        href={nextPageHref}
        className="flex text-blue-600 items-center justify-end  "
      >
        {nextPageText}
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
  );
}
