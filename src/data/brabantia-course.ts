export type Product = {
  name: string;
  image: string;
  description: string;
  benefits: string[];
  sellingTip: string;
  recommendWhen: string[];
  tag?: "HERO" | "NEW";
};

export type Category = {
  id: string;
  title: string;
  intro: string;
  heroProduct: Product;
  products: Product[];
};

export const courseData = {
  title: "Brabantia: Designed for Living",
  subtitle:
    "Premium home solutions that combine smart design, everyday ease, and lasting quality.",
  brandPoints: [
    "Beautiful design for everyday living",
    "Durable products made to last",
    "Smart solutions that make home life easier",
  ],
  rangeTags: [
    { label: "HERO", meaning: "Proven best sellers" },
    { label: "NEW", meaning: "Latest innovations" },
  ],
  categories: [
    {
      id: "kitchen-appliances",
      title: "Kitchen Appliances",
      intro:
        "Stylish countertop appliances designed to make everyday cooking and preparation easier.",
      heroProduct: {
        name: "Brabantia 5L Airfryer Black",
        image: "/images/5l-airfryer-black.jpg",
        description:
          "A compact airfryer designed for easy everyday cooking with less oil.",
        benefits: [
          "Supports quick and convenient cooking",
          "Helps create crisp results with less oil",
          "Modern design suits the countertop",
        ],
        sellingTip:
          "Focus on healthier convenience and easy everyday meal prep.",
        recommendWhen: [
          "The customer wants faster cooking",
          "They are looking for healthier meal options",
          "They want a stylish small appliance",
        ],
        tag: "HERO",
      },
      products: [
        {
          name: "Brabantia 1.7L Stainless Steel Kettle",
          image: "/images/1-7l-stainless-steel-kettle.jpg",
          description:
            "A sleek kettle designed for fast boiling and everyday ease.",
          benefits: [
            "Boils water quickly",
            "Easy to use for daily routines",
            "Stainless steel finish adds a premium look",
          ],
          sellingTip:
            "Highlight speed, everyday convenience, and premium finish.",
          recommendWhen: [
            "The customer needs a dependable everyday kettle",
            "They are upgrading kitchen essentials",
            "They want a modern stainless steel look",
          ],
        },
        {
          name: "Brabantia 2 Slice Toaster Stainless Steel",
          image: "/images/2-slice-toaster-stainless-steel.jpg",
          description:
            "A stylish toaster designed for quick, easy breakfast preparation.",
          benefits: [
            "Makes everyday toasting simple",
            "Compact size suits most kitchens",
            "Stainless steel finish gives a clean modern look",
          ],
          sellingTip:
            "Sell it as an easy breakfast essential with premium styling.",
          recommendWhen: [
            "The customer is upgrading breakfast appliances",
            "They want a compact toaster",
            "They prefer a clean stainless steel finish",
          ],
        },
        {
          name: "Brabantia 1.7L Glass Kettle",
          image: "/images/1-7l-glass-kettle.jpg",
          description:
            "A contemporary glass kettle that combines function with modern design.",
          benefits: [
            "Boils water efficiently",
            "Glass design feels modern and elegant",
            "Easy to integrate into contemporary kitchens",
          ],
          sellingTip: "Emphasise design appeal and premium visual finish.",
          recommendWhen: [
            "The customer wants a modern kitchen aesthetic",
            "They like visible design detail",
            "They are buying for a stylish new home",
          ],
          tag: "NEW",
        },
        {
          name: "Brabantia Table Blender Stainless Steel",
          image: "/images/table-blender-stainless-steel.jpg",
          description:
            "A practical blender for everyday smoothies, sauces, and food preparation.",
          benefits: [
            "Supports versatile kitchen prep",
            "Easy to use for daily blending",
            "Stainless steel finish looks premium",
          ],
          sellingTip: "Position it as a convenient multi-use kitchen helper.",
          recommendWhen: [
            "The customer enjoys smoothies or home prep",
            "They want a versatile appliance",
            "They are building out a small appliance set",
          ],
        },
        {
          name: "Brabantia 1.7L Black & Stainless Steel Kettle",
          image: "/images/1-7l-black-stainless-steel-kettle.jpg",
          description:
            "A modern kettle with a bold black and stainless steel finish.",
          benefits: [
            "Fast and practical for daily use",
            "Premium mixed-finish styling",
            "Easy to pair with other kitchen appliances",
          ],
          sellingTip:
            "Use the finish as a selling point for customers styling their kitchen.",
          recommendWhen: [
            "The customer wants black appliances",
            "They are matching existing kitchen items",
            "They want a more premium visual look",
          ],
        },
        {
          name: "Brabantia 2 Slice Toaster Black & Stainless Steel",
          image: "/images/2-slice-toaster-black-stainless-steel.jpg",
          description:
            "A modern toaster that combines everyday function with bold styling.",
          benefits: [
            "Makes breakfast prep simple",
            "Compact for easy countertop placement",
            "Black and stainless steel finish feels premium",
          ],
          sellingTip:
            "Pair it with the matching kettle for an easy linked sale.",
          recommendWhen: [
            "The customer is buying multiple breakfast appliances",
            "They want a coordinated look",
            "They prefer black and steel finishes",
          ],
        },
        {
          name: "Brabantia Stick Blender Set",
          image: "/images/stick-blender-set.jpg",
          description:
            "A handy blender set designed for convenient everyday food preparation.",
          benefits: [
            "Supports quick blending tasks",
            "Easy to handle and store",
            "Useful for sauces, soups, and smoothies",
          ],
          sellingTip:
            "Position it as a practical solution for fast prep and smaller tasks.",
          recommendWhen: [
            "The customer wants compact convenience",
            "They need a versatile prep tool",
            "They do not want a full-size blender only",
          ],
        },
      ],
    },

    {
      id: "garment-care",
      title: "Garment Care",
      intro:
        "Smart garment care solutions that help keep clothing smooth, neat, and ready to wear.",
      heroProduct: {
        name: "Brabantia Hand Held Garment Steamer",
        image: "/images/hand-held-garment-steamer.jpg",
        description:
          "A quick and convenient solution for smoothing creases and refreshing garments.",
        benefits: [
          "Heats up quickly for easy touch-ups",
          "Helps remove wrinkles with less effort",
          "Ideal for everyday garment care",
        ],
        sellingTip:
          "Position it as a convenient solution for quick clothing refreshes.",
        recommendWhen: [
          "The customer wants quick results",
          "They need a simple everyday garment care solution",
          "They want an easy alternative for light touch-ups",
        ],
        tag: "HERO",
      },
      products: [
        {
          name: "Brabantia  Steam Iron - (Non-Stick)",
          image: "/images/full-function-iron.jpg",
          description:
            "A versatile iron designed to make everyday ironing smoother and more effective.",
          benefits: [
            "Helps remove wrinkles efficiently",
            "Supports a smoother ironing experience",
            "A strong everyday garment care essential",
          ],
          sellingTip:
            "Sell it as a reliable solution for polished everyday results.",
          recommendWhen: [
            "The customer irons regularly",
            "They need a dependable household essential",
            "They want smoother, neater garments",
          ],
          tag: "HERO",
        },
        {
          name: "Brabantia Steam Iron Full Function 2400W",
          image: "/images/steam-iron-full-function-2400w.jpg",
          description:
            "A powerful steam iron designed for efficient wrinkle removal and everyday use.",
          benefits: [
            "Strong steam performance supports quicker ironing",
            "Designed for regular garment care needs",
            "Helps deliver neat, ready-to-wear results",
          ],
          sellingTip:
            "Highlight power and efficiency for customers who iron often.",
          recommendWhen: [
            "The customer has frequent ironing needs",
            "They want stronger performance",
            "They are upgrading from a basic iron",
          ],
          tag: "HERO",
        },
      ],
    },

    {
      id: "home-solutions",
      title: "Home Solutions",
      intro:
        "Designed to improve comfort, convenience, and care throughout the home.",
      heroProduct: {
        name: "Brabantia Cordless Vacuum Cleaner",
        image: "/images/cordless-vacuum-cleaner.jpg",
        description:
          "A cordless cleaning solution designed for easy movement and everyday convenience.",
        benefits: [
          "Cordless design supports easy movement",
          "Makes quick clean-ups more convenient",
          "Helps keep the home neat with less effort",
        ],
        sellingTip: "Focus on freedom of movement and easy everyday cleaning.",
        recommendWhen: [
          "The customer wants quick cleaning convenience",
          "They prefer cordless appliances",
          "They live in a smaller home or apartment",
        ],
        tag: "NEW",
      },
      products: [
        {
          name: "Brabantia 30CM Table Fan",
          image: "/images/30cm-table-fan.jpg",
          description:
            "A compact fan designed to improve comfort in smaller spaces.",
          benefits: [
            "Compact size is easy to place",
            "Supports cooling comfort in everyday spaces",
            "Practical for desks, tables, or smaller rooms",
          ],
          sellingTip:
            "Position it as a compact comfort solution for personal spaces.",
          recommendWhen: [
            "The customer wants a fan for a small room",
            "They need something compact",
            "They want affordable comfort",
          ],
        },
        {
          name: "Brabantia 40cm Stand Fan",
          image: "/images/40cm-stand-fan.jpg",
          description:
            "A stand fan designed for wider cooling coverage and everyday comfort.",
          benefits: [
            "Covers a larger area than a compact fan",
            "Supports cooling comfort in living areas",
            "Practical for regular household use",
          ],
          sellingTip:
            "Compare it to the table fan when the customer needs broader airflow.",
          recommendWhen: [
            "The customer wants airflow for a larger room",
            "They need a floor-standing option",
            "They want added home comfort",
          ],
        },
        {
          name: "Brabantia Towel Warmer",
          image: "/images/towel-warmer.jpg",
          description:
            "A home comfort solution designed to warm towels and add a premium touch to daily routines.",
          benefits: [
            "Adds a more luxurious home experience",
            "Helps make daily routines feel more premium",
            "Useful for comfort-focused customers",
          ],
          sellingTip:
            "Sell the lifestyle benefit and premium feel, not just the function.",
          recommendWhen: [
            "The customer wants a more premium home experience",
            "They are upgrading bathroom comfort",
            "They are looking for something different and aspirational",
          ],
          tag: "NEW",
        },
      ],
    },
  ] as Category[],
  sellingSteps: [
    {
      title: "1. Discover",
      body: [
        "Ask what the customer is currently using.",
        "Ask what they want to improve in their home.",
      ],
    },
    {
      title: "2. Match",
      body: [
        "Cooking and prep needs → Kitchen Appliances",
        "Clothing care needs → Garment Care",
        "Comfort and convenience needs → Home Solutions",
      ],
    },
    {
      title: "3. Elevate",
      body: [
        "Use premium language.",
        "Connect the product to a better way of living.",
      ],
    },
  ],
  scenario: {
    question:
      "A customer says: “I’ve just moved into a new apartment and want appliances that feel modern, practical, and easy to use.” What do you recommend?",
    options: [
      "One basic item only",
      "A coordinated Brabantia appliance and home solution set",
      "The cheapest option available",
    ],
    correctIndex: 1,
    feedback:
      "Correct. This recommendation matches the customer’s lifestyle need, adds more value, and positions Brabantia as a premium home solution brand.",
  },
};
