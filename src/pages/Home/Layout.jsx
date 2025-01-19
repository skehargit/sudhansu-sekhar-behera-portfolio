import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";
import HorizontalScroll from "./HorizontalScroll";

function Layout() {
  return (
    <div>
      <Hero />
      <Featured />
      {/* <HorizontalScroll/> */}
    </div>
  );
}

export default Layout;
