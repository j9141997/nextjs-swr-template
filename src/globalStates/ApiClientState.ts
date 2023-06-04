import { atom, useRecoilValue } from "recoil";
import axios from "axios";
import { AxiosInstance } from "axios";

interface ApiClientState {
  apiClient: any;
}

let apiClient: AxiosInstance | null = null;
function getApiClient() {
  if (apiClient == null) {
    apiClient = axios.create({
      baseURL: "http://localhost:3000/api/v1",
    });
  }

  return apiClient;
}

const apiClientState = atom<ApiClientState>({
  key: "apiClientState",
  default: {
    apiClient: getApiClient(),
  },
});

export function useApiClient() {
  return useRecoilValue(apiClientState);
}
