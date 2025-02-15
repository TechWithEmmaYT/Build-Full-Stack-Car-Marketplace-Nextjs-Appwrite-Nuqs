import React from "react";
import { Skeleton } from "../ui/skeleton";

const CarListingSkeleton = ({
  layout,
  className,
}: {
  layout: "list" | "grid";
  className?: string;
}) => {
  return (
    <div
      className={
        className ||
        `w-full grid 
                ${
                  layout === "list"
                    ? "grid-cols-1 gap-4"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
                }`
      }
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="w-full">
          <Skeleton className="w-full h-48" />
          <div className="flex flex-col gap-2 mt-2">
            <Skeleton className="w-10/12 h-3" />
            <Skeleton className="w-1/2 h-3" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarListingSkeleton;
