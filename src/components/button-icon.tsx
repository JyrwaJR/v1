import { cn } from "@src/lib/utils";
import { Button, ButtonProps } from "./ui/button";
import React from "react";

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, ...buttonProps }, ref) => {
    return (
      <Button
        {...buttonProps}
        className={cn(
          buttonProps.className,
          "flex items-center px-2 py-4 space-x-2 justify-between"
        )}
        ref={ref}
      >
        <React.Fragment>
          <div>{buttonProps.children}</div>
          <div>{icon}</div>
        </React.Fragment>
      </Button>
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton };
