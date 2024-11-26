import React, { useState } from "react";
import FilterIcon from "../../assets/icon/FilterIcon";
import GroupByIcon from "../../assets/icon/GroupByIcon";
import CoordinationIcon from "../../assets/icon/CoordinationIcon";
import QrcodeIcon from "../../assets/icon/QrcodeIcon";
import VerticalLinesIcon from "../../assets/icon/VerticalLinesIcon";
import FilterMenu from "./FilterMenu";
import GroupByMenu from "./GroupByMenu";

const GlobalFilter = () => {
  const [filterMenuAnchor, setFilterMenuAnchor] = useState<null | HTMLElement>(
    null
  );
  const [groupByMenuAnchor, setGroupByMenuAnchor] =
    useState<null | HTMLElement>(null);

  const handleFilterMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setFilterMenuAnchor(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setFilterMenuAnchor(null);
  };

  const handleGroupByMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setGroupByMenuAnchor(event.currentTarget);
  };

  const handleGroupByMenuClose = () => {
    setGroupByMenuAnchor(null);
  };

  return (
    <div className="flex justify-between items-center p-4">
      {/* First Group */}
      <div className="flex space-x-reverse space-x-2 items-center">
        {/* Filter Button with Menu */}
        <button
          onClick={handleFilterMenuOpen}
          className="flex items-center px-4 py-2 border border-[#3F51B5] text-blue-500 rounded-md hover:bg-blue-50 transition gap-2"
        >
          <FilterIcon />
          <span className="font-somar">فلتر</span>
        </button>
        <FilterMenu
          anchorEl={filterMenuAnchor}
          open={Boolean(filterMenuAnchor)}
          onClose={handleFilterMenuClose}
        />

        {/* Group by Button with Menu */}
        <button
          onClick={handleGroupByMenuOpen}
          className="flex items-center px-4 py-2 border border-[#3F51B5] text-blue-500 rounded-md hover:bg-blue-50 transition gap-2"
        >
          <GroupByIcon />
          <span className="font-somar">تجميع حسب</span>
        </button>
        <GroupByMenu
          anchorEl={groupByMenuAnchor}
          open={Boolean(groupByMenuAnchor)}
          onClose={handleGroupByMenuClose}
        />

        {/* Settings Button */}
        <button
          onClick={handleGroupByMenuOpen}
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
