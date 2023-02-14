import { createElement, FC, PropsWithChildren } from "react";
import { cx } from "@/lib/util";

export type TypographyVariant = "xl-title" | "s-title" | "body";

export type TypographyProps = {
  className?: string;
  element?: string;
  variant?: TypographyVariant;
  text?: string;
  uppercase?: boolean;
  "aria-label"?: string;
};

const Typography: FC<PropsWithChildren<TypographyProps>> = (props) => {
  const {
    className,
    element = "span",
    variant,
    text,
    children,
    uppercase = false,
    "aria-label": ariaLabel,
  } = props;

  const elementType: Record<string, string> = {
    "xl-title": "h1",
    "s-title": "h4",
    body: "p",
  };

  const classes = {
    "font-bold text-[54px] leading-[54px] sm:text-[60px] sm:leading-[60px] lg:text-[72px] lg:leading-[72px] xl:text-[84px] xl:leading-[84px]":
      variant === "xl-title",
    "font-bold  text-[20px] leading-[20px] sm:text-[26px] sm:leading-[26px] lg:text-[32px] lg:leading-[32px] xl:text-[44px] xl:leading-[44px]":
      variant === "s-title",
    "text-[16px] leading-[24px] lg:text-[18px] lg:leading-[30px] xl:text-[24px] xl:leading-[36px]":
      variant === "body",
    uppercase: uppercase,
  };

  const el = variant ? elementType[variant] : element;

  const elementProps = {
    "aria-label": ariaLabel,
    className: cx(classes, className),
  };

  const elementChildren = text ? text : children;

  return createElement(el, elementProps, elementChildren);
};

export default Typography;
