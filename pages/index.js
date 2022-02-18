import Layout from "../components/Layout";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography, Button} from "@mui/material";
import data from "../utils/data";

export default function Home() {
    return (
        <Layout>
            <h1>Products</h1>
            <Grid container spacing={3}>
                {data.products.map((product) => (
                    <Grid item md={4} key={product.name}>
                        <Card>
                            <CardActionArea>
                                <CardMedia component="img" image={product.images} title={product.name}/>
                                <CardContent>
                                    <Typography>
                                        {product.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Typography>${product.price}</Typography>
                                <Button size="small" color="primary"> Add to Cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    );
}
