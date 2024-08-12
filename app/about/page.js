// pages/about.js
import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom color="primary">
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        We are a family-owned flower shop dedicated to providing beautiful and fresh floral arrangements. Our team is
        passionate about flowers and strives to bring joy to our customers with every bouquet.
      </Typography>
      <Typography variant="body1" paragraph>
        Our shop has been serving the community for over 10 years, and we take pride in our customer service and quality
        products. Whether you&apos;re looking for a special gift or flowers for an event, we&apos;re here to help make
        your vision a reality.
      </Typography>
    </Container>
  );
}
