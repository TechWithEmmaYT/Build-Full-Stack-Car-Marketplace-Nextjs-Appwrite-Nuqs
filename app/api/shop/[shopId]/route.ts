import { Query } from "node-appwrite";
import { NextRequest, NextResponse } from "next/server";
import { createAnonymousClient } from "@/lib/appwrite";
import { APP_CONFIG } from "@/lib/app-config";

export const GET = async (
  req: NextRequest,
  { params }: { params: { shopId: string } }
) => {
  try {
    const { shopId } = params;
    const { databases } = await createAnonymousClient();

    const shop = await databases.getDocument(
      APP_CONFIG.APPWRITE.DATABASE_ID,
      APP_CONFIG.APPWRITE.SHOP_ID,
      shopId
    );

    const listing = await databases.listDocuments(
      APP_CONFIG.APPWRITE.DATABASE_ID,
      APP_CONFIG.APPWRITE.CAR_LISTING_ID,
      [Query.equal("shop", shopId)]
    );

    return NextResponse.json({
      message: "Shop fetched successfully",
      shop,
      listings: listing.documents,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
};
