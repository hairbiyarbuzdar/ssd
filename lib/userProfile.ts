export type UserRole = "super_admin" | "sub_user";

export interface UserProfile {
  userId: string;
  email: string;
  isAdmin: boolean;
  role: UserRole;
  fullName: string;
}

export async function fetchUserProfile(): Promise<UserProfile | null> {
  try {
    const res = await fetch("/api/auth/session");
    if (!res.ok) return null;
    const json = await res.json();
    const user = json.user;
    if (!user) return null;
    const role: UserRole = user.role === "super_admin" ? "super_admin" : "sub_user";
    return {
      userId: user.id ?? "",
      email: user.email ?? "",
      isAdmin: role === "super_admin",
      role,
      fullName: user.full_name || (user.email ? String(user.email).split("@")[0] : "User"),
    };
  } catch {
    return null;
  }
}
