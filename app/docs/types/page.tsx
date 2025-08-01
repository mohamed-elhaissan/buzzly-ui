import Others from "@/app/components/Others";
import Types from "@/app/components/Types";
import Positions from "@/app/components/Positions";

export default function Page() {
  return (
    <div className="p-4 mt-10 flex flex-col gap-10 ">
      <Types />
      <Positions />
      <Others />
    </div>
  );
}
