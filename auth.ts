import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { User } from "@prisma/client";
import { jwtDecode } from "jwt-decode";
import { GetUserInfo, CheckTokenExp } from "./lib";
import github from "next-auth/providers/github";
import { CreateUserOauth } from "./app/lib/CreateUserOauth";
import google from "next-auth/providers/google";
import resend from "next-auth/providers/resend";

const prisma = new PrismaClient();
export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt", maxAge: 3600 },
  providers: [
    github,
    google,
    Credentials({
      async authorize(credentials: any) {
        const formData = new FormData();
        formData.append("username", credentials?.username);
        formData.append("password", credentials?.password);
        const res = await fetch("http://127.0.0.1:8000/user/token", {
          method: "POST",
          body: formData,
        });
        const user = await res.json();
        if (user.detail) {
          return null;
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account?.provider == "credentials") {
        // first time login
        token.access_token = user.access_token!;
        token.access_token_exp = jwtDecode(user.access_token!).exp;
        token.refresh_token = user.refresh_token!;
        token.refresh_token_exp = jwtDecode(user.refresh_token!).exp;
      }
      if (user && account?.provider != "credentials") {
        await CreateUserOauth(user, account!);
      }
      token = await CheckTokenExp(token);
      return token;
    },
    async session({ session, token, user }) {
      // if (!user) {
      //   const data = await GetUserInfo(token.access_token!);
      //   session.user.email = data.email;
      //   session.user.name = data.username;
      // }
      // if (token) {
      //   session.access_token = token.access_token;
      // }
      return session;
    },
  },
});