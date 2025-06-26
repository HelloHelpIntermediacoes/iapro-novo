import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] text-sm text-gray-700 py-6 px-8 mt-8 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
          <a href="#" className="hover:text-green-600"><FaWhatsapp /></a>
        </div>

        <div className="text-center md:text-left">
          <p>Email: contato@iaprostudio.com</p>
          <p>Tel: (11) 99999-9999</p>
        </div>

        <div className="text-right text-gray-400">
          © 2025 IA Pro Studio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
