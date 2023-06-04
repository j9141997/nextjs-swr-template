import useSWR, { SWRConfiguration } from "swr";
import { fetchUsers } from "../api/fetchUsers";
import { User } from "../types";
import { USER_CACHE_GENERATOR } from "../cache";

export function useUsers(config?: SWRConfiguration<User[], Error>) {
  const { data, ...rest } = useSWR<User[], Error>(
    USER_CACHE_GENERATOR.all,
    fetchUsers,
    config
  );

  return {
    data: data ?? [],
    ...rest,
  };
}
