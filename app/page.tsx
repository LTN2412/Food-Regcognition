import { auth } from "@/auth";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default async function Login() {
  const session = await auth();
  return (
    <div>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        }}
      >
        <Typography variant="h3">
          This app create to predict something{" "}
        </Typography>
        <Button variant="contained">
          <Link
            href={"/signin"}
            style={{ textDecoration: "none", color: "black" }}
          >
            log in
          </Link>
        </Button>
      </Box>
    </div>
  );
}
