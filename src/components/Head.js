import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_SUGGESSTIONS } from "../utils/Constants";
import { cacheRes } from "../utils/searchSlice";

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [sugg, setSugg] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  const searchCache = useSelector((store) => store.search);
  console.log(showSugg);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSugg(searchCache[searchText]);
      }
      getSearchData();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // updatingCache
  }, [searchText]);

  const getSearchData = async () => {
    console.log("api call", searchText);
    const data = await fetch(SEARCH_SUGGESSTIONS + searchText);
    const json = await data.json();
    // console.log(json[1]);
    setSugg(json[1]);
    dispatch(cacheRes({ [searchText]: json[1] }));
  };
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col col-span-1 p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          onClick={toggleHandler}
          alt="hamburger"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="logo"
            src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="px-5 w-1/2 border border-gray-400 rounded-l-full p-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSugg(true)}
            onBlur={() => setShowSugg(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full px-5">
            🔍
          </button>
        </div>
        {showSugg && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {sugg.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
        />
      </div>
    </div>
  );
};

export default Head;
