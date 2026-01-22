import { apiClient } from "./apiClient";

export type UserSummary = {
  id: number;
  name: string;
  username: string;
  email: string;
  company?: {
    name: string;
  };
};

export const userService = {
  async getCurrentUser(): Promise<UserSummary> {
    const { data } = await apiClient.get<UserSummary>("/users/1");
    return data;
  },
};
