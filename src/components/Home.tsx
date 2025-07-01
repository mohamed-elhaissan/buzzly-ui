import { Link } from "react-router-dom";
import githubSvg from "../assets/github.svg";
import darkModeActiverSvg from "../assets/darkmodeactiver.svg";
import containerSVG from "../assets/container.svg";
const Home = () => {
  return (
    <header className="flex w-full font-medium  justify-between container mx-auto p-4">
      <div>
        <Link
          to={"/docs"}
          className="inline-flex items-center justify-center text-2xl font-extrabold   h-8 rounded-md gap-1.5 px-3 transition-all hover:bg-[var(--)]"
        >
          Buzzly
        </Link>
      </div>
      <div className="flex   items-center  w-1/8">
        <Link to={"github"} className="flex-1  hover:bg-[#171717]  p-2">
          <img src={githubSvg} alt="" className="h-10   rounded-full" />
        </Link>
        <button className="flex-1  hover:bg-[#171717]  p-2">
          <img src={containerSVG} alt="" className="h-10 w-10 hover:bg-[#171717] p-2 rounded-full" />
        </button>
        <button className="flex-1  hover:bg-[#171717]  p-2">
          <img src={darkModeActiverSvg} alt="" className="h-10 w-10 hover:bg-[#171717] p-2 rounded-full" />
        </button>
      </div>
    </header>
  );
};

export default Home;
