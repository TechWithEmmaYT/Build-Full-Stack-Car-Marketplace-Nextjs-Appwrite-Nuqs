"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CAR_BRAND_OPTIONS,
  CAR_CONDITION_OPTIONS,
  CAR_FUELTYPE_OPTIONS,
  CAR_MODEL_OPTIONS,
  CAR_PRICE_RANGE_OPTIONS,
  CAR_YEAR_RANGE_OPTIONS,
} from "@/constants/car-options";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterSelectProps {
  label: string;
  options: FilterOption[];
  placeholder: string;
  onChange: (value: string) => void;
}

const HeroFilter = () => {
  const router = useRouter();

  const [selectedFilters, setSelectedFilters] = useState<{
    brand?: string;
    condition?: string;
    model?: string;
    fuelType?: string;
    year_min?: string;
    year_max?: string;
    price?: string;
  }>({});

  const filterOptions: Record<string, FilterOption[]> = {
    brands: CAR_BRAND_OPTIONS,
    models: CAR_MODEL_OPTIONS,
    conditions: CAR_CONDITION_OPTIONS,
    years: CAR_YEAR_RANGE_OPTIONS,
    fuelTypes: CAR_FUELTYPE_OPTIONS,
    priceRange: CAR_PRICE_RANGE_OPTIONS?.filter(
      (item) => item.value !== "custom"
    ),
  };

  const handleFilterChange = (
    key: keyof typeof selectedFilters,
    value: string
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
    console.log(params);
    router.push(`/search/${params.toString()}`);
  };

  return (
    <div className="w-full flex flex-col gap-6 pt-6">
      <div
        className="w-full flex flex-wrap items-center
      justify-center gap-4
      "
      >
        <FilterSelect
          label="Brand"
          options={filterOptions.brands}
          placeholder="Brand"
          onChange={(value) => handleFilterChange("brand", value)}
        />

        <FilterSelect
          label="Model"
          options={filterOptions.models}
          placeholder="Model"
          onChange={(value) => handleFilterChange("model", value)}
        />

        <FilterSelect
          label="Condition"
          options={filterOptions.conditions}
          placeholder="Condition"
          onChange={(value) => handleFilterChange("condition", value)}
        />

        <FilterSelect
          label="Year"
          options={filterOptions.years}
          placeholder="Year"
          onChange={(value) => {
            const [min, max] =
              value === ""
                ? [0, 0]
                : value?.split("-")?.map(Number) || [null, null];
            setSelectedFilters((prev) => ({
              ...prev,
              year_min: `${min}`,
              year_max: `${max}`,
            }));
          }}
        />

        <FilterSelect
          label="Fuel"
          options={filterOptions.fuelTypes}
          placeholder="Fuel Type"
          onChange={(value) => handleFilterChange("fuelType", value)}
        />

        <FilterSelect
          label="Price"
          options={filterOptions.priceRange}
          placeholder="Price"
          onChange={(value) => handleFilterChange("price", value)}
        />
      </div>

      <Button
        className="
           w-full lg:w-11/12 mx-auto flex 
           items-center justify-between py-6
          "
        onClick={handleSearch}
      >
        <span
          className="flex items-center gap-1 
              font-light"
        >
          <b className="font-bold">1000+</b>
          CAR LISTED
        </span>
        <span
          className="flex items-centergap-1 uppercase
        font-semibold
        "
        >
          Search Now
          <ChevronRight />
        </span>
      </Button>
      <p className="text-muted-foreground text-sm text-center">
        Want to search more customized
        <Link href="/search" className="text-primary underline font-bold ml-2">
          Advanced Search
        </Link>
      </p>
    </div>
  );
};

const FilterSelect: React.FC<FilterSelectProps> = ({
  label,
  options,
  placeholder,
  onChange,
}) => {
  return (
    <div className="w-full lg:w-[28%]">
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default HeroFilter;
