import { CarFrontIcon, LucideIcon } from "lucide-react";
import React from "react";

interface EmptyStateProps {
  message: string;
  icon?: LucideIcon;
  button?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const EmptyState = ({
  message,
  icon: Icon = CarFrontIcon,
  button,
  className = " ",
  iconClassName = "",
  textClassName = "",
}: EmptyStateProps) => {
  return (
    <div
      className={`flex flex-col items-center
    justify-center p-6 my-2 text-center ${className}
        `}
    >
      {Icon && (
        <Icon
          className={`w-14 h-14 text-muted-foreground
                mb-2 ${iconClassName}
                    `}
        />
      )}
      <p
        className={`text-muted-foreground text-base mb-4 
            ${textClassName}
                `}
      >
        {message}
      </p>
      {button && button}
    </div>
  );
};

export default EmptyState;
