import { useEffect, useState } from 'react';

// Material UI
import {
  Button,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Rating,
  Skeleton,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';

// Project Imports
import Colors from './Colors';
import MainCard from 'components/cards/MainCard';
import Accordion from 'components/extended/Accordion';
import { gridSpacing } from 'store/constant';
import { ProductsFilter } from 'types/commerce';

// ==============================|| PRODUCT GRID GENDER FILTER ||============================== //

const Gender = ({
  gender,
  handelFilter,
}: {
  gender: string[];
  handelFilter: (type: string, params: string) => void;
}) => {
  const [isGenderLoading, setGenderLoading] = useState(true);
  useEffect(() => {
    setGenderLoading(false);
  }, []);

  return (
    <Grid container spacing={1}>
      {isGenderLoading ? (
        <Skeleton variant="rectangular" width="100%" height={42} />
      ) : (
        <>
          <FormControlLabel
            control={
              <Checkbox checked={gender.some(item => item === 'male')} />
            }
            onChange={() => handelFilter('gender', 'male')}
            label="Male"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={gender.some(item => item === 'female')}
                onChange={() => handelFilter('gender', 'female')}
                color="secondary"
              />
            }
            label="Female"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={gender.some(item => item === 'unisex')}
                onChange={() => handelFilter('gender', 'unisex')}
                color="error"
              />
            }
            label="Unisex"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={gender.some(item => item === 'kids')}
                onChange={() => handelFilter('gender', 'kids')}
                color="error"
              />
            }
            label="Kids"
          />
        </>
      )}
    </Grid>
  );
};

// ==============================|| PRODUCT GRID - CATEGORIES FILTER ||============================== //

const Categories = ({
  categories,
  handelFilter,
}: {
  categories: string[];
  handelFilter: (type: string, params: string) => void;
}) => {
  const [isCategoriesLoading, setCategoriesLoading] = useState(true);
  useEffect(() => {
    setCategoriesLoading(false);
  }, []);

  return (
    <Grid container spacing={1}>
      {isCategoriesLoading ? (
        <Grid item xs={12}>
          <Skeleton variant="rectangular" width="100%" height={96} />
        </Grid>
      ) : (
        <>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox checked={categories.some(item => item === 'all')} />
              }
              onChange={() => handelFilter('categories', 'all')}
              label="All"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.some(item => item === 'illustration')}
                />
              }
              onChange={() => handelFilter('categories', 'illustration')}
              label="Illustration"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.some(item => item === 'gaming')}
                />
              }
              onChange={() => handelFilter('categories', 'gaming')}
              label="Gaming"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.some(item => item === 'movies')}
                />
              }
              onChange={() => handelFilter('categories', 'movies')}
              label="Movies"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.some(item => item === 'vintage')}
                />
              }
              onChange={() => handelFilter('categories', 'vintage')}
              label="Vintage"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.some(item => item === 'hoodies')}
                />
              }
              onChange={() => handelFilter('categories', 'hoodies')}
              label="Hoodies"
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

// ==============================|| PRODUCT GRID - PRICE FILTER ||============================== //

const Price = ({
  price,
  handelFilter,
}: {
  price: string;
  handelFilter: (type: string, params: string) => void;
}) => {
  const [isPriceLoading, setPriceLoading] = useState(true);
  useEffect(() => {
    setPriceLoading(false);
  }, []);

  return (
    <>
      {isPriceLoading ? (
        <Skeleton variant="rectangular" width="100%" height={172} />
      ) : (
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="layout"
            value={price}
            onChange={e => handelFilter('price', e.target.value)}
            name="row-radio-buttons-group"
          >
            <Grid container spacing={0.25}>
              <Grid item xs={6}>
                <FormControlLabel
                  value="0-10"
                  control={<Radio />}
                  label="Below $10"
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 28 },
                    '& .MuiFormControlLabel-label': { color: 'grey.900' },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value="10-20"
                  control={<Radio />}
                  label="$10 - $20"
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 28 },
                    '& .MuiFormControlLabel-label': { color: 'grey.900' },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value="20-30"
                  control={<Radio />}
                  label="$20 - $30"
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 28 },
                    '& .MuiFormControlLabel-label': { color: 'grey.900' },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value="30-50"
                  control={<Radio />}
                  label="$30 - $50"
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 28 },
                    '& .MuiFormControlLabel-label': { color: 'grey.900' },
                  }}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      )}
    </>
  );
};

// ==============================|| PRODUCT GRID - RATING FILTER ||============================== //

const RatingSection = ({
  rating,
  handelFilter,
}: {
  rating: number;
  handelFilter: (type: string, params: string, rating: number) => void;
}) => {
  const [isRatingLoading, setRatingLoading] = useState(true);
  useEffect(() => {
    setRatingLoading(false);
  }, []);

  return (
    <>
      {isRatingLoading ? (
        <Skeleton variant="rectangular" width="100%" height={172} />
      ) : (
        <Stack direction="row" spacing={1} alignItems="center">
          <Rating
            precision={0.5}
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) =>
              handelFilter('rating', '', newValue!)
            }
          />
          <Typography component="legend">({rating})</Typography>
        </Stack>
      )}
    </>
  );
};

// ==============================|| PRODUCT GRID - FILTER ||============================== //

const ProductFilter = ({
  filter,
  handelFilter,
}: {
  filter: ProductsFilter;
  handelFilter: (type: string, params: string, rating?: number) => void;
}) => {
  const matchDownLG = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xl')
  );

  const filterData = [
    {
      id: 'gender',
      defaultExpand: true,
      title: 'Gender',
      content: <Gender gender={filter.gender} handelFilter={handelFilter} />,
    },
    {
      id: 'categories',
      defaultExpand: true,
      title: 'Categories',
      content: (
        <Categories
          categories={filter.categories}
          handelFilter={handelFilter}
        />
      ),
    },
    {
      id: 'colors',
      defaultExpand: true,
      title: 'Colors',
      content: <Colors colors={filter.colors} handelFilter={handelFilter} />,
    },
    {
      id: 'price',
      defaultExpand: true,
      title: 'Price',
      content: <Price price={filter.price} handelFilter={handelFilter} />,
    },
    {
      id: 'rating',
      defaultExpand: true,
      title: 'Rating',
      content: (
        <RatingSection rating={filter.rating} handelFilter={handelFilter} />
      ),
    },
  ];

  return (
    <MainCard
      border={!matchDownLG}
      content={false}
      sx={{ overflow: 'visible' }}
    >
      <CardContent sx={{ p: 1, height: matchDownLG ? '100vh' : 'auto' }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Accordion data={filterData} />
          </Grid>
          <Grid item xs={12} sx={{ m: 1 }}>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                onClick={() => handelFilter('reset', '')}
              >
                Clear All
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </MainCard>
  );
};

export default ProductFilter;
