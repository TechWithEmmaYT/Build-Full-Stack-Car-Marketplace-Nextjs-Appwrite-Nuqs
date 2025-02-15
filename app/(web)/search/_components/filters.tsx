"use client";
import React, { useState } from "react";
import FilterAccordionItem from "@/components/FilterAccordionItem";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  CAR_BRAND_OPTIONS,
  CAR_COLOR_OPTIONS,
  CAR_CONDITION_OPTIONS,
  CAR_FUELTYPE_OPTIONS,
  CAR_MODEL_OPTIONS,
  CAR_PRICE_RANGE_OPTIONS,
  CAR_YEAR_RANGE_OPTIONS,
} from "@/constants/car-options";
import { Slider } from "@/components/ui/slider";
import useFilter from "@/hooks/use-filter";
import { calculatePriceRange, formatPriceRange } from "@/lib/helper";
import useDebounce from "@/hooks/use-debounce";

const Filters = () => {
  const { filters, updateFilter, clearFilter, clearFilters } = useFilter();

  const { minPrice, maxPrice } = calculatePriceRange();

  const [sliderValues, setSliderValues] = useState<number[]>([
    minPrice,
    maxPrice,
  ]);

  const [isCustomSeleted, setIsCustomSeleted] = useState(false);
  const debouncedSliderValues = useDebounce(sliderValues, 500);

  React.useEffect(() => {
    if (isCustomSeleted) {
      updateFilter("price", debouncedSliderValues.join("-"));
    }
  }, [debouncedSliderValues, isCustomSeleted, updateFilter]);

  const handlePriceChange = (values: string | string[] | undefined) => {
    if (isCustomSeleted) {
      setIsCustomSeleted(false);
      setSliderValues([minPrice, maxPrice]);
    }
    if (values) updateFilter("price", values);
  };

  const handlePriceCustomRange = (values: number[]) => {
    const [min, max] =
      Array.isArray(values) && values.length >= 2
        ? values[0] <= values[1]
          ? [values[0], values[1]]
          : [values[1], values[0]]
        : [0, 0];

    setSliderValues([min, max]);
    if (!isCustomSeleted) setIsCustomSeleted(true);
  };

  const handleClearAll = () => {
    clearFilters();
    clearFilter("price");
    setSliderValues([minPrice, maxPrice]);
  };
  return (
    <div className="space-y-4">
      <div className=" mb-3">
        <div
          className="flex items-center justify-between
        rounded-[4px_4px_0_0] bg-primary text-white p-[8px_16px]
        "
        >
          <h2 className="font-bold text-base">Filters</h2>
          <Button
            className="!h-auto text-white/80 font-light
                    !py-0"
            variant="link"
            onClick={handleClearAll}
          >
            Reset all
          </Button>
        </div>
        <Accordion type="single" collapsible defaultValue="brands">
          {/* {Car Brands} */}
          <FilterAccordionItem
            title="Car Brands"
            value="brands"
            filterType="checkbox"
            options={CAR_BRAND_OPTIONS}
            selectedValues={filters.brand || []}
            onValuesChange={(values: any) => {
              updateFilter("brand", values);
            }}
            hasSearch
          />
        </Accordion>
      </div>

      <Accordion
        type="multiple"
        defaultValue={[
          "price-range",
          "fuel-type",
          "condition",
          "model",
          "color",
          "year-of-manufacture",
        ]}
      >
        {/* {Price} */}
        <FilterAccordionItem
          title="Price Range"
          value="price-range"
          filterType="radio"
          options={CAR_PRICE_RANGE_OPTIONS}
          selectedValues={filters.price}
          onValuesChange={handlePriceChange}
          renderCustom={
            <div className="py-1">
              <div className="flex items-center justify-between mb-[5px]">
                <h5 className="font-medium text-sm">Price</h5>
                <span className="text-sm">
                  {formatPriceRange(sliderValues[0], sliderValues[1])}
                  {""}
                </span>
              </div>

              <Slider
                min={minPrice}
                max={maxPrice}
                className="!cursor-pointer"
                defaultValue={[minPrice, maxPrice]}
                value={sliderValues}
                onValueChange={handlePriceCustomRange}
              />
            </div>
          }
        />

        {/* Fuel Type */}
        <FilterAccordionItem
          title="Fuel Type"
          value="fuel-type"
          filterType="checkbox"
          options={CAR_FUELTYPE_OPTIONS}
          selectedValues={filters.fuelType || []}
          onValuesChange={(values: any) => {
            updateFilter("fuelType", values);
          }}
        />

        <FilterAccordionItem
          title="Models"
          value="model"
          filterType="checkbox"
          disabled={false}
          options={CAR_MODEL_OPTIONS}
          hasSearch={true}
          selectedValues={filters.model || []}
          onValuesChange={(values: any) => {
            updateFilter("model", values);
          }}
        />

        <FilterAccordionItem
          title="Condition"
          value="condition"
          filterType="checkbox"
          options={CAR_CONDITION_OPTIONS}
          selectedValues={filters.condition || []}
          onValuesChange={(values: any) => {
            updateFilter("condition", values);
          }}
        />

        {/* Color */}
        <FilterAccordionItem
          title="Color"
          value="color"
          filterType="checkbox"
          options={CAR_COLOR_OPTIONS}
          selectedValues={filters.condition || []}
          onValuesChange={(values: any) => {
            updateFilter("color", values);
          }}
        />

        <FilterAccordionItem
          title="Years of Manufacture"
          value="year-of-manufacture"
          filterType="radio"
          options={CAR_YEAR_RANGE_OPTIONS}
          selectedValues={
            filters.yearMin && filters.yearMax
              ? `${filters.yearMin}-${filters.yearMax}`
              : ""
          }
          onValuesChange={(values: any) => {
            const [min, max] =
              values === ""
                ? [0, 0]
                : values?.split("-")?.map(Number) || [null, null];
            updateFilter("year_min", !isNaN(min) ? min : null);
            updateFilter("year_max", !isNaN(max) ? max : null);
          }}
          hasClearButton
          onClear={() => {
            clearFilter("year_min");
            clearFilter("year_max");
          }}
        />
      </Accordion>
    </div>
  );
};

export default Filters;
