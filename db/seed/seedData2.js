const { Product, Color, Photo } = require('../models.js');
const connection = require('../index.js');

const productSeedData = [
  {
    name: 'Wunder Under High-Rise Tight Full-On Luxtreme 28"',
    type: 'Pants',
    price: '$98.00',
    // description: 'These versatile high-rise tights were designed to fit like
    // a second skin—perfect for yoga or the gym.
    // Made with Full-On® Luxtreme fabric that offers great support
    // and coverage with a cool, smooth feel.',
  },
  {
    name: 'Wunder Lounge Pant 28"',
    type: 'Pants',
    price: '$98.00',
    // description: 'The no-fuss versatility of your favourite Wunder Under, with
    // a looser fit and warm cottony-soft fabric to give you the comfort you crave
    // on the coldest days.',
  },
  {
    name: 'In Movement 7/8 Tight Everlux 25"',
    type: 'Pants',
    price: '$98.00',
    // description: 'Meet your new studio workout companion: a sleek tight that fits
    // like a second skin. Stretchy Everlux™ fabric dries quickly and wicks sweat in
    // a flash, so you can go straight from pilates to spin.',
  },
  {
    name: 'Fast & Free 7/8 Tight II Nulux 25"',
    type: 'Pants',
    price: '$128.00',
    // description: 'Feel fast and free in these barely-there, sweat-wicking run tights.
    // An interior waist drawcord ensures the perfect fit, while reflective details keep
    // you visible in low light. Designed with our Naked Sensation quick-drying Nulux™ fab
    // ric, they’ll have you hitting the pavement while floating on clouds. Stash you gels
    // and a key in the waistband pocket.',
  },
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
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color1.jpeg',
    productId: 1,
  },
  {
    name: 'Frosted Rose Multi',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color2.jpeg',
    productId: 1,
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color3.jpeg',
    productId: 1,
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color4.jpeg',
    productId: 1,
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color5.jpeg',
    productId: 1,
  },
  {
    name: 'Heathered Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color6.jpeg',
    productId: 1,
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product2_swatch_color1.jpeg',
    productId: 2,
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product2_swatch_color2.jpeg',
    productId: 2,
  },
  {
    name: 'Heathered Core Medium Grey',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product2_swatch_color3.jpeg',
    productId: 2,
  },
  {
    name: 'Dark Shadow',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color1.jpeg',
    productId: 3,
  },
  {
    name: 'Paisley Glaze Multi',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color2.jpeg',
    productId: 3,
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color3.jpeg',
    productId: 3,
  },
  {
    name: 'Nocturnal Teal',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color4.jpeg',
    productId: 3,
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color5.jpeg',
    productId: 3,
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product3_swatch_color6.jpeg',
    productId: 3,
  },
  {
    name: 'Violet Red',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color1.jpeg',
    productId: 4,
  },
  {
    name: 'Meisai White Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color2.jpeg',
    productId: 4,
  },
  {
    name: 'Melanite',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color3.jpeg',
    productId: 4,
  },
  {
    name: 'Green Smoke',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color4.jpeg',
    productId: 4,
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color5.jpeg',
    productId: 4,
  },
  {
    name: 'Dark Carbon',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color6.jpeg',
    productId: 4,
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color7.jpeg',
    productId: 4,
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product4_swatch_color8.jpeg',
    productId: 4,
  },
];

const photoSeedData = [
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color1_photo1.jpeg',
    colorId: 1,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color1_photo2.jpeg',
    colorId: 1,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color1_photo3.jpeg',
    colorId: 1,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color1_photo4.jpeg',
    colorId: 1,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color1_photo5.jpeg',
    colorId: 1,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo1.jpeg',
    colorId: 2,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo2.jpeg',
    colorId: 2,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo3.jpeg',
    colorId: 2,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo4.jpeg',
    colorId: 2,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo5.jpeg',
    colorId: 2,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color2_photo6.jpeg',
    colorId: 2,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo1.jpeg',
    colorId: 3,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo2.jpeg',
    colorId: 3,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo3.jpeg',
    colorId: 3,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo4.jpeg',
    colorId: 3,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo5.jpeg',
    colorId: 3,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color3_photo6.jpeg',
    colorId: 3,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo1.jpeg',
    colorId: 4,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo2.jpeg',
    colorId: 4,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo3.jpeg',
    colorId: 4,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo4.jpeg',
    colorId: 4,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo5.jpeg',
    colorId: 4,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color4_photo6.jpeg',
    colorId: 4,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo1.jpeg',
    colorId: 5,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo2.jpeg',
    colorId: 5,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo3.jpeg',
    colorId: 5,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo4.jpeg',
    colorId: 5,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo5.jpeg',
    colorId: 5,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color5_photo6.jpeg',
    colorId: 5,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color6_photo1.jpeg',
    colorId: 6,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color6_photo2.jpeg',
    colorId: 6,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color6_photo3.jpeg',
    colorId: 6,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color6_photo4.jpeg',
    colorId: 6,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product1/lulumelon_product1_color6_photo5.jpeg',
    colorId: 6,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo1.jpeg',
    colorId: 7,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo2.jpeg',
    colorId: 7,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo3.jpeg',
    colorId: 7,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo4.jpeg',
    colorId: 7,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo5.jpeg',
    colorId: 7,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color1_photo6.jpeg',
    colorId: 7,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo1.jpeg',
    colorId: 8,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo2.jpeg',
    colorId: 8,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo3.jpeg',
    colorId: 8,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo4.jpeg',
    colorId: 8,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo5.jpeg',
    colorId: 8,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color2_photo6.jpeg',
    colorId: 8,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color3_photo1.jpeg',
    colorId: 9,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color3_photo2.jpeg',
    colorId: 9,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color3_photo3.jpeg',
    colorId: 9,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color3_photo4.jpeg',
    colorId: 9,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product2/lulumelon_product2_color3_photo5.jpeg',
    colorId: 9,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color1_photo1.jpeg',
    colorId: 10,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color1_photo2.jpeg',
    colorId: 10,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color1_photo3.jpeg',
    colorId: 10,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color1_photo4.jpeg',
    colorId: 10,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo1.jpeg',
    colorId: 11,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo2.jpeg',
    colorId: 11,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo3.jpeg',
    colorId: 11,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo4.jpeg',
    colorId: 11,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo5.jpeg',
    colorId: 11,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color2_photo6.jpeg',
    colorId: 11,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo1.jpeg',
    colorId: 12,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo2.jpeg',
    colorId: 12,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo3.jpeg',
    colorId: 12,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo4.jpeg',
    colorId: 12,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo5.jpeg',
    colorId: 12,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color3_photo6.jpeg',
    colorId: 12,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color4_photo1.jpeg',
    colorId: 13,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color4_photo2.jpeg',
    colorId: 13,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color4_photo3.jpeg',
    colorId: 13,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color4_photo4.jpeg',
    colorId: 13,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color4_photo5.jpeg',
    colorId: 13,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color5_photo1.jpeg',
    colorId: 14,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color5_photo2.jpeg',
    colorId: 14,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color5_photo3.jpeg',
    colorId: 14,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color5_photo4.jpeg',
    colorId: 14,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color5_photo5.jpeg',
    colorId: 14,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo1.jpeg',
    colorId: 15,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo2.jpeg',
    colorId: 15,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo3.jpeg',
    colorId: 15,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo4.jpeg',
    colorId: 15,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo5.jpeg',
    colorId: 15,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product3/lulumelon_product3_color6_photo6.jpeg',
    colorId: 15,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo1.jpeg',
    colorId: 16,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo2.jpeg',
    colorId: 16,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo3.jpeg',
    colorId: 16,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo4.jpeg',
    colorId: 16,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo5.jpeg',
    colorId: 16,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo6.jpeg',
    colorId: 16,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color1_photo7.jpeg',
    colorId: 16,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo1.jpeg',
    colorId: 17,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo2.jpeg',
    colorId: 17,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo3.jpeg',
    colorId: 17,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo4.jpeg',
    colorId: 17,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo5.jpeg',
    colorId: 17,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color2_photo6.jpeg',
    colorId: 17,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo1.jpeg',
    colorId: 18,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo2.jpeg',
    colorId: 18,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo3.jpeg',
    colorId: 18,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo4.jpeg',
    colorId: 18,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo5.jpeg',
    colorId: 18,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo6.jpeg',
    colorId: 18,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color3_photo7.jpeg',
    colorId: 18,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo1.jpeg',
    colorId: 19,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo2.jpeg',
    colorId: 19,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo3.jpeg',
    colorId: 19,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo4.jpeg',
    colorId: 19,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo5.jpeg',
    colorId: 19,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo6.jpeg',
    colorId: 19,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color4_photo7.jpeg',
    colorId: 19,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo1.jpeg',
    colorId: 20,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo2.jpeg',
    colorId: 20,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo3.jpeg',
    colorId: 20,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo4.jpeg',
    colorId: 20,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo5.jpeg',
    colorId: 20,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo6.jpeg',
    colorId: 20,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo7.jpeg',
    colorId: 20,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color5_photo8.jpeg',
    colorId: 20,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo1.jpeg',
    colorId: 21,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo2.jpeg',
    colorId: 21,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo3.jpeg',
    colorId: 21,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo4.jpeg',
    colorId: 21,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo5.jpeg',
    colorId: 21,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo6.jpeg',
    colorId: 21,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color6_photo7.jpeg',
    colorId: 21,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo1.jpeg',
    colorId: 22,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo2.jpeg',
    colorId: 22,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo3.jpeg',
    colorId: 22,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo4.jpeg',
    colorId: 22,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo5.jpeg',
    colorId: 22,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo6.jpeg',
    colorId: 22,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo7.jpeg',
    colorId: 22,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo8.jpeg',
    colorId: 22,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo1.jpeg',
    colorId: 23,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo2.jpeg',
    colorId: 23,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo3.jpeg',
    colorId: 23,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo4.jpeg',
    colorId: 23,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo5.jpeg',
    colorId: 23,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo6.jpeg',
    colorId: 23,
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo7.jpeg',
    colorId: 23,
  },
];

connection.sync({ force: false })
  .then(() => Product.bulkCreate(productSeedData))
  .then(() => Color.bulkCreate(colorSeedData))
  .then(() => Photo.bulkCreate(photoSeedData))
  .then(() => console.log('database has been seeded'));
