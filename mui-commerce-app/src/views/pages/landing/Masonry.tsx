import { Link as RouterLink } from 'react-router-dom';

// Material UI
import { Button, Grid } from '@mui/material';

// Data
import ShopData from 'Mock/shop.json';

// Third Party
import Masonry from 'react-masonry-css';

// ==============================|| LANDING - MASONRY PAGE ||============================== //

const MasonryPage = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  const catImage = require.context('assets/images/ecommerce/categories/', true);

  return (
    <Grid item xs={12} sx={{ mt: 6 }}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {ShopData.category.map((item, key) => (
          <div className="img-hover-zoom">
            <a href="/commerce">
              <img
                src={catImage(`./${item.img}`).default}
                alt={item.title}
                loading="lazy"
              />
            </a>
            <div className="overlay">
              <Button
                component={RouterLink}
                to="/commerce"
                size="medium"
                className="text"
                variant="text"
              >
                {item.title}
              </Button>
            </div>
          </div>
        ))}
      </Masonry>
    </Grid>
  );
};

export default MasonryPage;
