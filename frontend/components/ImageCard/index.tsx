import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function ImageCard({ imgURL, result }: any) {
  return (
    <Card sx={{ width: "60%", height: "70%" }}>
      <CardMedia
        sx={{ width: "100%", height: "65%" }}
        image={imgURL != "" ? imgURL : "/placeholder.webp"}
      />
      <Divider variant="middle" />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h3"  >
          {result.predict != "" ? result.predict : "Result"}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Predict the food
        </Typography>
      </CardContent>
    </Card>
  );
}
