import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'

const Earrings = () => {
    const earrings = [
        { title: "Pearl and Velvet Charm Earrings", price: "$25", image: "https://i.pinimg.com/474x/17/cc/25/17cc253a849cf0b571c67251c386e95b.jpg" },
        { title: "Golden Blossoms Earrings", price: "$20", image: "https://i.pinimg.com/736x/49/c7/53/49c75391cdb0befbb25d3da31df1639b.jpg" },
        { title: "Gold Leaf Earrings with Sparkling Accents", price: "$45", image: "https://i.pinimg.com/736x/50/1b/12/501b12690c5e2657f05c460256314677.jpg" },
        { title: "Black Heart Crystal Drop Earrings", price: "$25", image: "https://i.pinimg.com/736x/fb/97/53/fb9753c22c1874f7fb72dacb94c748d1.jpg" },
        { title: "Handcrafted Red Tulip Crochet Earrings", price: "$18", image: "https://i.pinimg.com/736x/e2/ad/fe/e2adfedfa4838381f20c72ecf03e1354.jpg" },
        { title: "Butterfly Charm Hoop Earrings Set", price: "$45", image: "https://i.pinimg.com/736x/86/15/8d/86158d363ca5ccd6fe1e2680849dd4c7.jpg" },
        { title: "Elegant Silver Jhumka Hoop Earrings", price: "$25", image: "https://i.pinimg.com/736x/d1/95/3e/d1953e71b2f20367609d374688944812.jpg" },
        { title: "Colorful Floral Earrings Set", price: "$30", image: "https://i.pinimg.com/736x/cb/fc/e5/cbfce555b200e15cf85a5cd42ab17adb.jpg" },

    ];

  return (
    <div>
     <Grid container spacing={2} sx={{ padding: 2 }}>
                    {earrings.map((product, index) => (
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

export default Earrings