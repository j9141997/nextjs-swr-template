import type { User } from "../types";

export async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);

  return response.json();
}
