'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function MentorInstagram() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
📲 Mentor Instagram com IA

Objetivo: Criar uma mentoria estratégica com foco em crescimento orgânico, engajamento e vendas no Instagram com auxílio de inteligência artificial.

Tema da Mentoria: ${tema || '[defina o nicho ou tema]'}
Público-Alvo: ${publico || '[defina o público-alvo]'}

Inclua no plano:
1. Bio e posicionamento do perfil.
2. Pilares de conteúdo e calendário semanal.
3. Estratégia de reels, stories e lives.
4. Chamadas para ação e monetização.
5. Análise de métricas com sugestões de melhoria.

Crie a estrutura completa da mentoria com base nisso.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">📲 Mentor Instagram com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Construa uma mentoria profissional com foco em crescimento e resultados no Instagram usando inteligência artificial.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">📌 Tema da mentoria</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Crescimento de perfis de moda feminina"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Público-alvo</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Mulheres de 18 a 35 anos interessadas em moda"
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
