'use client';
import { useState } from 'react';
import Layout from '@/components/Layout';

export default function Configuracoes() {
  const [abaAtiva, setAbaAtiva] = useState('perfil');

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-8">⚙️ Configurações da Conta</h1>
        <div className="flex gap-6">
          {/* Menu lateral */}
          <div className="w-1/4 bg-white shadow rounded-lg border border-gray-200 p-4 space-y-3">
            <button
              onClick={() => setAbaAtiva('perfil')}
              className={`block w-full text-left px-4 py-2 rounded ${
                abaAtiva === 'perfil' ? 'bg-[#1746a2] text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              🧑 Editar Perfil
            </button>
            <button
              onClick={() => setAbaAtiva('email')}
              className={`block w-full text-left px-4 py-2 rounded ${
                abaAtiva === 'email' ? 'bg-[#1746a2] text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              📧 Alterar E-mail
            </button>
            <button
              onClick={() => setAbaAtiva('senha')}
              className={`block w-full text-left px-4 py-2 rounded ${
                abaAtiva === 'senha' ? 'bg-[#1746a2] text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              🔒 Alterar Senha
            </button>
            <button
              onClick={() => setAbaAtiva('excluir')}
              className={`block w-full text-left px-4 py-2 rounded ${
                abaAtiva === 'excluir' ? 'bg-red-100 text-red-600 font-semibold' : 'text-red-500 hover:bg-red-100'
              }`}
            >
              🗑️ Excluir Conta
            </button>
          </div>

          {/* Conteúdo dinâmico */}
          <div className="flex-1 bg-white shadow rounded-lg border border-gray-200 p-6">
            {abaAtiva === 'perfil' && (
              <>
                <h2 className="text-xl font-semibold mb-4">🧑 Editar Perfil</h2>
                <input
                  type="text"
                  className="w-full mb-4 border border-gray-300 rounded px-4 py-2"
                  placeholder="Nome completo"
                />
                <input
                  type="text"
                  className="w-full mb-4 border border-gray-300 rounded px-4 py-2"
                  placeholder="Bio ou descrição"
                />
                <button className="bg-[#1746a2] text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                  Salvar Alterações
                </button>
              </>
            )}

            {abaAtiva === 'email' && (
              <>
                <h2 className="text-xl font-semibold mb-4">📧 Alterar E-mail</h2>
                <input
                  type="email"
                  className="w-full mb-4 border border-gray-300 rounded px-4 py-2"
                  placeholder="Novo e-mail"
                />
                <button className="bg-[#1746a2] text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                  Atualizar E-mail
                </button>
              </>
            )}

            {abaAtiva === 'senha' && (
              <>
                <h2 className="text-xl font-semibold mb-4">🔒 Alterar Senha</h2>
                <input
                  type="password"
                  className="w-full mb-4 border border-gray-300 rounded px-4 py-2"
                  placeholder="Senha atual"
                />
                <input
                  type="password"
                  className="w-full mb-4 border border-gray-300 rounded px-4 py-2"
                  placeholder="Nova senha"
                />
                <button className="bg-[#1746a2] text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                  Atualizar Senha
                </button>
              </>
            )}

            {abaAtiva === 'excluir' && (
              <>
                <h2 className="text-xl font-semibold text-red-600 mb-4">🗑️ Excluir Conta</h2>
                <p className="mb-4 text-sm text-gray-700">
                  Esta ação é irreversível. Ao confirmar, sua conta será permanentemente removida da plataforma.
                </p>
                <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                  Confirmar Exclusão
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
