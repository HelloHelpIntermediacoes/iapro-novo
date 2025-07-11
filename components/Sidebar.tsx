'use client';

import React from 'react';
import { FaRobot, FaHome, FaDownload } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed lg:static top-0 left-0 h-full z-50 bg-white shadow-xl border-r border-gray-200 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } w-64 p-6 flex flex-col justify-between`}
    >
      {/* TOPO - Logo */}
      <div className="flex flex-col items-center mb-12">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#f4c95d] shadow-lg mb-4">
          <Image src="/logo.png" alt="Logo" width={96} height={96} />
        </div>
        <h2 className="text-xl font-extrabold text-[#1746a2] tracking-tight text-center">
          IA Pro Studio
        </h2>
        <p className="text-xs text-gray-500 text-center mt-1">
          Automatize seu negócio
        </p>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-6 text-gray-800">
        <Link
          href="/home"
          className="flex items-center gap-3 px-2 py-2 rounded-md hover:text-[#1746a2] font-medium transition"
          onClick={onClose}
        >
          <FaHome /> Início
        </Link>
        <Link
          href="/robos"
          className="flex items-center gap-3 px-2 py-2 rounded-md hover:text-[#1746a2] font-medium transition"
          onClick={onClose}
        >
          <FaRobot /> Todos os Robôs
        </Link>
      </nav>

      {/* Rodapé - Júnior */}
      <div className="mt-12 text-center">
        <a
          href="https://chatgpt.com/g/g-684de96b6b308191a45e49972afc1ea4-junior"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#1a1a1a] font-bold py-3 px-4 rounded-xl shadow-lg hover:from-yellow-300 hover:to-yellow-200 transition"
        >
          <FaDownload />
          Assistente Júnior
        </a>
        <p className="text-xs text-gray-500 mt-2 italic">Clique para ativar no seu GPT</p>
      </div>
    </aside>
  );
};

export default Sidebar;
