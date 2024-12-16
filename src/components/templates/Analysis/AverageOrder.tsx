function AverageOrder() {
  return (
    <div className="bg-white !rounded-md  flex flex-col item-center justify-center h-full  ">
      <div className=" w-full flex items-center justify-between p-6 bg-white ">
        <div className="flex flex-col items-start">
          <span className="text-black text-2xl  font-semibold my-1">
            1542.25
          </span>
          <p className="text-light  font-normal">متوسط قيمة الطلب</p>
        </div>
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#FFF2EE] ">
          <img src="/assets/avrage.png" alt="Payments" />
        </div>
      </div>
      {/* sec0nd card  */}
      <div className="w-[90%] h-px m-auto bg-[#B3B4E5]"></div>
      <div className=" w-full flex items-center justify-between p-6 bg-white ">
        <div className="flex flex-col items-start">
          <span className="text-black text-2xl font-semibold my-1">6 أيام</span>
          <p className="text-light font-normal">المهلة للشراء</p>
        </div>
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#E8EAF6] ">
          <img src="/assets/graph.png" alt="Payments" />
        </div>
      </div>
    </div>
  );
}

export default AverageOrder;
