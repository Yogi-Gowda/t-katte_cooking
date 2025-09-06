import MemberCard from '@/components/MemberCard';
import { Users, Heart } from 'lucide-react';

export default function About() {
  const members = [
    {
      name: "Arjun Kumar",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      instagram: "arjun_cooking"
    },
    {
      name: "Rohit Sharma",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
      instagram: "rohit_spices"
    },
    {
      name: "Vikram Reddy",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      instagram: "vikram_kitchen"
    },
    {
      name: "Anil Krishnan",
      image: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg",
      instagram: "anil_flavors"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Users className="w-16 h-16 text-amber-500" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet the
            <span className="text-amber-500 block">Tharamanakatte Boys</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a group of passionate food enthusiasts from Tharamanakatte, 
            united by our love for cooking, sharing recipes, and creating delicious memories together.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-sm p-8 lg:p-12 mb-16">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-12 h-12 text-amber-500" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            What started as weekend cooking sessions among friends has evolved into a passionate 
            culinary journey. Each of us brings unique flavors, techniques, and traditions to the table. 
            We believe that food is not just about nourishment, but about bringing people together, 
            creating bonds, and preserving the rich culinary heritage of our region.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <MemberCard {...member} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-amber-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Follow Our Journey
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Stay connected with us on social media to see our latest recipes, 
              cooking adventures, and behind-the-scenes moments from our kitchen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}