// Base URL for assets - handles Vite's base path configuration
const BASE_URL = import.meta.env.BASE_URL || '/';

// Helper function to get the correct image path
export const getImagePath = (path) => `${BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

// Product Categories
export const CATEGORIES = [
  {
    id: 'anti-tarnish-bracelet',
    name: 'Anti Tarnish Bracelet',
    description: 'Premium non-tarnish bracelets that maintain their shine forever',
    image: getImagePath('images/products/anti-tarnish-bracelet/1.jpg')
  },
  {
    id: 'anti-tarnish-earrings',
    name: 'Anti Tarnish Earrings',
    description: 'Elegant earrings crafted with anti-tarnish materials',
    image: getImagePath('images/products/anti-tarnish-earrings/1.jpg')
  },
  {
    id: 'anti-tarnish-necklace',
    name: 'Anti Tarnish Necklace',
    description: 'Beautiful necklaces that never lose their luster',
    image: getImagePath('images/products/anti-tarnish-necklace/1.jpg')
  },
  {
    id: 'anti-tarnish-rings',
    name: 'Anti Tarnish Rings',
    description: 'Stunning rings made with premium anti-tarnish metals',
    image: getImagePath('images/products/anti-tarnish-rings/1.jpg')
  },
  {
    id: 'beads-bracelet',
    name: 'Beads Bracelet',
    description: 'Handcrafted beaded bracelets with unique designs',
    image: getImagePath('images/products/beads-bracelet/11.jpg')
  },
  {
    id: 'korean-earrings',
    name: 'Korean Earrings',
    description: 'Trendy Korean-style earrings for a modern look',
    image: getImagePath('images/products/korean-earrings/1.jpg')
  },
  {
    id: 'unique-charm-necklace',
    name: 'Unique Charm Necklace',
    description: 'One-of-a-kind charm necklaces to express your style',
    image: getImagePath('images/products/unique-charm-necklace/1.jpg')
  }
];

// ============================================
// PRODUCTS - Edit prices manually below
// ============================================

// Anti Tarnish Bracelet (4 products - consolidated styles as variations)
// To change price: edit the "price" value for each product
export const antiTarnishBraceletProducts = [
 { id: 'atb-1', name: 'Anti Tarnish Bracelet Style 1', price: 99, image: '1.jpg' },
  { id: 'atb-2', name: 'Anti Tarnish Bracelet Style 2', price: 99, image: '2.jpg' },
  { id: 'atb-3', name: 'Anti Tarnish Bracelet Style 3', price: 99, image: '3.jpg' },
  { id: 'atb-4', name: 'Anti Tarnish Bracelet Style 4', price: 99, image: '4.jpg' },
  { id: 'atb-5', name: 'Anti Tarnish Bracelet Style 5', price: 99, image: '5.jpg' },
  { id: 'atb-6', name: 'Anti Tarnish Bracelet Style 6', price: 99, image: '6.jpg' },
  { id: 'atb-7', name: 'Anti Tarnish Bracelet Style 7', price: 99, image: '7.jpg' },
  { id: 'atb-8', name: 'Anti Tarnish Bracelet Style 8', price: 99, image: '8.jpg' },
  { id: 'atb-9', name: 'Anti Tarnish Bracelet Style 9', price: 99, image: '9.jpg' },
  { id: 'atb-10', name: 'Anti Tarnish Bracelet Style 10', price: 99, image: '10.jpg' },
  { id: 'atb-11', name: 'Anti Tarnish Bracelet Style 11', price: 99, image: '11.jpg' },
  { id: 'atb-12', name: 'Anti Tarnish Bracelet Style 12', price: 99, image: '12.jpg' },
  { id: 'atb-13', name: 'Anti Tarnish Bracelet Style 13', price: 99, image: '13.jpg' },
  { id: 'atb-14', name: 'Anti Tarnish Bracelet Style 14', price: 99, image: '14.jpg' },
  { id: 'atb-15', name: 'Anti Tarnish Bracelet Style 15', price: 99, image: '15.jpg' },
  { id: 'atb-16', name: 'Anti Tarnish Bracelet Style 16', price: 99, image: '16.jpg' },
  { id: 'atb-17', name: 'Anti Tarnish Bracelet Style 17', price: 159, image: '17.jpg' },
  { id: 'atb-18', name: 'Anti Tarnish Bracelet Style 18', price: 159, image: '18.jpg' },
  { id: 'atb-20', name: 'Anti Tarnish Bracelet Style 20', price: 159, image: '20.jpg' },
  { id: 'atb-21', name: 'Anti Tarnish Bracelet Style 21', price: 159, image: '21.jpg' },
  { id: 'atb-22', name: 'Anti Tarnish Bracelet Style 22', price: 159, image: '22.jpg' },
  { id: 'atb-23', name: 'Anti Tarnish Bracelet Style 23', price: 199, image: '23.jpg' },
  { id: 'atb-24', name: 'Anti Tarnish Bracelet Style 24', price: 199, image: '24.jpg' },
  { id: 'atb-25', name: 'Anti Tarnish Bracelet Style 25', price: 199, image: '25.jpg' },
  { id: 'atb-26', name: 'Anti Tarnish Bracelet Style 26', price: 199, image: '26.jpg' },
  { id: 'atb-27', name: 'Anti Tarnish Bracelet Style 27', price: 199, image: '27.jpg' },
  { id: 'atb-28', name: 'Anti Tarnish Bracelet Style 28', price: 299, image: '28.jpg' },
  { id: 'atb-29', name: 'Anti Tarnish Bracelet Style 29', price: 299, image: '29.jpg' },
  { id: 'atb-30', name: 'Anti Tarnish Bracelet Style 30', price: 339, image: '30.jpg' },
  { id: 'atb-31', name: 'Anti Tarnish Bracelet Style 31', price: 339, image: '31.jpg' },
  { id: 'atb-32', name: 'Anti Tarnish Bracelet Style 32', price: 339, image: '32.jpg' },
  { id: 'atb-33', name: 'Anti Tarnish Bracelet Style 33', price: 339, image: '33.jpg' },
  { id: 'atb-34', name: 'Anti Tarnish Bracelet Style 34', price: 339, image: '34.jpg' },
].map(p => {
  const baseImages = [getImagePath(`images/products/anti-tarnish-bracelet/${p.image}`)];
  const allImages = p.extraImages 
    ? [...baseImages, ...p.extraImages.map(img => getImagePath(`images/products/anti-tarnish-bracelet/${img}`))]
    : baseImages;
  
  return {
    ...p,
    category: 'Anti Tarnish Bracelet',
    categoryId: 'anti-tarnish-bracelet',
    description: 'Premium anti-tarnish bracelet that maintains its shine forever.',
    longDescription: 'This exquisite anti-tarnish bracelet is crafted with premium materials that resist oxidation and maintain their beautiful shine for years.',
    images: allImages,
    featured: p.id === 'atb-1' || p.id === 'atb-2'
  };
});

// Anti Tarnish Earrings (5 products - consolidated styles as variations)
export const antiTarnishEarringsProducts = [
  { id: 'ate-1', name: 'Anti Tarnish Earrings Style 1', price: 99, image: '1.jpg', extraImages: ['2.jpg', '12.jpg'] },
  { id: 'ate-2', name: 'Anti Tarnish Earrings Style 2', price: 65, image: '3.jpg', extraImages: ['9.jpg', '13.jpg'] },
  { id: 'ate-3', name: 'Anti Tarnish Earrings Style 3', price: 65, image: '4.jpg', extraImages: ['8.jpg', '14.jpg'] },
  { id: 'ate-4', name: 'Anti Tarnish Earrings Style 4', price: 65, image: '5.jpg', extraImages: ['6.jpg', '11.jpg'] },
  { id: 'ate-5', name: 'Anti Tarnish Earrings Style 5', price: 65, image: '7.jpg', extraImages: ['10.jpg', '15.jpg'] },
].map(p => {
  const baseImages = [getImagePath(`images/products/anti-tarnish-earrings/${p.image}`)];
  const allImages = p.extraImages 
    ? [...baseImages, ...p.extraImages.map(img => getImagePath(`images/products/anti-tarnish-earrings/${img}`))]
    : baseImages;
  
  return {
    ...p,
    category: 'Anti Tarnish Earrings',
    categoryId: 'anti-tarnish-earrings',
    description: 'Elegant anti-tarnish earrings that stay beautiful always.',
    longDescription: 'These stunning anti-tarnish earrings are designed to complement any outfit. Made with hypoallergenic materials.',
    images: allImages,
    featured: p.id === 'ate-1' || p.id === 'ate-2'
  };
});

// Anti Tarnish Necklace (7 products - consolidated styles as variations)
export const antiTarnishNecklaceProducts = [
  // ₹99 (1–8)
  { id: 'atn-1', name: 'Anti Tarnish Necklace Style 1', price: 99, image: '35.jpg' },
  { id: 'atn-2', name: 'Anti Tarnish Necklace Style 2', price: 99, image: '36.jpg' },
  { id: 'atn-3', name: 'Anti Tarnish Necklace Style 3', price: 99, image: '37.jpg' },
  { id: 'atn-4', name: 'Anti Tarnish Necklace Style 4', price: 99, image: '38.jpg' },
  { id: 'atn-5', name: 'Anti Tarnish Necklace Style 5', price: 99, image: '39.jpg' },
  { id: 'atn-6', name: 'Anti Tarnish Necklace Style 6', price: 99, image: '40.jpg' },
  { id: 'atn-7', name: 'Anti Tarnish Necklace Style 7', price: 99, image: '41.jpg' },
  { id: 'atn-8', name: 'Anti Tarnish Necklace Style 8', price: 99, image: '42.jpg' },

  // ₹199 (9–19)
  { id: 'atn-9', name: 'Anti Tarnish Necklace Style 9', price: 199, image: '10.jpg', extraImages: ['2.jpg', '1.jpg'] },
  { id: 'atn-10', name: 'Anti Tarnish Necklace Style 10', price: 199, image: '4.jpg', extraImages: ['3.jpg', '4.jpg'] },
  { id: 'atn-11', name: 'Anti Tarnish Necklace Style 11', price: 199, image: '5.jpg', extraImages: ['6.jpg', '8.jpg'] },
  { id: 'atn-12', name: 'Anti Tarnish Necklace Style 12', price: 199, image: '7.jpg' },
  { id: 'atn-13', name: 'Anti Tarnish Necklace Style 13', price: 199, image: '9.jpg' },
  { id: 'atn-14', name: 'Anti Tarnish Necklace Style 14', price: 199, image: '11.jpg' },
  { id: 'atn-15', name: 'Anti Tarnish Necklace Style 15', price: 199, image: '12.jpg' },
  { id: 'atn-16', name: 'Anti Tarnish Necklace Style 16', price: 199, image: '14.jpg' },
  { id: 'atn-17', name: 'Anti Tarnish Necklace Style 17', price: 199, image: '15.jpg' },
  { id: 'atn-18', name: 'Anti Tarnish Necklace Style 18', price: 199, image: '16.jpg' },
  { id: 'atn-19', name: 'Anti Tarnish Necklace Style 19', price: 199, image: '13.jpg', extraImages: ['17.jpg'] },

  // ₹219 (20–25)
  { id: 'atn-20', name: 'Anti Tarnish Necklace Style 20', price: 219, image: '18.jpg' },
  { id: 'atn-21', name: 'Anti Tarnish Necklace Style 21', price: 219, image: '19.jpg' },
  { id: 'atn-22', name: 'Anti Tarnish Necklace Style 22', price: 219, image: '20.jpg' },
  { id: 'atn-23', name: 'Anti Tarnish Necklace Style 23', price: 219, image: '21.jpg' },
  { id: 'atn-24', name: 'Anti Tarnish Necklace Style 24', price: 219, image: '22.jpg' },
  { id: 'atn-25', name: 'Anti Tarnish Necklace Style 25', price: 219, image: '23.jpg' },

  // ₹249 (26–31)
  { id: 'atn-26', name: 'Anti Tarnish Necklace Style 26', price: 249, image: '24.jpg' },
  { id: 'atn-27', name: 'Anti Tarnish Necklace Style 27', price: 249, image: '25.jpg' },
  { id: 'atn-28', name: 'Anti Tarnish Necklace Style 28', price: 249, image: '26.jpg' },
  { id: 'atn-29', name: 'Anti Tarnish Necklace Style 29', price: 249, image: '27.jpg' },
  { id: 'atn-30', name: 'Anti Tarnish Necklace Style 30', price: 249, image: '28.jpg' },
  { id: 'atn-31', name: 'Anti Tarnish Necklace Style 31', price: 249, image: '29.jpg' },

  // ₹359 (32–36)
  { id: 'atn-32', name: 'Anti Tarnish Necklace Style 32', price: 359, image: '30.jpg' },
  { id: 'atn-33', name: 'Anti Tarnish Necklace Style 33', price: 359, image: '31.jpg' },
  { id: 'atn-34', name: 'Anti Tarnish Necklace Style 34', price: 359, image: '32.jpg' },
  { id: 'atn-35', name: 'Anti Tarnish Necklace Style 35', price: 359, image: '33.jpg' },
  { id: 'atn-36', name: 'Anti Tarnish Necklace Style 36', price: 359, image: '34.jpg' },
].map(p => {
  const baseImages = [getImagePath(`images/products/anti-tarnish-necklace/${p.image}`)];
  const allImages = p.extraImages 
    ? [...baseImages, ...p.extraImages.map(img => getImagePath(`images/products/anti-tarnish-necklace/${img}`))]
    : baseImages;
  
  return {
    ...p,
    category: 'Anti Tarnish Necklace',
    categoryId: 'anti-tarnish-necklace',
    description: 'Beautiful anti-tarnish necklace that never loses its luster.',
    longDescription: 'This gorgeous anti-tarnish necklace maintains its beautiful shine and resists tarnishing over time.',
    images: allImages,
    featured: p.id === 'atn-1' || p.id === 'atn-2'
  };
});

// Anti Tarnish Rings (5 products - consolidated styles as variations)
export const antiTarnishRingsProducts = [
  { id: 'atr-1', name: 'Anti Tarnish Ring Style 1', price: 99, image: '1.jpg' },
  { id: 'atr-2', name: 'Anti Tarnish Ring Style 2', price: 99, image: '2.jpg'},
  { id: 'atr-3', name: 'Anti Tarnish Ring Style 3', price: 99, image: '3.jpg' },
  { id: 'atr-4', name: 'Anti Tarnish Ring Style 4', price: 99, image: '4.jpg' },
  { id: 'atr-5', name: 'Anti Tarnish Ring Style 5', price: 99, image: '5.jpg' },
  { id: 'atr-6', name: 'Anti Tarnish Ring Style 6', price: 99, image: '6.jpg' },
  { id: 'atr-7', name: 'Anti Tarnish Ring Style 7', price: 105, image: '7.jpg' },
  { id: 'atr-8', name: 'Anti Tarnish Ring Style 8', price: 105, image: '8.jpg' },
  { id: 'atr-9', name: 'Anti Tarnish Ring Style 9', price: 115, image: '9.jpg' },
  { id: 'atr-10', name: 'Anti Tarnish Ring Style 10', price: 115, image: '10.jpg', extraImages: ['11.jpg'] },
  { id: 'atr-11', name: 'Anti Tarnish Ring Style 11', price: 129, image: '12.jpg' },
  { id: 'atr-12', name: 'Anti Tarnish Ring Style 12', price: 149, image: '13.jpg', extraImages: ['14.jpg'] },
  { id: 'atr-13', name: 'Anti Tarnish Ring Style 13', price: 149, image: '14.jpg', extraImages: ['15.jpg'] },
].map(p => {
  const baseImages = [getImagePath(`images/products/anti-tarnish-rings/${p.image}`)];
  const allImages = p.extraImages 
    ? [...baseImages, ...p.extraImages.map(img => getImagePath(`images/products/anti-tarnish-rings/${img}`))]
    : baseImages;
  
  return {
    ...p,
    category: 'Anti Tarnish Rings',
    categoryId: 'anti-tarnish-rings',
    description: 'Stunning anti-tarnish ring made with premium metals.',
    longDescription: 'This elegant anti-tarnish ring is crafted with the finest materials to ensure lasting beauty.',
    images: allImages,
    featured: p.id === 'atr-1' || p.id === 'atr-2'
  };
});

// Beads Bracelet (20 products - consolidated styles as variations)
export const beadsBraceletProducts = [
  { id: 'bb-1', name: 'Beads Bracelet Style 1', price: 65, image: '11.jpg', extraImages: ['12.jpg', '13.jpg'] },
  { id: 'bb-2', name: 'Beads Bracelet Style 2', price: 70, image: '4.jpg', extraImages: ['3.jpg','2.jpg'] },
  { id: 'bb-3', name: 'Beads Bracelet Style 3', price: 99, image: '5.jpg', extraImages: ['6.jpg','7.jpg'] },
  { id: 'bb-4', name: 'Beads Bracelet Style 4', price: 65, image: '9.jpg', extraImages: ['10.jpg','8.jpg'] },
  { id: 'bb-5', name: 'Beads Bracelet Style 5', price: 65, image: '16.jpg', extraImages: ['14.jpg','15.jpg'] },
  { id: 'bb-6', name: 'Beads Bracelet Style 6', price: 99, image: '17.jpg' },
  { id: 'bb-7', name: 'Beads Bracelet Style 7', price: 99, image: '18.jpg', extraImages: ['19.jpg','20.jpg'] },
  { id: 'bb-8', name: 'Beads Bracelet Style 8', price: 65, image: '21.jpg', extraImages: ['22.jpg','23.jpg'] },
  { id: 'bb-9', name: 'Beads Bracelet Style 9', price: 65, image: '26.jpg', extraImages: ['24.jpg','25.jpg'] },
  { id: 'bb-10', name: 'Beads Bracelet Style 10', price: 99, image: '27.jpg', extraImages: ['28.jpg'] },
  { id: 'bb-11', name: 'Beads Bracelet Style 11', price: 70, image: '31.jpg', extraImages: ['32.jpg','30.jpg','29.jpg'] },
  { id: 'bb-12', name: 'Beads Bracelet Style 12', price: 65, image: '33.jpg', extraImages: ['35.jpg','34.jpg'] },
  { id: 'bb-13', name: 'Beads Bracelet Style 13', price: 65, image: '37.jpg', extraImages: ['38.jpg','36.jpg'] },
  { id: 'bb-14', name: 'Beads Bracelet Style 14', price: 70, image: '39.jpg', extraImages: ['40.jpg','41.jpg'] },
  { id: 'bb-15', name: 'Beads Bracelet Style 15', price: 99, image: '42.jpg', extraImages: ['43.jpg','44.jpg'] },
  { id: 'bb-16', name: 'Beads Bracelet Style 16', price: 39, image: '45.jpg', extraImages: ['46.jpg','47.jpg'] },
  { id: 'bb-17', name: 'Beads Bracelet Style 17', price: 75, image: '50.jpg', extraImages: ['48.jpg','49.jpg'] },
  { id: 'bb-18', name: 'Beads Bracelet Style 18', price: 99, image: '51.jpg', extraImages: ['52.jpg','53.jpg'] },
  { id: 'bb-19', name: 'Beads Bracelet Style 19', price: 99, image: '54.jpg', extraImages: ['56.jpg','55.jpg'] },
  { id: 'bb-20', name: 'Beads Bracelet Style 20', price: 75, image: '58.jpg', extraImages: ['59.jpg','57.jpg'] },
].map(p => {
  const baseImages = [getImagePath(`images/products/beads-bracelet/${p.image}`)];
  const allImages = p.extraImages 
    ? [...baseImages, ...p.extraImages.map(img => getImagePath(`images/products/beads-bracelet/${img}`))]
    : baseImages;
  
  return {
    ...p,
    category: 'Beads Bracelet',
    categoryId: 'beads-bracelet',
    description: 'Handcrafted beaded bracelet with unique design.',
    longDescription: 'This beautiful handcrafted beaded bracelet features carefully selected beads strung on a durable elastic cord.',
    images: allImages,
    featured: p.id === 'bb-1' || p.id === 'bb-2'
  };
});

// Korean Earrings (14 products - consolidated styles as variations)
export const koreanEarringsProducts = [
  { id: 'ke-1', name: 'Korean Earrings Style 1', price: 29, image: '44.jpeg' },
  { id: 'ke-2', name: 'Korean Earrings Style 2', price: 29, image: '65.jpeg' },
  { id: 'ke-3', name: 'Korean Earrings Style 3', price: 29, image: '66.jpeg' },
  { id: 'ke-4', name: 'Korean Earrings Style 4', price: 33, image: '37.jpeg' },
  { id: 'ke-5', name: 'Korean Earrings Style 5', price: 35, image: '34.jpeg' },
  { id: 'ke-6', name: 'Korean Earrings Style 6', price: 39, image: '47.jpeg' },
  { id: 'ke-7', name: 'Korean Earrings Style 7', price: 39, image: '58.jpeg' },
  { id: 'ke-8', name: 'Korean Earrings Style 8', price: 39, image: '61.jpeg' },
  { id: 'ke-9', name: 'Korean Earrings Style 9', price: 39, image: '62.jpeg' },
  { id: 'ke-10', name: 'Korean Earrings Style 10', price: 39, image: '73.jpeg' },
  { id: 'ke-11', name: 'Korean Earrings Style 11', price: 39, image: '74.jpeg' },
  { id: 'ke-12', name: 'Korean Earrings Style 12', price: 40, image: '35.jpeg' },
  { id: 'ke-13', name: 'Korean Earrings Style 13', price: 40, image: '46.jpeg' },
  { id: 'ke-14', name: 'Korean Earrings Style 14', price: 45, image: '39.jpeg' },
  { id: 'ke-15', name: 'Korean Earrings Style 15', price: 45, image: '55.jpeg' },
  { id: 'ke-16', name: 'Korean Earrings Style 16', price: 45, image: '64.jpeg' },
  { id: 'ke-17', name: 'Korean Earrings Style 17', price: 49, image: '63.jpeg' },
  { id: 'ke-18', name: 'Korean Earrings Style 18', price: 50, image: '36.jpeg' },
  { id: 'ke-19', name: 'Korean Earrings Style 19', price: 50, image: '67.jpeg' },
  { id: 'ke-20', name: 'Korean Earrings Style 20', price: 50, image: '68.jpeg' },
  { id: 'ke-21', name: 'Korean Earrings Style 21', price: 55, image: '42.jpeg' },
  { id: 'ke-22', name: 'Korean Earrings Style 22', price: 55, image: '45.jpeg' },
  { id: 'ke-23', name: 'Korean Earrings Style 23', price: 55, image: '54.jpeg' },
  { id: 'ke-24', name: 'Korean Earrings Style 24', price: 55, image: '56.jpeg' },
  { id: 'ke-25', name: 'Korean Earrings Style 25', price: 55, image: '59.jpeg' },
  { id: 'ke-26', name: 'Korean Earrings Style 26', price: 59, image: '71.jpeg' },
  { id: 'ke-27', name: 'Korean Earrings Style 27', price: 59, image: '72.jpeg' },
  { id: 'ke-28', name: 'Korean Earrings Style 28', price: 60, image: '41.jpeg' },
  { id: 'ke-29', name: 'Korean Earrings Style 29', price: 60, image: '50.jpeg' },
  { id: 'ke-30', name: 'Korean Earrings Style 30', price: 60, image: '52.jpeg' },
  { id: 'ke-31', name: 'Korean Earrings Style 31', price: 60, image: '69.jpeg' },
  { id: 'ke-32', name: 'Korean Earrings Style 32', price: 60, image: '70.jpeg' },
  { id: 'ke-33', name: 'Korean Earrings Style 33', price: 62, image: '43.jpeg' },
  { id: 'ke-34', name: 'Korean Earrings Style 34', price: 65, image: '38.jpeg' },
  { id: 'ke-35', name: 'Korean Earrings Style 35', price: 65, image: '40.jpeg' },
  { id: 'ke-36', name: 'Korean Earrings Style 36', price: 65, image: '53.jpeg' },
  { id: 'ke-37', name: 'Korean Earrings Style 37', price: 65, image: '60.jpeg' },
  { id: 'ke-38', name: 'Korean Earrings Style 38', price: 65, image: '75.jpeg' },
  { id: 'ke-39', name: 'Korean Earrings Style 39', price: 65, image: '76.jpeg' },
  { id: 'ke-40', name: 'Korean Earrings Style 40', price: 69, image: '49.jpeg' },
  { id: 'ke-41', name: 'Korean Earrings Style 41', price: 70, image: '57.jpeg' },
  { id: 'ke-42', name: 'Korean Earrings Style 42', price: 75, image: '51.jpeg' },
  { id: 'ke-43', name: 'Korean Earrings Style 43', price: 99, image: '48.jpeg' },
].map(p => {
  const baseImages = [getImagePath(`images/products/korean-earrings/${p.image}`)];
  const allImages = p.extraImages 
    ? [...baseImages, ...p.extraImages.map(img => getImagePath(`images/products/korean-earrings/${img}`))]
    : baseImages;
  
  return {
    ...p,
    category: 'Korean Earrings',
    categoryId: 'korean-earrings',
    description: 'Trendy Korean-style earrings for a modern look.',
    longDescription: 'These trendy Korean-style earrings bring the latest K-fashion to your jewelry collection.',
    images: allImages,
    featured: p.id === 'ke-1' || p.id === 'ke-2'
  };
});

// Unique Charm Necklace (11 products - consolidated styles as variations)
export const uniqueCharmNecklaceProducts = [
  { id: 'ucn-1', name: 'Unique Charm Necklace Style 1', price: 59, image: '1.jpg', extraImages: ['2.jpg', '16.jpg', '24.jpg'] },
  { id: 'ucn-2', name: 'Unique Charm Necklace Style 2', price: 39, image: '3.jpg', extraImages: ['4.jpg', '27.jpg'] },
  { id: 'ucn-3', name: 'Unique Charm Necklace Style 3', price: 55, image: '5.jpg', extraImages: ['26.jpg'] },
  { id: 'ucn-4', name: 'Unique Charm Necklace Style 4', price: 99, image: '6.jpg', extraImages: ['13.jpg','25.jpg'] },
  { id: 'ucn-5', name: 'Unique Charm Necklace Style 5', price: 99, image: '8.jpg', extraImages: ['7.jpg','10.jpg','15.jpg','23.jpg'] },
  { id: 'ucn-6', name: 'Unique Charm Necklace Style 6', price: 45, image: '9.jpg', extraImages: ['14.jpg'] },
  { id: 'ucn-7', name: 'Unique Charm Necklace Style 7', price: 99, image: '11.jpg' },
  { id: 'ucn-8', name: 'Unique Charm Necklace Style 8', price: 55, image: '12.jpg' },
  { id: 'ucn-9', name: 'Unique Charm Necklace Style 9', price: 69, image: '18.jpg' },
  { id: 'ucn-10', name: 'Unique Charm Necklace Style 10', price: 99, image: '19.jpg', extraImages: ['21.jpg','22.jpg'] },
  { id: 'ucn-11', name: 'Unique Charm Necklace Style 11', price: 55, image: '20.jpg' },
].map(p => {
  const baseImages = [getImagePath(`images/products/unique-charm-necklace/${p.image}`)];
  const allImages = p.extraImages 
    ? [...baseImages, ...p.extraImages.map(img => getImagePath(`images/products/unique-charm-necklace/${img}`))]
    : baseImages;
  
  return {
    ...p,
    category: 'Unique Charm Necklace',
    categoryId: 'unique-charm-necklace',
    description: 'One-of-a-kind charm necklace to express your style.',
    longDescription: 'This unique charm necklace is designed to make a statement with carefully selected charms.',
    images: allImages,
    featured: p.id === 'ucn-1' || p.id === 'ucn-2'
  };
});

// Combine all product
export const PRODUCTS = [
  ...antiTarnishBraceletProducts,
  ...antiTarnishEarringsProducts,
  ...antiTarnishNecklaceProducts,
  ...antiTarnishRingsProducts,
  ...beadsBraceletProducts,
  ...koreanEarringsProducts,
  ...uniqueCharmNecklaceProducts
];

// Get products by category
export const getProductsByCategory = (categoryId) => {
  return PRODUCTS.filter(product => product.categoryId === categoryId);
};

// Get featured products
export const getFeaturedProducts = () => {
  return PRODUCTS.filter(product => product.featured);
};

export const CONTACT_INFO = {
  whatsapp: '916374950502',
  email: 'aurabeads.charm@gmail.com',
  instagram: '@aurabeads_.charm'
};
