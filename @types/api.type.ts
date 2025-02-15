export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  name: string;
  email: string;
  shopName: string;
  password: string;
};

export type ShopType = {
  $id?: string;
  shopName: string;
  description: string;
  userId: string;
};

export type ListingType = {
  $id?: string;
  brand: string;
  model: string;
  yearOfManufacture: string;
  exteriorColor: string;
  interiorColor?: string;
  condition: string;
  secondCondition?: string[];
  mileage?: string;
  transmission: string;
  fuelType: string;
  keyFeatures?: string[];
  vin?: string;
  bodyType?: string;
  drivetrain: string;
  seatingCapacity?: string;
  description?: string;
  price: number;
  contactPhone: string;
  imageUrls: string[];
  displayTitle: string;
  shopId: string;
  shop?: ShopType;
};

export type AllCarListingPayloadType = {
  brand?: string[];
  model?: string[];
  color?: string[];
  condition?: string[];
  price?: string;
  keyword?: string;
  year_min?: number;
  year_max?: number;
  fuelType?: string[];
};
