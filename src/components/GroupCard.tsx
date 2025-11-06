import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

type GroupCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export default function GroupCard({ title, description, imageUrl, link }: GroupCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        },
      }}
    >
      <CardActionArea component={Link} to={link}>
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="180"
            image={imageUrl}
            alt={title}
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                filter: "brightness(0.85)",
              },
            }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
