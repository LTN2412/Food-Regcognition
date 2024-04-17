"use server";
import z from "zod";
import { SignUpSchema } from "@/schemas";
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
      } else {
        redirect("http://127.0.0.1:8000");
      }
    });
  } catch (error: any) {
    // catch when domain is not correct
    return { error: error.detail };
  }
}
