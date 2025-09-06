import RecipeCard from '@/components/RecipeCard';
import { ChefHat, Clock } from 'lucide-react';

export default function Recipes() {
  const recipes = [
    {
      title: "Traditional Biryani",
      description: "A fragrant and flavorful rice dish with tender meat and aromatic spices, cooked to perfection using traditional methods passed down through generations.",
      images: [
        "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg",
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
        "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg"
      ]
    },
    {
      title: "Spicy Fish Curry",
      description: "Fresh fish cooked in a rich, coconut-based curry with a perfect blend of local spices. This recipe brings the coastal flavors right to your table.",
      images: [
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
        "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg",
        "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg"
      ]
    },
    {
      title: "Homemade Dosas",
      description: "Crispy, golden dosas made from fermented rice and lentil batter, served with coconut chutney and sambar. A South Indian breakfast classic.",
      images: [
        "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
        "https://images.pexels.com/photos/5560764/pexels-photo-5560764.jpeg",
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
        "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg"
      ]
    },
    {
      title: "Coconut Rice",
      description: "Aromatic coconut rice infused with curry leaves and mustard seeds. A simple yet delicious dish that perfectly complements spicy curries.",
      images: [
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
        "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg",
        "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg"
      ]
    },
    {
      title: "Masala Chicken",
      description: "Tender chicken pieces marinated in yogurt and spices, then slow-cooked in a rich, tomato-based gravy with aromatic herbs and traditional spices.",
      images: [
        "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg",
        "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg",
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg"
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
            Discover our carefully crafted recipes that blend traditional techniques with modern flavors. 
            Each dish tells a story of our culinary journey and passion for authentic cooking.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Recipes Shared", value: "50+" },
            { label: "Cooking Hours", value: "200+" },
            { label: "Happy Meals", value: "1000+" }
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