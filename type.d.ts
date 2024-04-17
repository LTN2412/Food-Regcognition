declare module "next-auth" {
  interface User {
    access_token?: string;
    refresh_token?: string;
  }
  interface Account {}
  interface Session {
    access_token?: string;
  }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    idToken?: string;
    access_token?: string;
    access_token_exp?: number;
    refresh_token?: string;
    refresh_token_exp?: number;
  }
}
