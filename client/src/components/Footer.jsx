import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container component="footer" maxWidth="lg" sx={{ mb: 4 }}>
      <Box
        component="section"
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(8px)",
          borderRadius: "16px",
          p: "20px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          a: {
            color: "secondary.main",
            textDecoration: "none",
            "&:hover": {
              color: "secondary.dark",
            },
          },
        }}
      >
        <Typography variant="body2" color="secondary.main">
          © {currentYear} Todos los derechos reservados
        </Typography>
        <Typography variant="body2" color="secondary.main">
          Sitio creado con{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReactJS
          </a>{" "}
          y{" "}
          <a href="https://mui.com/" target="_blank" rel="noopener noreferrer">
            Material UI
          </a>
        </Typography>
      </Box>
    </Container>
  );
}
