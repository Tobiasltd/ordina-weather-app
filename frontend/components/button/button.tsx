import { cx } from "@/lib/util";
import { useRouter } from "next/router";
import { CSSProperties, FC, PropsWithChildren } from "react";

export interface ButtonProps {
  className?: string;
  role?: string;
  "aria-label"?: string;
  disabled?: boolean;
  off?: boolean;
  onClick?: (event?: any) => void;
  to?: string;
  title?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary";
  style?: CSSProperties;
  uppercase?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const router = useRouter();

  const {
    title,
    onClick,
    className,
    type,
    disabled = false,
    variant = "primary",
    uppercase = false,
    children,
    style,
    to,
    role,
    "aria-label": ariaLabel,
  } = props;

  /**
   * A function that handles the click event.
   * If the button has a `to` prop, it will push the route to the router.
   * If the button has an `onClick` prop, it will call the function.
   * If the button has both, it will call the function and push the route.
   * This way, we can use the button as a link or a button.
   *
   * @param {any} e - The click event.
   */

  const handleClick = (e?: any) => {
    if (to && onClick) {
      onClick(e);
      router.push(to);
    } else if (to) {
      router.push(to);
    } else if (onClick) {
      onClick(e);
    }
  };

  const classes = {
    "py-[0.7rem] px-[1.5rem] rounded-full  border-2 border-white text-[16px] leading-[16px] lg:text-[18px] lg:leading-[18px]  text-center text-black whitespace-nowrap block max-h-[60px] w-full":
      true,
    "opacity-60": disabled,
    uppercase: uppercase,
    "bg-white": variant === "primary",
  };

  return (
    <button
      type={type ?? "button"}
      className={cx(classes, className)}
      onClick={handleClick}
      disabled={disabled ?? false}
      style={style}
      role={role}
      aria-label={ariaLabel}
    >
      {title ?? children}
    </button>
  );
};

export default Button;
