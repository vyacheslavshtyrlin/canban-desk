import { VariantProps, cva } from "class-variance-authority";
import cn from "../../utils/cn";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({
  icon,
  loading,
  size,
  outline,
  color,
  variant,
  ...rest
}: Props) => {
  const { onClick, className } = rest;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!onClick) return;
    if (loading) return;
    onClick(e);
  };
  return (
    <button
      {...rest}
      onClick={(e) => handleClick(e)}
      className={cn(buttonVariants({ className, size, variant, outline }))}
    >
      {loading && <span className="loading loading-spinner"></span>}
      {!loading && icon && icon}
      {rest.children}
    </button>
  );
};

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      neutral: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      default: "",
    },
    size: {
      lg: "btm-lg",
      md: "btn-md",
      sm: "btn-sm",
      xs: "btn-xs",
    },
    outline: {
      outline: "btn-outline",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
