import z from "zod";

export const LoginSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required" })
    .min(5, {
      message: "Username is too short",
    })
    .max(10, {
      message: "Username is too long",
    }),
  password: z
    .string()
    .min(1, {
      message: "Password is required",
    })
    .min(5, { message: "Password is too short" })
    .max(10, { message: "Password is too long" }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: "Username is required",
    })
    .min(5, {
      message: "Username is too short",
    })
    .max(10, {
      message: "Username is too long",
    }),
  password: z
    .string()
    .min(1, {
      message: "Password is required",
    })
    .min(5, { message: "Password is too short" })
    .max(10, { message: "Password is too long" }),
  verifyPassword: z
    .string()
    .min(1, {
      message: "Verify Password is required",
    })
    .min(5, { message: "Verify Password is too short" })
    .max(10, { message: "Verify password is too long" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not format email"),
});
