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

export type ScenarioQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  feedback: string;
};

export const courseData = {
  title: "Retail Learning Course",
  subtitle:
    "Reusable template data for future retail learning experiences.",
  brandPoints: [
    "Clear brand positioning",
    "Practical selling guidance",
    "Confident customer conversations",
  ],
  rangeTags: [
    { label: "HERO", meaning: "Featured best sellers" },
    { label: "NEW", meaning: "Latest additions" },
  ],
  categories: [] as Category[],
  sellingSteps: [] as Array<{
    title: string;
    body: string[];
  }>,
  scenario: {
    questions: [] as ScenarioQuestion[],
  },
};
