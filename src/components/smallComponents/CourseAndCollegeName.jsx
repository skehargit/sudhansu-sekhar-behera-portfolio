import React from "react";

function CourseAndCollegeName(props) {
  return (
    <div className={`w-3/4 flex flex-col text-${props.textPosition} px-5 relative z-[2]`}>
      <p className="">{props.courseName}</p>
      <p className="text-sm text-zinc-400">{props.collegeName}</p>
    </div>
  );
}

export default CourseAndCollegeName;
