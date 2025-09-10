'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface RecipePageClientProps {
  recipe: {
    slug: string;
    title: string;
    description: string;
    images: string[];
  };
}

export default function RecipePageClient({ recipe }: RecipePageClientProps) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === recipe.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [recipe]);
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === recipe.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? recipe.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.push('/recipes')}
          className="group flex items-center text-gray-600 hover:text-amber-500 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Recipes</span>
        </button>

        {/* Recipe Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {recipe.title}
          </h1>
        </div>

        {/* Recipe Description */}
        <div className="bg-white rounded-3xl shadow-sm p-8 lg:p-12 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            {recipe.description}
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="relative h-96 lg:h-[500px]">
            <Image
              src={`/images/${recipe.images[currentImageIndex]}`}
              alt={`${recipe.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-500"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {recipe.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-amber-500 scale-125' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Image Counter */}
          <div className="p-6 text-center">
            <span className="text-sm text-gray-500">
              Image {currentImageIndex + 1} of {recipe.images.length}
            </span>
          </div>
        </div>

        {/* Image Thumbnails */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          {recipe.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 ${
                index === currentImageIndex 
                  ? 'ring-4 ring-amber-500 ring-opacity-50' 
                  : 'hover:shadow-lg'
              }`}
            >
              <Image
                src={`/images/${image}`}
                alt={`${recipe.title} thumbnail ${index + 1}`}
                width={200}
                height={150}
                className="w-full h-24 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}