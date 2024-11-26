/////////// IMPORTS
///
import { tv } from "tailwind-variants";

///
/////////// Types
///
const spinner = tv({
  base: "animate-spin rounded-full",
  variants: {
    color: {
      primary: "border-main",
      danger: "border-mainRed",
      white: "#fff",
    },
    size: {
      small: "h-4 w-4 border-2  border-t-primary border-x-main",
      medium: "h-6 w-6 border-4  border-t-primary border-x-main",
      large: "h-20 w-20 border-b-4 border-4 border-t-primary border-x-main ",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Spinner = ({
  variant = "primary",
  size = "medium",
  className,
}: {
  variant?: "primary" | "danger" | "white";
  size?: "small" | "medium" | "large";
  className?: string;
}) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={spinner({
          color: variant,
          size: size,
        })}
        style={{ color: `${variant}` }}
      ></div>
    </div>
  );
};
