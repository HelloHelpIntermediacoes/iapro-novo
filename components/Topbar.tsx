'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaUserCircle, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '../firebase/firebase';
import { getApps, initializeApp, getApp } from 'firebase/app';
import { useRouter } from 'next/navigation';

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('Usuário');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Firebase App e Firestore
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Busca o nome atualizado do Firestore
  useEffect(() => {
    const fetchNome = async () => {
      if (typeof window === 'undefined') return;

      const userData = localStorage.getItem('usuarioIAPro');
      if (userData) {
        try {
          const usuario = JSON.parse(userData);
          if (usuario?.uid) {
            const docRef = doc(db, 'usuarios', usuario.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              const data = docSnap.data();
              setNomeUsuario(data.nome || 'Usuário');
            }
          }
        } catch (error) {
          console.error('Erro ao buscar nome do usuário:', error);
        }
      }
    };
    fetchNome();
  }, [db]);

  const handleLogout = () => {
    localStorage.removeItem('usuarioIAPro');
    router.push('/login');
  };

  return (
    <header className="bg-white shadow-md h-20 flex items-center justify-between px-6 relative z-50">
      {/* Logo ou título da plataforma */}
      <h1 className="text-xl font-bold text-[#1746a2]">IA Pro</h1>

      {/* Área do usuário */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1746a2] transition"
        >
          <span>Olá, {nomeUsuario}</span>
          <FaUserCircle className="text-3xl text-[#1746a2] drop-shadow-sm" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <a
              href="/configuracoes"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              <FaCogs /> Configurações
            </a>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              <FaSignOutAlt /> Sair
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
