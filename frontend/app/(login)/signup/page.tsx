import SignUp from "@/components/SignUp";
import Typography from "@mui/material/Typography";
export default function SignUpPage() {
  return (
    <>
      <Typography
        sx={{
          fontSize: 45,
          fontFamily: "sans-serif",
        }}
      >
        Sign Up
      </Typography>
      <SignUp />
    </>
  );
}
