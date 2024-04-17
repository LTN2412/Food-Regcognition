"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { signInGithub, signInGoogle } from "@/actions/authenticate";

export default function OAuthLogin() {
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "center", gap: 3 }}
    >
      <Button
        variant="contained"
        sx={{
          width: "180px",
          height: "60px",
          gap: 1,
          border: 1,
          borderRadius: 3,
        }}
        onClick={() => signInGithub()}
      >
        <FacebookIcon sx={{ fontSize: 25 }} />
        <Typography sx={{ fontSize: 15, textTransform: "capitalize" }}>
          Facebook
        </Typography>
      </Button>
      <Button
        variant="contained"
        sx={{
          width: "180px",
          height: "60px",
          color: "gray",
          gap: 1,
          backgroundColor: "white",
          border: 1,
          borderRadius: 3,
          ":hover": {
            backgroundColor: "white",
            opacity: 0.8,
          },
        }}
        onClick={() => signInGoogle()}
      >
        <GoogleIcon sx={{ fontSize: 25 }} />
        <Typography sx={{ fontSize: 15, textTransform: "capitalize" }}>
          Google
        </Typography>
      </Button>
    </Box>
  );
}
