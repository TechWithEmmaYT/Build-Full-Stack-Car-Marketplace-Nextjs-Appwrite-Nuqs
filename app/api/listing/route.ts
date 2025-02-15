import { APP_CONFIG } from "@/lib/app-config";
import { createAnonymousClient } from "@/lib/appwrite";
import { NextRequest, NextResponse } from "next/server";
import { Query } from "node-appwrite";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const brands = searchParams.get("brand")?.split(",");
    const models = searchParams.get("model")?.split(",");
    const colors = searchParams.get("color")?.split(",");
    const fuelTypes = searchParams.get("fuelType")?.split(",");
    const conditions = searchParams.get("condition")?.split(",");
    const priceRange = searchParams.get("price")?.split("-");
    const keyword = searchParams.get("keyword");

    const queries = [];

    if (brands?.length) queries.push(Query.equal("brand", brands));
    if (models?.length) queries.push(Query.equal("model", models));
    if (colors?.length) queries.push(Query.equal("exteriorColor", colors));
    if (fuelTypes?.length) queries.push(Query.equal("fuelType", fuelTypes));
    if (conditions?.length) queries.push(Query.equal("condition", conditions));
    if (priceRange?.length === 2) {
      const [minPrice, maxPrice] = priceRange.map(Number);
      queries.push(Query.greaterThanEqual("price", minPrice));
      queries.push(Query.lessThanEqual("price", maxPrice));
    }

    if (searchParams.has("year_min") && searchParams.has("year_max")) {
      const yearMin = Number(searchParams.get("year_min"));
      const yearMax = Number(searchParams.get("year_max"));

      if (!isNaN(yearMin) && !isNaN(yearMax)) {
        queries.push(Query.greaterThanEqual("yearOfManufacture", yearMin));
        queries.push(Query.lessThanEqual("yearOfManufacture", yearMax));
      }
    }

    if (keyword) {
      queries.push(Query.search("displayTitle", keyword));
    }
    const { databases } = await createAnonymousClient();

    const listings = await databases.listDocuments(
      APP_CONFIG.APPWRITE.DATABASE_ID,
      APP_CONFIG.APPWRITE.CAR_LISTING_ID,
      queries
    );

    return NextResponse.json({
      message: "Listings fetched successfully",
      listings: listings.documents,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error?.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
