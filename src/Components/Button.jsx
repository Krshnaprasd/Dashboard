// Button.jsx
import { tv } from "tailwind-variants";

const button = tv({
  base: "px-4 py-2 rounded text-white",
  variants: {
    intent: {
      primary: "bg-blue-500 hover:bg-blue-600 rounded-lg",
      secondary: "bg-gray-200 hover:bg-gray-300 border-zinc-700 text-gray-500 rounded-lg",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "sm",
  },
});

const Button = ({ intent, size, children }) => {
  return <button className={button({ intent, size })}>{children}</button>;
};

export default Button;
