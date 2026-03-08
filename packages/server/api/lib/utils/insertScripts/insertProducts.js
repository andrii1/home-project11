/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const parseNumber = require('../parseNumber');

// Credentials (from .env)
const USER_UID = process.env.USER_UID_ACTIVITIES_LOCAL;
const API_PATH = process.env.API_PATH_ACTIVITIES_LOCAL;

const products = [
  {
    'Tour ID': '1026632',
    'Tour Title': 'Rovaniemi: Aurora Tour – 100% Money-Back Guarantee & Photos',
    Category: 'Day Trips',
    City: 'Rovaniemi',
    'Area/State': 'Lapland',
    Country: 'Finland',
    'AVG Rating': '4.9',
    Reviews: '1,343',
    'Activity URL':
      'https://www.getyourguide.com/activity/-t1026632?partner_id=FEYUTMR',
    'Save up to': '36%',
    From: '2026-03-06',
    To: '2026-03-31',
    'Price from': '€88.96',
  },
  {
    'Tour ID': '1062034',
    'Tour Title': 'Chiang Rai: Northern Thailand Tour with Golden Triangle',
    Category: 'Bus Tours',
    City: 'Chiang Rai',
    'Area/State': 'Chiang Rai (Province)',
    Country: 'Thailand',
    'AVG Rating': '4.9',
    Reviews: '81',
    'Activity URL':
      'https://www.getyourguide.com/activity/-t1062034?partner_id=FEYUTMR',
    'Save up to': '5%',
    From: '2026-03-06',
    To: '2026-03-20',
    'Price from': '€66.99',
  },
];

// fetch helpers

const today = new Date();
const todayDay = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

const allowedDays = [0, 1, 2, 3, 4, 5, 6];

if (!allowedDays.includes(todayDay)) {
  console.log('Not an allowed day, skipping job.');
  process.exit(0);
}

async function insertPlatform(title, url) {
  const res = await fetch(`${API_PATH}/platforms`, {
    method: 'POST',
    headers: {
      token: `token ${USER_UID}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, url }),
  });
  const data = await res.json();
  return data; // assume it returns { id, full_name }
}

async function insertCategory(title) {
  const res = await fetch(`${API_PATH}/categories`, {
    method: 'POST',
    headers: {
      token: `token ${USER_UID}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  const data = await res.json();
  return data; // assume it returns { id, full_name }
}

async function insertCountry(title) {
  const res = await fetch(`${API_PATH}/countries`, {
    method: 'POST',
    headers: {
      token: `token ${USER_UID}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  const data = await res.json();
  return data; // assume it returns { id, full_name }
}

async function insertArea(title, countryId) {
  const res = await fetch(`${API_PATH}/areas`, {
    method: 'POST',
    headers: {
      token: `token ${USER_UID}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, country_id: countryId }),
  });
  const data = await res.json();
  return data; // assume it returns { id, full_name }
}

async function insertCity(title, areaId, countryId) {
  const res = await fetch(`${API_PATH}/cities`, {
    method: 'POST',
    headers: {
      token: `token ${USER_UID}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, area_id: areaId, country_id: countryId }),
  });
  const data = await res.json();
  return data; // assume it returns { id, full_name }
}

async function insertProduct({
  title,
  external_id,
  rating,
  price,
  reviews,
  url,
  url_affiliate,
  discount_percentage,
  categoryId,
  cityId,
  platformId,
}) {
  const body = {
    title,
    external_id,
    rating,
    price,
    reviews,
    url,
    url_affiliate,
    discount_percentage,
    category_id: categoryId,
    city_id: cityId,
    platform_id: platformId,
  };

  const res = await fetch(`${API_PATH}/products/node`, {
    method: 'POST',
    headers: {
      token: `token ${USER_UID}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data; // assume it returns { id, full_name }
}

const insertProducts = async () => {
  // console.log(appsParam);

  // let products;
  // if (allowedDays.includes(todayDay)) {
  //   products = await fetchSerpApiAmazon();
  // }

  for (const product of products) {
    try {
      const platform = 'GetYourGuide';
      const platformUrl = 'https://www.getyourguide.com/';

      const category = product.Category;
      const country = product.Country;
      const area = product['Area/State'];
      const city = product.City;
      const cleanUrl = product['Activity URL'].split('?')[0];
      const discount = Number(product['Save up to'].replace(/\D/g, ''));
      const price = Number(product['Price from'].replace(/[^0-9.]/g, ''));
      const reviews = parseNumber(product.Reviews);

      const newPlatform = await insertPlatform(platform, platformUrl);
      const { platformId } = newPlatform;
      console.log('Inserted platform:', newPlatform);

      const newCategory = await insertCategory(category);
      const { categoryId } = newCategory;
      console.log('Inserted category:', newCategory);

      const newCountry = await insertCountry(country);
      const { countryId } = newCountry;
      console.log('Inserted country:', newCountry);

      const newArea = await insertArea(area, countryId);
      const { areaId } = newArea;
      console.log('Inserted area:', newArea);

      const newCity = await insertCity(city, areaId, countryId);
      const { cityId } = newCity;
      console.log('Inserted city:', newCity);

      const newProduct = await insertProduct({
        title: product['Tour Title'],
        external_id: product['Tour ID'],
        rating: product['AVG Rating'],
        price,
        reviews,
        url: cleanUrl,
        url_affiliate: product['Activity URL'],
        discount_percentage: discount,
        categoryId,
        cityId,
        platformId,
      });
      const { productId } = newProduct;
      const newProductTitle = newProduct.productTitle;
      console.log('Inserted product:', newProduct);
    } catch (err) {
      console.error(
        `❌ Failed to insert product ${product['Tour ID']}:`,
        err.message,
      );
      // continue with next app
    }
  }
};

insertProducts().catch(console.log);
