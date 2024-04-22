import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";

export default function Header() {
  return (
    <Container component="header" maxWidth="lg" sx={{ mt: 4 }}>
      <AppBar
      component="nav"
        position="static"
        sx={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(8px)",
          borderRadius: "16px",
          p: 2,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Toolbar>
          <Box component="img" src="./logo.webp" width={60} />
          <Typography component="h1" variant="h4" sx={{ flexGrow: 1 }}>
            LikeMe
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
