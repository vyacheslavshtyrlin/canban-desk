import { cva, VariantProps } from "class-variance-authority";
import cn from "../../utils/cn";

type Image = {
  src: string;
  alt: string;
  px?: number;
  pt?: number;
};

type Action = {
  justify: "justify-end" | "justify-center" | "justify-between";
  item: React.ReactNode[];
};

interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
  title: string;
  image?: Image;
  action?: Action;
  titleTag?: React.ReactNode;
}

export const Card = ({
  children,
  title,
  titleTag,
  action,
  image,
  size,
  className,
  ...rest
}: Props) => {
  return (
    <div {...rest} className={cn(cardVariants({ size, className }))}>
      {image && (
        <figure className={`px-${image.px} pt-${image.pt}`}>
          <img src={image.src} alt={image.alt} />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {titleTag}
        </h2>
        {children}
        {action && (
          <div className={`card-actions ${action.justify}`}>
            {action.item.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const cardVariants = cva("card shadow-xl bg-neutral text-neutral-content", {
  variants: {
    size: {
      compact: "card-compact",
      normal: "card-normal",
      side: "card-side",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});
