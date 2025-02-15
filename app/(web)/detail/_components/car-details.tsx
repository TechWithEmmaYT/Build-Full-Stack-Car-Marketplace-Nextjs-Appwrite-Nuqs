import { ListingType } from "@/@types/api.type";
import ChatSellerButton from "@/components/ChatSellerButton";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  CAR_BODY_TYPE_OPTIONS,
  CAR_BRAND_OPTIONS,
  CAR_CONDITION_OPTIONS,
  CAR_DRIVETRAIN_OPTIONS,
  CAR_KEY_FEATURES_OPTIONS,
  CAR_MODEL_OPTIONS,
  CAR_SECOND_CONDITION_OPTIONS,
  CAR_TRANSMISSION_OPTIONS,
} from "@/constants/car-options";
import {
  CheckSquare,
  CogIcon,
  FuelIcon,
  GaugeIcon,
  TagIcon,
} from "lucide-react";
import React from "react";

const CarDetails = ({
  listing,
  isPending,
}: {
  listing: ListingType;
  isPending: boolean;
}) => {
  const transmissionLabel =
    CAR_TRANSMISSION_OPTIONS?.find(
      (option) => option?.value === listing?.transmission
    )?.label || "N/A";

  const conditionLabel =
    CAR_CONDITION_OPTIONS?.find((option) => option.value === listing?.condition)
      ?.label || "N/A";

  const brandLabel =
    CAR_BRAND_OPTIONS?.find((option) => option.value === listing?.brand)
      ?.label || "N/A";

  const modelLabel =
    CAR_MODEL_OPTIONS?.find((option) => option.value === listing?.model)
      ?.label || "N/A";

  const driveTrainLabel =
    CAR_DRIVETRAIN_OPTIONS?.find(
      (option) => option.value === listing?.drivetrain
    )?.label || "N/A";

  const bodyTypeLabel =
    CAR_BODY_TYPE_OPTIONS?.find((option) => option.value === listing?.bodyType)
      ?.label || "N/A";

  const secondConditions = CAR_SECOND_CONDITION_OPTIONS.filter((option) =>
    listing?.secondCondition?.includes(option.value)
  );
  const keyFeatures = CAR_KEY_FEATURES_OPTIONS.filter((option) =>
    listing?.keyFeatures?.includes(option.value)
  );
  return (
    <div className="w-full h-auto pt-2">
      {isPending ? (
        <Skeleton className="w-full h-[350px] rounded-t-none mb-4" />
      ) : (
        <Card
          className="!rounded-t-none rounded-b-[8px]
                shadow-none
                "
        >
          <CardContent className="!p-4 !py-6">
            <div className="mb-4">
              <h2 className="font-bold text-lg mb-2">Description</h2>
              <div className="text-sm font-light">{listing?.description}</div>
              <ul className="my-4 flex items-center font-light gap-5">
                <li
                  className="flex flex-col capitalize items-center
                                text-sm gap-2
                              "
                >
                  <span className="border-2 rounded-full p-3">
                    <FuelIcon className="size-5" />
                  </span>
                  {listing?.fuelType?.toLowerCase()}
                </li>

                <li
                  className="flex flex-col capitalize items-center
                                text-sm gap-2
                              "
                >
                  <span className="border-2 rounded-full p-3">
                    <GaugeIcon className="size-5" />
                  </span>
                  {listing?.mileage} MPG
                </li>

                <li
                  className="flex flex-col capitalize items-center
                                text-sm gap-2
                              "
                >
                  <span className="border-2 rounded-full p-3">
                    <CogIcon className="size-5" />
                  </span>
                  {transmissionLabel}
                </li>

                <li
                  className="flex flex-col capitalize items-center
                                text-sm gap-2
                              "
                >
                  <span className="border-2 rounded-full p-3">
                    <TagIcon className="size-5" />
                  </span>
                  {conditionLabel}
                </li>
              </ul>
            </div>

            <Separator />
            <div className="my-4">
              <ul className="grid grid-cols-2 gap-5">
                <li>
                  <h5
                    className="uppercase text-xs
                   text-muted-foreground mb-[1px]"
                  >
                    Brand
                  </h5>
                  <p className="text-sm">{brandLabel}</p>
                </li>

                <li>
                  <h5
                    className="uppercase text-xs
                   text-muted-foreground mb-[1px]"
                  >
                    Model{" "}
                  </h5>
                  <p className="text-sm">{modelLabel}</p>
                </li>

                <li>
                  <h5
                    className="uppercase text-xs
                   text-muted-foreground mb-[1px]"
                  >
                    Year of Manufacture
                  </h5>
                  <p className="text-sm">{listing?.yearOfManufacture}</p>
                </li>

                <li>
                  <h5
                    className="uppercase text-xs
                   text-muted-foreground mb-[1px]"
                  >
                    Exterior Color
                  </h5>
                  <p className="text-sm">{listing?.exteriorColor || "N/A"}</p>
                </li>

                <li>
                  <h5
                    className="uppercase text-xs
                   text-muted-foreground mb-[1px]"
                  >
                    Interior Color
                  </h5>
                  <p className="text-sm">{listing?.interiorColor || "N/A"}</p>
                </li>

                <li>
                  <h5
                    className="uppercase text-xs
                   text-muted-foreground mb-[1px]"
                  >
                    Body Type
                  </h5>
                  <p className="text-sm">{bodyTypeLabel}</p>
                </li>

                <li>
                  <h5
                    className="uppercase text-xs
                   text-muted-foreground mb-[1px]"
                  >
                    Drive Train
                  </h5>
                  <p className="text-sm">{driveTrainLabel}</p>
                </li>

                <li>
                  <h5
                    className="uppercase text-xs
                   text-muted-foreground mb-[1px]"
                  >
                    Seating Capacity
                  </h5>
                  <p className="text-sm">{listing?.seatingCapacity}</p>
                </li>

                <li>
                  <h5
                    className="uppercase text-xs
                   text-muted-foreground mb-[1px]"
                  >
                    Second Condition
                  </h5>
                  <p className="text-sm">
                    {secondConditions?.map((item) => item.label)?.join(",")}
                  </p>
                </li>
              </ul>
            </div>

            <Separator />
            <div className="my-4">
              <h2 className="font-bold text-lg mb-3">Features</h2>
              <div>
                <ul
                  className="grid grid-cols-2 
                                  md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {keyFeatures?.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center
                      text-sm gap-2
                      "
                    >
                      <CheckSquare className="w-4 h-4 text-primary/80" />
                      {feature.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator />
            <div className="my-4 w-full max-w-[170px]">
              <ChatSellerButton
                displayTitle={listing?.displayTitle}
                shopOwnerUserId={listing?.shop?.userId || ""}
                shopName={listing?.shop?.shopName || ""}
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CarDetails;
