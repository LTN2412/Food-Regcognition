import type { Metadata } from "next";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme.js";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Predict App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <CssVarsProvider theme={theme}>
            <CssBaseline>{children}</CssBaseline>
          </CssVarsProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
