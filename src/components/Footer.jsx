// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-6 bg-blue-500 text-white rounded-md mx-4 my-2 text-center">
  <div className="container mx-auto">
    <p>&copy; 2024 FinWorld. All rights reserved.</p>
    <p className="mt-2 text-sm">
      SEBI Registration No: INZ000163138 | BSE Registration No: AP01668101166717 | NSE Registration No: AP3022002931 | AMFI Registration No: ARN-102132
    </p>
  </div>
</footer>
  );
}

export default Footer;