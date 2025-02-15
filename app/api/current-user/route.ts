import { APP_CONFIG } from "@/lib/app-config";
import { createSessionClient } from "@/lib/appwrite";
import { NextRequest, NextResponse } from "next/server";
import { Query } from "node-appwrite";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
  try {
    const { account, databases } = await createSessionClient();
    const user = await account.get();

    const shopDocuments = await databases.listDocuments(
      APP_CONFIG.APPWRITE.DATABASE_ID,
      APP_CONFIG.APPWRITE.SHOP_ID,
      [Query.equal("userId", user.$id)]
    );

    const shop = shopDocuments.documents?.[0];

    return NextResponse.json({
      message: "User fetched successfully",
      user,
      shop,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
};
