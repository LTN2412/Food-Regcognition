"use server";
import z from "zod";
import { SignUpSchema } from "@/schemas";
import { User, Account } from "next-auth";
import { redirect } from "next/navigation";

export async function CreateUser(data: z.infer<typeof SignUpSchema>) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (key != "verifyPassword") formData.append(key, value);
  }
  try {
    await fetch("http://127.0.0.1:8000/user/signup", {
      method: "POST",
      body: formData,
    }).then(async (res) => {
      if (!res.ok) {
        throw await res.json();
      }
    });
  } catch (error: any) {
    return { error: error.detail };
  }
  redirect("/signin");
}

export async function CreateUserOauth(user: User, account: Account) {
  const bodyData = {
    user,
    account,
  };
  await fetch("http://127.0.0.1:8000/user/signup-oauth", {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
