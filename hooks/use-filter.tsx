"use client";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";

type FilterKeys =
  | "brand"
  | "model"
  | "fuelType"
  | "year_min"
  | "year_max"
  | "price"
  | "condition"
  | "color"
  | "keyword";

type FilterTypes = {
  brand: string[];
  model: string[];
  fuelType: string[];
  year_min: number;
  year_max: number;
  price: string;
  condition: string[];
  color: string[];
  keyword: string;
};

const useFilter = () => {
  const [brand, setBrand] = useQueryState(
    "brand",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [model, setModel] = useQueryState(
    "model",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  const [price, setPrice] = useQueryState(
    "price",
    parseAsString.withDefault("")
  );

  const [fuelType, setFuelType] = useQueryState(
    "fuelType",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [yearMin, setYearMin] = useQueryState(
    "year_min",
    parseAsInteger.withDefault(0)
  ); // Single integer
  const [yearMax, setYearMax] = useQueryState(
    "year_max",
    parseAsInteger.withDefault(0)
  ); // Single integer

  const [condition, setCondition] = useQueryState(
    "condition",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [color, setColor] = useQueryState(
    "color",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [keyword, setKeyword] = useQueryState(
    "keyword",
    parseAsString.withDefault("")
  );

  const getFilters = () => ({
    brand,
    model,
    price,
    fuelType,
    yearMin,
    yearMax,
    condition,
    color,
    keyword,
  });

  const updateFilter = (
    key: FilterKeys,
    values: string[] | string | number | null
  ) => {
    switch (key) {
      case "brand":
        return setBrand(Array.isArray(values) ? values : null);
      case "price":
        return setPrice(typeof values === "string" ? values : null);
      case "model":
        return setModel(Array.isArray(values) ? values : null);
      case "fuelType":
        return setFuelType(Array.isArray(values) ? values : null);
      case "condition":
        return setCondition(Array.isArray(values) ? values : null);
      case "color":
        return setColor(Array.isArray(values) ? values : null);
      case "keyword":
        return setKeyword(typeof values === "string" ? values : null);
      case "year_min":
        return setYearMin(typeof values === "number" ? values : null);
      case "year_max":
        return setYearMax(typeof values === "number" ? values : null);
      default:
        throw new Error(`Invalid filter key: ${key}`);
    }
  };

  const clearFilter = (key: FilterKeys) => {
    updateFilter(key, null);
  };

  // Clear all filters
  const clearFilters = async () => {
    await Promise.all([
      setBrand(null),
      setModel(null),
      setPrice(null),
      setFuelType(null),
      setCondition(null),
      setColor(null),
      setYearMin(null),
      setYearMax(null),
      setKeyword(null),
    ]);
  };
  return {
    filters: getFilters(),
    updateFilter,
    clearFilter,
    clearFilters,
  };
};

export default useFilter;
