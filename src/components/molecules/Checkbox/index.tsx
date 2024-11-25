import { useIsRTL } from "../../../hooks/useIsRTL"
import { Label } from "../../atoms/Label"
import { BaseInput } from "../../atoms/inputs/Base"
interface CheckboxProps_TP extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
  id?: string
}

type Props_TP = {
  [key: string]: any
}

export const Checkbox = ({
  label,
  name,
  id,
  className,
  disabled,
  checked,
  ...props
}: CheckboxProps_TP & Props_TP) => {
  const isRTL = useIsRTL()
  const marginClass = isRTL ? "mr-2" : "ml-2"
  return (
    <div className="flex items-center">
      <BaseInput
        id={id}
        className={className}
        {...{
          ...props,
          type: "checkbox",
          name,
          disabled,
          checked,
        }}
      />
      <Label
        htmlFor={(id || name) as string}
        className={marginClass}
        // className={`${marginClass} ${className ? className : ""}`}
      >
        {label}
      </Label>
    </div>
  )
}
