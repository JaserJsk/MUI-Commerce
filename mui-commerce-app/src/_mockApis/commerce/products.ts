// Project Imports
import services from 'utils/mockAdapter';

// Third Party
import { add, sub } from 'date-fns';
import { Chance } from 'chance';

// Types
import { KeyedObject } from 'types';
import { Products } from 'types/commerce';

const chance = new Chance();

// products list
const products: Products[] = [
  {
    id: 1,
    image: 'products/prod-1.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 2 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 25,
    salePrice: 19.99,
    offerPrice: 14.99,
    gender: 'male',
    categories: ['vintage', 'movies'],
    colors: ['errorDark', 'orangeDark', 'errorMain', 'secondaryMain'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    isStock: true,
  },
  {
    id: 2,
    image: 'products/prod-2.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 2 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 25,
    salePrice: 19.99,
    offerPrice: 14.99,
    gender: 'male',
    categories: ['illustration', 'movies'],
    colors: ['primary200', 'successLight', 'secondary200', 'warningMain'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 10, hours: 8, minutes: 69 }),
    isStock: false,
  },
  {
    id: 3,
    image: 'products/prod-3.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 2 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 0,
    salePrice: 24.99,
    offerPrice: 24.99,
    gender: 'male',
    categories: ['illustration'],
    colors: ['primary200', 'primaryDark'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 4, hours: 9, minutes: 50 }),
    isStock: true,
  },
  {
    id: 4,
    image: 'products/prod-4.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 2 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 20,
    salePrice: 36.99,
    offerPrice: 29.59,
    gender: 'male',
    categories: ['illustration', 'hoodies'],
    colors: ['errorLight', 'orangeMain', 'warningMain'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 7, hours: 6, minutes: 45 }),
    isStock: false,
  },
  {
    id: 5,
    image: 'products/prod-5.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 2 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 20,
    salePrice: 36.99,
    offerPrice: 29.59,
    gender: 'male',
    categories: ['movies', 'hoodies'],
    colors: ['warningMain', 'primary200'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 2, hours: 9, minutes: 45 }),
    isStock: true,
  },
  {
    id: 6,
    image: 'products/prod-6.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 2 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 25,
    salePrice: 49.99,
    offerPrice: 37.49,
    gender: 'male',
    categories: ['vintage', 'hoodies'],
    colors: ['primaryDark', 'orangeDark'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: add(new Date(), { days: 6, hours: 10, minutes: 0 }),
    isStock: true,
  },
  {
    id: 7,
    image: 'products/prod-7.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 2 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 25,
    salePrice: 19.99,
    offerPrice: 14.99,
    gender: 'female',
    categories: ['illustration'],
    colors: ['errorDark', 'secondaryMain', 'orangeDark'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: add(new Date(), { days: 14, hours: 1, minutes: 55 }),
    isStock: false,
  },
  {
    id: 8,
    image: 'products/prod-8.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 2 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 25,
    salePrice: 19.99,
    offerPrice: 14.99,
    gender: 'female',
    categories: ['gaming', 'movies'],
    colors: ['darkMain', 'errorMain'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 0, hours: 11, minutes: 10 }),
    isStock: true,
  },
  {
    id: 9,
    image: 'products/prod-9.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 2 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 20,
    salePrice: 14.99,
    offerPrice: 11.99,
    gender: 'female',
    categories: ['vintage'],
    colors: ['darkMain', 'errorMain'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 0, hours: 11, minutes: 10 }),
    isStock: true,
  },
  {
    id: 10,
    image: 'products/prod-10.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 3 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 20,
    salePrice: 32.99,
    offerPrice: 26.39,
    gender: 'female',
    categories: ['illustration', 'hoodies'],
    colors: ['orangeDark', 'errorMain'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 0, hours: 11, minutes: 10 }),
    isStock: false,
  },
  {
    id: 11,
    image: 'products/prod-11.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 2 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 20,
    salePrice: 32.99,
    offerPrice: 26.39,
    gender: 'female',
    categories: ['vintage', 'hoodies'],
    colors: ['darkMain', 'errorMain'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 0, hours: 11, minutes: 10 }),
    isStock: false,
  },
  {
    id: 12,
    image: 'products/prod-12.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 3 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 0,
    salePrice: 39.99,
    offerPrice: 39.99,
    gender: 'female',
    categories: ['illustration', 'hoodies'],
    colors: ['darkMain', 'warningDark'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 0, hours: 11, minutes: 10 }),
    isStock: true,
  },
  {
    id: 13,
    image: 'products/prod-13.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 3 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 15,
    salePrice: 12.99,
    offerPrice: 11.04,
    gender: 'unisex',
    categories: ['illustration', 'vintage'],
    colors: ['secondaryMain', 'errorMain'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 0, hours: 11, minutes: 10 }),
    isStock: true,
  },
  {
    id: 14,
    image: 'products/prod-14.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 3 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 15,
    salePrice: 13.29,
    offerPrice: 11.3,
    gender: 'unisex',
    categories: ['illustration'],
    colors: ['successMain', 'darkMain'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 0, hours: 11, minutes: 10 }),
    isStock: true,
  },
  {
    id: 15,
    image: 'products/prod-15.jpg',
    name: chance.name(),
    description: chance.paragraph({ sentences: 3 }),
    rating: chance.floating({ min: 0.1, max: 5.0 }),
    discount: 5,
    salePrice: 9.65,
    offerPrice: 9.17,
    gender: 'unisex',
    categories: ['vintage'],
    colors: ['orangeDark', 'warningDark'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), { days: 0, hours: 11, minutes: 10 }),
    isStock: true,
  },
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/products/list').reply(200, { products });

services.onPost('/api/products/filter').reply(config => {
  try {
    const { filter } = JSON.parse(config.data);

    if (filter.sort === 'high') {
      products.sort(
        (a: Products, b: Products) =>
          Number(b.offerPrice) - Number(a.offerPrice)
      );
    }

    if (filter.sort === 'low') {
      products.sort((a, b) => Number(a.offerPrice) - Number(b.offerPrice));
    }

    if (filter.sort === 'popularity') {
      products.sort((a, b) => Number(b.popularity) - Number(a.popularity));
    }

    if (filter.sort === 'discount') {
      products.sort((a, b) => Number(b.discount) - Number(a.discount));
    }

    if (filter.sort === 'discount') {
      products.sort((a, b) => Number(b.discount) - Number(a.discount));
    }

    if (filter.sort === 'new') {
      products.sort((a, b) => Number(b.new) - Number(a.new));
    }

    const results = products.filter((product: KeyedObject) => {
      let searchMatches = true;

      if (filter.search) {
        const properties = [
          'name',
          'description',
          'rating',
          'salePrice',
          'offerPrice',
          'gender',
        ];
        let containsQuery = false;

        properties.forEach(property => {
          if (
            product[property]
              .toString()
              .toLowerCase()
              .includes(filter.search.toString().toLowerCase())
          ) {
            containsQuery = true;
          }
        });

        if (!containsQuery) {
          searchMatches = false;
        }
      }

      const genderMatches =
        filter.gender.length > 0
          ? filter.gender.some((item: string) => item === product.gender)
          : true;
      const categoriesMatches =
        filter.categories.length > 0 &&
        filter.categories.some((category: string) => category !== 'all')
          ? filter.categories.some((category: string) =>
              product.categories.some((item: string) => item === category)
            )
          : true;
      const colorsMatches =
        filter.colors.length > 0
          ? filter.colors.some((color: string) =>
              product.colors.some((item: string) => item === color)
            )
          : true;

      const minMax = filter.price ? filter.price.split('-') : '';
      const priceMatches = filter.price
        ? product.offerPrice >= minMax[0] && product.offerPrice <= minMax[1]
        : true;
      const ratingMatches =
        filter.rating > 0 ? product.rating >= filter.rating : true;

      return (
        searchMatches &&
        genderMatches &&
        categoriesMatches &&
        colorsMatches &&
        priceMatches &&
        ratingMatches
      );
    });

    return [200, results];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/product/details').reply(config => {
  try {
    const { id } = JSON.parse(config.data);

    let results;
    if (id === 'default') {
      [results] = products;
    } else {
      [results] = products.filter(product => product.id === Number(id));
    }

    return [200, results];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/product/related').reply(config => {
  try {
    const { id } = JSON.parse(config.data);

    const results = products.filter(product => product.id !== Number(id));

    return [200, results];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
