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
  { id: 'atb-1', name: 'Anti Tarnish Bracelet Style 1', price: 150, image: '1.jpg', extraImages: ['3.jpg', '6.jpg', '8.jpg'] },
  { id: 'atb-2', name: 'Anti Tarnish Bracelet Style 2', price: 150, image: '2.jpg', extraImages: ['5.jpg', '13.jpg', '14.jpg'] },
  { id: 'atb-3', name: 'Anti Tarnish Bracelet Style 3', price: 169, image: '4.jpg', extraImages: ['10.jpg', '12.jpg'] },
  { id: 'atb-4', name: 'Anti Tarnish Bracelet Style 4', price: 99, image: '7.jpg', extraImages: ['9.jpg', '11.jpg'] },
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
  { id: 'atn-1', name: 'Anti Tarnish Necklace Style 1', price: 199, image: '1.jpg', extraImages: ['2.jpg', '3.jpg'] },
  { id: 'atn-2', name: 'Anti Tarnish Necklace Style 2', price: 199, image: '4.jpg', extraImages: ['5.jpg', '6.jpg'] },
  { id: 'atn-3', name: 'Anti Tarnish Necklace Style 3', price: 199, image: '9.jpg', extraImages: ['7.jpg', '8.jpg', '10.jpg', '11.jpg', '12.jpg'] },
  { id: 'atn-4', name: 'Anti Tarnish Necklace Style 4', price: 199, image: '13.jpg', extraImages: ['14.jpg', '15.jpg'] },
  { id: 'atn-5', name: 'Anti Tarnish Necklace Style 5', price: 199, image: '16.jpg', extraImages: ['17.jpg', '18.jpg'] },
  { id: 'atn-6', name: 'Anti Tarnish Necklace Style 6', price: 199, image: '19.jpg', extraImages: ['20.jpg', '21.jpg'] },
  { id: 'atn-7', name: 'Anti Tarnish Necklace Style 7', price: 199, image: '22.jpg', extraImages: ['23.jpg'] },
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
  { id: 'atr-1', name: 'Anti Tarnish Ring Style 1', price: 99, image: '1.jpg', extraImages: ['2.jpg', '3.jpg'] },
  { id: 'atr-2', name: 'Anti Tarnish Ring Style 2', price: 99, image: '4.jpg', extraImages: ['5.jpg'] },
  { id: 'atr-3', name: 'Anti Tarnish Ring Style 3', price: 99, image: '6.jpg', extraImages: ['7.jpg', '8.jpg'] },
  { id: 'atr-4', name: 'Anti Tarnish Ring Style 4', price: 99, image: '9.jpg', extraImages: ['10.jpg', '11.jpg'] },
  { id: 'atr-5', name: 'Anti Tarnish Ring Style 5', price: 99, image: '12.jpg', extraImages: ['13.jpg', '14.jpg'] },
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
  { id: 'ke-1', name: 'Korean Earrings Style 1', price: 45, image: '1.jpg', extraImages: ['21.jpg'] },
  { id: 'ke-2', name: 'Korean Earrings Style 2', price: 45, image: '2.jpg', extraImages: ['3.jpg'] },
  { id: 'ke-3', name: 'Korean Earrings Style 3', price: 45, image: '4.jpg', extraImages: ['5.jpg', '23.jpg'] },
  { id: 'ke-4', name: 'Korean Earrings Style 4', price: 45, image: '6.jpg', extraImages: ['7.jpg', '25.jpg'] },
  { id: 'ke-5', name: 'Korean Earrings Style 5', price: 45, image: '8.jpg', extraImages: ['24.jpg'] },
  { id: 'ke-6', name: 'Korean Earrings Style 6', price: 45, image: '9.jpg', extraImages: ['10.jpg', '22.jpg'] },
  { id: 'ke-7', name: 'Korean Earrings Style 7', price: 45, image: '12.jpg', extraImages: ['11.jpg'] },
  { id: 'ke-8', name: 'Korean Earrings Style 8', price: 45, image: '13.jpg', extraImages: ['14.jpg'] },
  { id: 'ke-9', name: 'Korean Earrings Style 9', price: 45, image: '16.jpg', extraImages: ['15.jpg','17.jpg','26.jpg'] },
  { id: 'ke-10', name: 'Korean Earrings Style 10', price: 45, image: '18.jpg', extraImages: ['19.jpg'] },
  { id: 'ke-11', name: 'Korean Earrings Style 11', price: 45, image: '20.jpg' },
  { id: 'ke-12', name: 'Korean Earrings Style 12', price: 45, image: '27.jpg', extraImages: ['28.jpg'] },
  { id: 'ke-13', name: 'Korean Earrings Style 13', price: 45, image: '29.jpg', extraImages: ['30.jpg'] },
  { id: 'ke-14', name: 'Korean Earrings Style 14', price: 45, image: '31.jpg', extraImages: ['32.jpg','33.jpg'] },
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
  email: 'harini3054@gmail.com',
  instagram: '@aurabeads_.charm'
};
