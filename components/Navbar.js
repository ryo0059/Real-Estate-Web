// 📂 components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-6 md:px-12 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <Link href="/" className="text-2xl font-serif font-bold text-gray-800">
        Luxe<span className="text-emerald-700">Estate.</span>
      </Link>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-emerald-700 transition">Beli</Link>
        <Link href="/" className="hover:text-emerald-700 transition">Sewa</Link>
      </div>
      <button className="bg-emerald-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-900 transition">
        Hubungi Kami
      </button>
    </nav>
  );
};

export default Navbar;