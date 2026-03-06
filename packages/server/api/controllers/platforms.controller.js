/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');

const getPlatforms = async () => {
  try {
    const platforms = await knex('platforms')
      .select('platforms.*')
      .distinct('platforms.id')
      .join('products', 'products.platform_id', '=', 'platforms.id')
      .orderBy('platforms.title');
    return platforms;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getPlatforms,
};
