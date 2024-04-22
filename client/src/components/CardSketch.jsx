import {
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";

export default function CardSketch({ post, like, remove }) {
  return (
    <>
      <CardMedia component="img" image={post.image} alt={post.title} />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.about}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          size="small"
          sx={{
            color: post.likes ? "#DAA520" : "#333333",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
            },
          }}
          onClick={() => like(post.id)}
        >
          <FavoriteIcon sx={{ mr: 1 }} />
          <span>{post.likes}</span>
        </Button>
        <Button
          size="small"
          sx={{
            color: "#333333",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
            },
          }}
          onClick={() => remove(post.id)}
        >
          <CloseIcon />
        </Button>
      </CardActions>
    </>
  );
}
