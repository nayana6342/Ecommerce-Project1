import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton"; // Ensure the path and spelling are correct
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';
import './styles.css';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Grid, Toolbar } from '@mui/material';

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const categories = [
    { title: "Rings →", image: "https://i.pinimg.com/736x/45/d5/e0/45d5e0b1eddcf67bab2e949951643378.jpg", link: "/rings" },
    { title: "Earrings →", image: "https://i.pinimg.com/736x/49/c7/53/49c75391cdb0befbb25d3da31df1639b.jpg", link: "/earrings" },
    { title: "Chokers →", image: "https://i.pinimg.com/736x/c3/08/63/c308633fbfd32da48fb1f64b247b81cf.jpg", link: "/chokers" },
    { title: "Bangles →", image: "https://i.pinimg.com/736x/79/5b/3c/795b3ce25b75e20e9c3862ac8d7781bd.jpg", link: "/bangles" },
    { title: "Bracelets →", image: "https://i.pinimg.com/736x/1e/23/6e/1e236ed0f7bcce9cd0acf855cc44e217.jpg", link: "/bracelets" }
  ];

  const bestsellers = [
    {
      id: 3,
      title: "Elegant Pearl and Floral Choker Necklace",
      price: "$150",
      image: "https://shop.southindiajewels.com/wp-content/uploads/2024/01/696-scaled.jpg"
    },
    {
      id: 10,
      title: "Gold Flower Earrings",
      price: "$150",
      image: "https://i.pinimg.com/736x/2f/11/88/2f11882b5daa4b5865c4840cd54e0718.jpg"
    },
    {
      id: 11,
      title: "Rainbow Gemstone Eternity Ring",
      price: "$950",
      image: "https://i.pinimg.com/736x/17/39/2f/17392fd5dd819f0f70aeb6499baa0066.jpg"
    },
    {
      id: 13,
      title: "Intricate Silver Choker Necklace",
      price: "$45.00",
      image: "https://i.pinimg.com/736x/2c/11/59/2c1159a741ce99c359aa9fec0ab5d636.jpg"
    }
  ];

  return (
    <div>
      {/* Navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Regal Spark Jewels
            </Typography>
            <IconButton color="inherit" onClick={toggleSearchBar}>
              <SearchIcon />
            </IconButton>
            {showSearchBar && (
              <TextField
                variant="outlined"
                placeholder="Search..."
                size="small"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 1,
                  ml: 2,
                  width: '40%',
                }}
              />
            )}
            <FavoriteIcon />&nbsp;&nbsp;&nbsp;
            <ShoppingCartIcon />&nbsp;&nbsp;
            <Link to="/login">
              <IconButton color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </Link>
            <Link to="/contact">
              <Button color="inherit">Contact us</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Product Categories Heading */}
      <br /><br /><br />
      <Typography variant="h4" align="center" sx={{ marginTop: "20px", marginBottom: "20px" }}>
        Product Categories
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={category.link}>
              <Card
                sx={{
                  width: 350, // Fixed width for all cards
                  height: 400, // Fixed height for all cards
                  borderRadius: '15px',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden', // Ensures the content stays within the card
                }}
                className="product-card"
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: '100%', // Ensures the image fills the card width
                    height: '250px', // Fixed height for the image
                    objectFit: 'cover', // Ensures the image is properly scaled without distortion
                  }}
                  image={category.image}
                  alt={category.title}
                />
                <CardContent
                  sx={{
                    height: 150, // Ensures consistent spacing for the text section
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#333333',
                      textAlign: 'center',
                    }}
                  >
                    {category.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <br /><br /><br />
      <Typography variant="h4" align="center" sx={{ marginTop: "20px", marginBottom: "20px" }}>
        Best Sellers
      </Typography>
      <br /><br /><Grid container spacing={2} sx={{ padding: 2 }}>
        {bestsellers.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
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
            height: 150, // Uniform space for card content
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
      </Card>
    </Grid>
  ))}
</Grid>
     <br></br><Button
  variant="outlined"
  sx={{
    borderColor: '#000000', // Black border
    color: '#000000', // Black text color
    '&:hover': {
      borderColor: '#000000', // Black border on hover
      backgroundColor: '#ffcccb', // Light red background on hover
      color: 'black', // White text color on hover
    },
  }}
>
  View All
</Button>
   </div>
    )
  }
export default Navbar
