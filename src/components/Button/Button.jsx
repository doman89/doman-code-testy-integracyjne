import { clsx } from "clsx";

import "./button.css";

export function Button({
  children,
  variant,
  ...restProps
}) {
  return (
    <button
      className={clsx([
        "button",
        {
          "button--green": variant === "add",
          "button--red": variant === "remove",
        },
      ])}
      {...restProps}
    >
      {children}
    </button>
  );
}
