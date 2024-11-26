import React from "react"

type LayoutMainData_TP = {
  children: React.ReactNode
}
function LayoutMainData({ children }: LayoutMainData_TP) {
  return (
    <div className="p-3 bg-white rounded-md">
      <div>icons function</div>
      <div className="">{children}</div>
    </div>
  )
}

export default LayoutMainData
