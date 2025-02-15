import { AUTH_COOKIE_NAME } from "@/constants/server";
import { APP_CONFIG } from "@/lib/app-config";
import { createAdminClient } from "@/lib/appwrite";
import { signupSchema } from "@/validation/auth.validation";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ID } from "node-appwrite";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password, shopName } = await signupSchema.parse(body);
    const { account, databases } = await createAdminClient();
    const user = await account.create(ID.unique(), email, password, name);
    const session = await account.createEmailPasswordSession(email, password);

    const shop = await databases.createDocument(
      APP_CONFIG.APPWRITE.DATABASE_ID,
      APP_CONFIG.APPWRITE.SHOP_ID,
      ID.unique(),
      {
        shopName: shopName,
        userId: user.$id,
      }
    );

    cookies().set(AUTH_COOKIE_NAME, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
    });

    return NextResponse.json({
      message: "User created successfully",
      userId: user.$id,
      shopId: shop.$id,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
