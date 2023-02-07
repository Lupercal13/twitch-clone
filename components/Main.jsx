import React from "react";
import Hero from "./Hero";
import IconBar from "./IconBar";
import LiveChannels from "./LiveChannels";
import SideMenu from "./SideMenu";
import Categories from "./Categories";

const Main = () => {
  return (
    <div className="absolute left-[64px] xl:left-[220px]">
      <Hero />
      <LiveChannels />
      <IconBar />
      <Categories />
    </div>
  );
};

export default Main;
