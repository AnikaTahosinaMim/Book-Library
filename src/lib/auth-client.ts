import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://scic-assignment-amber.vercel.app",
  plugins:[jwtClient()]
});

export const { signIn, signUp, useSession } = authClient;