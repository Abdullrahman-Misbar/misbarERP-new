import { FaSpinner } from "react-icons/fa"
import { Spinner } from "../UI/Spinner"

type Button_TP = {
  text: string
  type: "button" | "submit"
  isPending?: boolean
  disabled?: boolean
  action?:()=>void
}
function Button({ text, type, isPending , disabled , action }: Button_TP) {
  return (
    <div onClick={action}>
      <button
        disabled={isPending || disabled}
        type={type}
        className="w-full bg-[#104bba] text-white rounded-lg py-2  hover:bg-blue-700 transition font-somarBold disabled:bg-gray-500"
      >
        {isPending ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          text
        )}
      </button>
    </div>
  )
}

export default Button
