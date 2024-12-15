import React from "react";
import MainCardInfo from "./MainCardInfo";
import AverageOrder from "./AverageOrder";
import Curve from "./Curve";

const MainGrid: React.FC = () => {
  const data = [
    {
      total: "قيمة أوامر الشراء",
      price: "225.5$",
      time: "خلال آخر شهر",

      img: "/src/assets/Payments.png",
      color: "[#E0F2F1]",
    },
    {
      total: "  قيمة طلبات الشراء",
      price: "320.25$",
      time: "آخر ١٠ ايام",
      img: "/src/assets/Dollar.png",
      color: "[#FFF2EE]",
    },
    {
      total: "  قيمة المشتريات",
      price: "1542.25$",
      time: " خلال آخر أسبوع ",
      img: "/src/assets/chart.png",
      color: "[#F0FAFF]",
    },
    // Add more items as needed
  ];
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-20">
        {/* Curve: Takes 7 columns */}
        <div className="col-span-7">
          <Curve />
        </div>

        {/* Average Order: Takes 5 columns */}
        <div className="col-span-5">
          <AverageOrder />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-20">
        {data.map((item, index) => (
          <div key={index} className="col-span-12 md:col-span-6 xl:col-span-4">
            <MainCardInfo
              total={item.total}
              price={item.price}
              time={item.time}
              img={item.img}
              color={item.color}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MainGrid;
