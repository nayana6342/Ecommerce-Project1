import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'

const Bangles = () => {
    const bangles = [
        { title: "Gemstone-Encrusted Bangles", price: "$60", image: "https://i.pinimg.com/736x/9e/94/79/9e94791f9364f3d1a399537ec49b91c3.jpg" },
        { title: "Ruby Pearl Gold Bangles Set", price: "$135", image: "https://i.pinimg.com/736x/02/e1/c0/02e1c0e80be00d952d48bc60bd90a4af.jpg" },
        { title: "Emerald-Blue Velvet Sparkle Bangles", price: "$45", image: "https://i.pinimg.com/736x/cf/58/9f/cf589f1c7cf31c4641d1fbb36c679b67.jpg" },
        { title: "Emerald Glow Bangles with Golden Highlights", price: "$55", image: "https://i.pinimg.com/736x/59/a0/30/59a0302cd348070f474c19844f25102c.jpg" },
        { title: "Floral Harmony Gold Bangle", price: "$65", image: "https://i.pinimg.com/736x/1c/e0/c3/1ce0c3cf53d18bc2f37327e18e72cee0.jpg" },
        { title: "Golden Twilight Floral Bangles", price: "$80", image: "https://i.pinimg.com/736x/49/79/be/4979be93f44ac83de8d6ba28501d0904.jpg" },
        { title: "Purple and Gold Bangle Set", price: "$30", image: "https://i.pinimg.com/736x/79/5b/3c/795b3ce25b75e20e9c3862ac8d7781bd.jpg"},
        { title: "Forest Charm Silver Bangle Set", price: "$70", image: "https://i.pinimg.com/736x/1f/b5/2b/1fb52bb5a987c9261f1c2f452fe1dcfc.jpg" },

    ];
  return (
    <div>
    <Grid container spacing={2} sx={{ padding: 2 }}>
                            {bangles.map((product, index) => (
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

export default Bangles