function Curve() {
  return (
    <div>
      <div className="bg-white p-4">
        <div className="bg-white flex items-center justify-between my-2">
          <span className="text-2xl  ">طلبات الشراء</span>
          <img src="/src/assets/curve.png" alt="curve" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-4 mt-20 mb-5 ">
          {/* First Column */}
          <div className="w-full  flex items-center justify-between px-2 bg-white">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#E8EAF6]  ">
              <img
                className="w-[32px] h-[32px]"
                src="/src/assets/Time.png"
                alt="Payments"
              />
            </div>
            <div className="flex flex-col items-start ">
              <span className="text-black text-2xl  font-semibold my-1 m-auto">
                15
              </span>
              <p className="rounded-[100px] w-full border-[2px] border-[#BDBDBD] text-[14px] p-2  font-normal">
                {" "}
                قيد الارسال(مسودة)
              </p>
            </div>
            <div className="w-[2px] bg-[#D9DAF2] h-20"></div>
          </div>

          {/* Second Column */}
          <div className="w-full  flex items-center justify-between px-2 bg-white">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#FFF2EE]">
              <img
                className="w-[32px] h-[32px]"
                src="/src/assets/progress.png"
                alt="Payments"
              />
            </div>

            <div className="flex flex-col items-start">
              <span className="text-black text-2xl  font-semibold my-1 m-auto">2</span>
              <p className="rounded-[100px] w-full border-[2px] border-[#0288D1] p-2 text-[#0288D1]  font-normal">
                قيد الانتظار
              </p>
            </div>
            <div className="w-[2px] bg-[#D9DAF2] h-20"></div>
          </div>

          {/* Third Column */}
          <div className="w-full  flex items-center justify-between px-2 bg-white">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#DBF0DC]">
              <img
                className="w-[32px] h-[32px]"
                src="/src/assets/Alert.png"
                alt="Payments"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-black text-2xl  font-semibold my-1 m-auto">3</span>
              <p className=" rounded-[100px] w-full border p-2 border-[#D32F2F] text-[#D32F2F]  font-normal">
                متأخرة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curve;
