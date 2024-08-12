// pages/products.js
import { Container, Typography } from "@mui/material";
import ProductList from "../components/ProductList";

export default function Products() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Our Products
      </Typography>
      <ProductList />
    </Container>
  );
}
