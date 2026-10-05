import { SignJWT, jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "change-me-in-production-star-panaflex"
);

const COOKIE_NAME = "star_auth_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export type UserRole = "super_admin" | "sub_user";

export interface AuthPayload {
  sub: string;       // user id
  email: string;
  is_admin: boolean;
  role: UserRole;
  full_name: string;
}

export async function signToken(payload: AuthPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(SECRET);
}

export async function verifyToken(token: string): Promise<AuthPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as unknown as AuthPayload;
  } catch {
    return null;
  }
}

export { COOKIE_NAME, COOKIE_MAX_AGE };
