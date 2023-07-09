import { ApiContext, User } from "types";
import { fetcher } from "utils";

export type SigninParams = {
  /**
   * The username of the user
   * @example "user"
   */
  username: string;

  /**
   * The password of the user
   * @example "password"
   */
  password: string;
};

/**
 * Signin a user
 * @param context The context of the request
 * @param params The parameters of the request
 * @returns The logged in user
 */
export const signin = async (
  context: ApiContext,
  params: SigninParams
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/signin`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
};
