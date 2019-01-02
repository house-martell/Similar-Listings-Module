/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable spaced-comment */
const { Product, Color, Photo } = require('../models.js');
const connection = require('../index.js');
// refactored until product id 4

const productSeedData = [
  {
    name: 'Wunder Under High-Rise Tight',
    nameline2: 'Full-On Luxtreme 28"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$98.00',
    description: 'These versatile high-rise tights were designed to fit like a second skin—perfect for yoga or the gym. Made with Full-On® Luxtreme fabric that offers great support and coverage with a cool, smooth feel.'
  },
  {
    name: 'Wunder Lounge Pant',
    nameline2: '28"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$98.00',
    description: 'The no-fuss versatility of your favourite Wunder Under, with a looser fit and warm cottony-soft fabric to give you the comfort you crave on the coldest days.'
  },
  {
    name: 'In Movement 7/8 Tight',
    nameline2: 'Everlux 25"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$98.00',
    description: 'Meet your new studio workout companion: a sleek tight that fits like a second skin. Stretchy Everlux™ fabric dries quickly and wicks sweat in a flash, so you can go straight from pilates to spin.'
  },
  {
    name: 'Fast & Free 7/8 Tight II',
    nameline2: 'Nulux 25"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$128.00',
    description: 'Feel fast and free in these barely-there, sweat-wicking run tights. An interior waist drawcord ensures the perfect fit, while reflective details keep you visible in low light. Designed with our Naked Sensation quick-drying Nulux™ fabric, they’ll have you hitting the pavement while floating on clouds. Stash you gels and a key in the waistband pocket.'
  },
  {
    name: 'Tight Stuff Tight II',
    nameline2: 'Online Only 25"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$148.00',
    description: 'We engineered these training tights with moderate compression to help stabilize your muscles—and included lots of storage options. Made with Full-On® Luxtreme fabric that offers great support and coverage with a smooth feel and is sweat-wicking and four-way stretch.'
  },
  {
    name: 'Speed Up Tight',
    nameline2: 'Full-On Luxtreme 28"',
    category: 'Bottoms',
    type: 'Pants',
    price: '$108.00',
    description: 'Focus on your gait, not your gear, in these lightweight, sweat-wicking run tights that are fully loaded with built-in storage and reflectivity. We made these tights using our high-coverage and supportive Full-on® Luxtreme fabric that\'s sweat-wicking and four-way stretch with a cool, smooth feel. The waistband is not only lightweight and won\'t dig in, it has slip-in gel pockets in the front, a zippered pocket in the back, and a continuous interior drawcord.'
  },
  {
    name: 'Pace Rival Crop',
    nameline2: '22"',
    category: 'Bottoms',
    type: 'Crops',
    price: '$88.00',
    description: 'These versatile run crops, with built-in ventilation, have you covered from long runs to hill training. With our signature 3 pocket waistband, you can bring all your essentials with you.'
  },
  {
    name: 'Align Jogger Crop',
    nameline2: '23"',
    category: 'Bottoms',
    type: 'Crops',
    price: '$88.00',
    description: 'Designed with our unbelievably soft Nulu™ fabric and a relaxed fit at the leg, this jogger gives you the perfect no-distractions feeling.'
  },
  {
    name: 'In Movement Crop',
    nameline2: 'Everlux 19" Online Only',
    category: 'Bottoms',
    type: 'Crops',
    price: '$88.00',
    description: 'Meet your new studio workout companion: a sleek crop that fits like a second skin. Everlux™ fabric is four-way stretch, sweat-wicking, feels cool to the touch, and dries so fast it’s like magic.'
  },
  {
    name: 'All The Right Places Crop II',
    nameline2: '23"',
    category: 'Bottoms',
    type: 'Crops',
    price: '$118.00',
    description: 'These high-rise, all-sport crops use zoned compression to keep you supported in all the right places.'
  },
  {
    name: 'Align Short',
    nameline2: '4"',
    category: 'Bottoms',
    type: 'Shorts',
    price: '$48.00',
    description: 'These lightweight, high-rise shorts minimize distractions and maximize comfort as you flow through your yoga practice.'
  },
  {
    name: 'Run Times Short II',
    nameline2: '4"',
    category: 'Bottoms',
    type: 'Shorts',
    price: '$58.00',
    description: 'Looking for a longer run short? We updated the waistband on this classic design, but kept the 4" inseam.'
  },
  {
    name: 'Hotty Hot Short',
    nameline2: '2.5"',
    category: 'Bottoms',
    type: 'Shorts',
    price: '$58.00',
    description: 'Sweat to your heart\'s content in these lightweight cross-sport shorts that are lined for coverage. They have a secret stash pocket in the liner and a discreet zippered pocket on the back waistband for keys, cards, gels, or cash.'
  },
  { // 14
    name: 'Energy Bra',
    nameline2: 'Long Line',
    category: 'Bras',
    type: 'Sports Bras',
    price: '$58.00',
    description: 'We created a long-line version of this fan-favourite sports bra to give you extra coverage for yoga, running, and gym workouts.'
  },
  { // 15
    name: 'Energy Bra Flocked',
    nameline2: '',
    category: 'Bras',
    type: 'Sports Bras',
    price: '$58.00',
    description: 'This special edition Energy Bra has a deep-v Mesh fabric insert with a delicate flocked print and a high neckline for a distraction-free practice.'
  },
  { // 16
    name: 'Free To Be Tank',
    nameline2: 'Nulu',
    category: 'Tops',
    type: 'Tanks',
    price: '$58.00',
    description: 'Flow through poses and pulses in this super-soft, strappy-back tank. The shelf-bra liner gives those with B/C cups light, no-fuss support.'
  },
  { // 17
    name: 'Deep Stretch Tank',
    nameline2: '',
    category: 'Tops',
    type: 'Tanks',
    price: '$48.00',
    description: 'This open-back tank is ideal for moving through your yin practice. The back connector piece keeps your shoulder straps in place so you can focus on your pose.'
  },
  { // 18
    name: 'Kitsilano Mock Tank',
    nameline2: '',
    category: 'Tops',
    type: 'Tanks',
    price: '$48.00',
    description: 'We designed this cropped tank to pair perfectly with high rise bottoms post-sweat.'
  },
  { // 19
    name: 'Love Crew III',
    nameline2: '',
    category: 'Tops',
    type: 'Short Sleeves',
    price: '$48.00',
    description: 'You\'ll fall head-over-heels for this crewneck tee made from our Pima Cotton fabric that\'s famous for its softness. Slip it on when you\'re craving breathable, four-way stretch comfort to and from practice—or anytime at all, really. It\'s perfect for layering underneath sweaters on cool days or wearing on its own when the temperature rises.'
  },
  { // 20
    name: 'Cortes Crop Tee ',
    nameline2: 'Light',
    category: 'Tops',
    type: 'Short Sleeves',
    price: '$48.00',
    description: 'Keep those post-practice vibes strong all day long in this over-sized cropped tee.'
  },
  { // 21
    name: 'Another Mile Short Sleeve',
    nameline2: '',
    category: 'Tops',
    type: 'Short Sleeves',
    price: '$68.00',
    description: 'This anti-stink tee is designed to be your sidekick through long distance runs and sweaty sessions.'
  },
  // { //22
  //   name: ,
  //   nameline2: ,
  //   category: ,
  //   type: ,
  //   price: ,
  //   description:
  // },
  { // 23
    name: 'Swiftly Speed Turtleneck',
    nameline2: '',
    category: 'Sweaters and Wraps',
    type: 'Long Sleeves',
    price: '$88.00',
    description: 'Don\'t hibernate—this anti-stink turtleneck was made for warmth on brisk and chilly outdoor workouts.'
  },
  { // 24
    name: 'Back In Action Long Sleeve V',
    nameline2: '',
    category: 'Sweaters and Wraps',
    type: 'Long Sleeves',
    price: '$58.00',
    description: 'We designed this super soft long sleeve to help keep you cool and comfortable after your workout.'
  },
  { // 25, link didn't work, because final sale item??
    name: 'Keep The Heat Thermal Long',
    nameline2: 'Sleeve',
    category: 'Sweaters and Wraps',
    type: 'Long Sleeves',
    price: '$98.00 ',
    description: 'This high-performance base layer was made to keep you warm during intense cold-weather activities. Work up a sweat—the wool-blend fabric is wicking on the inside and insulating on the outside, so you feel warm and comfortable even when wet.'
  },
  { // 26
    name: 'Swiftly Wool 1/2 Zip Hoodie',
    nameline2: '',
    category: 'Sweaters and Wraps',
    type: 'Long Sleeves',
    price: '$118.00',
    description: 'With a close-fitting hood that fits under a ski or bike helmet, this wool half zip helps keep your temperature in the comfort zone.'
  },
  { // 27
    name: 'Hooded Define Jacket ',
    nameline2: 'Nulu',
    category: 'Jackets and Hoodies',
    type: 'Hoodies + Sweatshirts',
    price: '$128.00',
    description: 'Layer on this lightweight, hooded jacket when you want a soft sweat-wicking layer to wear to and from class or for warm ups and cool downs. Nulu® fabric is lightweight and buttery-soft.'
  },
  { // 28
    name: 'Light As Warmth Scuba',
    nameline2: 'Hoodie',
    category: 'Outerwear',
    type: 'Hoodies + Sweatshirts',
    price: '$128.00',
    description: 'Zip into this warm, lightweight version of our signature hoodie. Made from insulating PrimaLoft® Fleece fabric, you get the breathable warmth you want, without added weight.'
  },
  { // 29
    name: 'Coast Hoodie',
    nameline2: '',
    category: 'Outerwear',
    type: 'Hoodies + Sweatshirts',
    price: '$118.00',
    description: 'This asymmetrical hoodie has your back in cool weather. A high neckline keeps you extra snuggly.'
  },
  // { //30
  //   name: ,
  //   nameline2: ,
  //   category: ,
  //   type: ,
  //   price: ,
  //   description:
  // },
];

const colorSeedData = [
  {
    name: 'Misty Merlot',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/01_mistymerlot/mm_swatch.jpg',
    productId: 1,
  },
  { // 2
    name: 'Frosted Rose Multi',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/02_frostedrose/2+frosted+rose.jpg',
    productId: 1,
  },
  { // 3
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/03_truenavy/3+true+navy.jpg',
    productId: 1,
  },
  { // 4
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/04_darkolive/4+dark+olive.jpg',
    productId: 1,
  },
  { // 5
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/05_black/5+black.jpg',
    productId: 1,
  },
  { // 6
    name: 'Heathered Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/06_heatheredblack/6+heathered+black.jpg',
    productId: 1,
  },
  { // 7
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/2/01_darkadobe/29931.jpg',
    productId: 2,
  },
  { // 8
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/2/02_black/0001.jpg',
    productId: 2,
  },
  { //9
    name: 'Heathered Core Medium Grey',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/2/03_heatheredcoremediumgray/31045.jpg',
    productId: 2
  },
  { //10
    name: 'Mystic Green',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/01_mysticgreen/32152.jpg',
    productId: 3
  },
  { //11
    name: 'Antique Bark',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/02_antiquebark/31383.jpg',
    productId: 3
  },
  { //12
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/03_darkolive/26083.jpg',
    productId: 3
  },
  { //13
    name: 'Dark Shadow',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/04_darkshadow/30819.jpg',
    productId: 3
  },
  { //14
    name: 'Nocturnal Teal',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/05_nocturnalteal/27783.jpg',
    productId: 3
  },
  { //15
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/06_black/0001.jpg',
    productId: 3
  },
  { //16
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/07_darkadobe/29931.jpg',
    productId: 3
  },
  { //17
    name: 'Melanite',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/01_melanite/30084.jpg',
    productId: 4
  },
  { //18
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/02_darkolive/26083.jpg',
    productId: 4
  },
  { //19
    name: 'Dark Carbon',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/03_darkcarbon/26624.jpg',
    productId: 4
  },
  { //20
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/04_truenavy/31382.jpg',
    productId: 4
  },
  { //21
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/05_black/0001.jpg',
    productId: 4
  },
  {
    name: 'Titanium',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product5_swatch_color1.jpeg',
    productId: 5
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product5_swatch_color2.jpeg',
    productId: 5
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product5_swatch_color3.jpeg',
    productId: 5
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product5_swatch_color4.jpeg',
    productId: 5
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product6_swatch_color1.jpeg',
    productId: 6
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product6_swatch_color2.jpeg',
    productId: 6
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product6_swatch_color3.jpeg',
    productId: 6
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product7_swatch_color1.jpeg',
    productId: 7
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product7_swatch_color2.jpeg',
    productId: 7
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product7_swatch_color3.jpeg',
    productId: 7
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product7_swatch_color4.jpeg',
    productId: 7
  },
  {
    name: 'Heathered Black/Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product7_swatch_color5.jpeg',
    productId: 7
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product8_swatch_color1.jpeg',
    productId: 8
  },
  {
    name: 'Moonphase',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product8_swatch_color2.jpeg',
    productId: 8
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product8_swatch_color3.jpeg',
    productId: 8
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product8_swatch_color4.jpeg',
    productId: 8
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product9_swatch_color1.jpeg',
    productId: 9
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product9_swatch_color2.jpeg',
    productId: 9
  },
  {
    name: 'Violet Red',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color1.jpeg',
    productId: 10
  },
  {
    name: 'Spanish Rose',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color2.jpeg',
    productId: 10
  },
  {
    name: 'Titanium',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color3.jpeg',
    productId: 10
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color4.jpeg',
    productId: 10
  },
  {
    name: 'White',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color5.jpeg',
    productId: 10
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color6.jpeg',
    productId: 10
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color7.jpeg',
    productId: 10
  },
  {
    name: 'Sage',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color8.jpeg',
    productId: 10
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product10_swatch_color9.jpeg',
    productId: 10
  },
  {
    name: 'Lacescape Spanish Rose Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color1.jpeg',
    productId: 11
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color2.jpeg',
    productId: 11
  },
  {
    name: 'Dark Olive',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color3.jpeg',
    productId: 11
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color4.jpeg',
    productId: 11
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color5.jpeg',
    productId: 11
  },
  {
    name: 'Luminesce Splatter Ice Grey Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product11_swatch_color6.jpeg',
    productId: 11
  },
  {
    name: 'Dark Adobe',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color1.jpeg',
    productId: 12
  },
  {
    name: 'Luminosity Foil Print Black Silver/Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color2.jpeg',
    productId: 12
  },
  {
    name: 'Green Smoke',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color3.jpeg',
    productId: 12
  },
  {
    name: 'Heather Lux Multi Black/Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color4.jpeg',
    productId: 12
  },
  {
    name: 'True Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color5.jpeg',
    productId: 12
  },
  {
    name: 'White',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color6.jpeg',
    productId: 12
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product12_swatch_color7.jpeg',
    productId: 12
  },
  {
    name: 'Midnight Navy',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product13_swatch_color1.jpeg',
    productId: 13
  },
  {
    name: 'Black',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product13_swatch_color2.jpeg',
    productId: 13
  },
  {
    name: 'White',
    swatch_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product13_swatch_color3.jpeg',
    productId: 13
  }
];

const photoSeedData = [
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/01_mistymerlot/LW5ANDS_035552_1.jpg',
    colorId: 1
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/01_mistymerlot/LW5ANDS_035552_2.jpg',
    colorId: 1
  },
  { //name: 'Frosted Rose Multi'
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/02_frostedrose/LW5BIIS_035976_1.jpg',
    colorId: 2
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/02_frostedrose/LW5BIIS_035976_2.jpg',
    colorId: 2
  },
  { //name: 'True Navy'
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/03_truenavy/LW5ANDS_031382_1.jpg',
    colorId: 3
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/03_truenavy/LW5ANDS_031382_2.jpg',
    colorId: 3
  },
  { //name: 'Dark Olive'
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/04_darkolive/LW5ANDS_026083_1.jpg',
    colorId: 4
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/04_darkolive/LW5ANDS_026083_2.jpg',
    colorId: 4
  },
  { //  name: 'Black'
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/05_black/LW5AWAS_0001_1.jpg',
    colorId: 5
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/05_black/LW5AWAS_0001_2.jpg',
    colorId: 5
  },
  { //name: 'Heathered Black',
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/06_heatheredblack/LW5AW9S_1966_1.jpg',
    colorId: 6
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/1/06_heatheredblack/LW5AW9S_1966_2.jpg',
    colorId: 6
  },
  { //dark adobe
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/2/01_darkadobe/LW5BG8S_029931_1.jpg',
    colorId: 7
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/2/01_darkadobe/LW5BG8S_029931_2.jpg',
    colorId: 7
  },
  { //black
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/2/02_black/LW5BG8S_0001_1.jpg',
    colorId: 8
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/2/02_black/LW5BG8S_0001_2.jpg',
    colorId: 8
  },
  { // name: 'Heathered Core Medium Grey'
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/2/03_heatheredcoremediumgray/LW5BMLS_031045_1.jpg',
    colorId: 9
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/2/03_heatheredcoremediumgray/LW5BMLS_031045_3.jpg',
    colorId: 9
  },
  { //'Mystic Green',
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/01_mysticgreen/LW5ANXS_032152_1.jpg',
    colorId: 10
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/01_mysticgreen/LW5ANXS_032152_2.jpg',
    colorId: 10
  },
  { //antique bark
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/02_antiquebark/LW5ANXS_031383_1.jpg',
    colorId: 11
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/02_antiquebark/LW5ANXS_031383_2.jpg',
    colorId: 11
  },
  { //dark olive
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/03_darkolive/LW5ANXS_026083_1.jpg',
    colorId: 12
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/03_darkolive/LW5ANXS_026083_2.jpg',
    colorId: 12
  },
  { //dark shadow
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/04_darkshadow/LW5ANXS_030819_2.jpg',
    colorId: 13
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/04_darkshadow/LW5ANXS_030819_1.jpg',
    colorId: 13
  },
  { //nocturnal teal
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/05_nocturnalteal/LW5ANXS_027783_1.jpg',
    colorId: 14
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/05_nocturnalteal/LW5ANXS_027783_3.jpg',
    colorId: 14
  },
  { //black
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/06_black/LW5ANXS_0001_1.jpg',
    colorId: 15
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/06_black/LW5ANXS_0001_2.jpg',
    colorId: 15
  },
  { //dark adobe
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/07_darkadobe/LW5ANXS_029931_1.jpg',
    colorId: 16
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/3/07_darkadobe/LW5ANXS_029931_2.jpg',
    colorId: 16
  },
  { //melanite
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/01_melanite/LW5BJGS_030084_2.jpg',
    colorId: 17
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/01_melanite/LW5BJGS_030084_1.jpg',
    colorId: 17
  },
  { //'Dark Olive'
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/02_darkolive/LW5BJGS_026083_1.jpg',
    colorId: 18
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/02_darkolive/LW5BJGS_026083_2.jpg',
    colorId: 18
  },
  {//dark carbon
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/03_darkcarbon/LW5BJGS_026624_6.jpg',
    colorId: 19
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/03_darkcarbon/LW5BJGS_026624_2.jpg',
    colorId: 19
  },
  { //'True Navy'
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/04_truenavy/LW5BJGS_031382_1.jpg',
    colorId: 20
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/04_truenavy/LW5BJGS_031382_2.jpg',
    colorId: 20
  },
  { //'Black'
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/05_black/LW5BJGS_0001_1.jpg',
    colorId: 21
  },
  {
    photo_url: 'https://s3-us-west-1.amazonaws.com/lubucket3003/lulumelon_pics/4/05_black/LW5BJGS_0001_2.jpg',
    colorId: 21
  },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo1.jpeg',
  //   colorId: 22
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo2.jpeg',
  //   colorId: 22
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo3.jpeg',
  //   colorId: 22
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo4.jpeg',
  //   colorId: 22
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo5.jpeg',
  //   colorId: 22
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo6.jpeg',
  //   colorId: 22
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo7.jpeg',
  //   colorId: 22
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color7_photo8.jpeg',
  //   colorId: 22
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo1.jpeg',
  //   colorId: 23
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo2.jpeg',
  //   colorId: 23
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo3.jpeg',
  //   colorId: 23
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo4.jpeg',
  //   colorId: 23
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo5.jpeg',
  //   colorId: 23
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo6.jpeg',
  //   colorId: 23
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product4/lulumelon_product4_color8_photo7.jpeg',
  //   colorId: 23
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo1.jpeg',
  //   colorId: 24
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo2.jpeg',
  //   colorId: 24
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo3.jpeg',
  //   colorId: 24
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo4.jpeg',
  //   colorId: 24
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo5.jpeg',
  //   colorId: 24
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color1_photo6.jpeg',
  //   colorId: 24
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo1.jpeg',
  //   colorId: 25
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo2.jpeg',
  //   colorId: 25
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo3.jpeg',
  //   colorId: 25
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo4.jpeg',
  //   colorId: 25
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo5.jpeg',
  //   colorId: 25
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color2_photo6.jpeg',
  //   colorId: 25
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo1.jpeg',
  //   colorId: 26
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo2.jpeg',
  //   colorId: 26
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo3.jpeg',
  //   colorId: 26
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo4.jpeg',
  //   colorId: 26
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo5.jpeg',
  //   colorId: 26
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo6.jpeg',
  //   colorId: 26
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color3_photo7.jpeg',
  //   colorId: 26
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo1.jpeg',
  //   colorId: 27
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo2.jpeg',
  //   colorId: 27
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo3.jpeg',
  //   colorId: 27
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo4.jpeg',
  //   colorId: 27
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo5.jpeg',
  //   colorId: 27
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo6.jpeg',
  //   colorId: 27
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo7.jpeg',
  //   colorId: 27
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo8.jpeg',
  //   colorId: 27
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product5/lulumelon_product5_color4_photo9.jpeg',
  //   colorId: 27
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo1.jpeg',
  //   colorId: 28
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo2.jpeg',
  //   colorId: 28
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo3.jpeg',
  //   colorId: 28
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo4.jpeg',
  //   colorId: 28
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo5.jpeg',
  //   colorId: 28
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo6.jpeg',
  //   colorId: 28
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo7.jpeg',
  //   colorId: 28
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color1_photo8.jpeg',
  //   colorId: 28
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo1.jpeg',
  //   colorId: 29
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo2.jpeg',
  //   colorId: 29
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo3.jpeg',
  //   colorId: 29
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo4.jpeg',
  //   colorId: 29
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo5.jpeg',
  //   colorId: 29
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo6.jpeg',
  //   colorId: 29
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color2_photo7.jpeg',
  //   colorId: 29
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo1.jpeg',
  //   colorId: 30
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo2.jpeg',
  //   colorId: 30
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo3.jpeg',
  //   colorId: 30
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo4.jpeg',
  //   colorId: 30
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo5.jpeg',
  //   colorId: 30
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo6.jpeg',
  //   colorId: 30
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product6/lulumelon_product6_color3_photo7.jpeg',
  //   colorId: 30
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo1.jpeg',
  //   colorId: 31
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo2.jpeg',
  //   colorId: 31
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo3.jpeg',
  //   colorId: 31
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo4.jpeg',
  //   colorId: 31
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo5.jpeg',
  //   colorId: 31
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo6.jpeg',
  //   colorId: 31
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color1_photo7.jpeg',
  //   colorId: 31
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo1.jpeg',
  //   colorId: 32
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo2.jpeg',
  //   colorId: 32
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo3.jpeg',
  //   colorId: 32
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo4.jpeg',
  //   colorId: 32
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo5.jpeg',
  //   colorId: 32
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo6.jpeg',
  //   colorId: 32
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color2_photo7.jpeg',
  //   colorId: 32
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo1.jpeg',
  //   colorId: 33
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo2.jpeg',
  //   colorId: 33
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo3.jpeg',
  //   colorId: 33
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo4.jpeg',
  //   colorId: 33
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo5.jpeg',
  //   colorId: 33
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color3_photo6.jpeg',
  //   colorId: 33
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo1.jpeg',
  //   colorId: 34
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo2.jpeg',
  //   colorId: 34
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo3.jpeg',
  //   colorId: 34
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo4.jpeg',
  //   colorId: 34
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo5.jpeg',
  //   colorId: 34
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo6.jpeg',
  //   colorId: 34
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color4_photo7.jpeg',
  //   colorId: 34
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color5_photo1.jpeg',
  //   colorId: 35
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color5_photo2.jpeg',
  //   colorId: 35
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color5_photo3.jpeg',
  //   colorId: 35
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product7/lulumelon_product7_color5_photo4.jpeg',
  //   colorId: 35
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo1.jpeg',
  //   colorId: 36
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo2.jpeg',
  //   colorId: 36
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo3.jpeg',
  //   colorId: 36
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo4.jpeg',
  //   colorId: 36
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo5.jpeg',
  //   colorId: 36
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color1_photo6.jpeg',
  //   colorId: 36
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo1.jpeg',
  //   colorId: 37
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo2.jpeg',
  //   colorId: 37
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo3.jpeg',
  //   colorId: 37
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo4.jpeg',
  //   colorId: 37
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo5.jpeg',
  //   colorId: 37
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color2_photo6.jpeg',
  //   colorId: 37
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo1.jpeg',
  //   colorId: 38
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo2.jpeg',
  //   colorId: 38
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo3.jpeg',
  //   colorId: 38
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo4.jpeg',
  //   colorId: 38
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo5.jpeg',
  //   colorId: 38
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color3_photo6.jpeg',
  //   colorId: 38
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo1.jpeg',
  //   colorId: 39
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo2.jpeg',
  //   colorId: 39
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo3.jpeg',
  //   colorId: 39
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo4.jpeg',
  //   colorId: 39
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo5.jpeg',
  //   colorId: 39
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product8/lulumelon_product8_color4_photo6.jpeg',
  //   colorId: 39
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo1.jpeg',
  //   colorId: 40
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo2.jpeg',
  //   colorId: 40
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo3.jpeg',
  //   colorId: 40
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo4.jpeg',
  //   colorId: 40
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo5.jpeg',
  //   colorId: 40
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color1_photo6.jpeg',
  //   colorId: 40
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo1.jpeg',
  //   colorId: 41
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo2.jpeg',
  //   colorId: 41
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo3.jpeg',
  //   colorId: 41
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo4.jpeg',
  //   colorId: 41
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo5.jpeg',
  //   colorId: 41
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product9/lulumelon_product9_color2_photo6.jpeg',
  //   colorId: 41
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo1.jpeg',
  //   colorId: 42
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo2.jpeg',
  //   colorId: 42
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo3.jpeg',
  //   colorId: 42
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo4.jpeg',
  //   colorId: 42
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo5.jpeg',
  //   colorId: 42
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color1_photo6.jpeg',
  //   colorId: 42
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color2_photo1.jpeg',
  //   colorId: 43
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color2_photo2.jpeg',
  //   colorId: 43
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color2_photo3.jpeg',
  //   colorId: 43
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color2_photo4.jpeg',
  //   colorId: 43
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color2_photo5.jpeg',
  //   colorId: 43
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo1.jpeg',
  //   colorId: 44
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo2.jpeg',
  //   colorId: 44
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo3.jpeg',
  //   colorId: 44
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo4.jpeg',
  //   colorId: 44
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo5.jpeg',
  //   colorId: 44
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo6.jpeg',
  //   colorId: 44
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color3_photo7.jpeg',
  //   colorId: 44
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo1.jpeg',
  //   colorId: 45
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo2.jpeg',
  //   colorId: 45
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo3.jpeg',
  //   colorId: 45
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo4.jpeg',
  //   colorId: 45
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo5.jpeg',
  //   colorId: 45
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color4_photo6.jpeg',
  //   colorId: 45
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo1.jpeg',
  //   colorId: 46
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo2.jpeg',
  //   colorId: 46
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo3.jpeg',
  //   colorId: 46
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo4.jpeg',
  //   colorId: 46
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo5.jpeg',
  //   colorId: 46
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color5_photo6.jpeg',
  //   colorId: 46
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo1.jpeg',
  //   colorId: 47
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo2.jpeg',
  //   colorId: 47
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo3.jpeg',
  //   colorId: 47
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo4.jpeg',
  //   colorId: 47
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo5.jpeg',
  //   colorId: 47
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color6_photo6.jpeg',
  //   colorId: 47
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo1.jpeg',
  //   colorId: 48
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo2.jpeg',
  //   colorId: 48
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo3.jpeg',
  //   colorId: 48
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo4.jpeg',
  //   colorId: 48
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo5.jpeg',
  //   colorId: 48
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo6.jpeg',
  //   colorId: 48
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo7.jpeg',
  //   colorId: 48
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color7_photo8.jpeg',
  //   colorId: 48
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color8_photo1.jpeg',
  //   colorId: 49
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color8_photo2.jpeg',
  //   colorId: 49
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color8_photo3.jpeg',
  //   colorId: 49
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color8_photo4.jpeg',
  //   colorId: 49
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color8_photo5.jpeg',
  //   colorId: 49
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo1.jpeg',
  //   colorId: 50
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo2.jpeg',
  //   colorId: 50
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo3.jpeg',
  //   colorId: 50
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo4.jpeg',
  //   colorId: 50
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo5.jpeg',
  //   colorId: 50
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product10/lulumelon_product10_color9_photo6.jpeg',
  //   colorId: 50
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo1.jpeg',
  //   colorId: 51
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo2.jpeg',
  //   colorId: 51
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo3.jpeg',
  //   colorId: 51
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo4.jpeg',
  //   colorId: 51
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo5.jpeg',
  //   colorId: 51
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color1_photo6.jpeg',
  //   colorId: 51
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo1.jpeg',
  //   colorId: 52
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo2.jpeg',
  //   colorId: 52
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo3.jpeg',
  //   colorId: 52
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo4.jpeg',
  //   colorId: 52
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo5.jpeg',
  //   colorId: 52
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color2_photo6.jpeg',
  //   colorId: 52
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo1.jpeg',
  //   colorId: 53
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo2.jpeg',
  //   colorId: 53
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo3.jpeg',
  //   colorId: 53
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo4.jpeg',
  //   colorId: 53
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo5.jpeg',
  //   colorId: 53
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color3_photo6.jpeg',
  //   colorId: 53
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo1.jpeg',
  //   colorId: 54
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo2.jpeg',
  //   colorId: 54
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo3.jpeg',
  //   colorId: 54
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo4.jpeg',
  //   colorId: 54
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo5.jpeg',
  //   colorId: 54
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color4_photo6.jpeg',
  //   colorId: 54
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo1.jpeg',
  //   colorId: 55
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo2.jpeg',
  //   colorId: 55
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo3.jpeg',
  //   colorId: 55
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo4.jpeg',
  //   colorId: 55
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo5.jpeg',
  //   colorId: 55
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color5_photo6.jpeg',
  //   colorId: 55
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo1.jpeg',
  //   colorId: 56
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo2.jpeg',
  //   colorId: 56
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo3.jpeg',
  //   colorId: 56
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo4.jpeg',
  //   colorId: 56
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo5.jpeg',
  //   colorId: 56
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product11/lulumelon_product11_color6_photo6.jpeg',
  //   colorId: 56
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color1_photo1.jpeg',
  //   colorId: 57
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color1_photo2.jpeg',
  //   colorId: 57
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color1_photo3.jpeg',
  //   colorId: 57
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color1_photo4.jpeg',
  //   colorId: 57
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color1_photo5.jpeg',
  //   colorId: 57
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color2_photo1.jpeg',
  //   colorId: 58
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color2_photo2.jpeg',
  //   colorId: 58
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color2_photo3.jpeg',
  //   colorId: 58
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color2_photo4.jpeg',
  //   colorId: 58
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo1.jpeg',
  //   colorId: 59
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo2.jpeg',
  //   colorId: 59
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo3.jpeg',
  //   colorId: 59
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo4.jpeg',
  //   colorId: 59
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo5.jpeg',
  //   colorId: 59
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color3_photo6.jpeg',
  //   colorId: 59
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color4_photo1.jpeg',
  //   colorId: 60
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color4_photo2.jpeg',
  //   colorId: 60
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color4_photo3.jpeg',
  //   colorId: 60
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color4_photo4.jpeg',
  //   colorId: 60
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color4_photo5.jpeg',
  //   colorId: 60
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo1.jpeg',
  //   colorId: 61
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo2.jpeg',
  //   colorId: 61
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo3.jpeg',
  //   colorId: 61
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo4.jpeg',
  //   colorId: 61
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo5.jpeg',
  //   colorId: 61
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color5_photo6.jpeg',
  //   colorId: 61
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color6_photo1.jpeg',
  //   colorId: 62
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color6_photo2.jpeg',
  //   colorId: 62
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color6_photo3.jpeg',
  //   colorId: 62
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color6_photo4.jpeg',
  //   colorId: 62
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color6_photo5.jpeg',
  //   colorId: 62
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo1.jpeg',
  //   colorId: 63
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo2.jpeg',
  //   colorId: 63
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo3.jpeg',
  //   colorId: 63
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo4.jpeg',
  //   colorId: 63
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo5.jpeg',
  //   colorId: 63
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product12/lulumelon_product12_color7_photo6.jpeg',
  //   colorId: 63
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo1.jpeg',
  //   colorId: 64
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo2.jpeg',
  //   colorId: 64
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo3.jpeg',
  //   colorId: 64
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo4.jpeg',
  //   colorId: 64
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo5.jpeg',
  //   colorId: 64
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo6.jpeg',
  //   colorId: 64
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color1_photo7.jpeg',
  //   colorId: 64
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo1.jpeg',
  //   colorId: 65
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo2.jpeg',
  //   colorId: 65
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo3.jpeg',
  //   colorId: 65
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo4.jpeg',
  //   colorId: 65
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo5.jpeg',
  //   colorId: 65
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color2_photo6.jpeg',
  //   colorId: 65
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color3_photo1.jpeg',
  //   colorId: 66
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color3_photo2.jpeg',
  //   colorId: 66
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color3_photo3.jpeg',
  //   colorId: 66
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color3_photo4.jpeg',
  //   colorId: 66
  // },
  // {
  //   photo_url: 'https://s3-us-west-1.amazonaws.com/fec-lulumelon/product13/lulumelon_product13_color3_photo5.jpeg',
  //   colorId: 66
  // }
];

connection.sync({ force: false })
  .then(() => Product.bulkCreate(productSeedData))
  .then(() => Color.bulkCreate(colorSeedData))
  .then(() => Photo.bulkCreate(photoSeedData))
  .then(() => console.log('database has been seeded'));
