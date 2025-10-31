// FeelWellFurniture - Product Data Constants
// This file contains all the product data extracted from the PDF

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price?: string;
  dimensions?: string;
  materials?: string[];
  colors?: string[];
  features?: string[];
  specifications?: {
    size?: string;
    externalDimensions?: string;
    headboard?: string;
    mattress?: string;
    legs?: string;
    binding?: string;
    curve?: string;
    material?: string;
    filler?: string;
    frame?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

// Placeholder data - replace with actual data from PDF
export const categories: Category[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    description: 'Comfortable and stylish living room furniture',
    image: '/placeholder-living-room.jpg',
    products: [
      {
        id: 'sofa-001',
        name: 'Modern Comfort Sofa',
        category: 'Sofas',
        description: 'Premium quality sofa with elegant design and superior comfort',
        image: '/placeholder-sofa.jpg',
        price: '$1,299',
        dimensions: '220cm x 90cm x 85cm',
        materials: ['Premium Fabric', 'Solid Wood Frame'],
        colors: ['Charcoal', 'Navy Blue', 'Beige'],
        features: ['Reversible cushions', 'Easy assembly', '5-year warranty']
      },
      {
        id: 'coffee-table-001',
        name: 'Contemporary Coffee Table',
        category: 'Tables',
        description: 'Sleek coffee table perfect for modern living spaces',
        image: '/placeholder-coffee-table.jpg',
        price: '$599',
        dimensions: '120cm x 60cm x 45cm',
        materials: ['Oak Wood', 'Tempered Glass'],
        colors: ['Natural Oak', 'Dark Walnut'],
        features: ['Scratch-resistant surface', 'Easy to clean', 'Sturdy construction']
      }
    ]
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    description: 'Restful bedroom furniture for a perfect night\'s sleep',
    image: '/placeholder-bedroom.jpg',
    products: [
      {
        id: 'bed-001',
        name: 'Luxury Platform Bed',
        category: 'Beds',
        description: 'Minimalist platform bed with built-in storage',
        image: '/placeholder-bed.jpg',
        price: '$899',
        dimensions: '200cm x 160cm x 30cm',
        materials: ['Solid Pine', 'MDF'],
        colors: ['White', 'Natural Wood', 'Black'],
        features: ['Under-bed storage', 'No box spring needed', 'Easy assembly']
      },
      {
        id: 'dresser-001',
        name: 'Elegant Dresser',
        category: 'Storage',
        description: 'Spacious dresser with smooth-gliding drawers',
        image: '/placeholder-dresser.jpg',
        price: '$749',
        dimensions: '120cm x 45cm x 80cm',
        materials: ['Solid Wood', 'Hardware'],
        colors: ['White', 'Oak', 'Walnut'],
        features: ['6 spacious drawers', 'Soft-close mechanism', 'Mirror included']
      }
    ]
  },
  {
    id: 'dining-room',
    name: 'Dining Room',
    description: 'Elegant dining furniture for memorable meals',
    image: '/placeholder-dining-room.jpg',
    products: [
      {
        id: 'dining-table-001',
        name: 'Farmhouse Dining Table',
        category: 'Tables',
        description: 'Rustic farmhouse table perfect for family gatherings',
        image: '/placeholder-dining-table.jpg',
        price: '$1,199',
        dimensions: '200cm x 100cm x 75cm',
        materials: ['Reclaimed Wood', 'Metal Legs'],
        colors: ['Natural Wood', 'Distressed White'],
        features: ['Seats 8 people', 'Rustic finish', 'Durable construction']
      },
      {
        id: 'dining-chairs-001',
        name: 'Upholstered Dining Chairs',
        category: 'Chairs',
        description: 'Comfortable dining chairs with premium upholstery',
        image: '/placeholder-dining-chairs.jpg',
        price: '$199 each',
        dimensions: '45cm x 50cm x 85cm',
        materials: ['Solid Wood', 'Premium Fabric'],
        colors: ['Navy', 'Gray', 'Cream'],
        features: ['Ergonomic design', 'Stain-resistant fabric', 'Stackable']
      }
    ]
  },
  {
    id: 'office',
    name: 'Office',
    description: 'Productive workspace furniture for home and office',
    image: '/placeholder-office.jpg',
    products: [
      {
        id: 'desk-001',
        name: 'Executive Desk',
        category: 'Desks',
        description: 'Spacious executive desk with built-in cable management',
        image: '/placeholder-desk.jpg',
        price: '$999',
        dimensions: '160cm x 80cm x 75cm',
        materials: ['Solid Wood', 'Metal Frame'],
        colors: ['Oak', 'Walnut', 'White'],
        features: ['Cable management', 'Drawer storage', 'Adjustable height']
      },
      {
        id: 'office-chair-001',
        name: 'Ergonomic Office Chair',
        category: 'Chairs',
        description: 'Professional office chair with lumbar support',
        image: '/placeholder-office-chair.jpg',
        price: '$399',
        dimensions: '60cm x 60cm x 120cm',
        materials: ['Mesh Back', 'Leather Seat'],
        colors: ['Black', 'Gray', 'Brown'],
        features: ['Lumbar support', 'Adjustable height', '360° swivel']
      }
    ]
  }
];

export const companyInfo = {
  name: 'FeelWellFurniture',
  tagline: 'Where Comfort Meets Style',
  description: 'Premium furniture designed for modern living. We create beautiful, functional pieces that transform your space into a home.',
  contact: {
    phone: '949-910-7879',
    email: 'clutchdev.apps@gmail.com',
    address: '9500 Gilman Dr, La Jolla, CA 92093'
  },
  social: {
    instagram: '@feelwellfurniture',
    facebook: 'FeelWellFurniture',
    pinterest: 'FeelWellFurniture'
  }
};

export const features = [
  {
    title: 'Premium Quality',
    description: 'All our furniture is crafted from the finest materials',
    icon: '✨'
  },
  {
    title: 'Free Delivery',
    description: 'Complimentary delivery and setup service',
    icon: '🚚'
  },
  {
    title: '5-Year Warranty',
    description: 'Comprehensive warranty on all products',
    icon: '🛡️'
  },
  {
    title: 'Custom Design',
    description: 'Personalized furniture solutions for your space',
    icon: '🎨'
  }
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York',
    text: 'Absolutely love my new sofa! The quality is outstanding and it looks perfect in my living room.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    location: 'California',
    text: 'The dining table exceeded my expectations. Beautiful craftsmanship and excellent customer service.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    location: 'Texas',
    text: 'Fast delivery and easy assembly. The bedroom set is exactly what I was looking for.',
    rating: 5
  }
];

// Real product data extracted from PDF and translated
export const realProducts: Product[] = [
  {
    id: "CP24-14",
    name: "CP24-14 Bed",
    category: "Beds",
    description: "Premium leather bed with high-resilience foam and Russian larch wood frame",
    image: "/ProductImages/prod1.png",
    price: "$487",
    dimensions: "237×210×109cm",
    materials: ["Top-grain Leather", "High-resilience Foam", "Russian Larch Wood Frame"],
    colors: ["Brown", "Black", "Tan"],
    features: ["1.8×2.0m Specification", "40cm Headboard", "25cm Mattress", "5cm Head/Foot Legs"],
    specifications: {
      size: "1.8×2.0m",
      externalDimensions: "237×210×109cm",
      headboard: "40cm",
      mattress: "25cm",
      legs: "5cm head, 5cm foot",
      binding: "Machine molding side"
    }
  },
  {
    id: "CP24-46",
    name: "CP24-46 Bed",
    category: "Beds", 
    description: "Luxury leather bed with enhanced leg support and iron reinforcement",
    image: "/ProductImages/prod2.png",
    price: "$515",
    dimensions: "245×223×91cm",
    materials: ["Top-grain Leather", "High-resilience Foam", "Russian Larch Wood Frame"],
    colors: ["Brown", "Black", "Tan"],
    features: ["1.8×2.0m Specification", "25cm Mattress", "13cm Head/Foot Legs with Iron Plate"],
    specifications: {
      size: "1.8×2.0m",
      externalDimensions: "245×223×91cm",
      mattress: "25cm",
      legs: "13cm head, 13cm foot with 2cm iron plate",
      binding: "Machine molding side"
    }
  },
  {
    id: "CP25-74",
    name: "CP25-74 Bed",
    category: "Beds",
    description: "Elegant leather bed with extended headboard and side binding",
    image: "/ProductImages/prod3.png",
    price: "$473",
    dimensions: "232×200×118cm",
    materials: ["Top-grain Leather", "High-resilience Foam", "Russian Larch Wood Frame"],
    colors: ["Brown", "Black", "Tan"],
    features: ["1.8×2.0m Specification", "48cm Headboard", "25cm Mattress", "9cm Side Binding"],
    specifications: {
      size: "1.8×2.0m",
      externalDimensions: "232×200×118cm",
      headboard: "48cm",
      mattress: "25cm",
      legs: "5cm head, 13cm foot",
      binding: "9cm 13-side binding"
    }
  },
  {
    id: "CP25-76",
    name: "CP25-76 Bed",
    category: "Beds",
    description: "Compact leather bed with extended foot support and side binding",
    image: "/ProductImages/prod4.png",
    price: "$417",
    dimensions: "227×200×122cm",
    materials: ["Top-grain Leather", "High-resilience Foam", "Russian Larch Wood Frame"],
    colors: ["Brown", "Black", "Tan"],
    features: ["1.8×2.0m Specification", "48cm Headboard", "25cm Mattress", "9cm Side Binding"],
    specifications: {
      size: "1.8×2.0m",
      externalDimensions: "227×200×122cm",
      headboard: "48cm",
      mattress: "25cm",
      legs: "5cm head, 15cm foot",
      binding: "9cm 13-side binding"
    }
  },
  {
    id: "CP25-79",
    name: "CP25-79 Bed",
    category: "Beds",
    description: "Spacious leather bed with curved design and extended foot support",
    image: "/ProductImages/prod5.png",
    price: "$487",
    dimensions: "240×212×109cm",
    materials: ["Top-grain Leather", "High-resilience Foam", "Russian Larch Wood Frame"],
    colors: ["Brown", "Black", "Tan"],
    features: ["1.8×2.0m Specification", "25cm Mattress", "Curved Design", "Extended Foot Support"],
    specifications: {
      size: "1.8×2.0m",
      externalDimensions: "240×212×109cm",
      mattress: "25cm",
      legs: "5cm head, 10cm foot",
      curve: "22.9×9 side"
    }
  },
  {
    id: "A377",
    name: "A377 Sofa",
    category: "Sofas",
    description: "Modern eco-leather sofa with down cotton filling and polished wood frame",
    image: "/ProductImages/prod6.png",
    price: "$501",
    dimensions: "346×145cm",
    materials: ["Eco-leather", "Down Cotton", "High-resilience Foam", "Polished Larch Wood Frame"],
    colors: ["Brown", "Gray", "Beige"],
    features: ["Eco-friendly Materials", "Down Cotton Filling", "Polished Wood Frame", "Metal Sofa Feet"],
    specifications: {
      size: "346×145cm",
      material: "Eco-leather",
      filler: "Down cotton, High-resilience foam",
      frame: "Four-sided polished imported larch wood main frame, Metal sofa feet"
    }
  },
  {
    id: "A337",
    name: "Snail A337 Sofa",
    category: "Sofas",
    description: "Luxurious chenille and corduroy sofa with down filling and premium wood frame",
    image: "/ProductImages/prod7.png",
    price: "$641",
    dimensions: "418×248cm",
    materials: ["Chenille", "Corduroy", "Down", "High-resilience Foam", "Polished Larch Wood Frame"],
    colors: ["Navy", "Gray", "Cream"],
    features: ["Chenille & Corduroy Upholstery", "Down Filling", "Polished Wood Frame", "Metal Sofa Feet"],
    specifications: {
      size: "418×248cm",
      material: "Chenille, Corduroy",
      filler: "Down, High-resilience foam",
      frame: "Four-sided polished imported larch wood main frame, Metal sofa feet"
    }
  },
  {
    id: "A304",
    name: "A304 Sofa",
    category: "Sofas",
    description: "Premium eco-leather sofa with ultra-high density foam and polished wood frame",
    image: "/ProductImages/prod8.png",
    price: "$641",
    dimensions: "450×272cm",
    materials: ["Eco-leather", "Ultra-high Density Foam", "Polished Larch Wood Frame"],
    colors: ["Brown", "Black", "Tan"],
    features: ["Ultra-high Density Foam", "Eco-leather Upholstery", "Polished Wood Frame", "Metal Sofa Feet"],
    specifications: {
      size: "450×272cm",
      material: "Eco-leather",
      filler: "Ultra-high density high-resilience foam",
      frame: "Four-sided polished imported larch wood main frame, Metal sofa feet"
    }
  },
  {
    id: "P266",
    name: "P266 Sofa",
    category: "Sofas",
    description: "Premium leather chair with high-density foam and Russian larch frame",
    image: "/ProductImages/prod9.png",
    price: "$893",
    dimensions: "340×113cm",
    materials: ["Genuine Leather", "High-density Foam", "Russian Larch Wood"],
    colors: ["Brown", "Black", "Tan"],
    features: ["Genuine Leather", "High-density Foam", "Russian Larch Frame", "Ergonomic Design"],
    specifications: {
      size: "340×113cm",
      material: "Genuine leather",
      filler: "High-density foam",
      frame: "Russian larch"
    }
  },
  {
    id: "P242",
    name: "P242 Sofa",
    category: "Sofas",
    description: "Luxury leather chair with dual foam system and Russian larch frame",
    image: "/ProductImages/prod10.png",
    price: "$861",
    dimensions: "384×113cm",
    materials: ["Genuine Leather", "High-density Foam", "High-resilience Foam", "Russian Larch Wood"],
    colors: ["Brown", "Black", "Tan"],
    features: ["Genuine Leather", "Dual Foam System", "Russian Larch Frame", "Premium Comfort"],
    specifications: {
      size: "384×113cm",
      material: "Genuine leather",
      filler: "High-density foam, High-resilience foam",
      frame: "Russian larch"
    }
  }
];
