import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";

export async function POST(req: NextRequest) {
  // 1. Verify calling user is admin
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const payload = await verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!payload.is_admin) return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });

  // 2. Parse body
  const { userId, currentPassword, newPassword } =
    await req.json() as { userId: string; currentPassword?: string; newPassword: string };

  if (!userId || !newPassword) {
    return NextResponse.json({ error: "userId and newPassword are required" }, { status: 400 });
  }
  if (newPassword.length < 8) {
    return NextResponse.json({ error: "New password must be at least 8 characters" }, { status: 400 });
  }

  // 3. Find target user
  const targetUser = await prisma.user.findUnique({ where: { id: userId } });
  if (!targetUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // 4. Verify the current password ONLY when an admin is changing their OWN
  //    password (self-service). Resetting another user's password is an admin
  //    action that doesn't require knowing the target's current password —
  //    consistent with the admin-direct reset flow (CR-15, PATCH /api/users).
  if (userId === payload.sub) {
    if (!currentPassword) {
      return NextResponse.json({ error: "Current password is required" }, { status: 400 });
    }
    const valid = await bcrypt.compare(currentPassword, targetUser.password_hash);
    if (!valid) {
      return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
    }
  }

  // 5. Update to new password
  const newHash = await bcrypt.hash(newPassword, 12);
  await prisma.user.update({
    where: { id: userId },
    data: { password_hash: newHash },
  });

  return NextResponse.json({ success: true });
}
