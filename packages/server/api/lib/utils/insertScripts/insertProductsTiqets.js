/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const parseNumber = require('../parseNumber.js');
// const productsDeals = require('./data/getYourGuideProducts.js');
// const products2 = require('./data/gygBestsellers.js');
// const products3 = require('./data/gygNew.js');
// const products4 = require('./data/gygTopPerforming.js');

// const products = [...products2, ...products3, ...products4];

// Credentials (from .env)
const USER_UID = process.env.USER_UID_ACTIVITIES_LOCAL;
const API_PATH = process.env.API_PATH_ACTIVITIES_LOCAL;

const products = [
  {
    id: '1111450',
    language: 'en',
    title: 'Vatican Museums & Sistine Chapel: Fast Track Ticket',
    city_id: '71631',
    country_id: '50109',
    tag_ids: [Array],
    images: [],
    product_url:
      'https://www.tiqets.com/en/rome-attractions-c71631/tickets-for-vatican-museums-sistine-chapel-fast-track-ticket-p1111450/?partner=museuly',
    product_checkout_url:
      'https://www.tiqets.com/en/checkout/tickets-for-vatican-museums-sistine-chapel-fast-track-ticket-p1111450/booking_details/?partner=museuly',
    is_package: false,
    country_name: 'Italy',
    city_name: 'Rome',
    tagline: "View famous art and visit Michelangelo's ceiling",
    promo_label: 'bestseller',
    geolocation: [Object],
    distance: null,
    venue: [Object],
    ratings: [Object],
    currency: 'EUR',
    price: 35,
    prediscount_price: null,
    price_in_supplier_currency: 35,
    supplier_currency: 'EUR',
    product_slug:
      'tickets-for-vatican-museums-sistine-chapel-fast-track-ticket-p1111450',
    languages: [Array],
    sale_status: 'available',
    sale_status_reason: null,
    sale_status_expected_reopen: null,
    summary:
      'Use these fast-track entry tickets to tour the Vatican Museums and see masterpieces of Renaissance art. Walk through galleries filled with sculptures, paintings, and historical artifacts. \r\n' +
      '\r\n' +
      "Look up at the Sistine Chapel's famous ceiling, painted by Michelangelo. Visit the Raphael Rooms and study the intricate frescoes.",
    whats_included:
      '* Fast-track entrance to the Vatican Museums\r\n' +
      '* Fast-track entrance to the Sistine Chapel',
    whats_excluded: null,
    display_booking_fee: null,
    live_guide_languages: null,
    language_selection: null,
    audio_guide_languages: null,
    starting_time: null,
    timezone: 'Europe/Rome',
    duration: null,
    starting_point: [Object],
    wheelchair_access: false,
    smartphone_ticket: true,
    advance_arrival_time: null,
    last_admission_window: null,
    description: null,
    exhibitions: null,
    reviews: null,
    instant_ticket_delivery: true,
    discount_percentage: null,
    in_packages: null,
    package_products: null,
    supplier: [Object],
    supports_cancellation_insurance_in_affiliate_checkout: null,
    marketing_restrictions: null,
    cancellation: [Object],
    product_groups: [Array],
    promotion_highlight: null,
    safety_measures: null,
    skip_line: null,
    best_time_to_visit: null,
    display_price: null,
    highlights: null,
  },
  {
    id: '1111514',
    language: 'en',
    title: 'Park Güell: Entry Ticket + Audio Guide',
    city_id: '66342',
    country_id: '50067',
    tag_ids: [Array],
    images: [],
    product_url:
      'https://www.tiqets.com/en/barcelona-attractions-c66342/tickets-for-park-guell-entry-ticket-audio-guide-p1111514/?partner=museuly',
    product_checkout_url:
      'https://www.tiqets.com/en/checkout/tickets-for-park-guell-entry-ticket-audio-guide-p1111514/booking_details/?partner=museuly',
    is_package: false,
    country_name: 'Spain',
    city_name: 'Barcelona',
    tagline: 'Get fuss-free access to Gaudí’s famous Barcelona park',
    promo_label: 'bestseller',
    geolocation: [Object],
    distance: null,
    venue: [Object],
    ratings: [Object],
    currency: 'EUR',
    price: 21.9,
    prediscount_price: null,
    price_in_supplier_currency: 21.9,
    supplier_currency: 'EUR',
    product_slug: 'tickets-for-park-guell-entry-ticket-audio-guide-p1111514',
    languages: [Array],
    sale_status: 'available',
    sale_status_reason: null,
    sale_status_expected_reopen: null,
    summary:
      'Visit Park Güell and explore its unique architectural features. See the colorful mosaics and winding pathways designed by Antoni Gaudí. \r\n' +
      '\r\n' +
      "Listen to the audio guide to learn about the park's history and design. Enjoy the views of Barcelona from various vantage points within the park.",
    whats_included: '* Entry to Park Güell\r\n* Downloadable audio guide',
    whats_excluded: null,
    display_booking_fee: null,
    live_guide_languages: null,
    language_selection: null,
    audio_guide_languages: null,
    starting_time: null,
    timezone: 'Europe/Madrid',
    duration: null,
    starting_point: [Object],
    wheelchair_access: false,
    smartphone_ticket: true,
    advance_arrival_time: null,
    last_admission_window: null,
    description: null,
    exhibitions: null,
    reviews: null,
    instant_ticket_delivery: true,
    discount_percentage: null,
    in_packages: null,
    package_products: null,
    supplier: [Object],
    supports_cancellation_insurance_in_affiliate_checkout: null,
    marketing_restrictions: null,
    cancellation: [Object],
    product_groups: [Array],
    promotion_highlight: null,
    safety_measures: null,
    skip_line: null,
    best_time_to_visit: null,
    display_price: null,
    highlights: null,
  },
  {
    id: '1111515',
    language: 'en',
    title: 'Colosseum & Roman Forum + Audio Guide',
    city_id: '71631',
    country_id: '50109',
    tag_ids: [Array],
    images: [],
    product_url:
      'https://www.tiqets.com/en/rome-attractions-c71631/admission-colosseum-roman-forum-audio-guide-p1111515/?partner=museuly',
    product_checkout_url:
      'https://www.tiqets.com/en/checkout/admission-colosseum-roman-forum-audio-guide-p1111515/booking_details/?partner=museuly',
    is_package: false,
    country_name: 'Italy',
    city_name: 'Rome',
    tagline: 'Hear historical facts and visit ancient ruins',
    promo_label: 'bestseller',
    geolocation: [Object],
    distance: null,
    venue: [Object],
    ratings: [Object],
    currency: 'EUR',
    price: 35,
    prediscount_price: 45,
    price_in_supplier_currency: 35,
    supplier_currency: 'EUR',
    product_slug: 'admission-colosseum-roman-forum-audio-guide-p1111515',
    languages: [Array],
    sale_status: 'available',
    sale_status_reason: null,
    sale_status_expected_reopen: null,
    summary:
      'Visit the Colosseum and Roman Forum with an audio guide. Walk through the ancient amphitheater where gladiators once fought. \r\n' +
      '\r\n' +
      'See the ruins of temples, arches, and courtyards in the Roman Forum. Listen to detailed historical insights provided by the audio guide.',
    whats_included:
      '* Entry to the Colosseum, Palatine Hill, and Roman Forum\r\n' +
      '* Your choice of audio guide, or 25 min. multimedia video about Ancient Rome',
    whats_excluded: null,
    display_booking_fee: null,
    live_guide_languages: null,
    language_selection: null,
    audio_guide_languages: null,
    starting_time: null,
    timezone: 'Europe/Rome',
    duration: null,
    starting_point: [Object],
    wheelchair_access: false,
    smartphone_ticket: true,
    advance_arrival_time: null,
    last_admission_window: null,
    description: null,
    exhibitions: null,
    reviews: null,
    instant_ticket_delivery: true,
    discount_percentage: 22,
    in_packages: null,
    package_products: null,
    supplier: [Object],
    supports_cancellation_insurance_in_affiliate_checkout: null,
    marketing_restrictions: null,
    cancellation: [Object],
    product_groups: [Array],
    promotion_highlight: null,
    safety_measures: null,
    skip_line: null,
    best_time_to_visit: null,
    display_price: null,
    highlights: null,
  },
  {
    id: '1111400',
    language: 'en',
    title: 'Sagrada Familia: Fast Track Ticket + Optional Towers',
    city_id: '66342',
    country_id: '50067',
    tag_ids: [Array],
    images: [],
    product_url:
      'https://www.tiqets.com/en/barcelona-attractions-c66342/tickets-for-sagrada-familia-entry-ticket-p1111400/?partner=museuly',
    product_checkout_url:
      'https://www.tiqets.com/en/checkout/tickets-for-sagrada-familia-entry-ticket-p1111400/booking_details/?partner=museuly',
    is_package: false,
    country_name: 'Spain',
    city_name: 'Barcelona',
    tagline: 'Get fast-track access to Gaudí’s unfinished masterpiece',
    promo_label: 'bestseller',
    geolocation: [Object],
    distance: null,
    venue: [Object],
    ratings: [Object],
    currency: 'EUR',
    price: 33.8,
    prediscount_price: null,
    price_in_supplier_currency: 33.8,
    supplier_currency: 'EUR',
    product_slug: 'tickets-for-sagrada-familia-entry-ticket-p1111400',
    languages: [Array],
    sale_status: 'available',
    sale_status_reason: null,
    sale_status_expected_reopen: null,
    summary:
      'Visit Sagrada Familia and view its intricate architecture and impressive stained glass windows. Walk through the basilica and observe the detailed facades and sculptures. \r\n' +
      '\r\n' +
      'Notice the unique design elements created by Antoni Gaudí. Optionally, access the towers for a higher vantage point.',
    whats_included:
      '* Fast Track entrance to Sagrada Familia\r\n' +
      '* Downloadable Sagrada Familia app with audio guide',
    whats_excluded: null,
    display_booking_fee: null,
    live_guide_languages: null,
    language_selection: null,
    audio_guide_languages: null,
    starting_time: null,
    timezone: 'Europe/Madrid',
    duration: null,
    starting_point: [Object],
    wheelchair_access: false,
    smartphone_ticket: true,
    advance_arrival_time: null,
    last_admission_window: null,
    description: null,
    exhibitions: null,
    reviews: null,
    instant_ticket_delivery: true,
    discount_percentage: null,
    in_packages: null,
    package_products: null,
    supplier: [Object],
    supports_cancellation_insurance_in_affiliate_checkout: null,
    marketing_restrictions: null,
    cancellation: [Object],
    product_groups: [Array],
    promotion_highlight: null,
    safety_measures: null,
    skip_line: null,
    best_time_to_visit: null,
    display_price: null,
    highlights: null,
  },
  {
    id: '994309',
    language: 'en',
    title: 'Royal Alcázar of Seville: Entry Ticket',
    city_id: '65870',
    country_id: '50067',
    tag_ids: [Array],
    images: [],
    product_url:
      'https://www.tiqets.com/en/seville-attractions-c65870/tickets-for-alcazar-of-seville-skip-the-line-p994309/?partner=museuly',
    product_checkout_url:
      'https://www.tiqets.com/en/checkout/tickets-for-alcazar-of-seville-skip-the-line-p994309/booking_details/?partner=museuly',
    is_package: false,
    country_name: 'Spain',
    city_name: 'Seville',
    tagline: "Get access to one of Spain's landmark locations",
    promo_label: 'bestseller',
    geolocation: [Object],
    distance: null,
    venue: [Object],
    ratings: [Object],
    currency: 'EUR',
    price: 20,
    prediscount_price: null,
    price_in_supplier_currency: 20,
    supplier_currency: 'EUR',
    product_slug: 'tickets-for-alcazar-of-seville-skip-the-line-p994309',
    languages: [Array],
    sale_status: 'available',
    sale_status_reason: null,
    sale_status_expected_reopen: null,
    summary:
      "Built over the course of five hundred years, influenced by Moorish caliphates and Christian kings, the Alcazar's architectural styles span a wide range. One theme remained throughout, however: beauty. \r\n" +
      '\r\n' +
      'Alongside tropical gardens and lavish courtyards, the palace is notable for its tiled altarpieces that serve as frames for tapestries, and often add deeper meanings. Admire them for yourself with a timed entry ticket, allowing you to skip the occasionally lengthy lines!',
    whats_included:
      '* Entrance to the Royal Alcázar of Seville\r\n' +
      '* Access to the Palaces and Gardens',
    whats_excluded: null,
    display_booking_fee: null,
    live_guide_languages: null,
    language_selection: null,
    audio_guide_languages: null,
    starting_time: null,
    timezone: 'Europe/Madrid',
    duration: null,
    starting_point: [Object],
    wheelchair_access: false,
    smartphone_ticket: true,
    advance_arrival_time: null,
    last_admission_window: null,
    description: null,
    exhibitions: null,
    reviews: null,
    instant_ticket_delivery: false,
    discount_percentage: null,
    in_packages: [Array],
    package_products: null,
    supplier: [Object],
    supports_cancellation_insurance_in_affiliate_checkout: null,
    marketing_restrictions: null,
    cancellation: [Object],
    product_groups: null,
    promotion_highlight: null,
    safety_measures: null,
    skip_line: null,
    best_time_to_visit: null,
    display_price: null,
    highlights: null,
  },
  {
    id: '974232',
    language: 'en',
    title: 'Duomo di Milano: Entry Ticket + Rooftop Access',
    city_id: '71749',
    country_id: '50109',
    tag_ids: [Array],
    images: [],
    product_url:
      'https://www.tiqets.com/en/milan-attractions-c71749/tickets-for-duomo-di-milano-entry-rooftop-access-p974232/?partner=museuly',
    product_checkout_url:
      'https://www.tiqets.com/en/checkout/tickets-for-duomo-di-milano-entry-rooftop-access-p974232/booking_details/?partner=museuly',
    is_package: false,
    country_name: 'Italy',
    city_name: 'Milan',
    tagline:
      "Explore Italy's grandest Gothic cathedral with Milan Duomo tickets",
    promo_label: 'bestseller',
    geolocation: [Object],
    distance: null,
    venue: [Object],
    ratings: [Object],
    currency: 'EUR',
    price: 26,
    prediscount_price: null,
    price_in_supplier_currency: 26,
    supplier_currency: 'EUR',
    product_slug: 'tickets-for-duomo-di-milano-entry-rooftop-access-p974232',
    languages: [Array],
    sale_status: 'available',
    sale_status_reason: null,
    sale_status_expected_reopen: null,
    summary:
      'The Duomo di Milano took almost six centuries to complete – luckily it only takes an hour or so to explore. These tickets give you skip-the-line access to the Milan Duomo as well as its museum. You can even head to the Duomo rooftop and look out over Milan—on a clear day, you can even see the Alps.',
    whats_included:
      '* Entry ticket to Duomo di Milano Complex\r\n' +
      '* Access to the rooftop\r\n' +
      '* Entry to San Gottardo Church',
    whats_excluded: null,
    display_booking_fee: null,
    live_guide_languages: null,
    language_selection: null,
    audio_guide_languages: null,
    starting_time: null,
    timezone: 'Europe/Rome',
    duration: null,
    starting_point: [Object],
    wheelchair_access: true,
    smartphone_ticket: true,
    advance_arrival_time: null,
    last_admission_window: null,
    description: null,
    exhibitions: null,
    reviews: null,
    instant_ticket_delivery: true,
    discount_percentage: null,
    in_packages: [Array],
    package_products: null,
    supplier: [Object],
    supports_cancellation_insurance_in_affiliate_checkout: null,
    marketing_restrictions: null,
    cancellation: [Object],
    product_groups: null,
    promotion_highlight: null,
    safety_measures: null,
    skip_line: null,
    best_time_to_visit: null,
    display_price: null,
    highlights: null,
  },
  {
    id: '1118920',
    language: 'en',
    title: 'Seville Cathedral & La Giralda: Skip The Line Ticket',
    city_id: '65870',
    country_id: '50067',
    tag_ids: [Array],
    images: [],
    product_url:
      'https://www.tiqets.com/en/seville-attractions-c65870/tickets-for-seville-cathedral-la-giralda-skip-the-line-ticket-p1118920/?partner=museuly',
    product_checkout_url:
      'https://www.tiqets.com/en/checkout/tickets-for-seville-cathedral-la-giralda-skip-the-line-ticket-p1118920/booking_details/?partner=museuly',
    is_package: false,
    country_name: 'Spain',
    city_name: 'Seville',
    tagline: "Climb La Giralda tower and visit Christopher Columbus's tomb",
    promo_label: 'bestseller',
    geolocation: [Object],
    distance: null,
    venue: [Object],
    ratings: [Object],
    currency: 'EUR',
    price: 17.5,
    prediscount_price: null,
    price_in_supplier_currency: 17.5,
    supplier_currency: 'EUR',
    product_slug:
      'tickets-for-seville-cathedral-la-giralda-skip-the-line-ticket-p1118920',
    languages: [Array],
    sale_status: 'available',
    sale_status_reason: null,
    sale_status_expected_reopen: null,
    summary:
      "Visit Seville Cathedral and see its impressive Gothic architecture. Walk through the vast interior and view the detailed altarpiece and Christopher Columbus's tomb. \r\n" +
      '\r\n' +
      "Climb La Giralda Tower and enjoy the views of Seville's cityscape. Explore the many chapels and discover the history within the cathedral walls.",
    whats_included: null,
    whats_excluded: null,
    display_booking_fee: null,
    live_guide_languages: null,
    language_selection: null,
    audio_guide_languages: null,
    starting_time: null,
    timezone: 'Europe/Madrid',
    duration: null,
    starting_point: [Object],
    wheelchair_access: false,
    smartphone_ticket: true,
    advance_arrival_time: null,
    last_admission_window: null,
    description: null,
    exhibitions: null,
    reviews: null,
    instant_ticket_delivery: true,
    discount_percentage: null,
    in_packages: null,
    package_products: null,
    supplier: [Object],
    supports_cancellation_insurance_in_affiliate_checkout: null,
    marketing_restrictions: null,
    cancellation: [Object],
    product_groups: [Array],
    promotion_highlight: null,
    safety_measures: null,
    skip_line: null,
    best_time_to_visit: null,
    display_price: null,
    highlights: null,
  },
  {
    id: '974127',
    language: 'en',
    title: 'Palace of Versailles: Entry Ticket + Gardens + Estate of Trianon',
    city_id: '66594',
    country_id: '50074',
    tag_ids: [Array],
    images: [],
    product_url:
      'https://www.tiqets.com/en/versailles-attractions-c66594/tickets-for-palace-of-versailles-access-all-areas-audio-guide-p974127/?partner=museuly',
    product_checkout_url:
      'https://www.tiqets.com/en/checkout/tickets-for-palace-of-versailles-access-all-areas-audio-guide-p974127/booking_details/?partner=museuly',
    is_package: false,
    country_name: 'France',
    city_name: 'Versailles',
    tagline: "Access all areas of the Sun King's estate",
    promo_label: 'bestseller',
    geolocation: [Object],
    distance: null,
    venue: [Object],
    ratings: [Object],
    currency: 'EUR',
    price: 15,
    prediscount_price: null,
    price_in_supplier_currency: 15,
    supplier_currency: 'EUR',
    product_slug:
      'tickets-for-palace-of-versailles-access-all-areas-audio-guide-p974127',
    languages: [Array],
    sale_status: 'available',
    sale_status_reason: null,
    sale_status_expected_reopen: null,
    summary:
      "Versailles conjures up notions of a grand palace and vast landscaped gardens. But did you know there's also a third part? With this all-area-access ticket, you'll be able to explore the Hameau de la Reine, Marie Antoinette's private compound where she played pretend as a humble peasant.",
    whats_included:
      '* Timed entry to the Palace of Versailles\r\n' +
      '* Access to the Versailles gardens\r\n' +
      '* Access to the Estate of Trianon (Petit & Grand Trianon)\r\n' +
      "* Access to the Queen's Hamlet\r\n" +
      '* Access to the Coach Gallery (weekends only)\r\n' +
      '* Downloadable map',
    whats_excluded: '* Night show\r\n* Little Train admission',
    display_booking_fee: null,
    live_guide_languages: null,
    language_selection: null,
    audio_guide_languages: null,
    starting_time: null,
    timezone: 'Europe/Paris',
    duration: null,
    starting_point: [Object],
    wheelchair_access: true,
    smartphone_ticket: true,
    advance_arrival_time: null,
    last_admission_window: null,
    description: null,
    exhibitions: [Array],
    reviews: null,
    instant_ticket_delivery: true,
    discount_percentage: null,
    in_packages: null,
    package_products: null,
    supplier: [Object],
    supports_cancellation_insurance_in_affiliate_checkout: null,
    marketing_restrictions: null,
    cancellation: [Object],
    product_groups: null,
    promotion_highlight: null,
    safety_measures: null,
    skip_line: null,
    best_time_to_visit: null,
    display_price: null,
    highlights: null,
  },
  {
    id: '1111404',
    language: 'en',
    title: 'Colosseum, Roman Forum & Mamertine Prison + Audio Guide',
    city_id: '71631',
    country_id: '50109',
    tag_ids: [Array],
    images: [],
    product_url:
      'https://www.tiqets.com/en/rome-attractions-c71631/admission-colosseum-roman-forum-mamertine-prison-audio-guide-p1111404/?partner=museuly',
    product_checkout_url:
      'https://www.tiqets.com/en/checkout/admission-colosseum-roman-forum-mamertine-prison-audio-guide-p1111404/booking_details/?partner=museuly',
    is_package: false,
    country_name: 'Italy',
    city_name: 'Rome',
    tagline: 'Access the the ancient amphitheater and see the old prison',
    promo_label: null,
    geolocation: [Object],
    distance: null,
    venue: [Object],
    ratings: [Object],
    currency: 'EUR',
    price: 32,
    prediscount_price: 40,
    price_in_supplier_currency: 32,
    supplier_currency: 'EUR',
    product_slug:
      'admission-colosseum-roman-forum-mamertine-prison-audio-guide-p1111404',
    languages: [Array],
    sale_status: 'available',
    sale_status_reason: null,
    sale_status_expected_reopen: null,
    summary:
      'Visit the Colosseum and see the ancient amphitheater where gladiators once fought. Walk through the Roman Forum to view the ruins of temples and government buildings. \r\n' +
      '\r\n' +
      "Explore the Mamertine Prison and learn about the prisoners who were held here, including Saints Peter and Paul. Then, access the Colosseum for an inside perspective on one of history's most iconic arenas.",
    whats_included:
      '* Entry to the Colosseum, Palatine Hill, and Roman Forum\r\n' +
      '* Entry to Mamertine Prison',
    whats_excluded: null,
    display_booking_fee: null,
    live_guide_languages: null,
    language_selection: null,
    audio_guide_languages: null,
    starting_time: null,
    timezone: 'Europe/Rome',
    duration: null,
    starting_point: [Object],
    wheelchair_access: false,
    smartphone_ticket: true,
    advance_arrival_time: null,
    last_admission_window: null,
    description: null,
    exhibitions: null,
    reviews: null,
    instant_ticket_delivery: true,
    discount_percentage: 20,
    in_packages: null,
    package_products: null,
    supplier: [Object],
    supports_cancellation_insurance_in_affiliate_checkout: null,
    marketing_restrictions: null,
    cancellation: [Object],
    product_groups: [Array],
    promotion_highlight: null,
    safety_measures: null,
    skip_line: null,
    best_time_to_visit: null,
    display_price: null,
    highlights: null,
  },
  {
    id: '1114109',
    language: 'en',
    title: 'Rome Pantheon: Fast Track Ticket + Digital Audio Guide',
    city_id: '71631',
    country_id: '50109',
    tag_ids: [Array],
    images: [],
    product_url:
      'https://www.tiqets.com/en/rome-attractions-c71631/tickets-for-rome-pantheon-fast-track-ticket-audio-guide-app-p1114109/?partner=museuly',
    product_checkout_url:
      'https://www.tiqets.com/en/checkout/tickets-for-rome-pantheon-fast-track-ticket-audio-guide-app-p1114109/booking_details/?partner=museuly',
    is_package: false,
    country_name: 'Italy',
    city_name: 'Rome',
    tagline:
      "Learn about the Pantheon's history and see the famous dome and oculus",
    promo_label: 'bestseller',
    geolocation: [Object],
    distance: null,
    venue: [Object],
    ratings: [Object],
    currency: 'EUR',
    price: 9.9,
    prediscount_price: null,
    price_in_supplier_currency: 9.9,
    supplier_currency: 'EUR',
    product_slug:
      'tickets-for-rome-pantheon-fast-track-ticket-audio-guide-app-p1114109',
    languages: [Array],
    sale_status: 'available',
    sale_status_reason: null,
    sale_status_expected_reopen: null,
    summary:
      'Skip the long lines and get to know the Pantheon thanks to your digital audio guide. \r\n' +
      '\r\n' +
      "You'll learn about the building's origins as a pagan temple, its later conversion into a Christian church, and its important place in Roman history. \r\n" +
      '\r\n' +
      "The audio guide willl give you information about the Pantheon's famous dome and the oculus. \r\n" +
      '\r\n' +
      "You'll also hear stories, myths, and legends connected to the Pantheon, helping you better appreciate both historical facts and the folklore that surrounds the site.",
    whats_included: '* Fast-track entry\r\n* Digital audio guide app',
    whats_excluded: null,
    display_booking_fee: null,
    live_guide_languages: null,
    language_selection: null,
    audio_guide_languages: [Array],
    starting_time: null,
    timezone: 'Europe/Rome',
    duration: null,
    starting_point: [Object],
    wheelchair_access: false,
    smartphone_ticket: true,
    advance_arrival_time: '0:15:00',
    last_admission_window: null,
    description: null,
    exhibitions: null,
    reviews: null,
    instant_ticket_delivery: true,
    discount_percentage: null,
    in_packages: null,
    package_products: null,
    supplier: [Object],
    supports_cancellation_insurance_in_affiliate_checkout: null,
    marketing_restrictions: null,
    cancellation: [Object],
    product_groups: [Array],
    promotion_highlight: null,
    safety_measures: null,
    skip_line: null,
    best_time_to_visit: null,
    display_price: null,
    highlights: null,
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
      const platform = 'Tiqets';
      const platformUrl = 'http://tiqets.com/';

      const category = product['Category Name'];
      const country = product.country_name;
      const area = product['Area/State']?.trim() || null;
      const city = product.city_name;
      const cleanUrl = product.product_url.split('?')[0];
      const discount = product['Save up to']
        ? Number(product['Save up to'].replace(/\D/g, ''))
        : null;
      const rating = product.ratings?.average || null;
      const reviews = product.ratings?.total || 0;

      const newPlatform = await insertPlatform(platform, platformUrl);
      const { platformId } = newPlatform;
      console.log('Inserted platform:', newPlatform);

      const newCategory = await insertCategory(category);
      const { categoryId } = newCategory;
      console.log('Inserted category:', newCategory);

      const newCountry = await insertCountry(country);
      const { countryId } = newCountry;
      console.log('Inserted country:', newCountry);

      let areaId = null;

      if (area) {
        const newArea = await insertArea(area, countryId);
        areaId = newArea.areaId;
        console.log('Inserted area:', newArea);
      }

      const newCity = await insertCity(city, areaId, countryId);
      const { cityId } = newCity;
      console.log('Inserted city:', newCity);

      const newProduct = await insertProduct({
        title: product.title,
        external_id: product.id,
        price: product.price,
        currency: product.currency,
        rating,
        reviews,
        summary: product.summary,
        description: product.description,
        url: cleanUrl,
        url_affiliate: product.product_url,
        discount_percentage: product.discount_percentage,
        categoryId,
        cityId,
        platformId,
        address: product.address,
        postal_code: product.postal_code,
        whats_included: product.whats_included,
        whats_excluded: product.whats_excluded,
        duration: product.duration,
        wheelchair_access: product.wheelchair_access,
        smartphone_ticket: product.smartphone_ticket,
        geolocation_lat: product.geolocation_lat,
        geolocation_lng: product.geolocation_lng,
        image_alt_text: product.image_alt_text,
        image_credit: product.image_credit,
        bestseller: product.promo_label === 'bestseller',
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

// insertProducts().catch(console.log);
module.exports = insertProducts;
