// components/ProductList.js
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const products = [
  { id: 1, name: "Rose Bouquet", price: "$30", image: "/rose-boquet.jpg" },
  { id: 2, name: "Tulip Bouquet", price: "$25", image: "/tulip-boquet.jpg" },
  { id: 3, name: "Lily Arrangement", price: "$40", image: "/lily.jpg" },
];

export default function ProductList() {
  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" height="200" image={product.image} alt={product.name} />
            <CardContent>
              <Typography variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
              <Button variant="contained" color="secondary" fullWidth>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
