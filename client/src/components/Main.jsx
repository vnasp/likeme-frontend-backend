import { Box, Card, Container, Grid, Paper, Typography } from "@mui/material";
import Form from "./Form";
import CardSketch from "./CardSketch";
import axios from "axios";
import { useEffect, useState } from "react";

const urlBaseServer = "http://localhost:3000";

export default function Main() {
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [about, setAbout] = useState("");
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  const getPosts = async () => {
    const { data: posts } = await axios.get(urlBaseServer + "/posts");
    setPosts([...posts]);
  };

  const addPost = async () => {
    if (title && imgSrc && about) {
      const post = { title, url: imgSrc, about };
      await axios.post(urlBaseServer + `/posts`, post);
      setMessage("Post agregado correctamente");
      getPosts();
    } else {
      setMessage("Todos los campos son requeridos");
    }
  };

  const likePost = async (id) => {
    await axios.put(urlBaseServer + `/posts/like/${id}`);
    getPosts();
  };

  const deletePost = async (id) => {
    await axios.delete(urlBaseServer + `/posts/${id}`);
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Container component="main" maxWidth="lg" sx={{ my: 4 }}>
        <Box component="section" maxWidth="xl" sx={{ my: 4 }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              Sube tus diseños
            </Typography>
            <Form
              setTitle={setTitle}
              setImgSRC={setImgSRC}
              setAbout={setAbout}
              addPost={addPost}
              setMessage={message}
            />{" "}
          </Paper>
        </Box>
        <Box component="section" maxWidth="lg">
          <Grid
            container
            columns={{ xs: 1, md: 12 }}
            sx={{
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(8px)",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            {posts.map((post, index) => (
              <Grid item key={index} xs={12} md={3}
              sx={
                {px: 1}
              }>
                <Card
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "8px",
                    boxShadow: "0 2px 20px rgba(0, 0, 0, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    padding: 2,
                    overflow: "hidden",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardSketch post={post} like={likePost} remove={deletePost} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
