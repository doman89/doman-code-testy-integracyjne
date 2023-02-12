import { forwardRef } from "react";

import "./input.css";

export const Input = forwardRef(function (props, ref) {
  return <input className="input" ref={ref} {...props} />;
});
