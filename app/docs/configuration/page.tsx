import dynamic from "next/dynamic";
import FooterLinks from "@/app/components/FooterLinks";

const Positions = dynamic(() => import("@/app/components/Positions"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded"></div>,
});
const Types = dynamic(() => import("@/app/components/Types"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded"></div>,
});

const Others = dynamic(() => import("@/app/components/Others"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded"></div>,
});

export default function Page() {
  return (
    <div className="p-4 mt-10 flex flex-col gap-10">
      <Types />

      <Positions />
      <Others />

      <FooterLinks
        prevPageHref="/docs"
        prevPageText="Introduction"
        nextPageHref="/docs/installation"
        nextPageText="Installation" 
      />
    </div>
  );
}
