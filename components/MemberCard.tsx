'use client';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

interface MemberCardProps {
  name: string;
  image: string;
  instagram?: string;
}

export default function MemberCard({ name, image, instagram }: MemberCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 p-6">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{name}</h3>
        
        {instagram && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 bg-amber-500 text-white rounded-full hover:bg-amber-600 hover:scale-110 transition-all duration-300"
          >
            <Instagram size={20} />
          </a>
        )}
      </div>
    </div>
  );
}