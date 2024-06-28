import * as React from "react";
import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";

const buttonVariants = cva(
  "inline-flex font-poppins items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        strongButton:
          "px-4 py-2 rounded-full border border-black text-black bg-white",
        nocolor:
          "bg-transparent rounded-full text-white border border-white",
        dark:
          "bg-[#0077B5] text-white font-semibold px-4 py-1 rounded-full hover:bg-[#005582] transition duration-100",
        clear:
          "rounded-full px-4 py-1 text-[#0077B5] bg-transparent font-semibold hover:text-white hover:bg-[#0077B5] text-base leading-tight text-left transition duration-100",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, children, href, variant, size, ...props }, ref) => {
    const buttonClasses = buttonVariants({ variant, size }) + " " + className;

    if (href) {
      return (
        <Link to={href} className={buttonClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
