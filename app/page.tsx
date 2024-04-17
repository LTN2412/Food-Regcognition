import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

export default async function Login() {
  const session = await auth();
  return (
    <div>
      <div>{JSON.stringify(session)}</div>;
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("resend");
        }}
      >
        <button type="submit">Resend</button>
      </form>
      <Link href={"/signin"}>log in</Link>
    </div>
  );
}
