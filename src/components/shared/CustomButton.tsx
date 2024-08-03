import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

export const SubmitButton = ({ title, className, ...props }: IButton) => (
  <button
    {...props}
    className={`bg-blueColor text-[#fff] rounded-[8px] h-[40px] disabled:bg-[#60A5FA] disabled:cursor-not-allowed hover:bg-opacity-80 ${className}`}
  >
    {title}
  </button>
);
