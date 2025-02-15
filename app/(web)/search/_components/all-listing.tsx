"use client";
import { ListingType } from "@/@types/api.type";
import CarCard from "@/components/CarCard";
import EmptyState from "@/components/EmptyState";
import CarListingSkeleton from "@/components/skeleton-loader/carlisting-skeleton";
import { Button } from "@/components/ui/button";
import { CarFrontIcon, Filter, FilterIcon, Grid3x3, List } from "lucide-react";
import React from "react";

const AllListings = ({
  listings,
  isPending,
  onFilterOpen,
}: {
  listings: ListingType[];
  isPending: boolean;
  onFilterOpen: () => void;
}) => {
  const [layout, setLayout] = React.useState<"list" | "grid">("grid");

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">
          {listings.length || 0} Cars Found
        </h2>

        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 items-center bg-transparent
            shadow-none border-black px-2 py-1 h-auto
            lg:hidden
            "
            onClick={onFilterOpen}
          >
            <span className="flex flex-1 items-center gap-1">
              <FilterIcon className="!w-3 !h-3" />
              Filters
            </span>
          </Button>

          <div className="flex items-center justify-center">
            <Grid3x3
              role="button"
              onClick={() => {
                setLayout("grid");
              }}
              className={`${layout === "grid" ? "text-primary" : ""}`}
            />
            <List
              role="button"
              onClick={() => {
                setLayout("list");
              }}
              className={`ml-2 ${layout === "list" ? "text-primary" : ""}`}
            />
          </div>
        </div>
      </div>

      {isPending ? (
        <CarListingSkeleton layout={layout} />
      ) : listings.length === 0 ? (
        <EmptyState message="No Car found" icon={CarFrontIcon} />
      ) : (
        <div
          className={`w-full grid ${
            layout === "list"
              ? "grid-cols-1 gap-4"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }`}
        >
          {listings?.map((listing) => (
            <CarCard key={listing.$id} listing={listing} layout={layout} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllListings;
