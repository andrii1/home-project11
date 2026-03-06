/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const generateSlug = require('../lib/utils/generateSlug');

// Helper: ensure the slug is unique by checking the DB
async function ensureUniqueSlug(baseSlug) {
  let slug = baseSlug;
  let counter = 1;

  // eslint-disable-next-line no-await-in-loop
  while (await slugExists(slug)) {
    const suffix = `-${counter}`;
    const maxBaseLength = 200 - suffix.length;
    slug = `${baseSlug.slice(0, maxBaseLength)}${suffix}`;
    counter += 1;
  }

  return slug;
}

// Helper: check if a slug already exists in the database
async function slugExists(slug) {
  const existing = await knex('cities').where({ slug }).first();
  return !!existing;
}

const getCities = async () => {
  try {
    const cities = await knex('cities')
      .select('cities.*')
      .orderBy('cities.title');
    return cities;
  } catch (error) {
    return error.message;
  }
};

const createCity = async (token, body) => {
  try {
    const userUid = token.split(' ')[1];
    const user = (await knex('users').where({ uid: userUid }))[0];
    if (!user) {
      throw new HttpError('User not found', 401);
    }

    // Optional: check for existing city
    const existing = await knex('cities')
      .whereRaw('LOWER(title) = ?', [body.title.toLowerCase()])
      .andWhere('area_id', body.area_id)
      .andWhere('country_id', body.country_id)
      .first();

    if (existing) {
      return {
        successful: true,
        existing: true,
        cityId: existing.id,
        cityTitle: body.title,
      };
    }

    const baseSlug = generateSlug(body.title);
    const uniqueSlug = await ensureUniqueSlug(baseSlug);

    const insertData = {
      title: body.title,

      slug: uniqueSlug,
    };

    const [cityId] = await knex('cities').insert(insertData);

    return {
      successful: true,
      cityId,
      cityTitle: body.title,
    };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getCities,
  createCity,
};
