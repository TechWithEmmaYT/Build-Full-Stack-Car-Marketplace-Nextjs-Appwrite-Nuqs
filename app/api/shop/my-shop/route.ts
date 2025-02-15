import { APP_CONFIG } from "@/lib/app-config";
import { createSessionClient } from "@/lib/appwrite";
import { NextRequest, NextResponse } from "next/server";
import { Query } from "node-appwrite";

export async function GET(req: NextRequest) {
  try {
    const { account, databases } = await createSessionClient();
    const user = await account.get();

    const shops = await databases.listDocuments(
      APP_CONFIG.APPWRITE.DATABASE_ID,
      APP_CONFIG.APPWRITE.SHOP_ID,
      [Query.equal("userId", user.$id)]
    );
    const shop = shops?.documents?.[0] || null;
    if (!shop) {
      return NextResponse.json(
        {
          error: "Shop not found",
        },
        { status: 404 }
      );
    }

    const listings = await databases.listDocuments(
      APP_CONFIG.APPWRITE.DATABASE_ID,
      APP_CONFIG.APPWRITE.CAR_LISTING_ID,
      [Query.equal("userId", user.$id), Query.equal("shop", shop.$id)]
    );

    return NextResponse.json({
      message: "Shop fetched successfully",
      shop: shop,
      user: {
        userId: user.$id,
        name: user.name,
      },
      listings: listings.documents,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message || "Failed to fetch listings",
      },
      { status: 500 }
    );
  }
}
