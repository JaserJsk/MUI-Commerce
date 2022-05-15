// Material UI
import { Box, Grid, Typography, Button } from '@mui/material';

// Assets
import bannerImage from 'assets/images/ecommerce/categories/banner.jpg';

// ==============================|| LANDING - BANNER PAGE ||============================== //

const BannerPage = () => (
  <Box sx={{ display: 'flex' }} className="banner-grid">
    <Grid item xs={12} sm={6} className="left-banner-grid">
      <Typography variant="h1">Clothing</Typography>
      <Typography variant="h4">
        Clothing Original clothing for original people. Tees, tops, dresses,
        hats, and more with designs for pretty much any interest.
      </Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
        Read More
      </Button>
    </Grid>
    <Grid item xs={12} sm={6} className="right-banner-grid">
      <img src={bannerImage} alt="Banner" />
    </Grid>
  </Box>
);

export default BannerPage;
