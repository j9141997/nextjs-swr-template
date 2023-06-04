import useSWRMutation from "swr/mutation";
import { USER_CACHE_GENERATOR } from "../cache";

export function useUpdateUser() {
  return useSWRMutation(USER_CACHE_GENERATOR.byId, async (url) => {
    try {
      const {} = await fetch(url);
    } catch (e) {}
  });
}
