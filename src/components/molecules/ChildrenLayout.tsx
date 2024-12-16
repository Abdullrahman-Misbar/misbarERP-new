import React from "react";

type ChildrenLayout_TP = {
  children: React.ReactNode;
};
function ChildrenLayout({ children }: ChildrenLayout_TP) {
  return <div className="mt-5 bg-white rounded-xl p-5">{children}</div>;
}

export default ChildrenLayout;
