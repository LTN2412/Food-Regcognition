import { User, Account } from "next-auth";

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
