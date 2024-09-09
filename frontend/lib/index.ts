import { JWT } from "next-auth/jwt";
import { jwtDecode } from "jwt-decode";

export async function RefreshAccessToken(token: JWT) {
  const res = await fetch("http://127.0.0.1:8000/user/refresh-token", {
    headers: {
      Authorization: `Bearer ${token.refresh_token}`,
    },
  });
  const data = await res.json();
  return {
    ...token,
    access_token: data.access_token,
    access_token_exp: jwtDecode(data.access_token!)?.exp,
  };
}

export async function CheckTokenExp(token: JWT) {
  if (Date.now() / 1000 > token.refresh_token_exp!) {
    return {};
  }
  if (Date.now() / 1000 > token.access_token_exp!) {
    const newToken = await RefreshAccessToken(token);
    return newToken;
  }
  return token;
}

export async function GetUserInfo(access_token: string) {
  const res = await fetch("http://127.0.0.1:8000/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const data = await res.json();
  return data;
}
