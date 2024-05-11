"use client";
import TextFields from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginSchema } from "@/schemas/index";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Authenticate } from "@/actions/Authenticate";
import { useTransition } from "react";

export default function CredentialLogin() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<z.infer<typeof LoginSchema>>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = (data) => {
    startTransition(async () => {
      await Authenticate(data).then((err) => {
        setError("root", {
          message: err?.detail,
        });
      });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 6,
          gap: 2,
        }}
      >
        <TextFields
          variant="outlined"
          label="Username"
          InputProps={register("username")}
          onFocus={() => clearErrors("root")}
        />
        {errors.username && (
          <Typography
            variant="body1"
            sx={{ width: "100%", textAlign: "left", color: "red" }}
          >
            {errors.username.message}
          </Typography>
        )}
        <TextFields
          variant="outlined"
          label="Password"
          type="password"
          InputProps={register("password")}
          onFocus={() => clearErrors("root")}
        />
        {errors.password && (
          <Typography
            variant="body1"
            sx={{ width: "100%", textAlign: "left", color: "red" }}
          >
            {errors.password.message}
          </Typography>
        )}
        <Button variant="outlined" type="submit" disabled={isPending}>
          Login
        </Button>
        <Typography
          variant="body1"
          sx={{ width: "100%", textAlign: "left", color: "red" }}
        >
          {errors.root?.message}
        </Typography>
      </Box>
    </form>
  );
}
