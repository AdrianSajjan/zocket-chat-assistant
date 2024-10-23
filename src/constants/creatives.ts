export interface MetaCreativeCardProps {
  creative: {
    caption: string;
    creative: string;
    headline: string;
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
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      creative: "/creatives/creative.jpeg",
      headline: "Lorem ipsum dolor sit amet",
      cta: "learn_more",
    },
    brand: {
      brand_name: "Nike",
      brand_logo: "https://i.pinimg.com/736x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg"
    },
  },
  {
    creative: {
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      creative: "/creatives/creative.jpeg",
      headline: "Lorem ipsum dolor sit amet",
      cta: "shop_now",
    },
    brand: {
      brand_name: "Nike",
      brand_logo: "https://i.pinimg.com/736x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg"
    },
  },
  {
    creative: {
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      creative: "/creatives/creative.jpeg",
      headline: "Lorem ipsum dolor sit amet",
      cta: "sign_up",
    },
    brand: {
      brand_name: "Nike",
      brand_logo: "https://i.pinimg.com/736x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg"
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
    profile_picture: "https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg",
    name: "Adidas",
    media: ["/creatives/creative.jpeg", "/creatives/creative.jpeg", "/creatives/creative.jpeg"],
    content: {
      url: "https://www.example.com",
      cta: "learn_more",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
  },
  {
    profile_picture: "https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg",
    name: "Adidas",
    media: ["/creatives/creative.jpeg", "/creatives/creative.jpeg", "/creatives/creative.jpeg"],
    content: {
      url: "https://www.example.com",
      cta: "shop_now",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
  },
  {
    profile_picture: "https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg",
    name: "Adidas",
    media: ["/creatives/creative.jpeg", "/creatives/creative.jpeg", "/creatives/creative.jpeg"],
    content: {
      url: "https://www.example.com",
      cta: "sign_up",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
  },
];
