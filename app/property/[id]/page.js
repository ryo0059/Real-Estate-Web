// 📂 app/property/[id]/page.js
import { propertiesData } from "../../../data/properties";
import MortgageCalculator from "../../../components/MortgageCalculator";
import VisitScheduler from "../../../components/VisitScheduler";
import Neighborhood from "../../../components/Neighborhood";
import { MapPin, BedDouble, Bath, Maximize, Home } from 'lucide-react';

export default async function PropertyDetail({ params }) {
  // Await params di Next.js 15
  const { id } = await params;
  const property = propertiesData.find(p => p.id === Number(id));

  if (!property) return <div className="text-center py-20">Properti tidak ditemukan</div>;

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Hero Detail */}
      <div className="h-[60vh] relative">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full max-w-7xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-2">{property.title}</h1>
          <div className="flex items-center gap-2 text-gray-200">
            <MapPin size={18} /><span className="text-lg">{property.location}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Kolom Kiri */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-4 gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8 text-center">
              <div><BedDouble className="mx-auto text-emerald-700 mb-1"/><span className="font-bold">{property.beds}</span> KT</div>
              <div><Bath className="mx-auto text-emerald-700 mb-1"/><span className="font-bold">{property.baths}</span> KM</div>
              <div><Maximize className="mx-auto text-emerald-700 mb-1"/><span className="font-bold">{property.area}</span> m²</div>
              <div><Home className="mx-auto text-emerald-700 mb-1"/><span className="font-bold">{property.land}</span> m²</div>
            </div>
            
            <h2 className="font-serif text-2xl mb-4">Tentang Properti</h2>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
            
            <Neighborhood places={property.places} />
          </div>

          {/* Kolom Kanan (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 bg-white border rounded-2xl shadow-sm text-center">
                <p className="text-sm text-gray-500">Harga Penawaran</p>
                <h2 className="text-3xl font-serif font-bold text-emerald-800">{property.price}</h2>
              </div>
              <MortgageCalculator price={property.price} />
              <VisitScheduler propertyTitle={property.title} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}