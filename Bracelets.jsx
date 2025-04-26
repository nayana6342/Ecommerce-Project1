import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'

const Bracelets = () => {
    const bracelets = [
        { title: "Golden Blossom Pearl Bracelets Set", price: "$30", image: "https://i.pinimg.com/736x/1f/38/91/1f3891478d1afa430b6d24e0b2df2648.jpg" },
        { title: "Flower Detail Beaded Bracelet", price: "$40", image: "https://i.pinimg.com/736x/27/95/71/2795714217e1a63e6805b935bf037fa8.jpg" },
        { title: "Pastel Paradise Ice Cream Bracelets", price: "$40", image: "https://i.pinimg.com/736x/1e/23/6e/1e236ed0f7bcce9cd0acf855cc44e217.jpg" },
        { title: "Floral Elegance Gold Bracelet Set", price: "$60", image: "https://i.pinimg.com/736x/fc/9d/18/fc9d18af4f53488a2560d9ca7d9461b8.jpg" },
        { title: "Beaded Flower Bracelet pairs Handmade", price: "$25", image: "https://i.pinimg.com/736x/b7/98/d5/b798d5838ea7efed0063d95147f0f495.jpg" },
        { title: "Blush & Ruby Pearl Bracelet Duo", price: "$40", image: "https://i.pinimg.com/736x/e8/6b/43/e86b43d76c787db4a145752a6617bc36.jpg" },
        { title: "Golden Charm Star Bracelet Set", price: "$70", image: "https://i.pinimg.com/736x/c9/46/71/c94671abdec0987005404b65c1eb79c0.jpg" },
        { title: "Twilight Blossom Gold Bracelets Set", price: "$45", image: "https://i.pinimg.com/736x/12/e4/3e/12e43e726be9946d9208d9c925a3be20.jpg" },

    ];
  return (
    <div>
    <Grid container spacing={2} sx={{ padding: 2 }}>
                            {bracelets.map((product, index) => (
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

export default Bracelets