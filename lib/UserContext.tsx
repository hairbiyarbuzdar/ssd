"use client";

import { createContext, useContext } from "react";
import type { UserProfile } from "@/lib/userProfile";

export const UserContext = createContext<UserProfile | null>(null);

/** Returns the current user's profile. May be null during initial load. */
export function useUser(): UserProfile | null {
  return useContext(UserContext);
}
