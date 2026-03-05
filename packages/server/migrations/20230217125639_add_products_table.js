exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments();
    table.string('platform_specific_id', 100).nullable();
    table.text('title').notNullable();
    table.string('slug').notNullable();

    table.text('description').nullable();
    table.text('descriptionChatGpt').nullable();

    table.integer('category_id').unsigned();
    table.foreign('category_id').references('id').inTable('categories');

    table.text('url').nullable();
    table.text('url_affiliate').nullable();
    table.text('url_image').nullable();
    table.string('url_icon').nullable();
    table.decimal('rating', 2, 1).unsigned().nullable();
    table.integer('reviews').unsigned().nullable();
    table.decimal('price', 10, 2).unsigned().nullable();
    table.integer('discount_percentage').unsigned().nullable();
    table.string('currency', 10).defaultTo('EUR');
    table.boolean('featured').defaultTo(false);
    table.boolean('sponsored').defaultTo(false);
    table.boolean('top_rated').defaultTo(false);
    table.integer('bought_last_month').unsigned().nullable();
    table.integer('rank').unsigned().nullable();

    table.string('meta_description').nullable();

    table.datetime('last_checked_at').nullable();
    table
      .enu('status', ['active', 'unavailable', 'deleted'])
      .defaultTo('active');

    table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime('updated_at', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
