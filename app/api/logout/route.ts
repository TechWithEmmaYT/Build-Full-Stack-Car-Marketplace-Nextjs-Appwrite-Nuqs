import { AUTH_COOKIE_NAME } from "@/constants/server";
import { createSessionClient } from "@/lib/appwrite";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { account } = await createSessionClient();
    await account.deleteSession("current");
    cookies().delete(AUTH_COOKIE_NAME);
    return NextResponse.json({ message: "Logout successful" });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error?.message || "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
};
