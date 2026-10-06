import { NextRequest, NextResponse } from "next/server";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";

import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await verifyToken(token);
  if (!payload) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const currentUser = await prisma.user.findUnique({ where: { id: payload.sub } });
  if (!currentUser?.is_active) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = {
    id: payload.sub,
    email: currentUser.email,
    is_admin: currentUser.role === "super_admin",
    role: currentUser.role,
    modules: currentUser.modules,
    full_name: currentUser.full_name || currentUser.email.split("@")[0],
  };

  return NextResponse.json({
    user,
    session: { user },
  });
}
