"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubICon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { signInGithub, signInGoogle } from "@/actions/Authenticate";

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
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "black",
            opacity: "0.7",
          },
        }}
        onClick={() => signInGithub()}
      >
        <GitHubICon sx={{ fontSize: 25 }} />
        <Typography sx={{ fontSize: 15, textTransform: "capitalize" }}>
          Github
        </Typography>
      </Button>
      <Button
        variant="contained"
        sx={{
          width: "180px",
          height: "60px",
          color: "black",
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
