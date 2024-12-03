import React, { useState } from "react";
import Overview from "../molecules/Overview";
import BaseInputSearch from "../atoms/formik/BaseInputSearch";
import Filter from "./PURCHASE/PurchaseRequest/Filter";
import MainCardInfo from "./Analysis/MainCardInfo";
import Analysis from "./Analysis/Analysis";

function MainHome() {
  const [word, setWord] = useState("");
  return (
    <div>
      <Overview />
      <div className="px-6  py-4 my-5 bg-white  rounded-md">
        <p className="text-xl f pb-3 ">التصفيات</p>
        <BaseInputSearch placeholder="بحث سريع" name="" setWord={setWord} />
        <Filter />
      </div>
      <Analysis />
    </div>
  );
}

export default MainHome;
