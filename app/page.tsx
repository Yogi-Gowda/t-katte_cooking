import Image from 'next/image';
import Link from 'next/link';
import { ChefHat, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <ChefHat className="w-16 h-16 text-amber-500" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Our
              <span className="text-amber-500 block">Cooking Adventures</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a group of food enthusiasts who love to experiment with flavors, 
              create memorable dishes, and share our beautifull journey with the world.
            </p>
          </div>

          {/* Group Image */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/par2.jpg"
                alt="Tharamanakatte Boys Group Photo"
                width={1000}
                height={600}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/recipes"
              className="group inline-flex items-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Explore Our Recipes</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our passion for cooking brings us together to create amazing dishes and unforgettable memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Flavors",
                description: "We focus on traditional recipes with our own unique twists"
              },
              {
                title: "Fresh Ingredients",
                description: "We only bring masala ingridients from shops and other things is purely natural"
              },
              {
                title: "Shared Passion",
                description: "Cooking together creates bonds and memories that last forever"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                  <ChefHat className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}