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
  className?: string;
}

export const googleCreatives: GoogleCreativeCardProps[] = [
  {
    headline: "Lorem ipsum dolor sit amet - Lorem ipsum dolor sit amet",
    url: "https://www.example.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    headline: "Lorem ipsum dolor sit amet - Lorem ipsum dolor sit amet",
    url: "https://www.example.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    headline: "Lorem ipsum dolor sit amet - Lorem ipsum dolor sit amet",
    url: "https://www.example.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
];

export interface DiscoverAdsCardProps {
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

export const discoverAds: DiscoverAdsCardProps[] = [
  {
    profile_picture:
      "https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg",
    name: "Adidas",
    media: ["/creatives/Nike-Air-force-1.png", "/creatives/Nike-Air-force-1.png", "/creatives/Nike-Air-force-1.png"],
    content: {
      url: "https://www.example.com",
      cta: "learn_more",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
  },
  {
    profile_picture:
      "https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg",
    name: "Adidas",
    media: ["/creatives/Nike-Air-force-1.png", "/creatives/Nike-Air-force-1.png", "/creatives/Nike-Air-force-1.png"],
    content: {
      url: "https://www.example.com",
      cta: "shop_now",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
  },
  {
    profile_picture:
      "https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg",
    name: "Adidas",
    media: ["/creatives/Nike-Air-force-1.png", "/creatives/Nike-Air-force-1.png", "/creatives/Nike-Air-force-1.png"],
    content: {
      url: "https://www.example.com",
      cta: "sign_up",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
  },
];
