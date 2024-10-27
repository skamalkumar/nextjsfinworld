// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="flex justify-between items-center p-6 bg-blue-500 text-white rounded-md mx-4 my-2">
      <div className="container mx-auto flex justify-center items-center">
        {/* Footer content */}
        <p className="text-center">
          &copy; 2024 FinWorld. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;