import { createApiClient, createInMemoryTokenManager } from "@company/commons/api";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const tokenManager = createInMemoryTokenManager({
  accessToken: "demo-access-token",
  refresh: async () => {
    await delay(400);
    return "demo-access-token-refreshed";
  },
  onUnauthorized: () => {
    console.warn("세션이 만료되었습니다. 다시 로그인 해주세요.");
  },
});

export const apiClient = createApiClient({
  baseURL: "https://jsonplaceholder.typicode.com",
  tokenManager,
  defaultHeaders: {
    "X-Demo-App": "commons-demo-app",
  },
});
