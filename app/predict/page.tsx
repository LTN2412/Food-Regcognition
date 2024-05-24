"use client";
import UploadFileButton from "@/components/UploadFileButton";
import AppBar from "@/components/Appbar";
import ImageCard from "@/components/ImageCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { SignOut } from "@/actions/Authenticate";

export default function PredictPage() {
  const session = useSession();
  const access_token = session.data?.access_token;
  const [img, setImg] = useState<File>();
  const [imgURL, setImgURL] = useState<String | ArrayBuffer | null>("");
  const [result, setResult] = useState({
    predict: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = function () {
      setImgURL(reader.result);
    };
    if (e.target.files![0] != undefined) {
      reader.readAsDataURL(e.target.files![0]);
      setImg(e.target.files![0]);
      setResult({
        predict: "",
      });
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    if (img) {
      form.append("file", img);
      try {
        const payload = await axios.post(
          "http://127.0.0.1:8000/predict",
          form,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setResult(payload.data);
      } catch {
        SignOut();
      }
    }
  };
  return (
    <Box>
      <AppBar />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "calc( 100vh - 64px )",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            backgroundColor: "#fca5a5",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              <UploadFileButton handleChange={handleChange} />
              <Button
                variant="outlined"
                type="submit"
                sx={{
                  color: "#475569",
                  borderColor: "#475569",
                  "&:hover": {
                    opacity: 0.8,
                    borderColor: "#475569",
                  },
                }}
              >
                Predict
              </Button>
            </Box>
          </form>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            backgroundColor: "#db9fb6",
          }}
        >
          <ImageCard imgURL={imgURL} result={result} />
        </Box>
      </Box>
    </Box>
  );
}
