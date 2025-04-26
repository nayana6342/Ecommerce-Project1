import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'

const Chokers = () => {
    const chokers = [
        { title: "Regal Blossom Beaded Choker", price: "$150", image: "https://i.pinimg.com/736x/dc/a3/4a/dca34a61f1a9177c33cfc29f01ebbe35.jpg" },
        { title: "Antique Silver Choker", price: "$100", image: "https://i.pinimg.com/736x/e3/21/55/e3215557a24a639cfac8c7779b8286c3.jpg" },
        { title: "Gold Coin Layered Choker Necklace", price: "$330", image: "https://i.pinimg.com/736x/14/30/7d/14307d972525b73865dc37121291cf72.jpg" },
        { title: "Pearl-Encrusted Golden Petal Choker", price: "$380", image: "https://i.pinimg.com/736x/8e/db/a6/8edba6efda0a334ca03897915346e9ff.jpg" },
        { title: "Handmade Floral Lace Choker Necklace", price: "$65", image: "https://i.pinimg.com/736x/5c/12/35/5c123514a8271c216eb5ec5bea94c668.jpg" },
        { title: "Antique Silver Choker Necklace", price: "$120", image: "https://i.pinimg.com/736x/c3/08/63/c308633fbfd32da48fb1f64b247b81cf.jpg" },
        { title: "Emerald Elegance Choker Necklace", price: "$180", image: "https://i.pinimg.com/736x/d9/b0/05/d9b0050217108d4cebe580b9bdbe8da4.jpg" },
        { title: "Bohemian Charm Blue & Red Choker Necklace", price: "$270", image: "https://i.pinimg.com/736x/16/84/42/16844227fab4b45c60d7ddfb25cb3f62.jpg" },

    ];
  return (
    <div>
    <Grid container spacing={2} sx={{ padding: 2 }}>
                        {chokers.map((product, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        width: 300, // Fixed width for all cards
                                        height: 400, // Fixed height for all cards
                                        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                                        overflow: 'hidden', // Prevents content overflow
                                        position: 'relative', // Enables absolute positioning for child elements
                                    }}
                                    className="product-card"
                                >
                                    {/* Favorite Icon */}
                                    <IconButton
                                        sx={{
                                            position: 'absolute',
                                            top: 8, // Position 8px from the top
                                            right: 8, // Position 8px from the right
                                            backgroundColor: '#ffffff', // White background for better visibility
                                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow for hover effect
                                            zIndex: 1, // Ensures the icon is on top of other elements
                                            '&:hover': {
                                                backgroundColor: '#f0f0f0', // Slight gray background on hover
                                            },
                                        }}
                                    >
                                        <FavoriteBorderIcon sx={{ color: '#ff0000' }} /> {/* Red heart icon */}
                                    </IconButton>
        
                                    {/* Product Image */}
                                    <CardMedia
                                        component="img"
                                        alt={product.title}
                                        sx={{
                                            width: '100%', // Ensures the image fills the card width
                                            height: '200px', // Fixed height for images
                                            objectFit: 'cover', // Proper scaling of images without distortion
                                        }}
                                        image={product.image}
                                    />
        
                                    {/* Product Details */}
                                    <CardContent
                                        sx={{
                                            height: 120, // Reduced height for content to create space
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                            {product.title}
                                        </Typography>
        
                                        <Typography variant="body1" color="secondary" sx={{ textAlign: 'center' }}>
                                            {product.price}
                                        </Typography>
                                    </CardContent>
        
                                    {/* View Button - Moved Upwards */}
                                    <CardActions
                                        sx={{
                                            marginTop: '-20px', // Moves the button upwards
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center', // Centers the button horizontally
                                        }}
                                    >
                                        <Button variant="outlined">VIEW</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
    </div>
  )
}

export default Chokers