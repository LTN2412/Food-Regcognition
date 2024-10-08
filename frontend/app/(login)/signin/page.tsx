import Link from "next/link";
import Typography from "@mui/material/Typography";
import OAuthLogin from "@/components/OAuthLogin";
import CredentialLogin from "@/components/CredentialLogin";

export default function Login() {
  return (
    <>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Log In
      </Typography>
      <OAuthLogin />
      <CredentialLogin />
      <Typography sx={{ mt: 2 }}>
        {"Not a member? "}
        <Link href={"/signup"}>Sign up</Link>
        {" now"}
      </Typography>
    </>
  );
}
