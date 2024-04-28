import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const textVariants = cva("not-italic no-underline", {
  variants: {
    variant: {
      default: "text-primary font-normal",
      primary: "text-primary font-normal",
      outline: "text-primary-foreground outlined-text",
      underline: "text-primary underline",
    },
    size: {
      displayL:
        "xl:text-6xl text-4xl  xl:leading-[74px] leading-[54px] tracking-tighter",
      displayM: "text-3xl leading-8 tracking-tighter",
      subHeading: "text-[40px] leading-10 tracking-tighter",
      h1: "text-4xl leading-[44px] tracking-tighter",
      h2: "text-[32px] leading-[40px] tracking-tighter",
      h3: "text-[28px] leading-8 tracking-tighter",
      h4: "text-2xl leading-[28px] tracking-tighter",
      h5: "text-xs sm:text-md md:text-md lg:text-xl leading-[24px] tracking-tighter",
      h6: "text-[16px] leading-[20px] tracking-tighter",
      p1: "text-xl leading-[28px] tracking-[2%]",
      p2: "text-[16px] leading-[24px] tracking-[2%]",
      p3: "text-[12px] leading-[20px] tracking-[2%]",
      button1: "text-xl leading-[24px] tracking-[2%] ",
      button2: "text-[16px] leading-[20px] tracking-[2%]",
      underlined:
        "text-[20px] leading-[24px] tracking-tighter capitalize underline-offset-4 hover:underline",
      default: "text-[12px] leading-[20px] tracking-[2%]",
    },
    weight: {
      default: "font-normal",
      thin: "font-thin",
      regular: "font-normal",
      semiBold: "font-semibold",
      bold: "font-bold",
      extraBold: "font-extrabold",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      weight: "default",
    },
  },
});
export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, size, weight, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={textVariants({ variant, size, weight, className })}
        ref={ref}
        {...props}
      />
    );
  },
);

Text.displayName = "Text";

export { Text, textVariants };
