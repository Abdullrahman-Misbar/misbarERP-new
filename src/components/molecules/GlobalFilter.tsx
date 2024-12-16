import React, { useState } from "react";
import FilterIcon from "../atoms/icons/FilterIcon";
import GroupByIcon from "../atoms/icons/GroupByIcon";
import CoordinationIcon from "../atoms/icons/CoordinationIcon";
import QrcodeIcon from "../atoms/icons/QrcodeIcon";
import VerticalLinesIcon from "../atoms/icons/VerticalLinesIcon";
import FilterMenu from "./FilterMenu";
import GroupByMenu from "./GroupByMenu";
import CoordinationMenu from "./CoordinationMenu"; // Import the CoordinationMenu component

const GlobalFilter = () => {
  const [filterMenuAnchor, setFilterMenuAnchor] = useState<null | HTMLElement>(
    null
  );
  const [groupByMenuAnchor, setGroupByMenuAnchor] =
    useState<null | HTMLElement>(null);
  const [coordinationMenuAnchor, setCoordinationMenuAnchor] =
    useState<null | HTMLElement>(null); // State for "التنسيقات" menu

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

  const handleCoordinationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCoordinationMenuAnchor(event.currentTarget); // Open the "التنسيقات" menu
  };

  const handleCoordinationMenuClose = () => {
    setCoordinationMenuAnchor(null); // Close the "التنسيقات" menu
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
          <span className="text-primary">فلتر</span>
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
          <span className="text-primary">تجميع حسب</span>
        </button>
        <GroupByMenu
          anchorEl={groupByMenuAnchor}
          open={Boolean(groupByMenuAnchor)}
          onClose={handleGroupByMenuClose}
        />

        {/* التنسيقات Button with Menu */}
        <button
          onClick={handleCoordinationMenuOpen} // Trigger the CoordinationMenu
          className="flex items-center px-6 py-2 border border-[#3F51B5] text-blue-500 rounded-md hover:bg-blue-50 transition gap-2"
        >
          <CoordinationIcon />
          <span className="text-primary">التنسيقات</span>
        </button>
        <CoordinationMenu
          anchorEl={coordinationMenuAnchor}
          open={Boolean(coordinationMenuAnchor)}
          onClose={handleCoordinationMenuClose} // Close the menu
        />
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
