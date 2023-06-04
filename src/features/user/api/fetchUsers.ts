import { User } from "../types";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch("/api/users");

  if (!res.ok) {
  }

  const data = await res.json();
  return data.users as User[];
}
