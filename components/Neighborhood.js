// 📂 components/Neighborhood.js
import { MapPin, School, ShoppingBag, Coffee, Activity, Plane } from 'lucide-react';

const Neighborhood = ({ places }) => {
  const getIcon = (type) => {
    switch(type) {
      case 'school': return <School size={18} className="text-blue-600" />;
      case 'shopping': return <ShoppingBag size={18} className="text-orange-600" />;
      case 'cafe': return <Coffee size={18} className="text-amber-700" />;
      case 'hospital': return <Activity size={18} className="text-red-600" />;
      case 'transport': return <Plane size={18} className="text-purple-600" />;
      default: return <MapPin size={18} className="text-gray-600" />;
    }
  };

  return (
    <div className="mt-12 mb-8">
      <h3 className="font-serif text-2xl text-gray-800 mb-6">Fasilitas Sekitar</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {places && places.map((place, index) => (
          <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="bg-gray-50 p-3 rounded-full mr-4">{getIcon(place.type)}</div>
            <div>
              <h4 className="font-semibold text-gray-800 text-sm">{place.name}</h4>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> {place.distance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Neighborhood;