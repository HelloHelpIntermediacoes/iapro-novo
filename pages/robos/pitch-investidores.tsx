'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function PithInvestidores() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
💼 Pitch para Investidores com IA

Objetivo: Gerar um pitch impactante e profissional com ajuda da inteligência artificial para apresentar a ideia a investidores.

Tipo de Negócio: ${tema || '[defina o tipo de negócio]'}
Investidores-alvo: ${publico || '[defina o perfil dos investidores]'}

Inclua no pitch:
1. Nome e proposta de valor do negócio.
2. Problema e solução apresentada.
3. Modelo de negócio e potencial de lucro.
4. Diferenciais e validações já conquistadas.
5. Projeções e objetivo do investimento.

Monte um pitch convincente e direto.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">💼 Pitch para Investidores com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Gere um pitch completo e estruturado com inteligência artificial para atrair investidores e apresentar sua ideia de forma profissional.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🏷️ Tipo de negócio</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Plataforma de educação digital"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Perfil dos investidores</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Investidores-anjo do setor de tecnologia"
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
