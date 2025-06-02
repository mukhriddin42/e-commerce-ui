import React from "react";

const Loader = () => {
  return (
    <>
      <div className="absolute w-full min-h-[100vh] flex justify-center items-center">
        <span className="loader"></span>
      </div>
    </>
  );
};

export default Loader;
