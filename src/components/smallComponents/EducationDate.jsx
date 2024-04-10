import React from "react";

function EducationDate(props) {
  return (
    <div className="flex flex-col w-1/4   items-center py-2 relative z-[2]">
      <span className="text-5xl font-semibold text-zinc-700">{props.date}</span>
      <span className="text-zinc-600 font-semibold">{props.fullDate}</span>
    </div>
  );
}

export default EducationDate;
