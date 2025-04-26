import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';

const Rings = () => {
    const rings = [
        { title: "Golden Blossoms Ring", price: "$100", image: "https://i.pinimg.com/736x/45/d5/e0/45d5e0b1eddcf67bab2e949951643378.jpg" },
        { title: "Regal Redstone Gold Ring", price: "$60", image: "https://i.pinimg.com/736x/14/85/77/14857799fb21e414a0082329f93e766b.jpg" },
        { title: "Purple Amethyst Vintage Gold Ring", price: "$150", image: "https://i.pinimg.com/736x/c3/dc/03/c3dc03dcc55277f594cae66b662e5f45.jpg" },
        { title: "Green Gemstone Statement Ring", price: "$70", image: "https://i.pinimg.com/736x/fc/87/62/fc8762680ab668c1205a0a6368d7c533.jpg" },
        { title: "Ornate Floral Elegance Ring", price: "$55", image: "https://i.pinimg.com/736x/38/a3/00/38a30089e52eb51a7582342a5fda3d13.jpg" },
        { title: "Cherry Blossom Gemstone Ring", price: "$", image: "https://i.pinimg.com/736x/45/24/57/4524575b1b4d79dba4d528446bcbdcf5.jpg" },
        { title: "Elegant Gold and Diamond Rings Set", price: "$250", image: "https://jkdiamondsinstitute.com/wp-content/uploads/2021/03/image4.jpg" },
        { title: "Luxe Ruby Gold Blossom Ring", price: "$120", image: "https://i.pinimg.com/736x/21/28/46/212846bb4bbfadd9416f45916fc88713.jpg" },

    ];

    return (
        <div>
            <Grid container spacing={2} sx={{ padding: 2 }}>
                {rings.map((product, index) => (
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
    );
};

export default Rings;