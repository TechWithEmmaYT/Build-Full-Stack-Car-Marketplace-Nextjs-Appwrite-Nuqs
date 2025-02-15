import { ListingType } from "@/@types/api.type";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { CarFrontIcon, Grid3x3, List } from "lucide-react";
import CarListingSkeleton from "../skeleton-loader/carlisting-skeleton";
import EmptyState from "../EmptyState";
import CarCard from "../CarCard";

const AllListing = ({
  listings,
  isPending,
}: {
  listings: ListingType[];
  isPending: boolean;
}) => {
  const [layout, setLayout] = React.useState<"list" | "grid">("grid");
  return (
    <Card
      className="shadow-none !bg-transparent rounded-[8px]
       border-none min-h-56    "
    >
      <CardContent className="p-3">
        <div className="w-full flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold">
            All Listing ({listings.length || 0})
          </h2>

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
      </CardContent>
    </Card>
  );
};

export default AllListing;
