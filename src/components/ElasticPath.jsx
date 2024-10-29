// ElasticPath.js
import React from "react";
import gsap from "gsap";

const ElasticPath = () => {
  const elasticMouseLeaveHandler = () => {
    gsap.to("#path", {
      attr: { d: `M 10 80 Q 250 80 490 80` },
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const elasticMouseMoveHandler = (x, y) => {
    gsap.to("#path", {
      attr: { d: `M 10 80 Q ${x} ${y} 490 80` },
      duration: 0.4,
      ease: "power3.out",
      overwrite: true,
    });
  };

  return (
    <div className="w-full h-[160px] px-[5vw] flex flex-col items-center justify-center overflow-hidden">
      <svg
        onMouseMove={(event) =>
          elasticMouseMoveHandler(
            event.nativeEvent.offsetX,
            event.nativeEvent.offsetY
          )
        }
        onMouseLeave={elasticMouseLeaveHandler}
        className="overflow-hidden"
        width="500"
        height="160"
      >
        <path
          id="path"
          d={`M 10 80 Q 250 80 490 80`}
          stroke="white"
          fill="transparent"
        />
      </svg>
      <svg
        onMouseMove={(event) =>
          elasticMouseMoveHandler(
            event.nativeEvent.offsetX,
            event.nativeEvent.offsetY
          )
        }
        onMouseLeave={elasticMouseLeaveHandler}
        className="absolute translate-y-5"
        width="500"
        height="160"
      >
        <path
          id="path"
          d={`M 10 80 Q 250 80 490 80`}
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default ElasticPath;
