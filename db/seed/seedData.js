const { Product, Color, Photo } = require('../models.js');
const connection = require('../index.js');

const productSeedData = [
  {
    name: 'Wunder Under High-Rise Tight Full-On Luxtreme 28"',
    type: 'Pants',
    price: 98.00,
  },
  {
    name: 'Wunder Lounge Pant 28"',
    type: 'Pants',
    price: 98.00,
  },
  // {
  //   name: 'In Movement 7/8 Tight Everlux 25"',
  //   type: 'Pants',
  //   price: 98.00
  // },
  // {
  //   name: 'Fast & Free 7/8 Tight II Nulux 25"',
  //   type: 'Pants',
  //   price: 128.00
  // },
  // {
  //   name: 'Tight Stuff Tight II 25"',
  //   type: 'Pants',
  //   price: 148.00
  // },
  // {
  //   name: 'Speed Up Tight Full-On Luxtreme 28"',
  //   type: 'Pants',
  //   price: 108.00
  // },
  // {
  //   name: 'Pace Rival Crop 22"',
  //   type: 'Crops',
  //   price: 88.00
  // },
  // {
  //   name: 'Align Jogger Crop 23"',
  //   type: 'Crops',
  //   price: 88.00
  // },
  // {
  //   name: 'In Movement Crop Everlux 19"',
  //   type: 'Crops',
  //   price: 88.00
  // },
  // {
  //   name: 'All The Right Places Crop II 23"',
  //   type: 'Crops',
  //   price: 118.00
  // }
];

const colorSeedData = [
  {
    name: 'Misty Merlot',
    swatch_url: 'https://images.lululemon.com/is/image/lululemon/35552?$gsr-swatch$',
    productId: 1,
  },
  {
    name: 'Frosted Rose Multi',
    swatch_url: 'https://images.lululemon.com/is/image/lululemon/35976?$gsr-swatch$',
    productId: 1,
  },
  {
    name: 'Incognito Camo Multi Grey',
    swatch_url: 'https://images.lululemon.com/is/image/lululemon/34135?$gsr-swatch$',
    productId: 1,
  },
  {
    name: 'True Navy',
    swatch_url: 'https://images.lululemon.com/is/image/lululemon/31382?$gsr-swatch$',
    productId: 1,
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://images.lululemon.com/is/image/lululemon/26083?$gsr-swatch$',
    productId: 1,
  },
  {
    name: 'Black',
    swatch_url: 'https://images.lululemon.com/is/image/lululemon/0001?$gsr-swatch$',
    productId: 1,
  },
  {
    name: 'Heathered Black',
    swatch_url: 'https://images.lululemon.com/is/image/lululemon/1966?$gsr-swatch$',
    productId: 1,
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://images.lululemon.com/is/image/lululemon/29931?$gsr-swatch$',
    productId: 2,
  },
  {
    name: 'Black',
    swatch_url: 'https://images.lululemon.com/is/image/lululemon/0001?$gsr-swatch$',
    productId: 2,
  },
  {
    name: 'Heathered Core Medium Grey',
    swatch_url: 'https://images.lululemon.com/is/image/lululemon/31045?$gsr-swatch$',
    productId: 2,
  },
];

const photoSeedData = [
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_035552_1?$image_carousel-lg_2x$',
    colorId: 1,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_035552_2?$image_carousel-lg_2x$',
    colorId: 1,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_035552_3?$image_carousel-lg_2x$',
    colorId: 1,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_035552_4?$image_carousel-lg_2x$',
    colorId: 1,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_035552_5?$image_carousel-lg_2x$',
    colorId: 1,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BIIS_035976_1?$image_carousel-lg_2x$',
    colorId: 2,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BIIS_035976_2?$image_carousel-lg_2x$',
    colorId: 2,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BIIS_035976_3?$image_carousel-lg_2x$',
    colorId: 2,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BIIS_035976_4?$image_carousel-lg_2x$',
    colorId: 2,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BIIS_035976_5?$image_carousel-lg_2x$',
    colorId: 2,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BIIS_035976_Y?$image_carousel-lg_2x$',
    colorId: 2,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AUQS_034135_1?$image_carousel-lg_2x$',
    colorId: 3,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AUQS_034135_2?$image_carousel-lg_2x$',
    colorId: 3,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AUQS_034135_3?$image_carousel-lg_2x$',
    colorId: 3,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AUQS_034135_4?$image_carousel-lg_2x$',
    colorId: 3,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AUQS_034135_5?$image_carousel-lg_2x$',
    colorId: 3,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AUQS_034135_Y?$image_carousel-lg_2x$',
    colorId: 3,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_031382_1?$image_carousel-lg_2x$',
    colorId: 4,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_031382_2?$image_carousel-lg_2x$',
    colorId: 4,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_031382_3?$image_carousel-lg_2x$',
    colorId: 4,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_031382_4?$image_carousel-lg_2x$',
    colorId: 4,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_031382_5?$image_carousel-lg_2x$',
    colorId: 4,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_031382_Y?$image_carousel-lg_2x$',
    colorId: 4,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_026083_1?$image_carousel-lg_2x$',
    colorId: 5,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_026083_2?$image_carousel-lg_2x$',
    colorId: 5,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_026083_3?$image_carousel-lg_2x$',
    colorId: 5,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_026083_4?$image_carousel-lg_2x$',
    colorId: 5,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_026083_5?$image_carousel-lg_2x$',
    colorId: 5,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5ANDS_026083_Y?$image_carousel-lg_2x$',
    colorId: 5,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AWAS_0001_1?$image_carousel-lg_2x$',
    colorId: 6,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AWAS_0001_2?$image_carousel-lg_2x$',
    colorId: 6,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AWAS_0001_3?$image_carousel-lg_2x$',
    colorId: 6,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AWAS_0001_4?$image_carousel-lg_2x$',
    colorId: 6,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AWAS_0001_5?$image_carousel-lg_2x$',
    colorId: 6,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AWAS_0001_Y?$image_carousel-lg_2x$',
    colorId: 6,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AW9S_1966_1?$image_carousel-lg_2x$',
    colorId: 7,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AW9S_1966_2?$image_carousel-lg_2x$',
    colorId: 7,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AW9S_1966_3?$image_carousel-lg_2x$',
    colorId: 7,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AW9S_1966_4?$image_carousel-lg_2x$',
    colorId: 7,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5AW9S_1966_5?$image_carousel-lg_2x$',
    colorId: 7,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_029931_1?$image_carousel-lg_2x$',
    colorId: 8,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_029931_2?$image_carousel-lg_2x$',
    colorId: 8,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_029931_3?$image_carousel-lg_2x$',
    colorId: 8,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_029931_4?$image_carousel-lg_2x$',
    colorId: 8,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_029931_5?$image_carousel-lg_2x$',
    colorId: 8,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_029931_Y?$image_carousel-lg_2x$',
    colorId: 8,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_0001_1?$image_carousel-lg_2x$',
    colorId: 9,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_0001_2?$image_carousel-lg_2x$',
    colorId: 9,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_0001_3?$image_carousel-lg_2x$',
    colorId: 9,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_0001_4?$image_carousel-lg_2x$',
    colorId: 9,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_0001_5?$image_carousel-lg_2x$',
    colorId: 9,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BG8S_0001_Y?$image_carousel-lg_2x$',
    colorId: 9,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BMLS_031045_1?$image_carousel-lg_2x$',
    colorId: 10,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BMLS_031045_2?$image_carousel-lg_2x$',
    colorId: 10,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BMLS_031045_3?$image_carousel-lg_2x$',
    colorId: 10,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BMLS_031045_4?$image_carousel-lg_2x$',
    colorId: 10,
  },
  {
    photo_url: 'https://images.lululemon.com/is/image/lululemon/LW5BMLS_031045_Y?$image_carousel-lg_2x$',
    colorId: 10,
  },
];

connection.sync({ force: false })
  .then(() => Product.bulkCreate(productSeedData))
  .then(() => Color.bulkCreate(colorSeedData))
  .then(() => Photo.bulkCreate(photoSeedData))
  .then(() => console.log('database has been seeded'));
