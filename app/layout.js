// 📂 app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "LuxeEstate - Hunian Elegan",
  description: "Temukan properti impian Anda dengan desain terbaik.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}