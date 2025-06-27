'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function AgenciaMidiaPaga() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
  🧠 Agência de Mídia Paga com IA

  Objetivo: Criar uma campanha de tráfego pago automatizada com inteligência artificial.

  Tema: ${tema || '[defina o tema]'}
  Público-Alvo: ${publico || '[defina o público]'}

  Etapas sugeridas:
  1. Criação do anúncio (texto, imagem e CTA).
  2. Segmentação do público ideal.
  3. Sugestão de verba e canais.
  4. Otimizações baseadas em IA.
  5. Relatório de performance semanal.

  Gere um plano detalhado para isso.
  `;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">🚀 Agência de Mídia Paga com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Gere automaticamente uma estratégia completa de tráfego pago com inteligência artificial. Ideal para lançamentos,
          campanhas e vendas digitais com alto impacto.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">📝 Tema da campanha</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Lançamento de suplemento para emagrecimento"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Público-alvo</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Homens entre 25 e 40 anos que praticam musculação"
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
