// 📂 components/PropertyCard.js
import Link from 'next/link';
import { Bed, Bath, Square } from 'lucide-react';

const PropertyCard = ({ id, image, price, title, location, beds, baths, area }) => {
  return (
    <Link href={`/property/${id}`} className="block h-full">
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold uppercase text-emerald-800 rounded-md">
            For Sale
          </div>
        </div>
        <div className="p-6 flex flex-col grow">
          <h3 className="text-2xl font-serif text-emerald-900 mb-1">{price}</h3>
          <p className="text-gray-500 text-sm mb-3">{location}</p>
          <h4 className="font-medium text-lg text-gray-800 mb-4">{title}</h4>
          <div className="flex justify-between text-gray-500 text-sm border-t border-gray-100 pt-4 mt-auto">
            <span className="flex gap-1"><Bed size={16}/> {beds}</span>
            <span className="flex gap-1"><Bath size={16}/> {baths}</span>
            <span className="flex gap-1"><Square size={16}/> {area} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;