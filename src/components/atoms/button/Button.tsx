import { FaSpinner } from "react-icons/fa";
import { Spinner } from "../UI/Spinner";

type Button_TP = {
  text: string;
  type: "button" | "submit";
  isPending?: boolean;
  disabled?: boolean;
  action?: () => void;
  className?: string; // Optional className prop
};

function Button({
  text,
  type,
  isPending,
  disabled,
  action,
  className = "",
}: Button_TP) {
  return (
    <div onClick={action}>
      <button
        disabled={isPending || disabled}
        type={type}
        className={`w-full bg-primary text-white rounded-lg py-2 hover:bg-blue-700 transition font-somarBold disabled:bg-gray-500 ${className}`}
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
  );
}

export default Button;
