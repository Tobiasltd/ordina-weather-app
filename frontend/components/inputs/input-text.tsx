import { ChangeEvent, FC } from "react";
import { cx } from "@/lib/util";

export type InputTextProps = {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  value: string;
  variant?: "primary";
  type?: "text" | "password" | "email";
  id?: string;
  "aria-label"?: string;
  onChange: (val: string) => void;
};

const InputText: FC<InputTextProps> = (props) => {
  const {
    className,
    placeholder,
    onChange,
    name,
    value,
    type,
    disabled = false,
    variant,
    id,
    "aria-label": ariaLabel,
  } = props;

  const handler = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  const classes = {
    "py-[0.7rem] px-[1.5rem] rounded-full bg-black bg-opacity-30 border-2 border-white text-center text-white placeholder-white w-full":
      true,
    "opacity-80": disabled,
    "bg-white": variant === "primary",
  };

  return (
    <input
      className={cx(classes, className)}
      name={name}
      type={type ?? "text"}
      onChange={handler}
      placeholder={placeholder}
      value={value}
      id={id}
      aria-label={ariaLabel}
    />
  );
};

export default InputText;
