const asset = (fileName) => `/assets/${fileName}`;

export const navigationItems = [
  {
    label: 'New Launches', to: '/#new-launches', hasDropdown: true,
    dropdown: {
      columns: [
        { title: 'Shoes', links: ['Running Shoes', 'Sports Shoes', 'Casual Shoes', 'Formal Shoes', 'Sneakers', 'Slip-Ons'] },
        { title: 'Sandals', links: ['Casual Sandals', 'Sports Sandals', 'Flip Flops & Slides'] },
      ]
    }
  },
  {
    label: 'Men', to: '/category/men', hasDropdown: true,
    dropdown: {
      columns: [
        { title: 'Shoes', links: ['Running Shoes', 'Sports Shoes', 'Casual Shoes', 'Slip-On / Casual Moccas', 'Formal Shoes', 'Flat Shoes'] },
        { title: 'Sandals', links: ['Walking Shoes', 'Running Shoes', 'Evening Shoes', 'Training Shoes'] },
      ]
    }
  },
  {
    label: 'Women', to: '/category/women', hasDropdown: true,
    dropdown: {
      columns: [
        { title: 'New & Trending', links: ['Kolhapuri Collection', 'Athleisure', 'Comfort Floaters', 'Eco Sandals'] },
        { title: 'Brands', links: ['Campus', 'Lancer', 'Bata', 'Relaxo', 'Sparx'] },
      ]
    }
  },
  {
    label: 'Kids', to: '/category/kids', hasDropdown: true,
    dropdown: {
      columns: [
        { title: 'Boys', links: ['Sports Shoes', 'School Shoes', 'Sandals'] },
        { title: 'Girls', links: ['Sports Shoes', 'School Shoes', 'Sandals'] },
      ]
    }
  },
  { label: 'Favorites Products', to: '/wishlist' },
  { label: 'Hero Collection', to: '/#hero-collection' },
];

export const heroSlides = [
  { id: 'sports-shoes', image: asset('hero-sports-shoes.jpg'), alt: 'New arrivals sports shoes banner', title: 'New Arrivals', subtitle: 'Sports Shoes', price: 'Starting at ₹649' },
  { id: 'hero-slide-1', image: asset('hero-slide-1.jpg'), alt: 'Konvo footwear hero banner', title: 'Premium', subtitle: 'Collection', price: 'Starting at ₹999' },
  { id: 'hero-slide-2', image: asset('hero-slide-2.jpg'), alt: 'Konvo shoe collection hero banner', title: 'Trending', subtitle: 'Styles', price: 'Starting at ₹799' },
];

export const heroProducts = [
  { id: 'hero-black-runner', name: "White Men's Running Shoes", sku: 'ONG97008', category: 'Running Shoes', image: asset('product-black-runner.jpg'), price: 1399, mrp: 2499, rating: 4.8, reviews: 66, sizes: [6, 7, 8, 9, 10, 11, 12], moq: 10 },
  { id: 'hero-white-orange-runner', name: "White Men's Running Shoes", sku: 'ONG97008', category: 'Running Shoes', image: asset('product-white-orange-runner.jpg'), price: 1399, mrp: 2499, rating: 4.8, reviews: 66, isHighlighted: true, sizes: [6, 7, 8, 9, 10, 11, 12], moq: 10 },
  { id: 'hero-navy-gents', name: "White Men's Running Shoes", sku: 'ONG97008', category: 'Running Shoes', image: asset('product-navy-gents.jpg'), price: 1399, mrp: 2499, rating: 4.8, reviews: 66, sizes: [6, 7, 8, 9, 10, 11, 12], moq: 10 },
  { id: 'hero-camo-runner', name: "White Men's Running Shoes", sku: 'ONG97008', category: 'Running Shoes', image: asset('product-camo-runner.jpg'), price: 1399, mrp: 2499, rating: 4.8, reviews: 66, sizes: [6, 7, 8, 9, 10, 11, 12], moq: 10 },
];

export const categories = [
  { id: 'casual', name: 'Casual Shoes', image: asset('category-casual.png') },
  { id: 'formal', name: 'Formal Shoes', image: asset('category-formal.png'), isHighlighted: true },
  { id: 'loafer', name: 'Loafer Shoes', image: asset('category-loafer.png') },
  { id: 'sneaker', name: 'Sneaker Shoes', image: asset('category-sneaker.png') },
  { id: 'boots', name: 'Boots Shoes', image: asset('category-boot.png') },
  { id: 'sandal', name: 'Sandal Shoes', image: asset('category-sandal.png') },
  { id: 'slipper', name: 'Slipper Shoes', image: asset('category-slipper.png') },
  { id: 'sports', name: 'Konvo Sports Shoes', image: asset('category-sports.jpg') },
];

export const newLaunches = [
  { id: 'launch-blue-runner', name: "White Men's Running Shoes", sku: 'ONG97008', category: 'New Launches', image: asset('launch-blue-runner.jpg'), price: 1399, mrp: 2499, rating: 4.8, reviews: 66, sizes: [6, 7, 8, 9, 10, 11, 12], moq: 10 },
  { id: 'launch-black-gents', name: "White Men's Running Shoes", sku: 'ONG97008', category: 'New Launches', image: asset('launch-black-gents.jpg'), price: 1399, mrp: 2499, rating: 4.8, reviews: 66, isHighlighted: true, sizes: [6, 7, 8, 9, 10, 11, 12], moq: 10 },
  { id: 'launch-pink-runner', name: "White Men's Running Shoes", sku: 'ONG97008', category: 'New Launches', image: asset('launch-pink-runner.jpg'), price: 1399, mrp: 2499, rating: 4.8, reviews: 66, sizes: [6, 7, 8, 9, 10, 11, 12], moq: 10 },
  { id: 'launch-kids-runner', name: "White Men's Running Shoes", sku: 'ONG97008', category: 'New Launches', image: asset('launch-kids-runner.jpg'), price: 1399, mrp: 2499, rating: 4.8, reviews: 66, sizes: [6, 7, 8, 9, 10, 11, 12], moq: 10 },
];

export const allProducts = [...heroProducts, ...newLaunches];

export const menSportProducts = allProducts.map((p, i) => ({
  ...p,
  id: `men-sport-${i}`,
  name: `Men's Sports Shoes - ONG97${String(i).padStart(2, '0')}8`,
  sku: `ONG97${String(i).padStart(2, '0')}8`,
  category: "Men's Sports Shoes",
}));

export const collectionTiles = [
  { id: 'men', title: 'Men Collection', subtitle: 'Reserved for special occasions', image: asset('collection-men.jpg') },
  { id: 'women', title: 'Women Collection', subtitle: 'From beach to party: Perfect styles for every occasion', image: asset('collection-women.jpg') },
  { id: 'trending', title: 'Trending Collection', subtitle: 'Browse our Top Trending: the hottest picks loved by all', image: asset('collection-trending.jpg') },
];

export const testimonials = [
  { id: 'centurian', quote: '"Fitting is as expected Size"', body: 'Centurian Shoes has been sourcing from Konvo for 3 years. The quality of each batch has been consistent, and the delivery is always on time. Our customers are happy, which means our business grows.', reviewer: 'Nitesh Kumar', location: 'New Delhi, India', shop: 'Centurian Shoes', shopLocation: 'New Delhi' },
  { id: 'trends', quote: '"Fitting is as expected Size"', body: 'The B2B portal makes it easy to place bulk orders. The MOQ is reasonable, and the range of styles covers everything from casual to formal. Great for store owners like us.', reviewer: 'Nitesh Kumar', location: 'New Delhi, India', shop: 'Trends Footwear', shopLocation: 'New Delhi' },
  { id: 'divya', quote: '"Fitting is as expected Size"', body: 'Konvo Shoes has transformed how we source our inventory. The quality is unmatched at this price point, and the B2B support team is incredibly responsive to our needs.', reviewer: 'Nitesh Kumar', location: 'New Delhi, India', shop: 'Divya Shoes Palace', shopLocation: 'New Delhi' },
];

export const benefits = [
  { id: 'shipping', title: 'Free shipping', description: 'Free shipping on orders over Rs. 2999.00', icon: 'package' },
  { id: 'returns', title: 'Free Returns', description: '7-days free return policy', icon: 'returns' },
  { id: 'payments', title: 'Secured Payments', description: 'We accept all major upi and credit cards', icon: 'payment' },
  { id: 'service', title: 'Customer Service', description: 'Top notch customer service', icon: 'support' },
];

export const footerColumns = [
  { title: "What's In Store", links: ['New Launches', 'Men', 'Women', 'Kids', 'Track Order'] },
  { title: 'Policies', links: ['Return/Exchange Policy', 'Shipping Information', 'Return & Claim Policy', 'Shipping Policy', 'Privacy Policy', 'Terms & Conditions'] },
  { title: 'Company and Support', links: ['About Us', 'Contact Us', 'Chat with us WhatsApp', "FAQ's", 'Contact Us', 'Press', 'Blogs'] },
];

export const popularSearches = [
  "Men's footwear | Men's Running Shoes | Men's Walking Shoes | Men's Casual Shoes | Men's Sports shoes | Men's Walking Shoes | Men's Casual Shoes | Men's Sports shoes | Men's Sneakers | Men's Casual Sandals | Men's Sports Sandals | Men's Flip Flops & Slides | Men's Flip Flops | Men's Slides",
  "Women's Footwear | Women's Running Shoes | Women's Casual Shoes | Women's Sports Shoes | Women's Sneakers Shoes | Women's Casual Sandal | Women's Sports Sandal | Women's Flip Flops & Slides | Women's Flip Flops | Women's Slides",
  "Kid's footwear | Kid's Running Shoes | Kid's Walking Shoes | Kid's Casual Shoes | Kid's School Shoes | Kid's Sports Shoes | Kid's Sandals & Floaters | Kid's Casual Sandals | Kid's Sports Sandals | Kid's Flip Flops & Slides | Kid's Flip Flops",
];

export const filterOptions = {
  category: ['Sneakers', 'Sports Shoes', 'Slip-On Casual Moccas', 'Formal Shoes', 'Flat Shoes'],
  typeOfShoes: ['Walking Shoes', 'Running Shoes', 'Evening Shoes', 'Training Shoes'],
  gender: ['Male', 'Female'],
  size: [6, 7, 8, 9, 10, 11, 12],
  colour: ['Black', 'Blue', 'Brown', 'Green', 'Grey', 'Orange', 'Red', 'White', 'Yellow'],
};

export const paymentMethods = [
  { id: 'recommended', label: 'Recommended', icon: '⭐' },
  { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
  { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
  { id: 'upi', label: 'UPI (Pay via any App)', icon: '📱' },
  { id: 'cod', label: 'Cash On Delivery (Cash/UPI)', icon: '💵' },
  { id: 'wallets', label: 'Wallets', icon: '👛' },
  { id: 'paylater', label: 'Pay Later', icon: '🕐' },
  { id: 'emi', label: 'EMI', icon: '📋' },
];

export const bankOptions = [
  { id: 'axis', name: 'Axis Bank' },
  { id: 'hdfc', name: 'HDFC Bank' },
  { id: 'icici', name: 'ICICI Bank' },
  { id: 'sbi', name: 'SBI (State Bank of India)' },
  { id: 'pnb', name: 'PNB (Punjab National Bank)' },
];

export const menFootwearCategories = [
  { name: 'Basic Shoes', image: asset('category-casual.png') },
  { name: 'Sneakers Shoes', image: asset('category-sneaker.png') },
  { name: 'Formal & Office Shoes', image: asset('category-formal.png') },
  { name: 'Trekking & Farm Shoes', image: asset('category-boot.png') },
  { name: 'Sandals Shoes', image: asset('category-sandal.png') },
  { name: 'Floater Shoes', image: asset('category-slipper.png') },
  { name: 'Loafer Shoes', image: asset('category-loafer.png') },
  { name: 'Konvo Sports Supplies', image: asset('category-sports.jpg') },
];

export const womenFootwearCategories = [
  { name: 'Daily Wear Bellies', image: asset('category-casual.png') },
  { name: 'Clogs', image: asset('category-slipper.png') },
  { name: 'Sports Shoes', image: asset('category-sneaker.png') },
  { name: 'Flats', image: asset('category-loafer.png') },
];

export const kidsFootwearCategories = [
  { name: 'Boys', image: asset('category-sneaker.png') },
  { name: 'Girls', image: asset('category-casual.png') },
];

export const stateOptions = [
  'Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'Gujarat', 'Rajasthan',
  'West Bengal', 'Madhya Pradesh', 'Andhra Pradesh', 'Telangana', 'Kerala', 'Bihar',
];

export const districtOptions = [
  'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Central Delhi',
  'New Delhi', 'North East Delhi', 'North West Delhi', 'South East Delhi', 'South West Delhi',
];
