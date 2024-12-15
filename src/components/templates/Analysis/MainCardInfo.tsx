import React from "react";

const MainCardInfo: React.FC = () => {
  return (
    <>
      <div className=" grid grid-cols-2 col-span-7 gap-5">
        {/* First Card */}
        <div className="h-full w-full flex items-center justify-between p-6  bg-white rounded-md">
          <div className="flex flex-col items-start">
            <p className="text-light">قيمة المشتريات</p>
            <span className="text-black text-2xl font-semibold my-1">
              1542.25$
            </span>
            <p className="text-light font-normal">خلال آخر أسبوع</p>
          </div>
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F0FAFF]">
            <img src="/src/assets/chart.png" alt="Chart" />
          </div>
        </div>

        {/* Second Card */}
        <div className="  w-full  flex items-center justify-between  bg-white rounded-md  p-6">
          <div className="flex flex-col items-start">
            <p className="text-light">قيمة طلبات الشراء</p>
            <span className="text-black text-2xl font-semibold my-1">
              320.25$
            </span>
            <p className="text-light font-normal">آخر ١٠ ايام</p>
          </div>
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#FFF2EE]">
            <img src="/src/assets/Dollar.png" alt="Dollar" />
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="col-span-5">
        <div className=" w-full  flex items-center justify-between  bg-white rounded-md  p-6">
          <div className="flex flex-col items-start">
            <p className="text-light">قيمة أوامر الشراء</p>
            <span className="text-black text-2xl font-semibold my-1">
              225.5$
            </span>
            <p className="text-light font-normal">خلال آخر شهر</p>
          </div>
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#E0F2F1]">
            <img src="/src/assets/Payments.png" alt="Payments" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCardInfo;
