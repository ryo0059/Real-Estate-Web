// 📂 app/page.js
import PropertyCard from "../components/PropertyCard";
import { propertiesData } from "../data/properties";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative h-[75vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="w-full h-full object-cover" alt="Hero"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6 drop-shadow-lg">
            Temukan Keanggunan <br/> Dalam Setiap Sudut.
          </h1>
          <div className="bg-white p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center max-w-2xl mx-auto mt-8">
            <input type="text" placeholder="Cari lokasi..." className="grow px-6 py-3 rounded-full focus:outline-none w-full"/>
            <button className="bg-emerald-800 text-white px-8 py-3 rounded-full hover:bg-emerald-900 transition w-full md:w-auto mt-2 md:mt-0">
              Cari
            </button>
          </div>
        </div>
      </header>

      {/* Listing Section */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center">Properti Pilihan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.map((prop) => (
            <PropertyCard key={prop.id} {...prop} />
          ))}
        </div>
      </section>
    </main>
  );
}