'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaUserCircle, FaCogs, FaSignOutAlt } from 'react-icons/fa';

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md h-20 flex items-center justify-between px-6 relative">
      {/* Nome da Página */}
      <h1 className="text-xl font-bold text-[#1746a2]">Painel de Controle</h1>

      {/* Área do Usuário */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1746a2] transition"
        >
          <span>Olá, Usuário</span>
          <FaUserCircle className="text-3xl text-[#1746a2] drop-shadow-sm" />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <a
              href="/configuracoes"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              <FaCogs /> Configurações
            </a>
            <a
              href="/logout"
              className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              <FaSignOutAlt /> Sair
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
