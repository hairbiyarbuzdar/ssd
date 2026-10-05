import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";

export async function GET(req: NextRequest) {
  // 1. Verify calling user is admin
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const payload = await verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!payload.is_admin) return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });

  // 2. Return all users (without password_hash)
  const users = await prisma.user.findMany({
    select: { id: true, email: true, is_admin: true, created_at: true },
    orderBy: { email: "asc" },
  });

  return NextResponse.json({
    users: users.map((u) => ({
      id: u.id,
      email: u.email,
      isAdmin: u.is_admin,
      lastSignIn: null,
    })),
  });
}
