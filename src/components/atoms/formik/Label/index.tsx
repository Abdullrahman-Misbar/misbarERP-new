import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const label = tv({
  base: "inline-block capitalize !text-black  text-[14px] !font-somarBold m-1 !text-[14px]  !font-semibold !my-1 !text-[#000000a3] ",
  variants: {
    color: {
      primary: "text-black",
    },
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
    required: {
      true: 'after:content-["*"] after:text-mainRed after:me-1',
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
})

export interface LabelProps_TP
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children: ReactNode | string;
  htmlFor: string;
  size?: "sm" | "md" | "lg";
  required?: boolean;
}

export const Label = ({
  htmlFor,
  className,
  children,
  size = "sm",
  required = false,
}: LabelProps_TP) => {
  return (
    <label
      className={label({
        className,
        size,
        required,
      })}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
