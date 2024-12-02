import React from "react";
import OverviewSkeleton from "./OverviewSkeleton";
import PlayoffsSkelteton from "./PlayoffsSkelteton";
import TableSkeleton from "./TableSkeleton";
import AddSectionskeleton from "./AddSectionskeleton";

function LayoutSkeleton() {
  return (
    <div>
      <OverviewSkeleton />
      <PlayoffsSkelteton />
      <AddSectionskeleton />
      <TableSkeleton />
    </div>
  );
}

export default LayoutSkeleton;
