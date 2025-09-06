'use client';
import Image from 'next/image';

interface RecipeCardProps {
  title: string;
  images: string[];
  description: string;
}

export default function RecipeCard({ title, images, description }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{description}</p>
        
        <div className="grid grid-cols-2 gap-3">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group">
              <Image
                src={image}
                alt={`${title} step ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}