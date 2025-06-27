'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function GerenteClientes() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
👥 Gestão de Carteira de Clientes com IA

Objetivo: Criar um plano de acompanhamento, retenção e crescimento da carteira de clientes usando inteligência artificial.

Produto ou Serviço: ${tema || '[descreva o que oferece]'}
Perfil dos Clientes: ${publico || '[descreva o público que será gerido]'}

Inclua no plano:
1. Análise da base atual de clientes.
2. Segmentação inteligente com base em comportamento e valor.
3. Estratégias de contato, recompra e reativação.
4. Alertas automáticos e gestão de relacionamento com IA.
5. Acompanhamento de metas e indicadores de performance.

Gere uma estratégia completa de gestão de clientes com IA.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">👥 Gerente de Clientes com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Automatize a gestão da sua carteira de clientes com inteligência artificial. Crie estratégias personalizadas de contato, fidelização e crescimento.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">📦 Produto ou serviço</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Plataforma de cursos online"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">👤 Perfil dos clientes</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Estudantes universitários de tecnologia"
            />
          </div>
        </div>

        <a
          href={linkGPT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-[#f4c95d] hover:bg-yellow-400 text-[#1a1a1a] font-bold text-lg px-6 py-3 rounded-lg transition duration-300"
        >
          🔗 Acessar no ChatGPT com Script Gerado
        </a>
      </div>
    </Layout>
  );
}
