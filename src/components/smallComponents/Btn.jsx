import React from "react";

function Btn(props) {
  return (
    <button className="border border-zinc-100/30 h-10 px-5 ">
      <div className="flex flex-col uppercase text-sm ">{props.name}</div>
    </button>
  );
}

export default Btn;
