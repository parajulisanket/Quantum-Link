export type Game = {
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
};

export const games = [
  {
    slug: "growling-lion",
    title: "Growling Lion",
    image: "/images/lion.png",
    shortDescription:
      "A powerful lion-themed slot experience with bold visuals.",
    description:
      "Growling Lion is a premium casino game experience designed with cinematic visuals, sharp game effects, and an immersive interface. It is built to deliver exciting gameplay, smooth performance, and a rich theme that keeps players engaged.",
    features: [
      "High-quality themed visuals",
      "Smooth animation and transitions",
      "Immersive slot-style gameplay",
      "Optimized for performance",
      "Responsive game layout",
    ],
  },
  {
    slug: "roaring-tiger",
    title: "Roaring Tiger",
    image: "/images/tiger.png",
    shortDescription:
      "A fierce and energetic game experience inspired by the tiger.",
    description:
      "Roaring Tiger brings a dynamic and energetic atmosphere with strong visual depth and exciting game presentation. The design focuses on player engagement, premium artwork, and fast interactive feedback.",
    features: [
      "Tiger-inspired premium theme",
      "Fast and responsive gameplay",
      "Advanced visual effects",
      "Strong engagement design",
      "Cross-device compatibility",
    ],
  },
  {
    slug: "running-buffalo",
    title: "Running Buffalo",
    image: "/images/bison.png",
    shortDescription:
      "A bold wildlife-inspired title with a rugged game identity.",
    description:
      "Running Buffalo delivers a unique gameplay experience with a strong wild theme, detailed visuals, and exciting presentation. It is designed for immersive entertainment and smooth user interaction.",
    features: [
      "Wild-themed game concept",
      "Rich textures and artwork",
      "Optimized user experience",
      "Smooth transitions",
      "Premium gameplay design",
    ],
  },
  {
    slug: "jin-yu-man-tang",
    title: "Jin Yu Man Tang",
    image: "/images/four.png",
    shortDescription:
      "A culturally inspired title with elegant design and rich visuals.",
    description:
      "Jin Yu Man Tang combines elegant visual storytelling with a luxurious game atmosphere. It is designed to provide a polished user experience with refined details and engaging presentation.",
    features: [
      "Elegant themed interface",
      "Premium art direction",
      "Detailed textures and visuals",
      "Smooth interaction flow",
      "Immersive gaming experience",
    ],
  },
  {
    slug: "zhao-cai-jin-bao",
    title: "Zhao Cai Jin Bao",
    image: "/images/five.png",
    shortDescription:
      "A rich, premium-themed casino game with immersive presentation.",
    description:
      "Zhao Cai Jin Bao is built to offer a refined and high-end slot game experience. With visually rich styling, performance-focused implementation, and engaging game presentation, it fits perfectly into a modern gaming platform.",
    features: [
      "Luxury-inspired theme",
      "High-end game presentation",
      "Optimized performance",
      "Responsive layout",
      "Player-focused experience",
    ],
  },
] satisfies Game[];
