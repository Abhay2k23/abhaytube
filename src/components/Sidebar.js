import React from "react";
import { useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import Subscriptions from "./svg/Subscriptions";
import You from "./svg/You";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  //   return (
  //     <IconContext.Provider value={{ size: "24" }}>
  //       <div className="w-[10rem] shadow-lg p-5 pt-5">
  //         <ul className="px-5 font-semibold pt-5">
  //           <li className="pt-2 justify-evenly">
  //             <Link to="/">
  //               <GoHomeFill />
  //               Home{" "}
  //             </Link>
  //           </li>
  //           <li className="pt-2 justify-evenly">
  //             <SiYoutubeshorts />
  //             Shorts
  //           </li>
  //           <li className="pt-2 pl-[-0.4rem] justify-evenly">
  //             <Subscriptions />
  //             Subscriptions
  //           </li>
  //           <li className="pt-2 pr-[-0.3rem] justify-evenly">
  //             <You />
  //             You
  //           </li>
  //         </ul>
  //       </div>
  //     </IconContext.Provider>
  //   );
  return (
    <IconContext.Provider value={{ size: "24" }}>
      <div className="w-56 shadow-lg p-5 pt-5">
        <ul className="px-5 font-semibold pt-5">
          <Link to="/">
            <li className="pt-2 flex justify-evenly">
              <GoHomeFill />
              Home
            </li>
          </Link>

          <li className="pt-2 flex justify-evenly">
            <SiYoutubeshorts />
            Shorts
          </li>
          <li className="pt-2 flex pl-[1.5rem] justify-evenly">
            <Subscriptions />
            Subscriptions
          </li>
          <li className="pt-2 flex pr-[1.7rem] justify-evenly">
            <You />
            You
          </li>
        </ul>

        <ul className="px-5 font-semibold pt-5">
          <li className="pt-2">Your Channel</li>
          <li className="pt-2">History</li>
          <li className="pt-2">Your Videos</li>
          <li className="pt-2">Watch Later</li>
          <li className="pt-2">Show More</li>
        </ul>
      </div>
    </IconContext.Provider>
  );
};

export default SideBar;
