import React, { useState } from "react";
import FilterIcon from "../../assets/icon/FilterIcon";
import GroupByIcon from "../../assets/icon/GroupByIcon";
import CoordinationIcon from "../../assets/icon/CoordinationIcon";
import QrcodeIcon from "../../assets/icon/QrcodeIcon";
import VerticalLinesIcon from "../../assets/icon/VerticalLinesIcon";
import FilterMenu from "./FilterMenu";

const GlobalFilter = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <div className="flex justify-between items-center p-4">
      {/* First Group */}
      <div className="flex space-x-reverse space-x-2 items-center">
        {/* Filter Button with Menu */}
        <button
          onClick={handleMenuOpen}
          className="flex items-center px-4 py-2 border border-[#3F51B5] text-blue-500 rounded-md hover:bg-blue-50 transition gap-2"
        >
          <FilterIcon />

          <span className="font-somar">فلتر</span>
        </button>

        <FilterMenu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        />

        {/* Group by Button */}
        <button
          onClick={handleMenuOpen}
          className="flex items-center px-4 py-2 border border-[#3F51B5] text-blue-500 rounded-md hover:bg-blue-50 transition gap-2"
        >
          <GroupByIcon />
          <span className="font-somar">تجميع حسب</span>
        </button>

        {/* Settings Button */}
        <button
          onClick={handleMenuOpen}
          className="flex items-center px-6 py-2 border border-[#3F51B5] text-blue-500 rounded-md hover:bg-blue-50 transition gap-2"
        >
          <CoordinationIcon />
          <span className="font-somar">التنسيقات</span>
        </button>
      </div>

      {/* Second Group */}
      <div className="flex space-x-reverse space-x-2 items-center">
        {/* Button 1 */}
        <button className="size-12 flex items-center px-4 py-2 border border-[#3F51B5] text-blue-500 rounded-md hover:bg-blue-50 transition gap-2">
          <GroupByIcon />
        </button>

        {/* Button 2 */}
        <button className="size-12 flex items-center px-4 py-2 border border-[#3F51B5] text-blue-500 rounded-md hover:bg-blue-50 transition gap-2">
          <QrcodeIcon />
        </button>

        {/* Button 3 */}
        <button className="size-12 flex items-center px-4 py-2 border border-[#3F51B5] text-blue-500 rounded-md hover:bg-blue-50 transition gap-2">
          <VerticalLinesIcon />
        </button>
      </div>
    </div>
  );
};

export default GlobalFilter;
