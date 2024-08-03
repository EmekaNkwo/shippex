import { Input, InputProps } from "antd";

interface IProps extends InputProps {
  label?: string;
  isForgotPassword?: boolean;
  className?: string;
}
export const TextInput = ({ label, className, ...props }: IProps) => (
  <div className="flex flex-col gap-2">
    {label && (
      <label className="text-[14px] font-semibold text-labelColor">
        {label}
      </label>
    )}
    <Input
      {...props}
      size="large"
      className={`placeholder:text-[#6B7280] ${className}`}
    />
  </div>
);

export const PasswordInput = ({
  label,
  isForgotPassword,
  className,
  ...props
}: IProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between">
      {label && (
        <label className="text-[14px] font-semibold text-labelColor">
          {label}
        </label>
      )}
      {isForgotPassword && (
        <label className="text-[14px] font-semibold text-blueColor">
          Forgot Password
        </label>
      )}
    </div>
    <Input.Password
      {...props}
      size="large"
      className={`placeholder:text-[#6B7280] ${className}`}
    />
  </div>
);
