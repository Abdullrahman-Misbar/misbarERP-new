import React from "react";
import BaseInputSkeleton from "./BaseInputSkeleton";
import TableSkeleton from "./TableSkeleton";

export default function AddLayoutSkeleton() {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
        <BaseInputSkeleton />
      </div>
      <div>
        <TableSkeleton />
      </div>
    </>
  );
}
