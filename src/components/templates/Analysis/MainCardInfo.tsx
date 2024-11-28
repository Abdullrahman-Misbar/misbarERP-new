import React from "react";

interface MainCardInfoProps {
  total: string | number;
  price: string | number;
  time: string;
  img: string; // Assuming this is a path to the image
  color: string; // Color for the background
}

const MainCardInfo: React.FC<MainCardInfoProps> = ({
  total,
  price,
  time,
  img,
  color,
}) => {
  return (
    <div className="min-w-[350px] min-h-[152px] flex items-center justify-between p-6 bg-white rounded-md">
      <div className="flex flex-col items-start">
        <p className="text-light font-somar font-somar">{total}</p>
        <span className="text-black text-2xl font-somar font-semibold my-1">
          {price}
        </span>
        <p className="text-light font-somar font-normal">{time}</p>
      </div>
      <div
        className={`w-20 h-20 flex items-center justify-center rounded-full bg-${color} `}
      >
        <img className="!size-12" src={img} alt="Payments" />
      </div>
    </div>
  );
};

export default MainCardInfo;
