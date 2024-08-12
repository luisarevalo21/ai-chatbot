// components/Footer.js
"use client";
import { Container, Typography, Link } from "@mui/material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6, marginTop: "50vh" }} component="footer">
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom color="primary">
          Flower Shop
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Bringing the beauty of flowers to you.
        </Typography>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Link href="https://www.facebook.com" color="secondary" sx={{ mx: 2 }}>
            Facebook
          </Link>
          <Link href="https://www.instagram.com" color="secondary" sx={{ mx: 2 }}>
            Instagram
          </Link>
          <Link href="https://www.twitter.com" color="secondary" sx={{ mx: 2 }}>
            Twitter
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
