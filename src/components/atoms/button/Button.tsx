import { Spinner } from "../UI/Spinner";

type Button_TP = {
  text: string;
  type: "button" | "submit";
  isPending?: boolean;
  disabled?: boolean;
  action?: () => void;
  className?: string; 
  variant?:"outline" | "primary"
};

function Button({
  text,
  type,
  isPending,
  disabled,
  action,
  className = "",
  variant='primary'
}: Button_TP) {
  return (
    <div onClick={action}>
      <button
        disabled={isPending || disabled}
        type={type}
        className={
          variant == "primary" ? 
          `w-full bg-primary text-white rounded-lg py-2 hover:bg-blue-700 transition font-somarBold disabled:bg-gray-500 ${className}`
        :  `w-full bg-transparent text-black rounded-lg py-2  transition font-somarBold disabled:bg-gray-500 border ${className}`
        }
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
