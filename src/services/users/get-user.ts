import type { ApiContext, User } from "types/data";
import { fetcher } from "utils";

export type GetUserParams = {
  /**
   * The id of the user
   */
  id: number;
};

/**
 * Get a user
 * @param context The context of the request
 * @param params The parameters of the request
 * @returns The user
 */
export const getUser = async (
  context: ApiContext,
  { id }: GetUserParams
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/users/${id}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};
