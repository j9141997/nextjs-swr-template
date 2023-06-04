import { Key } from "swr";

// NOTE: SWE Key for User
export const USER_CACHE_GENERATOR = {
  all: ["users"],
  byId: (id: string) => [`users/${id}`],
} as const satisfies Record<string, Key>;
