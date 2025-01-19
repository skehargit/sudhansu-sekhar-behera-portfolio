import React from "react";

const HorizontalScroll = () => {
  return (
    <div className="relative bg-gray-900 text-white overflow-y-auto">

      {/* Sticky red box */}
      <div className="bg-red-500 h-screen w-full sticky top-0 flex items-center justify-center z-10">
        <h1 className="text-3xl font-bold">I'm Sticky!</h1>
      </div>

      {/* Scrollable content */}
      <div className="h-[100vh] bg-blue-500 flex sticky top-0 items-center justify-center">
        <h2 className="text-2xl">Scroll Content Below</h2>
      </div>

      <div className="h-[100vh] bg-green-500 flex sticky top-0 items-center justify-center">
        <h2 className="text-2xl">Scroll Content Below</h2>
      </div>

      <div className="h-[100vh] bg-purple-500 flex sticky top-0 items-center justify-center">
        <h2 className="text-2xl">Scroll Content Below</h2>
      </div>

      <div className="h-[100vh] bg-yellow-500 flex sticky top-0 items-center justify-center">
        <h2 className="text-2xl">More Scroll Content</h2>
      </div>

    </div>
  );
};

export default HorizontalScroll;




{/* <div className='bg-green-500 h-screen w-screen'></div>
        <div className='bg-blue-500 h-screen w-screen'></div> */}