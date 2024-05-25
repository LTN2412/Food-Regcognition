import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function UploadFileButton({ handleChange }: any) {
  return (
    <Button
      id="upload_button"
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      onChange={handleChange}
      sx={{
        height: "60px",
        backgroundColor: "#475569",
        "&:hover": {
          opacity: 0.8,
          backgroundColor: "#475569",
        },
      }}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
