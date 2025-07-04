import { createAuthClient } from "better-auth/react";
const authClient = createAuthClient();

export const signIn = async () => {
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
    errorCallbackURL: "/error",
  });
};

export default authClient;
