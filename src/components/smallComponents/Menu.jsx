import React from "react";
import './Menu.css'
const Menu = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        hidden=""
        class="check-icon absolute z-[2] h-full w-full opacity-0"
        id="check-icon"
        name="check-icon"
        type="checkbox"
      />
      <label class="icon-menu absolute z-[1]" for="check-icon">
        <div class="bar bar--1"></div>
        <div class="bar bar--2"></div>
        <div class="bar bar--3"></div>
      </label>
    </div>
  );
};

export default Menu;
