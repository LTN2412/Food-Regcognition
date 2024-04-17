"use server";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function Authenticate(data: any) {
  try {
    await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirectTo: "/predict",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Username or password is not correct" };
        default:
          return { error: "Some thing wrong!" };
      }
    }
    throw error;
  }
}
export async function signInGithub() {
  await signIn("github", {
    redirectTo: "/predict",
  });
}

export async function signInGoogle() {
  await signIn("google", {
    redirectTo: "/predict",
  });
}

export async function SignOut() {
  await signOut();
}
