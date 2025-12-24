// 📂 components/MortgageCalculator.js
'use client'; // Wajib untuk interaksi

import { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const MortgageCalculator = ({ price }) => {
  // Membersihkan format harga "Rp 3.500..." jadi angka murni
  const numericPrice = typeof price === 'string' ? parseInt(price.replace(/[^0-9]/g, '')) : price;
  
  const [loanAmount, setLoanAmount] = useState(numericPrice * 0.8);
  const [interest, setInterest] = useState(8.5);
  const [years, setYears] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const r = interest / 100 / 12;
    const n = years * 12;
    const result = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(result || 0);
  }, [loanAmount, interest, years]);

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
        <Calculator size={20} className="text-emerald-700" />
        <h3 className="font-serif text-lg font-bold text-gray-800">Simulasi KPR</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Plafon Pinjaman</label>
          <input 
            type="range" min={numericPrice * 0.1} max={numericPrice} step="5000000"
            value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full accent-emerald-700 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
          />
          <div className="text-right font-bold text-emerald-700 text-sm mt-1">
            Rp {loanAmount.toLocaleString('id-ID')}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Bunga (%)</label>
            <input type="number" value={interest} onChange={(e) => setInterest(Number(e.target.value))} className="w-full border rounded-lg p-2 text-sm"/>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Tenor (Thn)</label>
            <select value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full border rounded-lg p-2 text-sm bg-white">
              {[5, 10, 15, 20, 25].map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
        </div>

        <div className="bg-emerald-50 p-4 rounded-xl text-center">
          <p className="text-xs text-emerald-800">Cicilan per Bulan</p>
          <p className="text-2xl font-serif font-bold text-emerald-900">
            Rp {Math.round(monthlyPayment).toLocaleString('id-ID')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;