import Image from 'next/image';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import RecipePageClient from './RecipePageClient';

const recipes = [
  {
    slug: 'biryani',
    title: "Chicken Biryani",
    description: "A well cooked rice recipe with traditional method of cooking with fossils and well roasted chicken kabab with no extra packaged masala added.",
    images: [
      "bir1.jpg",
      "bir2.jpg", 
      "bir3.jpg",
      "bir4.jpg"
    ]
  },
  {
    slug: 'coconut',
    title: "Stealing Coconut",
    description: "fill the description",
    images: [
      "coc1.jpg",
      "coc2.jpg",
      "coc3.jpg", 
      "coc4.jpg"
    ]
  },
  {
    slug: 'payasa',
    title: "Suryavamsada Gasgase Payasa",
    description: "A traditional sweet dessert prepared by slowly simmering tender gasagase stems in fresh milk, with natural jaggery or sugar added. The dish is cooked over a low flame in clay pots, allowing the flavors to blend naturally, resulting in a creamy, slightly grassy-sweet treat without any packaged ingredients.",
    images: [
      "gas1.jpg",
      "gas2.jpg",
      "gas3.jpg",
      "gas4.jpg"
    ]
  },
  {
    slug: 'ginnu',
    title: "Ginanna(Belladanna)",
    description: "fill the description",
    images: [
      "ginnu1.jpg",
      "ginnu2.jpg",
      "ginnu3.jpg",
      "ginnu4.jpg"
    ]
  },
  {
    slug: 'mango',
    title: "Stealing Mango and Coconut",
    description: "fill the description",
    images: [
      "man1.jpg",
      "man2.jpg", 
      "man3.jpg",
      "man4.jpg"
    ]
  },
  {
      slug: "sweet",
      title: "Mitaayi",
      description: "fill the description",
      images: [
        "mit1.jpg",
      "mit2.jpg", 
      "mit3.jpg",
      "mit4.jpg"
      ]
  },
  {
      slug: "parota",
      title: "Parota and Chicken",
      description: "Hand-rolled layered flatbreads made with wheat flour and ghee, cooked over a hot griddle without any artificial additives. Each parota is gently roasted until perfectly flaky and golden.A well-cooked rice recipe where basmati rice is slow-cooked with hand-marinated chicken, natural spices (like cardamom, cinnamon, cloves), fresh herbs, and no packaged masala powders. The chicken is roasted in a traditional clay oven or pan until tender, giving it a smoky aroma, and layered carefully with the fragrant rice. ",
      images: [
        "par1.jpg",
      "par2.jpg", 
      "par3.jpg",
      "par4.jpg"
      ]
    },
    {
      slug: "tomato",
      title: "Tomato Bath",
      description: "Simple, homely rice cooked traditionally with fresh, hand-chopped tomatoes, onions, mustard seeds, and mild spices. All ingredients are slowly sautéed and cooked over a wood flame, allowing the natural tanginess of tomatoes to blend beautifully into soft rice, served with a touch of ghee.",
      images: [
        "tomato1.jpg",
      "tomato2.jpg", 
      "tomato3.jpg"

      ]
    },
    {
      slug: "motte",
      title: "Egg Biryani",
      description: "A well-balanced rice dish where boiled eggs are gently mixed with long-grain basmati rice, cooked with whole spices and fresh onions. No packaged masala is used—just pure, traditional methods of slow cooking in clay pots, producing a simple yet aromatic meal where each grain of rice and egg absorbs natural flavors.",
      images: [
        "motte1.mp4"
      
      
      ]
    }

];

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = recipes.find(r => r.slug === params.slug);
  
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe Not Found</h1>
          <a
            href="/recipes"
            className="text-amber-500 hover:text-amber-600 transition-colors duration-300"
          >
            Back to Recipes
          </a>
        </div>
      </div>
    );
  }

  return <RecipePageClient recipe={recipe} />;
}