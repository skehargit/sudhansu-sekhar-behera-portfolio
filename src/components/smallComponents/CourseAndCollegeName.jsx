import React from "react";

function CourseAndCollegeName(props) {
  return (
    <div className={`w-3/4 flex flex-col text-${props.textPosition} px-5 relative z-[2] group`}>
      <div><p className="">{props.courseName}</p><hr className="w-0 group-hover:w-full duration-300" /></div>
      <p className="text-sm text-zinc-400">{props.collegeName}</p>
    </div>
  );
}

export default CourseAndCollegeName;
