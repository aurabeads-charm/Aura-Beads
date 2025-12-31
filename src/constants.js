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

// Anti Tarnish Bracelet (14 products)
// To change price: edit the "price" value for each product
export const antiTarnishBraceletProducts = [
  { id: 'atb-1', name: 'Anti Tarnish Bracelet Style 1', price: 150, image: '1.jpg' },
  { id: 'atb-2', name: 'Anti Tarnish Bracelet Style 2', price: 150, image: '2.jpg' },
  { id: 'atb-3', name: 'Anti Tarnish Bracelet Style 3', price: 150, image: '3.jpg' },
  { id: 'atb-4', name: 'Anti Tarnish Bracelet Style 4', price: 169, image: '4.jpg' },
  { id: 'atb-5', name: 'Anti Tarnish Bracelet Style 5', price: 150, image: '5.jpg' },
  { id: 'atb-6', name: 'Anti Tarnish Bracelet Style 6', price: 150, image: '6.jpg' },
  { id: 'atb-7', name: 'Anti Tarnish Bracelet Style 7', price: 99, image: '7.jpg' },
  { id: 'atb-8', name: 'Anti Tarnish Bracelet Style 8', price: 150, image: '8.jpg' },
  { id: 'atb-9', name: 'Anti Tarnish Bracelet Style 9', price: 99, image: '9.jpg' },
  { id: 'atb-10', name: 'Anti Tarnish Bracelet Style 10', price: 169, image: '10.jpg' },
  { id: 'atb-11', name: 'Anti Tarnish Bracelet Style 11', price: 99, image: '11.jpg' },
  { id: 'atb-12', name: 'Anti Tarnish Bracelet Style 12', price: 169, image: '12.jpg' },
  { id: 'atb-13', name: 'Anti Tarnish Bracelet Style 13', price: 150, image: '13.jpg' },
  { id: 'atb-14', name: 'Anti Tarnish Bracelet Style 14', price: 150, image: '14.jpg' },
].map(p => ({
  ...p,
  category: 'Anti Tarnish Bracelet',
  categoryId: 'anti-tarnish-bracelet',
  description: 'Premium anti-tarnish bracelet that maintains its shine forever.',
  longDescription: 'This exquisite anti-tarnish bracelet is crafted with premium materials that resist oxidation and maintain their beautiful shine for years.',
  images: [getImagePath(`images/products/anti-tarnish-bracelet/${p.image}`)],
  featured: p.id === 'atb-1' || p.id === 'atb-2'
}));

// Anti Tarnish Earrings (15 products)
export const antiTarnishEarringsProducts = [
  { id: 'ate-1', name: 'Anti Tarnish Earrings Style 1', price: 99, image: '1.jpg' },
  { id: 'ate-2', name: 'Anti Tarnish Earrings Style 2', price: 99, image: '2.jpg' },
  { id: 'ate-3', name: 'Anti Tarnish Earrings Style 3', price: 99, image: '3.jpg' },
  { id: 'ate-4', name: 'Anti Tarnish Earrings Style 4', price: 99, image: '4.jpg' },
  { id: 'ate-5', name: 'Anti Tarnish Earrings Style 5', price: 99, image: '5.jpg' },
  { id: 'ate-6', name: 'Anti Tarnish Earrings Style 6', price: 99, image: '6.jpg' },
  { id: 'ate-7', name: 'Anti Tarnish Earrings Style 7', price: 99, image: '7.jpg' },
  { id: 'ate-8', name: 'Anti Tarnish Earrings Style 8', price: 99, image: '8.jpg' },
  { id: 'ate-9', name: 'Anti Tarnish Earrings Style 9', price: 99, image: '9.jpg' },
  { id: 'ate-10', name: 'Anti Tarnish Earrings Style 10', price: 99, image: '10.jpg' },
  { id: 'ate-11', name: 'Anti Tarnish Earrings Style 11', price: 99, image: '11.jpg' },
  { id: 'ate-12', name: 'Anti Tarnish Earrings Style 12', price: 99, image: '12.jpg' },
  { id: 'ate-13', name: 'Anti Tarnish Earrings Style 13', price: 99, image: '13.jpg' },
  { id: 'ate-14', name: 'Anti Tarnish Earrings Style 14', price: 99, image: '14.jpg' },
  { id: 'ate-15', name: 'Anti Tarnish Earrings Style 15', price: 99, image: '15.jpg' },
].map(p => ({
  ...p,
  category: 'Anti Tarnish Earrings',
  categoryId: 'anti-tarnish-earrings',
  description: 'Elegant anti-tarnish earrings that stay beautiful always.',
  longDescription: 'These stunning anti-tarnish earrings are designed to complement any outfit. Made with hypoallergenic materials.',
  images: [getImagePath(`images/products/anti-tarnish-earrings/${p.image}`)],
  featured: p.id === 'ate-1' || p.id === 'ate-2'
}));

// Anti Tarnish Necklace (23 products)
export const antiTarnishNecklaceProducts = [
  { id: 'atn-1', name: 'Anti Tarnish Necklace Style 1', price: 199, image: '1.jpg' },
  { id: 'atn-2', name: 'Anti Tarnish Necklace Style 2', price: 199, image: '2.jpg' },
  { id: 'atn-3', name: 'Anti Tarnish Necklace Style 3', price: 199, image: '3.jpg' },
  { id: 'atn-4', name: 'Anti Tarnish Necklace Style 4', price: 199, image: '4.jpg' },
  { id: 'atn-5', name: 'Anti Tarnish Necklace Style 5', price: 199, image: '5.jpg' },
  { id: 'atn-6', name: 'Anti Tarnish Necklace Style 6', price: 199, image: '6.jpg' },
  { id: 'atn-7', name: 'Anti Tarnish Necklace Style 7', price: 199, image: '7.jpg' },
  { id: 'atn-8', name: 'Anti Tarnish Necklace Style 8', price: 199, image: '8.jpg' },
  { id: 'atn-9', name: 'Anti Tarnish Necklace Style 9', price: 199, image: '9.jpg' },
  { id: 'atn-10', name: 'Anti Tarnish Necklace Style 10', price: 199, image: '10.jpg' },
  { id: 'atn-11', name: 'Anti Tarnish Necklace Style 11', price: 199, image: '11.jpg' },
  { id: 'atn-12', name: 'Anti Tarnish Necklace Style 12', price: 199, image: '12.jpg' },
  { id: 'atn-13', name: 'Anti Tarnish Necklace Style 13', price: 199, image: '13.jpg' },
  { id: 'atn-14', name: 'Anti Tarnish Necklace Style 14', price: 199, image: '14.jpg' },
  { id: 'atn-15', name: 'Anti Tarnish Necklace Style 15', price: 199, image: '15.jpg' },
  { id: 'atn-16', name: 'Anti Tarnish Necklace Style 16', price: 199, image: '16.jpg' },
  { id: 'atn-17', name: 'Anti Tarnish Necklace Style 17', price: 199, image: '17.jpg' },
  { id: 'atn-18', name: 'Anti Tarnish Necklace Style 18', price: 199, image: '18.jpg' },
  { id: 'atn-19', name: 'Anti Tarnish Necklace Style 19', price: 199, image: '19.jpg' },
  { id: 'atn-20', name: 'Anti Tarnish Necklace Style 20', price: 199, image: '20.jpg' },
  { id: 'atn-21', name: 'Anti Tarnish Necklace Style 21', price: 199, image: '21.jpg' },
  { id: 'atn-22', name: 'Anti Tarnish Necklace Style 22', price: 199, image: '22.jpg' },
  { id: 'atn-23', name: 'Anti Tarnish Necklace Style 23', price: 199, image: '23.jpg' },
].map(p => ({
  ...p,
  category: 'Anti Tarnish Necklace',
  categoryId: 'anti-tarnish-necklace',
  description: 'Beautiful anti-tarnish necklace that never loses its luster.',
  longDescription: 'This gorgeous anti-tarnish necklace maintains its beautiful shine and resists tarnishing over time.',
  images: [getImagePath(`images/products/anti-tarnish-necklace/${p.image}`)],
  featured: p.id === 'atn-1' || p.id === 'atn-2'
}));

// Anti Tarnish Rings (14 products)
export const antiTarnishRingsProducts = [
  { id: 'atr-1', name: 'Anti Tarnish Ring Style 1', price: 99, image: '1.jpg' },
  { id: 'atr-2', name: 'Anti Tarnish Ring Style 2', price: 99, image: '2.jpg' },
  { id: 'atr-3', name: 'Anti Tarnish Ring Style 3', price: 99, image: '3.jpg' },
  { id: 'atr-4', name: 'Anti Tarnish Ring Style 4', price: 99, image: '4.jpg' },
  { id: 'atr-5', name: 'Anti Tarnish Ring Style 5', price: 99, image: '5.jpg' },
  { id: 'atr-6', name: 'Anti Tarnish Ring Style 6', price: 99, image: '6.jpg' },
  { id: 'atr-7', name: 'Anti Tarnish Ring Style 7', price: 99, image: '7.jpg' },
  { id: 'atr-8', name: 'Anti Tarnish Ring Style 8', price: 99, image: '8.jpg' },
  { id: 'atr-9', name: 'Anti Tarnish Ring Style 9', price: 99, image: '9.jpg' },
  { id: 'atr-10', name: 'Anti Tarnish Ring Style 10', price: 99, image: '10.jpg' },
  { id: 'atr-11', name: 'Anti Tarnish Ring Style 11', price: 99, image: '11.jpg' },
  { id: 'atr-12', name: 'Anti Tarnish Ring Style 12', price: 99, image: '12.jpg' },
  { id: 'atr-13', name: 'Anti Tarnish Ring Style 13', price: 99, image: '13.jpg' },
  { id: 'atr-14', name: 'Anti Tarnish Ring Style 14', price: 99, image: '14.jpg' },
].map(p => ({
  ...p,
  category: 'Anti Tarnish Rings',
  categoryId: 'anti-tarnish-rings',
  description: 'Stunning anti-tarnish ring made with premium metals.',
  longDescription: 'This elegant anti-tarnish ring is crafted with the finest materials to ensure lasting beauty.',
  images: [getImagePath(`images/products/anti-tarnish-rings/${p.image}`)],
  featured: p.id === 'atr-1' || p.id === 'atr-2'
}));

// Beads Bracelet (66 products)
export const beadsBraceletProducts = [
  { id: 'bb-1', name: 'Beads Bracelet Style 1', price: 299, image: '11.jpg' },
  { id: 'bb-2', name: 'Beads Bracelet Style 2', price: 299, image: '2.jpg' },
  { id: 'bb-3', name: 'Beads Bracelet Style 3', price: 299, image: '3.jpg' },
  { id: 'bb-4', name: 'Beads Bracelet Style 4', price: 299, image: '4.jpg' },
  { id: 'bb-5', name: 'Beads Bracelet Style 5', price: 299, image: '5.jpg' },
  { id: 'bb-6', name: 'Beads Bracelet Style 6', price: 299, image: '6.jpg' },
  { id: 'bb-7', name: 'Beads Bracelet Style 7', price: 299, image: '7.jpg' },
  { id: 'bb-8', name: 'Beads Bracelet Style 8', price: 299, image: '8.jpg' },
  { id: 'bb-9', name: 'Beads Bracelet Style 9', price: 299, image: '9.jpg' },
  { id: 'bb-10', name: 'Beads Bracelet Style 10', price: 299, image: '10.jpg' },
  { id: 'bb-11', name: 'Beads Bracelet Style 11', price: 299, image: '11.jpg' },
  { id: 'bb-12', name: 'Beads Bracelet Style 12', price: 299, image: '12.jpg' },
  { id: 'bb-13', name: 'Beads Bracelet Style 13', price: 299, image: '13.jpg' },
  { id: 'bb-14', name: 'Beads Bracelet Style 14', price: 299, image: '14.jpg' },
  { id: 'bb-15', name: 'Beads Bracelet Style 15', price: 299, image: '15.jpg' },
  { id: 'bb-16', name: 'Beads Bracelet Style 16', price: 299, image: '16.jpg' },
  { id: 'bb-17', name: 'Beads Bracelet Style 17', price: 299, image: '17.jpg' },
  { id: 'bb-18', name: 'Beads Bracelet Style 18', price: 299, image: '18.jpg' },
  { id: 'bb-19', name: 'Beads Bracelet Style 19', price: 299, image: '19.jpg' },
  { id: 'bb-20', name: 'Beads Bracelet Style 20', price: 299, image: '20.jpg' },
  { id: 'bb-21', name: 'Beads Bracelet Style 21', price: 299, image: '21.jpg' },
  { id: 'bb-22', name: 'Beads Bracelet Style 22', price: 299, image: '22.jpg' },
  { id: 'bb-23', name: 'Beads Bracelet Style 23', price: 299, image: '23.jpg' },
  { id: 'bb-24', name: 'Beads Bracelet Style 24', price: 299, image: '24.jpg' },
  { id: 'bb-25', name: 'Beads Bracelet Style 25', price: 299, image: '25.jpg' },
  { id: 'bb-26', name: 'Beads Bracelet Style 26', price: 299, image: '26.jpg' },
  { id: 'bb-27', name: 'Beads Bracelet Style 27', price: 299, image: '27.jpg' },
  { id: 'bb-28', name: 'Beads Bracelet Style 28', price: 299, image: '28.jpg' },
  { id: 'bb-29', name: 'Beads Bracelet Style 29', price: 299, image: '29.jpg' },
  { id: 'bb-30', name: 'Beads Bracelet Style 30', price: 299, image: '30.jpg' },
  { id: 'bb-31', name: 'Beads Bracelet Style 31', price: 299, image: '31.jpg' },
  { id: 'bb-32', name: 'Beads Bracelet Style 32', price: 299, image: '32.jpg' },
  { id: 'bb-33', name: 'Beads Bracelet Style 33', price: 299, image: '33.jpg' },
  { id: 'bb-34', name: 'Beads Bracelet Style 34', price: 299, image: '34.jpg' },
  { id: 'bb-35', name: 'Beads Bracelet Style 35', price: 299, image: '35.jpg' },
  { id: 'bb-36', name: 'Beads Bracelet Style 36', price: 299, image: '36.jpg' },
  { id: 'bb-37', name: 'Beads Bracelet Style 37', price: 299, image: '37.jpg' },
  { id: 'bb-38', name: 'Beads Bracelet Style 38', price: 299, image: '38.jpg' },
  { id: 'bb-39', name: 'Beads Bracelet Style 39', price: 299, image: '39.jpg' },
  { id: 'bb-40', name: 'Beads Bracelet Style 40', price: 299, image: '40.jpg' },
  { id: 'bb-41', name: 'Beads Bracelet Style 41', price: 299, image: '41.jpg' },
  { id: 'bb-42', name: 'Beads Bracelet Style 42', price: 299, image: '42.jpg' },
  { id: 'bb-43', name: 'Beads Bracelet Style 43', price: 299, image: '43.jpg' },
  { id: 'bb-44', name: 'Beads Bracelet Style 44', price: 299, image: '44.jpg' },
  { id: 'bb-45', name: 'Beads Bracelet Style 45', price: 299, image: '45.jpg' },
  { id: 'bb-46', name: 'Beads Bracelet Style 46', price: 299, image: '46.jpg' },
  { id: 'bb-47', name: 'Beads Bracelet Style 47', price: 299, image: '47.jpg' },
  { id: 'bb-48', name: 'Beads Bracelet Style 48', price: 299, image: '48.jpg' },
  { id: 'bb-49', name: 'Beads Bracelet Style 49', price: 299, image: '49.jpg' },
  { id: 'bb-50', name: 'Beads Bracelet Style 50', price: 299, image: '50.jpg' },
  { id: 'bb-51', name: 'Beads Bracelet Style 51', price: 299, image: '51.jpg' },
  { id: 'bb-52', name: 'Beads Bracelet Style 52', price: 299, image: '52.jpg' },
  { id: 'bb-53', name: 'Beads Bracelet Style 53', price: 299, image: '53.jpg' },
  { id: 'bb-54', name: 'Beads Bracelet Style 54', price: 299, image: '54.jpg' },
  { id: 'bb-55', name: 'Beads Bracelet Style 55', price: 299, image: '55.jpg' },
  { id: 'bb-56', name: 'Beads Bracelet Style 56', price: 299, image: '56.jpg' },
  { id: 'bb-57', name: 'Beads Bracelet Style 57', price: 299, image: '57.jpg' },
  { id: 'bb-58', name: 'Beads Bracelet Style 58', price: 299, image: '58.jpg' },
  { id: 'bb-59', name: 'Beads Bracelet Style 59', price: 299, image: '59.jpg' },
  { id: 'bb-60', name: 'Beads Bracelet Style 60', price: 299, image: '60.jpg' },
  { id: 'bb-61', name: 'Beads Bracelet Style 61', price: 299, image: '61.jpg' },
  { id: 'bb-62', name: 'Beads Bracelet Style 62', price: 299, image: '62.jpg' },
  { id: 'bb-63', name: 'Beads Bracelet Style 63', price: 299, image: '63.jpg' },
  { id: 'bb-64', name: 'Beads Bracelet Style 64', price: 299, image: '64.jpg' },
  { id: 'bb-65', name: 'Beads Bracelet Style 65', price: 299, image: '65.jpg' },
  { id: 'bb-66', name: 'Beads Bracelet Style 66', price: 299, image: '66.jpg' },
].map(p => ({
  ...p,
  category: 'Beads Bracelet',
  categoryId: 'beads-bracelet',
  description: 'Handcrafted beaded bracelet with unique design.',
  longDescription: 'This beautiful handcrafted beaded bracelet features carefully selected beads strung on a durable elastic cord.',
  images: [getImagePath(`images/products/beads-bracelet/${p.image}`)],
  featured: p.id === 'bb-1' || p.id === 'bb-2'
}));

// Korean Earrings (33 products)
export const koreanEarringsProducts = [
  { id: 'ke-1', name: 'Korean Earrings Style 1', price: 75, image: '1.jpg' },
  { id: 'ke-2', name: 'Korean Earrings Style 2', price: 75, image: '2.jpg' },
  { id: 'ke-3', name: 'Korean Earrings Style 3', price: 75, image: '3.jpg' },
  { id: 'ke-4', name: 'Korean Earrings Style 4', price: 75, image: '4.jpg' },
  { id: 'ke-5', name: 'Korean Earrings Style 5', price: 75, image: '5.jpg' },
  { id: 'ke-6', name: 'Korean Earrings Style 6', price: 75, image: '6.jpg' },
  { id: 'ke-7', name: 'Korean Earrings Style 7', price: 75, image: '7.jpg' },
  { id: 'ke-8', name: 'Korean Earrings Style 8', price: 75, image: '8.jpg' },
  { id: 'ke-9', name: 'Korean Earrings Style 9', price: 75, image: '9.jpg' },
  { id: 'ke-10', name: 'Korean Earrings Style 10', price: 75, image: '10.jpg' },
  { id: 'ke-11', name: 'Korean Earrings Style 11', price: 75, image: '11.jpg' },
  { id: 'ke-12', name: 'Korean Earrings Style 12', price: 75, image: '12.jpg' },
  { id: 'ke-13', name: 'Korean Earrings Style 13', price: 75, image: '13.jpg' },
  { id: 'ke-14', name: 'Korean Earrings Style 14', price: 75, image: '14.jpg' },
  { id: 'ke-15', name: 'Korean Earrings Style 15', price: 75, image: '15.jpg' },
  { id: 'ke-16', name: 'Korean Earrings Style 16', price: 75, image: '16.jpg' },
  { id: 'ke-17', name: 'Korean Earrings Style 17', price: 75, image: '17.jpg' },
  { id: 'ke-18', name: 'Korean Earrings Style 18', price: 75, image: '18.jpg' },
  { id: 'ke-19', name: 'Korean Earrings Style 19', price: 75, image: '19.jpg' },
  { id: 'ke-20', name: 'Korean Earrings Style 20', price: 75, image: '20.jpg' },
  { id: 'ke-21', name: 'Korean Earrings Style 21', price: 75, image: '21.jpg' },
  { id: 'ke-22', name: 'Korean Earrings Style 22', price: 75, image: '22.jpg' },
  { id: 'ke-23', name: 'Korean Earrings Style 23', price: 75, image: '23.jpg' },
  { id: 'ke-24', name: 'Korean Earrings Style 24', price: 75, image: '24.jpg' },
  { id: 'ke-25', name: 'Korean Earrings Style 25', price: 75, image: '25.jpg' },
  { id: 'ke-26', name: 'Korean Earrings Style 26', price: 75, image: '26.jpg' },
  { id: 'ke-27', name: 'Korean Earrings Style 27', price: 75, image: '27.jpg' },
  { id: 'ke-28', name: 'Korean Earrings Style 28', price: 75, image: '28.jpg' },
  { id: 'ke-29', name: 'Korean Earrings Style 29', price: 75, image: '29.jpg' },
  { id: 'ke-30', name: 'Korean Earrings Style 30', price: 75, image: '30.jpg' },
  { id: 'ke-31', name: 'Korean Earrings Style 31', price: 75, image: '31.jpg' },
  { id: 'ke-32', name: 'Korean Earrings Style 32', price: 75, image: '32.jpg' },
  { id: 'ke-33', name: 'Korean Earrings Style 33', price: 75, image: '33.jpg' },
].map(p => ({
  ...p,
  category: 'Korean Earrings',
  categoryId: 'korean-earrings',
  description: 'Trendy Korean-style earrings for a modern look.',
  longDescription: 'These trendy Korean-style earrings bring the latest K-fashion to your jewelry collection.',
  images: [getImagePath(`images/products/korean-earrings/${p.image}`)],
  featured: p.id === 'ke-1' || p.id === 'ke-2'
}));

// Unique Charm Necklace (27 products)
export const uniqueCharmNecklaceProducts = [
  { id: 'ucn-1', name: 'Unique Charm Necklace Style 1', price: 449, image: '1.jpg' },
  { id: 'ucn-2', name: 'Unique Charm Necklace Style 2', price: 449, image: '2.jpg' },
  { id: 'ucn-3', name: 'Unique Charm Necklace Style 3', price: 449, image: '3.jpg' },
  { id: 'ucn-4', name: 'Unique Charm Necklace Style 4', price: 449, image: '4.jpg' },
  { id: 'ucn-5', name: 'Unique Charm Necklace Style 5', price: 449, image: '5.jpg' },
  { id: 'ucn-6', name: 'Unique Charm Necklace Style 6', price: 449, image: '6.jpg' },
  { id: 'ucn-7', name: 'Unique Charm Necklace Style 7', price: 449, image: '7.jpg' },
  { id: 'ucn-8', name: 'Unique Charm Necklace Style 8', price: 449, image: '8.jpg' },
  { id: 'ucn-9', name: 'Unique Charm Necklace Style 9', price: 449, image: '9.jpg' },
  { id: 'ucn-10', name: 'Unique Charm Necklace Style 10', price: 449, image: '10.jpg' },
  { id: 'ucn-11', name: 'Unique Charm Necklace Style 11', price: 449, image: '11.jpg' },
  { id: 'ucn-12', name: 'Unique Charm Necklace Style 12', price: 449, image: '12.jpg' },
  { id: 'ucn-13', name: 'Unique Charm Necklace Style 13', price: 449, image: '13.jpg' },
  { id: 'ucn-14', name: 'Unique Charm Necklace Style 14', price: 449, image: '14.jpg' },
  { id: 'ucn-15', name: 'Unique Charm Necklace Style 15', price: 449, image: '15.jpg' },
  { id: 'ucn-16', name: 'Unique Charm Necklace Style 16', price: 449, image: '16.jpg' },
  { id: 'ucn-17', name: 'Unique Charm Necklace Style 17', price: 449, image: '17.jpg' },
  { id: 'ucn-18', name: 'Unique Charm Necklace Style 18', price: 449, image: '18.jpg' },
  { id: 'ucn-19', name: 'Unique Charm Necklace Style 19', price: 449, image: '19.jpg' },
  { id: 'ucn-20', name: 'Unique Charm Necklace Style 20', price: 449, image: '20.jpg' },
  { id: 'ucn-21', name: 'Unique Charm Necklace Style 21', price: 449, image: '21.jpg' },
  { id: 'ucn-22', name: 'Unique Charm Necklace Style 22', price: 449, image: '22.jpg' },
  { id: 'ucn-23', name: 'Unique Charm Necklace Style 23', price: 449, image: '23.jpg' },
  { id: 'ucn-24', name: 'Unique Charm Necklace Style 24', price: 449, image: '24.jpg' },
  { id: 'ucn-25', name: 'Unique Charm Necklace Style 25', price: 449, image: '25.jpg' },
  { id: 'ucn-26', name: 'Unique Charm Necklace Style 26', price: 449, image: '26.jpg' },
  { id: 'ucn-27', name: 'Unique Charm Necklace Style 27', price: 449, image: '27.jpg' },
].map(p => ({
  ...p,
  category: 'Unique Charm Necklace',
  categoryId: 'unique-charm-necklace',
  description: 'One-of-a-kind charm necklace to express your style.',
  longDescription: 'This unique charm necklace is designed to make a statement with carefully selected charms.',
  images: [getImagePath(`images/products/unique-charm-necklace/${p.image}`)],
  featured: p.id === 'ucn-1' || p.id === 'ucn-2'
}));

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
