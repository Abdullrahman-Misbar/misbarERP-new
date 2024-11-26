import React from "react"
import BaseInputField from "../../atoms/Label/formik/BaseInputField"

function MainData() {
  return (
    <div className="w-1/2 m-auto mt-20">
      <BaseInputField name="email" label="البريد الالكتروني" type="email" />
    </div>
  )
}

export default MainData
