import { CAR_PRICE_RANGE_OPTIONS } from "@/constants/car-options";

export function createSlug(name: string): string {
  const lowerCaseName = name?.toLowerCase();
  const slug = lowerCaseName?.replace(/\s+/g, "-");
  const finalSlug = slug?.replace(/[^a-z0-9-]/g, "");
  return finalSlug;
}

export const slugToCarName = (slug: string): string => {
  const words = slug?.split("-");
  const name = words
    ?.map((word) => word.charAt(0)?.toUpperCase() + word?.slice(1))
    ?.join(" ");
  return name;
};

export const formatCurrency = (
  amount: number,
  options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }
): string => {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "$0";
  }
  return amount.toLocaleString("en-US", options);
};

export const calculatePriceRange = () => {
  let minPrice = Infinity;
  let maxPrice = -Infinity;

  CAR_PRICE_RANGE_OPTIONS.forEach((option) => {
    if (option.value !== "custom") {
      const [min, max] = option.value.split("-").map(Number);
      minPrice = Math.min(minPrice, min);
      maxPrice = Math.max(maxPrice, max);
    }
  });
  return {
    minPrice: minPrice === Infinity ? 0 : minPrice,
    maxPrice: maxPrice === -Infinity ? 100000 : maxPrice,
  };
};

export const formatCurrencyPrice = (
  price: number,
  currency: string = "$"
): string => {
  return `${currency}${price.toLocaleString()}`;
};

export const formatPriceRange = (
  min: number,
  max: number,
  currency: string = "$"
): string => {
  return `${formatCurrencyPrice(min, currency)} - ${formatCurrencyPrice(
    max,
    currency
  )}`;
};
