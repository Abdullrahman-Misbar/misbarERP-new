import React from "react";
import Curve from "./Curve";
import MainCardInfo from "./MainCardInfo";
import AverageOrder from "./AverageOrder";

const Analysis: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 ">
        <div className="col-span-7">
          <Curve />
        </div>

        <div className="col-span-5">
          <AverageOrder />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5  mt-5">
        <MainCardInfo />
      </div>
    </>
  );
};

export default Analysis;
