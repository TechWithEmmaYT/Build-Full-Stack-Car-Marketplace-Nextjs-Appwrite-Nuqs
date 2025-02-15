import { AUTH_COOKIE_NAME } from "@/constants/server";
import { createAdminClient } from "@/lib/appwrite";
import { loginSchema } from "@/validation/auth.validation";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = await loginSchema.parseAsync(body);
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set(AUTH_COOKIE_NAME, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
    });

    return NextResponse.json({
      message: "User login successfully",
    });
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
}
