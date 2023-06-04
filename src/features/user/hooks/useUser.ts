import useSWR, { type SWRConfiguration } from "swr";
import type { User } from "../types";
import { fetchUser } from "../api/fetchUser";
import { USER_CACHE_GENERATOR } from "../cache";

export function useUser(id: string, config?: SWRConfiguration<User, Error>) {
  const { data, ...rest } = useSWR<User, Error>(
    USER_CACHE_GENERATOR.byId(id),
    fetchUser,
    config
  );

  return {
    data: data ?? null,
    ...rest,
  };
}
