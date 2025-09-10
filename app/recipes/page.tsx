import RecipeCard from '@/components/RecipeCard';
import { ChefHat, Clock } from 'lucide-react';

export default function Recipes() {
  const recipes = [
    {
      slug: "biryani",
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
      slug: "coconut",
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
      slug: "payasa",
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
      slug: "ginnu",
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
      slug: "mango",
      title: "Stealing Mango and Coconut",
      description: "fill the decription",
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
      description: "Hand-rolled layered flatbreads made with wheat flour and ghee, cooked over a hot griddle without any artificial additives. Each parota is gently roasted until perfectly flaky and golden.A well-cooked rice recipe where basmati rice is slow-cooked with hand-marinated chicken, natural spices (like cardamom, cinnamon, cloves), fresh herbs, and no packaged masala powders. The chicken is roasted in a traditional clay oven or pan until tender, giving it a smoky aroma, and layered carefully with the fragrant rice.",
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

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <ChefHat className="w-16 h-16 text-amber-500" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Signature
            <span className="text-amber-500 block">Recipes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully prepared recipes that provide traditional techniques with modern flavors. 
            Each dish tells a story of our beautifull journey and passion for tastefull cooking.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Recipes Shared", value: "5+" },
            { label: "Cooking Hours", value: "20+" },
            { label: "Happy Meals", value: "10+" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-8 h-8 text-amber-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-amber-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Want to Cook With Us?
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Join our cooking community and learn these recipes step by step. 
              Follow us on social media for detailed cooking videos and tips!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}