import { NextRequest, NextResponse } from "next/server";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await verifyToken(token);
  if (!payload) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const user = {
    id: payload.sub,
    email: payload.email,
    is_admin: payload.is_admin,
    role: payload.role ?? (payload.is_admin ? "super_admin" : "sub_user"),
    full_name: payload.full_name ?? payload.email.split("@")[0],
  };

  return NextResponse.json({
    user,
    session: { user },
  });
}
