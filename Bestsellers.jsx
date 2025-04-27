import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Bestsellers = () => {
    const bestsellers = [
        { title: "Wild Strawberry Pendant Necklace and Earrings", price: "$65", image: "https://i.pinimg.com/736x/8e/f1/e7/8ef1e73b591f2ae2331ec6c7c6518960.jpg" },
        { title: "Elegant Pearl and Floral Choker Necklace", price: "$150", image: "https://shop.southindiajewels.com/wp-content/uploads/2024/01/696-scaled.jpg" },
        { title: "Rose Radiance Pink Stone Bangles Set", price: "$80", image: "https://i.pinimg.com/736x/f2/13/d5/f213d5f09d3ad639cf2d93f4ced64e9c.jpg" },
        { title: "Bloom & Grace Flower Stud Earrings Set", price: "$50", image: "https://i.pinimg.com/736x/b9/3f/99/b93f9967db550a05a9cbab0d20c0a443.jpg" },
        { title: "Intricate Silver Choker Necklace", price: "$45.00", image: "https://i.pinimg.com/736x/2c/11/59/2c1159a741ce99c359aa9fec0ab5d636.jpg" },
        { title: "Elegant Diamond-Inspired Bracelets", price: "$30", image: "https://i.pinimg.com/736x/08/b9/b4/08b9b49fa2cefa13959275c5fecee374.jpg" },
        { title: "Rainbow Gemstone Eternity Ring", price: "$950", image: "https://i.pinimg.com/736x/17/39/2f/17392fd5dd819f0f70aeb6499baa0066.jpg" },
        { title: "Gold Flower Earrings", price: "$150", image: "https://i.pinimg.com/736x/2f/11/88/2f11882b5daa4b5865c4840cd54e0718.jpg" },

    ];
  return (
    <div>
     <Grid container spacing={2} sx={{ padding: 2 }}>
                                {bestsellers.map((product, index) => (
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

export default Bestsellers