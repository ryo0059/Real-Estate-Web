// 📂 components/VisitScheduler.js
'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Phone } from 'lucide-react';

const VisitScheduler = ({ propertyTitle }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '' });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const message = `Halo, saya ${formData.name}. Saya berminat dengan "${propertyTitle}" dan ingin survey pada ${formData.date} jam ${formData.time}.`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl mt-6 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-600 rounded-full opacity-20 blur-3xl"></div>
      <h3 className="font-serif text-xl mb-2 relative z-10">Jadwalkan Kunjungan</h3>
      
      <form onSubmit={handleWhatsApp} className="space-y-4 relative z-10 mt-4">
        <div className="relative">
          <User size={16} className="absolute top-3 left-3 text-gray-500" />
          <input type="text" placeholder="Nama Anda" required onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-emerald-500 focus:outline-none"/>
        </div>
        
        <div className="relative">
          <Phone size={16} className="absolute top-3 left-3 text-gray-500" />
          <input type="tel" placeholder="WhatsApp" required onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-emerald-500 focus:outline-none"/>
        </div>

        <div className="flex gap-3">
          <input type="date" required onChange={(e) => setFormData({...formData, date: e.target.value})}
            className="w-1/2 bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-3 text-sm text-gray-300 focus:outline-none"/>
          <select onChange={(e) => setFormData({...formData, time: e.target.value})}
            className="w-1/2 bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-3 text-sm text-gray-300 focus:outline-none">
            <option value="">Jam</option><option value="09:00">09:00</option><option value="13:00">13:00</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition">
          Buat Janji Temu
        </button>
      </form>
    </div>
  );
};

export default VisitScheduler;