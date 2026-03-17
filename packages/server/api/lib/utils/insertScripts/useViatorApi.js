require('dotenv').config();

const apiKey = process.env.VIATOR_API_KEY;

async function getDestinations() {
  try {
    const response = await fetch(
      'https://api.viator.com/partner/destinations',
      {
        headers: {
          'Content-Type': 'application/json',
          'exp-api-key': apiKey,
          Accept: 'application/json;version=2.0',
          'Accept-Language': 'en-US',
        },
      },
    );

    const data = await response.json();

    const countries = data.destinations.filter((dest) => dest.type === 'CITY');

    console.log('countries', countries);

    // const allCities = data.destinations
    //   .filter((dest) => dest.type === 'CITY')
    //   .map((city) => ({
    //     id: city.destinationId,
    //     name: city.name,
    //     parentId: city.parentDestinationId,
    //     url: city.destinationUrl,
    //     currency: city.defaultCurrencyCode,
    //     timeZone: city.timeZone,
    //     countryCode: city.countryCallingCode,
    //   }));
    // console.log('cities', allCities);

    // console.log(data);
    return data.products;
  } catch (err) {
    console.error(err);
  }
}

async function getDestinationsFull() {
  try {
    // 1️⃣ fetch all destinations
    const response = await fetch(
      'https://api.viator.com/partner/destinations',
      {
        headers: {
          'Content-Type': 'application/json',
          'exp-api-key': apiKey,
          Accept: 'application/json;version=2.0',
          'Accept-Language': 'en-US',
        },
      },
    );

    const data = await response.json();
    const destinations = data.destinations;

    if (!destinations || destinations.length === 0) {
      console.log('No destinations found');
      return [];
    }

    // 2️⃣ create a lookup map for destinationId → destination object
    const destMap = new Map(destinations.map((d) => [d.destinationId, d]));

    // 3️⃣ filter for cities
    const cities = destinations.filter((d) => d.type === 'CITY');

    // 4️⃣ map cities to { cityName, regionName, countryName }
    const cityHierarchy = cities.map((city) => {
      const parent = destMap.get(city.parentDestinationId); // could be region or country
      let regionName = null;
      let countryName = null;

      if (parent) {
        if (parent.type === 'REGION') {
          regionName = parent.name;
          const grandParent = destMap.get(parent.parentDestinationId);
          if (grandParent && grandParent.type === 'COUNTRY') {
            countryName = grandParent.name;
          }
        } else if (parent.type === 'COUNTRY') {
          countryName = parent.name;
        }
      }

      return {
        cityName: city.name,
        regionName,
        countryName,
        cityId: city.destinationId,
        regionId: regionName ? parent.destinationId : null,
        countryId: countryName
          ? parent.type === 'COUNTRY'
            ? parent.destinationId
            : destMap.get(parent.parentDestinationId).destinationId
          : null,
      };
    });

    return cityHierarchy;
  } catch (err) {
    console.error('Error fetching destinations:', err);
    return [];
  }
}

async function getViatorProducts() {
  try {
    const response = await fetch(
      'https://api.viator.com/partner/products/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'exp-api-key': apiKey,
          Accept: 'application/json;version=2.0',
          'Accept-Language': 'en-US',
        },
        body: JSON.stringify({
          filtering: {
            destination: 4772,
          },
          currency: 'USD',
          pagination: {
            start: 1,
            count: 10,
          },
        }),
      },
    );

    const data = await response.json();

    console.log('data', JSON.stringify(data.destinations, null, 2));
    const allCities = data.destinations
      .filter((dest) => dest.type === 'CITY')
      .map((city) => ({
        id: city.destinationId,
        name: city.name,
        parentId: city.parentDestinationId,
        url: city.destinationUrl,
        currency: city.defaultCurrencyCode,
        timeZone: city.timeZone,
        countryCode: city.countryCallingCode,
      }));
    // console.log('cities', allCities);

    return data;
  } catch (err) {
    console.error(err);
  }
}

// Usage example
getDestinationsFull().then((list) => {
  console.log('Sample cities with hierarchy:', list.slice(0, 5));
});
// getDestinations();
// getViatorProducts();

module.exports = getViatorProducts;
