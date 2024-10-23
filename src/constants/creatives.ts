export interface MetaCreativeCardProps {
  creative: {
    caption: string;
    creative: string;
    headline: string;
    subheadline: string;
    cta: string;
  };
  className?: string;
  brand?: {
    brand_name?: string;
    brand_logo?: string;
  };
}

export const metaCreatives: MetaCreativeCardProps[] = [
  {
    creative: {
      caption:
        "Step up your game with the timeless Nike Air Force 1. Classic design meets all-day comfort, giving you the perfect blend of street style and performance Geyours now and make every step count! #AirForcel #NikeStyle",
      creative: "/creatives/Nike-Air-force-1.png",
      headline: "Classic Comfort",
      subheadline: "It's the shoe for occasion",
      cta: "buy_more",
    },
    brand: {
      brand_name: "Nike",
      brand_logo: "/creatives/Nike-Logo.png",
    },
  },
  {
    creative: {
      caption:
        "Elevate your look with the legendary Nike Air Force 1 Built for comfort, designed for style-this sneaker has stood the test of time. Available now in fresh colors. Don't miss out! #IconicAFI #NikeSneakers",
      creative: "/creatives/Nike-Air-force-2.png",
      headline: "Legendary in every step",
      subheadline: "Available now in fresh colors",
      cta: "buy_now",
    },
    brand: {
      brand_name: "Nike",
      brand_logo: "/creatives/Nike-Logo.png",
    },
  },
  {
    creative: {
      caption:
        "From courts to the streets, the Nike Air Force 1 has become a fashion icon Combining comfort, durability. and classic style, it's the shoe for any occasion. Get yours today! Would you like a more specific focus on a certain style or color of the shoes?",
      creative: "/creatives/Nike-Air-force-3.jpg",
      headline: "All-Day Comfort",
      subheadline: "Get yours today",
      cta: "buy_up",
    },
    brand: {
      brand_name: "Nike",
      brand_logo: "/creatives/Nike-Logo.png",
    },
  },
];

export interface GoogleCreativeCardProps {
  headline: string;
  url: string;
  description: string;
  keywords: string[];
  className?: string;
}

export const googleCreatives: GoogleCreativeCardProps[] = [
  {
    headline: "Winterized Air Force 1",
    url: "www.nike.com",
    description: "Keep your feet warm and dry with the iconic Air Force 1, now winterized.",
    keywords: ["nike air force 1 winterized", "air force 1 winter", "nike winter shoes", "winter sneakers"],
  },
  {
    headline: "Classic Winter Comfort",
    url: "www.nike.com",
    description: "Classic style meets modern comfort in our all-weather Air Force 1 footwear.",
    keywords: ["nike air force 1 winter", "men's winter sneakers", "women's winter sneakers", "air force 1 lv8 winter"],
  },
  {
    headline: "Stay Warm, Stay Stylish",
    url: "www.nike.com",
    description: "Stay stylish and comfortable all winter long with our durable, winterized sneakers.",
    keywords: ["nike winter shoes", "air force 1 winter", "men's winter sneakers", "women's winter sneakers"],
  },
  {
    headline: "All-Weather Air Force 1",
    url: "www.nike.com",
    description: "Upgrade your winter wardrobe with the iconic Air Force 1, now with winter-ready features.",
    keywords: ["air force 1 lv8 winter", "nike air force 1 winterized", "winter sneakers", "nike winter shoes"],
  },
  {
    headline: "Durable Winter Sneaker",
    url: "www.nike.com",
    description: "Stay stylish and comfortable all winter long with our durable, winterized sneakers.",
    keywords: ["men's winter sneakers", "women's winter sneakers", "nike air force 1 winterized", "air force 1 winter"],
  },
  {
    headline: "Iconic Winter Style",
    url: "www.nike.com",
    description: "Upgrade your winter wardrobe with the iconic Air Force 1, now with winter-ready features.",
    keywords: ["nike air force 1 winterized", "air force 1 lv8 winter", "winter sneakers", "nike winter shoes"],
  },
  {
    headline: "Walk in Comfort All Winter",
    url: "www.nike.com",
    description: "Stay stylish and comfortable all winter long with our durable, winterized sneakers.",
    keywords: ["air force 1 winter", "men's winter sneakers", "nike winter shoes", "women's winter sneakers"],
  },
  {
    headline: "Conquer Winter in Style",
    url: "www.nike.com",
    description: "Keep your feet warm and dry with the iconic Air Force 1, now winterized.",
    keywords: ["nike winter shoes", "winter sneakers", "nike air force 1 winter", "air force 1 lv8 winter"],
  },
  {
    headline: "Warmth Meets Style",
    url: "www.nike.com",
    description: "Classic style meets modern comfort in our all-weather Air Force 1 footwear.",
    keywords: ["nike air force 1 winterized", "nike winter shoes", "winter sneakers", "air force 1 winter"],
  },
  {
    headline: "Winterproof Your Feet",
    url: "www.nike.com",
    description: "Stay stylish and comfortable all winter long with our durable, winterized sneakers.",
    keywords: ["winter sneakers", "nike air force 1 winterized", "air force 1 lv8 winter", "men's winter sneakers"],
  },
  {
    headline: "Stay Warm This Winter | Nike Air Force 1 Winter",
    url: "www.nike.com",
    description: "Keep your feet warm and dry with the iconic Air Force 1, now winterized.",
    keywords: ["nike air force 1 winter", "air force 1 winterized", "winter sneakers", "nike winter shoes"],
  },
  {
    headline: "Winter-Ready Style | Nike Air Force 1 LV8",
    url: "www.nike.com",
    description: "Upgrade your winter wardrobe with the iconic Air Force 1, now with winter-ready features.",
    keywords: ["air force 1 lv8 winter", "nike air force 1 winter", "winter sneakers", "men's winter sneakers"],
  },
  {
    headline: "Durable Winter Sneaker | Nike Air Force 1",
    url: "www.nike.com",
    description: "Stay stylish and comfortable all winter long with our durable, winterized sneakers.",
    keywords: ["nike air force 1 winter", "air force 1 lv8 winter", "nike winter shoes", "women's winter sneakers"],
  },
  {
    headline: "Classic Winter Comfort | Nike Air",
    url: "www.nike.com",
    description: "Classic style meets modern comfort in our all-weather Air Force 1 footwear.",
    keywords: ["nike air force 1 winterized", "nike winter shoes", "winter sneakers", "men's winter sneakers"],
  },
  {
    headline: "All-Weather Traction | Nike Air Force 1",
    url: "www.nike.com",
    description: "Upgrade your winter wardrobe with the iconic Air Force 1, now with winter-ready features.",
    keywords: ["nike winter shoes", "winter sneakers", "air force 1 winterized", "air force 1 lv8 winter"],
  },
];

export interface MetaDiscoverAdsCardProps {
  profile_picture: string;
  name: string;
  media: string[];
  content: {
    url: string;
    cta: string;
    body: string;
  };
  className?: string;
}

export const metaDiscoverAds: MetaDiscoverAdsCardProps[] = [
  {
    profile_picture: "/creatives/adidas-logo.jpg",
    name: "adidas Originals",
    media: ["/creatives/adidas-shoe-1.jpg"],
    content: {
      url: "https://www.adidas.com",
      cta: "shop_now",
      body: "SUPERSTAR ORIGINALS Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court",
    },
  },
  {
    profile_picture: "/creatives/adidas-logo.jpg",
    name: "adidas Originals",
    media: ["/creatives/adidas-shoe-3.jpg"],
    content: {
      url: "https://www.adidas.com",
      cta: "shop_now",
      body: "Don't miss the Samba wave Iconic vibes with adidas Samba. Your collection is not complete without it.",
    },
  },
  {
    profile_picture: "/creatives/adidas-logo.jpg",
    name: "adidas Originals",
    media: ["/creatives/adidas-shoe-2.jpg"],
    content: {
      url: "https://www.adidas.com",
      cta: "shop_now",
      body: "Step into the Festival Vibes! Adidas Sports Shoes on Sale for the First Time!",
    },
  },
];

export interface GoogleDiscoverAdsCardProps {
  profile_picture: string;
  name: string;
  headline: string;
  url: string;
  description: string;
  media?: string;
  rating?: number;
  no_of_reviews?: number;
  keywords?: string[];
  className?: string;
}

export const googleDiscoverAds: GoogleDiscoverAdsCardProps[] = [
  {
    profile_picture: "/creatives/adidas-logo.jpg",
    name: "adidas.com",
    headline: "adidas®️ Black Shoes - Up To 50% Off Select Products",
    url: "https://www.adidas.com/shoes/black",
    description:
      "Sign Up For adiClub To Get Free Standard Shipping And Start Earning Points On Every Order. Up To 50% Off Rarely On-Sale Products. No Code Needed. Shop The Sale At adidas.com. Maximize Your Workouts",
  },
  {
    profile_picture: "/creatives/adidas-logo.jpg",
    name: "adidas.com",
    headline: "adidas®️ Laceless Soccer Shoes Save 25% | Code OCTOBER",
    url: "https://www.adidas.com/soccer/laceless",
    description:
      "Sign Up For adiClub To Get Free Standard Shipping And Start Earning Points On Every Order. Up To 50% Off Rarely On-Sale Products. No Code Needed. Shop The Sale At adidas.com. Maximize Your Workouts",
    media: "/creatives/adidas-shoe-1.jpg",
  },
  {
    profile_picture: "/creatives/adidas-logo.jpg",
    name: "adidas.com",
    headline: "adidas®️ Men's Samba - Samba Original Shoes",
    url: "https://www.adidas.com/adidas/samba",
    description: "Shop The Iconic Samba On The Official adidas®️ Site. Find Women's, Men's, and Kid's Styles. Join adiClub For Free...",
    media: "/creatives/adidas-shoe-3.jpg",
    rating: 4.7,
    no_of_reviews: 105,
    keywords: ["Men' Shoes", "Men's Original", "Shop Sale", "Women's Shoes", "Buy Now"],
  },
];
