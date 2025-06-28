import { Link } from "react-router-dom";
import githubSvg from "../assets/github.svg";
import darkModeActiverSvg from "../assets/darkmodeactiver.svg";
import containerSVG from "../assets/container.svg";
const Home = () => {
  return (
    <header className="flex w-full font-medium  justify-between container mx-auto p-4">
      <div>
        <Link to={"/docs"} className="inline-flex items-center justify-center   h-8 rounded-md gap-1.5 px-3 transition-all hover:bg-[var(--)]">Docs</Link>
      </div>
      <div className="flex ">
        <button>Search Docs</button>
        <div />
        <Link to={"github"}>
          <img src={githubSvg} alt="" className="w-7 h-7"/>
          10.8k
        </Link>
        <button>
          <img src={containerSVG} alt="" />
        </button>
        <button>
          <img src={darkModeActiverSvg} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Home;
